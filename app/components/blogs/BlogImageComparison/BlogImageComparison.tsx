import type { BlogImageComparisonBlock } from "@/lib/blogApi";
import { resolveBlogImageUrl } from "@/lib/blogApi";
import styles from "./styles.module.css";

export function BlogImageComparison({ data }: { data?: BlogImageComparisonBlock }) {
  if (!data || data.enabled === false) return null;

  const items = Array.isArray(data.items) ? data.items : [];
  if (items.length === 0) return null;

  return (
    <section className={styles.container}>
      {data.heading ? <h2>{data.heading}</h2> : null}
      <div className={styles.grid}>
        {items.map((item, index) => {
          const imageUrl = resolveBlogImageUrl(item.media, "content") ?? item.url ?? item.original_url ?? null;
          const hasCaption = Boolean(item.title || item.description);
          return (
            <figure key={index} className={styles.card}>
              {imageUrl ? (
                <div className={styles.imageWrap}>
                  <img src={imageUrl} alt={item.title || data.heading || "Comparison image"} loading="lazy" />
                </div>
              ) : null}
              {hasCaption ? (
                <figcaption>
                  {item.title ? <span className={styles.cardTitle}>{item.title}</span> : null}
                  {item.description ? <p className={styles.cardDescription}>{item.description}</p> : null}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
