import { NextResponse } from "next/server";
import { sendToGoogleSheets } from "@/lib/sheets";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const { form, data } = body || {};

    if (!form || !data || typeof data !== "object") {
      return NextResponse.json({ error: "Missing form or data" }, { status: 400 });
    }

    const result = await sendToGoogleSheets(form, data);

    if (!result.ok) {
      return NextResponse.json(
        {
          error: result.message || "Failed to submit form to Google Sheets",
          result,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, result });
  } catch (error: any) {
    console.error("Form submission failed", error);
    return NextResponse.json(
      { error: "Unexpected form submission error" },
      { status: 500 }
    );
  }
}
