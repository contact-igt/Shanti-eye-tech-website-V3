import Link from "next/link";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { HeroContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function HeroBanner({ content, kind }: { content: HeroContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`} style={{ backgroundImage: `url(${content.image})` }}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.shell}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1>
            {content.title}
            <br />
            <span>{content.accent}</span>
          </h1>
          <p>{content.text}</p>
          <div className={styles.actions}>
            <Link className={`${styles.button} ${styles.primary}`} href="/contact">
              <svg className={styles.buttonIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {kind === "retina" ? "Book Consultation" : "Start a Consultation"}
            </Link>
            <Link className={`${styles.button} ${styles.outline}`} href="#eligibility">
              <img className={styles.buttonIcon} src="/assets/check_green.png" alt="" aria-hidden="true" />
              Check Your Eligibility
            </Link>
          </div>
          {kind !== "retina" && content.metrics && content.metrics.length > 0 && (
            <div className={styles.metrics}>
              {content.metrics.map((metric) => (
                <div key={metric.label}>
                  <b>{metric.value}</b>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
