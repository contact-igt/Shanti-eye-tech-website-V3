"use client";

import { useState } from "react";
import type { BlogExpertQuoteBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

function resolveImage(block: BlogExpertQuoteBlock): string | null {
  return (
    block.url ??
    block.original_url ??
    block.profile_url ??
    block.media?.original_url ??
    null
  );
}

export function BlogDoctorQuote({ data }: { data?: BlogExpertQuoteBlock }) {
  const imageUrl = data ? resolveImage(data) : null;
  const [imgSrc, setImgSrc] = useState(imageUrl);

  if (!data || data.enabled === false) return null;
  if (!data.quote) return null;

  return (
    <section className={styles.block}>
      <blockquote className={styles.quote}>
        <span className={styles.mark}>&ldquo;</span>
        {data.quote}
        <span className={styles.markEnd}>&rdquo;</span>
      </blockquote>

      {(data.name || imgSrc) && (
        <div className={styles.doctor}>
          {imgSrc ? (
            <div className={styles.avatar}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc}
                alt={data.name ?? "Doctor"}
                onError={() => setImgSrc(null)}
              />
            </div>
          ) : null}
          <div className={styles.info}>
            {data.name ? <strong>{data.name}</strong> : null}
            {data.role ? <span>{data.role}</span> : null}
          </div>
        </div>
      )}
    </section>
  );
}
