import Link from "next/link";
import type { AppointmentContent, ServiceKind } from "@/app/services/types";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import styles from "./styles.module.css";

export function AppointmentCTA({ content, kind }: { content: AppointmentContent; kind: ServiceKind }) {
  const badgeTitle = content.badgeTitle ?? (kind === "classic" ? "20/20" : "Clear Vision");
  const badgeSubtitle = content.badgeSubtitle ?? (kind === "classic" ? "Clear Vision Awaits" : "A Brighter Tomorrow");
  const checkTitle = content.checkTitle ?? "Comprehensive Evaluation";
  const checkSubtitle = content.checkSubtitle ?? `Complete assessment to determine the best ${content.serviceLabel} option for you`;

  return (
    <section className={`${styles.section} ${styles[kind]}`} id="appointment">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2>{content.title}<br /><span>{content.accent}</span></h2>
          <p>{content.text}</p>
          <div className={styles.actions}>
            <Link className={styles.lightButton} href="/contact"><img className={styles.buttonIcon} src="/assets/calendar.png" alt="" aria-hidden="true" />Book Consultation <img className={styles.arrowIcon} src="/assets/blue_arrow.png" alt="" aria-hidden="true" /></Link>
            <a className={styles.ghostButton} href="tel:+919179191939"><img className={styles.buttonIcon} src="/assets/call.png" alt="" aria-hidden="true" />Call: +91 91791 91939</a>
          </div>
          <div className={styles.check}>
            <span>✓</span>
            <div><strong>{checkTitle}</strong><small>{checkSubtitle}</small></div>
          </div>
        </div>
        <div className={styles.image}>
          <img src={content.image} alt="Modern ophthalmology examination room" />
          <div className={styles.imageOverlay} aria-hidden="true" />
          <div className={styles.imageBadge}>
            <h4>{badgeTitle}</h4>
            <p>{badgeSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

