"use client";

import { useState } from "react";
import { subscribeToNewsletter, type BlogNewsletterBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BlogNewsletter({ data }: { data?: BlogNewsletterBlock }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (data?.enabled === false) return null;

  const heading = data?.heading || "Get Eye-Care Guidance";
  const description = data?.description || "Receive expert medical tips and news from our specialists directly in your inbox.";
  const emailPlaceholder = data?.email_placeholder || "Your Email Address";
  const buttonLabel = data?.button_label || "Subscribe Now";

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "submitting" || status === "success") return;

    const trimmedEmail = email.trim();
    const nextEmailError = !trimmedEmail || !EMAIL_RE.test(trimmedEmail) ? "Enter a valid email address." : "";
    const nextConsentError = !consent ? "Please agree to receive blog email updates to subscribe." : "";

    setEmailError(nextEmailError);
    setConsentError(nextConsentError);
    if (nextEmailError || nextConsentError) return;

    setStatus("submitting");
    setErrorMessage("");

    const result = await subscribeToNewsletter({
      email: trimmedEmail,
      consent: true,
      consentVersion: "v1",
      source: "blog_detail",
    });

    if (result.ok) {
      setStatus("success");
      return;
    }

    if (result.networkError) {
      setErrorMessage("Unable to connect to the server. Please try again.");
    } else if (result.status === 429) {
      setErrorMessage(result.message || "Too many attempts. Please try again in a few minutes.");
    } else {
      setErrorMessage(result.message || "Something went wrong. Please try again.");
    }
    setStatus("error");
  }

  if (status === "success") {
    return (
      <section className={styles.successCard}>
        <h2>Subscription Received!</h2>
        <p>Please check your email inbox to confirm your subscription.</p>
      </section>
    );
  }

  return (
    <section className={styles.card}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder={emailPlaceholder}
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "submitting"}
          />
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Subscribing..." : buttonLabel}
          </button>
        </div>
        {emailError ? <p className={styles.fieldError}>{emailError}</p> : null}

        <label className={styles.consentRow}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={status === "submitting"}
          />
          <span>I agree to receive blog updates and health tips from Shanti Eye Tech. You can unsubscribe at any time.</span>
        </label>
        {consentError ? <p className={styles.fieldError}>{consentError}</p> : null}

        {status === "error" ? <p className={styles.errorText}>{errorMessage}</p> : null}
      </form>
    </section>
  );
}
