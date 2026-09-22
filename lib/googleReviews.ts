import type { TestimonialItem } from "@/app/testimonials-carousel";

type GoogleReview = {
  comment?: string;
  starRating?: string;
  createTime?: string;
  reviewer?: { displayName?: string };
};

export async function getGoogleReviews(): Promise<TestimonialItem[] | null> {
  const { GOOGLE_BUSINESS_ACCOUNT_ID: account, GOOGLE_BUSINESS_LOCATION_ID: location, GOOGLE_OAUTH_CLIENT_ID: clientId, GOOGLE_OAUTH_CLIENT_SECRET: clientSecret, GOOGLE_OAUTH_REFRESH_TOKEN: refreshToken } = process.env;
  if (!account || !location || !clientId || !clientSecret || !refreshToken) return null;
  if (!/^\d+$/.test(account) || !/^\d+$/.test(location)) return null;

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken, grant_type: "refresh_token" }),
      cache: "no-store",
    });
    if (!tokenResponse.ok) throw new Error(`OAuth token request failed (${tokenResponse.status})`);
    const { access_token } = await tokenResponse.json() as { access_token: string };
    const url = new URL(`https://mybusiness.googleapis.com/v4/accounts/${account}/locations/${location}/reviews`);
    url.searchParams.set("pageSize", "20");
    url.searchParams.set("orderBy", "updateTime desc");
    const reviewsResponse = await fetch(url, {
      headers: { Authorization: `Bearer ${access_token}` },
      next: { revalidate: 3600 },
    });
    if (!reviewsResponse.ok) throw new Error(`Google reviews request failed (${reviewsResponse.status})`);
    const { reviews = [] } = await reviewsResponse.json() as { reviews?: GoogleReview[] };
    return reviews
      .filter((review) => review.comment?.trim())
      .slice(0, 10)
      .map((review) => ({
        quote: review.comment!.trim(),
        name: review.reviewer?.displayName || "Google reviewer",
        meta: `Google review${review.createTime ? ` · ${new Date(review.createTime).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}` : ""}`,
        rating: { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }[review.starRating || ""] || 5,
      }));
  } catch (error) {
    console.error("Unable to load Google Business Profile reviews:", error);
    return null;
  }
}
