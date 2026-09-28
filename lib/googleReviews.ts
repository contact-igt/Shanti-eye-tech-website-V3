import type { TestimonialItem } from "@/app/testimonials-carousel";

export type GoogleReviewRaw = {
  name?: string;
  reviewId?: string;
  comment?: string;
  starRating?: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | string;
  createTime?: string;
  updateTime?: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
    isAnonymous?: boolean;
  };
};

export type GoogleBusinessProfileData = {
  reviews: TestimonialItem[];
  averageRating?: number;
  totalReviewCount?: number;
};

// In-memory token cache to prevent hammering Google OAuth on every page render
let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

/**
 * Obtains a fresh access token using the stored refresh token.
 * Caches the token in-memory until shortly before it expires.
 */
async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string): Promise<string> {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiresAt) {
    return cachedAccessToken;
  }

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text().catch(() => "");
    throw new Error(`OAuth token refresh failed with status ${tokenResponse.status}: ${errorBody}`);
  }

  const data = (await tokenResponse.json()) as { access_token: string; expires_in?: number };
  cachedAccessToken = data.access_token;
  // Cache for slightly less than expires_in (e.g. 5 minutes buffer)
  const ttlMs = ((data.expires_in ?? 3600) - 300) * 1000;
  tokenExpiresAt = now + Math.max(ttlMs, 60_000);

  return cachedAccessToken;
}

const STAR_RATING_MAP: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

/**
 * Fetches reviews and ratings directly from the Google Business Profile API.
 * Server-side only: never calls from the client or exposes secrets.
 */
export async function getGoogleBusinessData(): Promise<GoogleBusinessProfileData | null> {
  const rawAccount = process.env.GOOGLE_BUSINESS_ACCOUNT_ID?.trim();
  const rawLocation = process.env.GOOGLE_BUSINESS_LOCATION_ID?.trim();
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();

  // If any other required credential is missing, return null gracefully without crashing
  if (!rawLocation || !clientId || !clientSecret || !refreshToken) {
    if (process.env.NODE_ENV !== "production") {
      const missing = [
        !rawLocation && "GOOGLE_BUSINESS_LOCATION_ID",
        !clientId && "GOOGLE_OAUTH_CLIENT_ID",
        !clientSecret && "GOOGLE_OAUTH_CLIENT_SECRET",
        !refreshToken && "GOOGLE_OAUTH_REFRESH_TOKEN",
      ].filter(Boolean);
      console.warn(`[GoogleReviews] Skipping GBP API: Missing env var(s): ${missing.join(", ")}. Using fallback testimonials.`);
    }
    return null;
  }

  const location = rawLocation.replace(/^locations\//, "");

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);

    let account = rawAccount?.replace(/^accounts\//, "");
    if (!account || account === "your_account_id" || account === "auto") {
      // Auto-discover the account ID from Google using the authenticated access token
      try {
        const accountsRes = await fetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", {
          headers: { Authorization: `Bearer ${accessToken}`, Accept: "application/json" },
        });
        if (accountsRes.ok) {
          const accJson = (await accountsRes.json()) as { accounts?: Array<{ name?: string }> };
          const firstAccountName = accJson.accounts?.[0]?.name;
          if (firstAccountName) {
            account = firstAccountName.replace(/^accounts\//, "");
          }
        }
      } catch (e) {
        // Fall back to attempting reviews or graceful return
      }
    }

    if (!account || account === "your_account_id") {
      return null;
    }

    const url = new URL(`https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(account)}/locations/${encodeURIComponent(location)}/reviews`);
    url.searchParams.set("pageSize", "50");
    url.searchParams.set("orderBy", "updateTime desc");

    const reviewsResponse = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
      // Revalidate every hour so reviews stay fresh automatically
      next: { revalidate: 3600 },
    });

    if (!reviewsResponse.ok) {
      const errorText = await reviewsResponse.text().catch(() => "");
      console.error(`[GoogleReviews] API request failed (${reviewsResponse.status}):`, errorText);
      return null;
    }

    const json = (await reviewsResponse.json()) as {
      reviews?: GoogleReviewRaw[];
      averageRating?: number;
      totalReviewCount?: number;
    };

    const rawReviews = json.reviews || [];

    // Filter reviews that have written comments and sort strictly latest-first
    const sortedReviews = rawReviews
      .filter((r) => r.comment && r.comment.trim().length > 0)
      .sort((a, b) => {
        const timeA = new Date(a.updateTime || a.createTime || 0).getTime();
        const timeB = new Date(b.updateTime || b.createTime || 0).getTime();
        return timeB - timeA;
      });

    const formattedReviews: TestimonialItem[] = sortedReviews.slice(0, 15).map((review) => {
      const reviewDate = review.updateTime || review.createTime;
      const formattedDate = reviewDate
        ? new Date(reviewDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
        : "";

      return {
        quote: review.comment!.trim(),
        name: review.reviewer?.displayName?.trim() || "Google Verified Patient",
        meta: `Google Review${formattedDate ? ` · ${formattedDate}` : ""}`,
        rating: review.starRating ? STAR_RATING_MAP[review.starRating] || 5 : 5,
      };
    });

    return {
      reviews: formattedReviews,
      averageRating: json.averageRating,
      totalReviewCount: json.totalReviewCount,
    };
  } catch (error) {
    console.error("[GoogleReviews] Unexpected error loading Google Business Profile reviews:", error);
    return null;
  }
}

/**
 * Returns formatted testimonial items for consumption by the carousel.
 * Falls back to null so callers can provide local testimonials.
 */
export async function getGoogleReviews(): Promise<TestimonialItem[] | null> {
  const data = await getGoogleBusinessData();
  if (data && data.reviews.length > 0) {
    return data.reviews;
  }
  return null;
}

