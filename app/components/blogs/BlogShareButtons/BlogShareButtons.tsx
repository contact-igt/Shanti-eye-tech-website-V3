"use client";

import { useState } from "react";
import { Copy, Share2 } from "lucide-react";
import styles from "./styles.module.css";

export function BlogShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; no-op.
    }
  }

  return (
    <div className={styles.share}>
      <span>Share this article</span>
      <div className={styles.buttons}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Share2 size={16} aria-hidden="true" /> Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
        >
          <Share2 size={16} aria-hidden="true" /> X
        </a>
        <button type="button" onClick={handleCopy} aria-label="Copy link">
          <Copy size={16} aria-hidden="true" />
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
