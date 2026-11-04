import type { ServiceKind, TestimonialsContent } from "@/app/services/types";
import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import styles from "./styles.module.css";

export function TestimonialsSection({ content, kind }: { content: TestimonialsContent; kind: ServiceKind }) {
  const items = content.guidanceItems ?? [];

  return (
    <section className={`${styles.section} ${styles[kind]}`} id="patient-guidance">
      <div className={styles.shell}>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          accent={content.accent}
          body={content.body}
        />
        {items.length > 0 ? (
          <div className={styles.guidanceGrid}>
            {items.map((item, index) => (
              <article className={styles.guidanceCard} key={item.title}>
                <span className={styles.guidanceStep} aria-hidden="true">
                  {item.step ?? String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.guidanceTitle}>{item.title}</h3>
                <p className={styles.guidanceText}>{item.description}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
