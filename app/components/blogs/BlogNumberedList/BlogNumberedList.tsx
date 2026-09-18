import type { BlogNumberedListBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

export function BlogNumberedList({ data }: { data?: BlogNumberedListBlock }) {
  if (!data || data.enabled === false) return null;
  const items = data.items ?? [];
  if (!items.length) return null;

  return (
    <section className={styles.block}>
      {data.heading ? <h2 className={styles.heading}>{data.heading}</h2> : null}
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.number}>{i + 1}</span>
            <div className={styles.content}>
              {item.title ? <strong className={styles.title}>{item.title}</strong> : null}
              {item.description ? <p className={styles.desc}>{item.description}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
