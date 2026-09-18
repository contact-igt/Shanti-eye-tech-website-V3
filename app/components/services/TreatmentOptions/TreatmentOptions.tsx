import Link from "next/link";
import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { ServiceKind, TreatmentOptionsContent } from "@/app/services/types";
import styles from "./styles.module.css";

function cardIcon(index: number, kind: ServiceKind) {
  const common = { fill: "none", stroke: "#ffffff", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (kind === "cataract" && index === 3) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="m8.5 15.5 7-7" />
      </svg>
    );
  }

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

function glaucomaIcon(index: number) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (index) {
    case 0:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 3c-1.8 3.2-5.5 6.2-5.5 10.2A5.5 5.5 0 0 0 12 18.7a5.5 5.5 0 0 0 5.5-5.5C17.5 9.2 13.8 6.2 12 3Z"/><path d="M9.5 13.5a2.5 2.5 0 0 0 5 0"/><path d="M8 5.5 5.5 3M16 5.5 18.5 3"/></svg>;
    case 1:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m13 2-8 11h6l-1 9 9-12h-6l1-8Z"/></svg>;
    case 2:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 13h4l2-8 4 14 3-8 2 3h3"/></svg>;
    case 3:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M2.5 12s3.7-6 9.5-6 9.5 6 9.5 6-3.7 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.8"/></svg>;
    case 4:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 22s7-3.7 7-9.5V5.5L12 3 5 5.5v7C5 18.3 12 22 12 22Z"/><path d="m9 12 2 2 4-4"/></svg>;
    default:
      return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m8.2 8.2 7.6 7.6M15 6H9M6 9v6"/></svg>;
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
                <div className={styles.topRow}>
                  <div className={styles.iconBadge}>{cardIcon(idx, kind)}</div>
                  {option.tag ? <span className={styles.tagPill}>{option.tag}</span> : null}
                </div>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
                {option.bullets ? (
                  <ul>{option.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
                <Link href="/contact#contact-form" className={styles.ctaLink}>
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
