"use client";

import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { submitBlogFeedback, type BlogFeedbackBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

export function BlogFeedback({ slug, data }: { slug: string; data?: BlogFeedbackBlock }) {
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (data?.enabled === false) return null;

  const prompt = data?.prompt || "Was this article helpful?";

  async function handleVote(value: "yes" | "no") {
    if (!slug || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    const result = await submitBlogFeedback(slug, value);

    if (result.ok) {
      setSelected(value);
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(
        result.status === 403
          ? "Feedback is not available for this article."
          : "Could not submit feedback. Please try again."
      );
    }
  }

  return (
    <section className={styles.feedback} aria-label="Article feedback">
      <p>{prompt}</p>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.voteButton}
          aria-pressed={selected === "yes"}
          disabled={!slug || status === "submitting"}
          onClick={() => handleVote("yes")}
        >
          <ThumbsUp size={16} aria-hidden="true" />
          Yes
        </button>
        <button
          type="button"
          className={styles.voteButton}
          aria-pressed={selected === "no"}
          disabled={!slug || status === "submitting"}
          onClick={() => handleVote("no")}
        >
          <ThumbsDown size={16} aria-hidden="true" />
          No
        </button>
      </div>

      {status === "success" ? <span className={styles.success}>Thanks for your feedback!</span> : null}
      {status === "error" ? (
        <span className={styles.error}>
          {errorMsg}
          {selected ? (
            <button type="button" className={styles.retryButton} onClick={() => handleVote(selected)}>
              Retry
            </button>
          ) : null}
        </span>
      ) : null}
    </section>
  );
}
