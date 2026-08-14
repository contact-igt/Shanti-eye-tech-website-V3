"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Header, Footer } from "@/app/site-components";

function UnsubscribeNewsletterContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Unsubscribe token is missing or invalid.");
      return;
    }

    async function doUnsubscribe() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BLOG_API_BASE_URL || "http://localhost:5000";
        const prefix = baseUrl.endsWith("/api/v1") ? "" : "/api/v1";
        const res = await fetch(`${baseUrl}${prefix}/public/newsletter/unsubscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const json = await res.json().catch(() => null);

        if (res.ok && json?.success) {
          setStatus("success");
          setMessage(json.message || "You have been unsubscribed from our newsletter.");
        } else {
          setStatus("error");
          setMessage(json?.message || "Unsubscribe request failed. The token may be invalid or expired.");
        }
      } catch {
        setStatus("error");
        setMessage("Unable to reach the server. Please check your internet connection.");
      }
    }

    doUnsubscribe();
  }, [token]);

  return (
    <div style={{ maxWidth: "600px", margin: "120px auto 80px", padding: "40px 24px", textAlign: "center" }}>
      {status === "loading" ? (
        <div>
          <Loader2 size={48} style={{ animation: "spin 1s linear infinite", color: "#1fc6df", marginBottom: "16px" }} />
          <h1 style={{ fontSize: "24px", fontWeight: "800" }}>Processing your unsubscribe request...</h1>
        </div>
      ) : null}

      {status === "success" ? (
        <div>
          <CheckCircle2 size={56} style={{ color: "#16a34a", marginBottom: "16px" }} />
          <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "12px", color: "#0f1117" }}>Unsubscribed</h1>
          <p style={{ color: "#687080", fontSize: "16px", marginBottom: "28px" }}>{message}</p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#0f1117",
              color: "#fff",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Return to Home
          </Link>
        </div>
      ) : null}

      {status === "error" ? (
        <div>
          <XCircle size={56} style={{ color: "#dc2626", marginBottom: "16px" }} />
          <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "12px", color: "#0f1117" }}>Unsubscribe Failed</h1>
          <p style={{ color: "#687080", fontSize: "16px", marginBottom: "28px" }}>{message}</p>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#0f1117",
              color: "#fff",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Return to Home
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default function UnsubscribeNewsletterPage() {
  return (
    <>
      <Header active="blogs" />
      <main>
        <Suspense fallback={<div style={{ padding: "120px 24px", textAlign: "center" }}>Loading...</div>}>
          <UnsubscribeNewsletterContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
