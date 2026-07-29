import type { CSSProperties } from "react";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { IntroContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function IntroSection({ content, kind }: { content: IntroContent; kind: ServiceKind }) {
  const isClassic = kind === "classic";
  const isRetina = kind === "retina";
  const isCataract = kind === "cataract";
  const sectionStyle = content.backgroundImage
    ? ({ "--section-bg": `url(${content.backgroundImage})` } as CSSProperties)
    : undefined;

  return (
    <section className={`${styles.section} ${styles[kind]}`} style={sectionStyle}>
      <div className={styles.shell}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2>
            {content.title} <span>{content.accent}</span>
          </h2>
          {content.paragraphs.map((paragraph, index) => (
            <p className={isRetina && index === 0 ? styles.infoParagraph : undefined} key={paragraph}>{paragraph}</p>
          ))}
          {content.callout ? (
            <div className={`${styles.callout} ${isRetina ? styles.retinaCallout : ""}`}>
              <span aria-hidden="true">{isRetina ? "" : "+"}</span>
              <div>
                <b>{content.callout.title}</b>
                <small>{content.callout.text}</small>
              </div>
            </div>
          ) : null}
        </div>
        {isClassic && content.lasikImages ? (
          <div className={styles.lasikVisual}>
            <img className={styles.patient} src={content.lasikImages.patient} alt="Patient undergoing LASIK laser eye procedure" />
            <img className={styles.room} src={content.lasikImages.room} alt="Modern LASIK procedure room" />
            <img className={styles.eye} src={content.lasikImages.eye} alt="Close-up LASIK precision laser procedure" />
            <div className={styles.badge}><b>15-20 min</b><small>Procedure Time</small></div>
          </div>
        ) : isRetina && content.retinaImages ? (
          <div className={styles.retinaVisual}>
            <div className={styles.retinaTopWrap}>
              <img className={styles.retinaTop} src={content.retinaImages.top} alt="Retina light-sensitive layer examination" />
              <span>Light-Sensitive Layer</span>
            </div>
            <img className={styles.retinaBottom} src={content.retinaImages.bottom} alt="Retina scan consultation" />
          </div>
        ) : (
          <div className={styles.imageStack}>
            {isCataract ? <div className={styles.ageTag}><small>Age-Related</small><b>50+</b></div> : null}
            <img src={content.image} alt={`${content.title} ${content.accent}`} />
          </div>
        )}
      </div>
    </section>
  );
}


