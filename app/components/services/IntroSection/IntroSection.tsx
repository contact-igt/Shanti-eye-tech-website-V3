import type { CSSProperties } from "react";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { IntroContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function IntroSection({ content, kind }: { content: IntroContent; kind: ServiceKind }) {
  const isClassic = kind === "classic";
  const isRetina = kind === "retina" || kind === "squint" || kind === "keratoconus";
  const isCataract = kind === "cataract";
  const isGlaucoma = kind === "glaucoma";
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
            <p
              className={isRetina && index === 0 ? styles.infoParagraph : undefined}
              key={paragraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {content.callout ? (
            <div className={`${styles.callout} ${isRetina ? styles.retinaCallout : ""} ${isGlaucoma ? styles.glaucomaCallout : ""}`}>
              {isGlaucoma ? (
                <svg className={styles.warningIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              ) : (
                <span aria-hidden="true">{isRetina ? "" : "+"}</span>
              )}
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
            <div className={styles.badge}><b>Varies</b><small>By Procedure</small></div>
          </div>
        ) : isRetina && content.retinaImages ? (
          <div className={styles.retinaVisual}>
            <div className={styles.retinaTopWrap}>
              <img className={styles.retinaTop} src={content.retinaImages.top} alt={`${content.title} visual display`} />
              {kind === "retina" ? <span>Light-Sensitive Layer</span> : null}
            </div>
            <img className={styles.retinaBottom} src={content.retinaImages.bottom} alt="Retina scan consultation" />
          </div>
        ) : isGlaucoma ? (
          <div className={styles.glaucomaVisual}>
            <div className={styles.glaucomaPhotoCard}>
              <img className={styles.glaucomaMain} src={content.image || "/assets/glaucoma/whatisglaucoma.png"} alt="Understanding Glaucoma examination" />
            </div>
            <img className={styles.glaucomaInset} src="/assets/eye-check.webp" alt="Close-up eye examination during glaucoma evaluation" />
            <div className={styles.glaucomaPanel}>
              <span>Open-Angle Glaucoma</span>
              <strong>Often Has No Early Symptoms</strong>
            </div>
          </div>
        ) : (
          <div className={styles.imageStack}>
            {isCataract ? <div className={styles.ageTag}><small>More Common</small><b>With Age</b></div> : null}
            <img src={content.image} alt={`${content.title} ${content.accent}`} />
          </div>
        )}
      </div>
    </section>
  );
}


