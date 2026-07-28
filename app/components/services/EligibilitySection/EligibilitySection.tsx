import type { CSSProperties } from "react";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { EligibilityContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function EligibilitySection({ content, kind }: { content: EligibilityContent; kind: ServiceKind }) {
  const sectionStyle = content.backgroundImage
    ? ({ "--section-bg": `url(${content.backgroundImage})` } as CSSProperties)
    : undefined;

  if (kind === "retina") {
    const warningChecks = content.checks.slice(0, 4);
    const riskCheck = content.checks[4];

    const defaultWarningImages = [
      { image: "/assets/retina-treatment.webp", label: "Blurred Vision" },
      { image: "/assets/dark-spots.webp", label: "Dark Spots" },
      { image: "/assets/low-light.webp", label: "Low Light" },
      { image: "/assets/retina-medical.webp", label: "Side Vision" },
    ];
    const warningImages = content.warningImages && content.warningImages.length > 0 ? content.warningImages : defaultWarningImages;

    return (
      <section className={`${styles.section} ${styles.retina}`} id="eligibility" style={sectionStyle}>
        <div className={styles.retinaShell}>
          <div className={styles.retinaHeader}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2>{content.title} <br className={styles.desktopBr} /><span className={styles.spacePrefix}> </span><span>{content.accent}</span></h2>
          </div>
          <div className={styles.retinaBody}>
            <div className={styles.retinaCopy}>
              <h3>Watch Out for These<br /><span>Warning Signs</span></h3>
              <ul className={styles.retinaChecks}>
                {warningChecks.map((item) => (
                  <li key={item}>
                    <img src="/assets/blue_check.png" alt="" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {riskCheck ? (
                <div className={styles.riskBox}>
                  <div className={styles.riskTitle}>
                    <span className={styles.orangeDot}>•</span>
                    <span>High-Risk Conditions</span>
                  </div>
                  <div className={styles.riskItem}>
                    <svg className={styles.orangeTick} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{riskCheck}</span>
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.warningVisuals}>
              <div className={styles.warningGrid}>
                {warningImages.map((item) => (
                  <figure key={item.label}>
                    <img src={item.image} alt={item.label} />
                    <figcaption>{item.label}</figcaption>
                  </figure>
                ))}
              </div>
              <div className={styles.retinaNote}><b>Early evaluation is key.</b> {content.note.replace("Early evaluation is key: ", "")}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.section} ${styles[kind]}`} id="eligibility" style={sectionStyle}>
      <div className={styles.shell}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2>{content.title} <br className={styles.desktopBr} /><span className={styles.spacePrefix}> </span><span>{content.accent}</span></h2>
          <p>{content.body}</p>
          <ul className={styles.checks}>
            {content.checks.map((item) => (
              <li key={item}>
                <img src={kind === "classic" ? "/assets/blue_check.png" : "/assets/check_green.png"} alt="" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={`${styles.note} ${kind === "cataract" ? styles.cataractNote : kind === "classic" ? styles.classicNote : ""}`}><b>{kind === "classic" ? "Note:" : "Important:"}</b> {content.note}</div>
        </div>
        <div className={styles.visual}>
          {kind === "cataract" ? (
            <>
              <img className={`${styles.mainImage} ${styles.cataractMainImage}`} src="/assets/consider_surgery_right.png" alt="Cataract surgery consultation room" />
              <img className={`${styles.eyeOne} ${styles.cataractEyeOne}`} src="/assets/consider_surgery1.png" alt="Cloudy cataract eye" />
              <img className={`${styles.eyeThree} ${styles.cataractEyeThree}`} src="/assets/consider_surgery3.png" alt="Cataract eye close-up" />
              <img className={`${styles.eyeTwo} ${styles.cataractEyeTwo}`} src="/assets/consider_surgery2.png" alt="Eye after evaluation" />
              <span className={styles.cataractAgeBadge}><small>Common Age</small><b>60+</b><em>Years Old</em></span>
            </>
          ) : kind === "classic" ? (
            <>
              <img className={`${styles.mainImage} ${styles.classicMainImage}`} src="/assets/lasik_right1.png" alt="LASIK candidate vision check" />
              <img className={styles.floatImage} src="/assets/lasik_right2.png" alt="LASIK eye examination consultation" />
              <span className={styles.ageBadge}><b>18-45</b><small>Ideal Age Range</small></span>
            </>
          ) : (
            <img className={styles.mainImage} src={content.image} alt="" />
          )}
        </div>
      </div>
    </section>
  );
}

