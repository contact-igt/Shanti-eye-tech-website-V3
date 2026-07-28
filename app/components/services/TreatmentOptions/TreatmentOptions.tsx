import Link from "next/link";
import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { ServiceKind, TreatmentOptionsContent } from "@/app/services/types";
import styles from "./styles.module.css";

function cardIcon(index: number) {
  const common = { fill: "none", stroke: "#ffffff", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (index) {
    case 0:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>;
    case 1:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 2:
    default:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0l10-10c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0l-10 10z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>;
  }
}

export function TreatmentOptions({ content, kind }: { content: TreatmentOptionsContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} accent={content.accent} body={content.body} />
        <div className={styles.grid}>
          {content.options.map((option, idx) => (
            <article className={styles.card} key={option.title}>
              <div className={styles.imageWrap}>
                <img src={option.image} alt={option.title} />
              </div>
              <div className={styles.body}>
                <div className={styles.iconBadge}>{cardIcon(idx)}</div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                {option.bullets ? (
                  <ul>{option.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
                <Link href="#appointment" className={styles.ctaLink}>
                  Book Consultation <img src="/assets/arrow_green.png" alt="" className={styles.ctaArrow} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
