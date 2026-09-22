import type { BlogImageComparisonBlock } from "@/lib/blogApi";
import { resolveBlogImageUrl } from "@/lib/blogApi";
import styles from "./styles.module.css";

export function BlogImageCards({ data }: { data?: BlogImageComparisonBlock }) {
  if (!data || data.enabled === false) return null;
  const items = data.items ?? [];
  if (!items.length) return null;

  return (
    <section className={styles.section}>
      {data.heading ? <h2 className={styles.heading}>{data.heading}</h2> : null}
      <div className={styles.grid} data-count={Math.min(items.length, 3)}>
        {items.map((item, index) => {
          const imageUrl =
            resolveBlogImageUrl(item.media ?? null, "content") ??
            item.url ??
            item.original_url ??
            null;

          return (
            <article key={index} className={styles.card}>
              {imageUrl ? (
                <div className={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageUrl} alt={item.title ?? `Image ${index + 1}`} loading="lazy" />
                </div>
              ) : null}
              <div className={styles.body}>
                {item.title ? <h3 className={styles.cardTitle}>{item.title}</h3> : null}
                {item.description ? <p className={styles.cardDesc}>{item.description}</p> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
