import { NextResponse } from "next/server";
import { getGoogleBusinessData } from "@/lib/googleReviews";

export const dynamic = "force-dynamic";

export async function GET() {
  const account = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const location = process.env.GOOGLE_BUSINESS_LOCATION_ID;
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
  const reviewUrl = process.env.GOOGLE_REVIEW_URL;

  const envCheck = {
    GOOGLE_BUSINESS_ACCOUNT_ID: account && account !== "your_account_id" ? "Configured" : "Auto-discover via API",
    GOOGLE_BUSINESS_LOCATION_ID: location ? "Configured" : "Missing",
    GOOGLE_OAUTH_CLIENT_ID: clientId ? "Configured" : "Missing",
    GOOGLE_OAUTH_CLIENT_SECRET: clientSecret ? "Configured" : "Missing",
    GOOGLE_OAUTH_REFRESH_TOKEN: refreshToken ? "Configured" : "Missing",
    GOOGLE_REVIEW_URL: reviewUrl ? "Configured" : "Missing",
  };

  const coreConfigured = Boolean(location && clientId && clientSecret && refreshToken && reviewUrl);
  if (!coreConfigured) {
    return NextResponse.json({
      status: "incomplete_configuration",
      message: "Some required environment variables are missing in .env.local",
      envCheck,
    }, { status: 400 });
  }

  const data = await getGoogleBusinessData();
  if (!data) {
    return NextResponse.json({
      status: "error",
      message: "Failed to fetch reviews from Google Business Profile. Check terminal logs for Google API error response.",
      envCheck,
    }, { status: 502 });
  }

  return NextResponse.json({
    status: "success",
    message: "Successfully connected to Google Business Profile API",
    averageRating: data.averageRating,
    totalReviewCount: data.totalReviewCount,
    reviewsCount: data.reviews.length,
    latestReviews: data.reviews,
  });
}
