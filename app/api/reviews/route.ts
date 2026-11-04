import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Reviews API endpoint deactivated in compliance with NMC regulations
 * prohibiting broadcasting or scraping of commercial patient reviews on clinical websites.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "deactivated",
      message: "Public review scraping and display is deactivated in accordance with medical ethics guidelines.",
    },
    { status: 410 }
  );
}
