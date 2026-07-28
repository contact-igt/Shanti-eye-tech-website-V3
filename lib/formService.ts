const BACKEND_BASE_URL = (
  process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL || ""
).replace(/\/+$/, "");
const BACKEND_CLIENT_KEY =
  process.env.NEXT_PUBLIC_BACKEND_CLIENT_KEY || "";
const IP_LOOKUP_URL = "https://api.ipify.org?format=json";

export interface ContactLeadPayload {
  name?: string;
  fullName?: string;
  mobile_number?: string;
  mobile?: string;
  service?: string;
  treatment?: string;
  message?: string;
  ip_address?: string;
  utm_source?: string;
}

// 1. Fetches user's IP Address
export async function findIpAddress(): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(IP_LOOKUP_URL, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) return "";
    const result = await response.json().catch(() => null);
    return typeof result?.ip === "string" ? result.ip.trim() : "";
  } catch {
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

// 2. Registers the lead in the main database if backend URL is provided
export async function registerContactLead(data: ContactLeadPayload) {
  if (!BACKEND_BASE_URL) {
    return { success: true, localOnly: true };
  }

  const endpoint = `${BACKEND_BASE_URL}/api/v1/shanti-eye-tech/register`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Client-Key": BACKEND_CLIENT_KEY,
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error("Backend request timed out. Please try again.");
    }
    throw new Error(`Unable to connect to the backend at ${BACKEND_BASE_URL}.`);
  } finally {
    clearTimeout(timeout);
  }

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    const details = Array.isArray(result?.details) ? result.details.join(" ") : "";
    throw new Error(details || result?.message || "Failed to submit contact form");
  }

  return result;
}

// 3. Forwards lead data to Next.js API for Google Sheets sync
export async function submitContactLeadToGoogleSheets(data: ContactLeadPayload, formName = "Contact") {
  const response = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      form: formName,
      data: {
        fullName: data.fullName || data.name || "",
        mobile: data.mobile || data.mobile_number || "",
        treatment: data.treatment || data.service || "",
        message: data.message || "",
        ip_address: data.ip_address || "",
        utm_source: data.utm_source || "",
      },
    }),
  });

  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.error || "Google Sheets submission failed");
  }

  return result;
}
