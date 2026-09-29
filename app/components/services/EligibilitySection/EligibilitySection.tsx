import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight, Eye, FileText, ScanEye, UserRoundCheck, UsersRound } from "lucide-react";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { EligibilityContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function EligibilitySection({ content, kind }: { content: EligibilityContent; kind: ServiceKind }) {
  const sectionStyle = content.backgroundImage
    ? ({ "--section-bg": `url(${content.backgroundImage})` } as CSSProperties)
    : undefined;

  if (kind === "keratoconus") {
    const warningChecks = content.checks;
    const defaultWarningImages = [
      { image: "/assets/keratoconus/frequent_power.png", label: "Frequent Power Change" },
      { image: "/assets/keratoconus/blurred_vision.png", label: "Blurred / Distorted Vision" },
      { image: "/assets/keratoconus/light_sesitivity.png", label: "Light Sensitivity" },
      { image: "/assets/keratoconus/halos.png", label: "Halos & Glare" },
      { image: "/assets/keratoconus/astigmatism.png", label: "Increasing Astigmatism" },
    ];
    const warningImages = content.warningImages && content.warningImages.length > 0 ? content.warningImages : defaultWarningImages;

    return (
      <section className={`${styles.section} ${styles.retina} ${styles.keratoconusEligibility}`} id="eligibility" style={sectionStyle}>
        <div className={styles.retinaShell}>
          <div className={styles.retinaHeader}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2>{content.title} <br className={styles.desktopBr} /><span className={styles.spacePrefix}> </span><span>{content.accent}</span></h2>
          </div>
          <div className={styles.keratoconusBody}>
            <div className={styles.retinaCopy}>
              <h3>Watch Out for These <br className={styles.desktopBr} /><span>Warning Signs</span></h3>
              <ul className={styles.retinaChecks}>
                {warningChecks.map((item) => (
                  <li key={item}>
                    <img src="/assets/blue_check.png" alt="" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.bentoGrid} aria-label="Keratoconus warning signs visual examples">
              {warningImages.slice(0, 5).map((item, index) => (
                <figure key={item.label || index} className={`${styles.bentoCard} ${styles[`bentoCard${index + 1}`]}`}>
                  <img src={item.image} alt={item.label || `Keratoconus visual ${index + 1}`} />
                  {item.label ? <figcaption>{item.label}</figcaption> : null}
                </figure>
              ))}
            </div>

            <div className={styles.keratoconusNote}><b>Important:</b> {content.note}</div>
          </div>
        </div>
      </section>
    );
  }

  if (kind === "squint") {
    const signs = [Eye, Eye, Brain, BookOpen, UserRoundCheck, FileText, UsersRound];
    const stages = [
      { number: "01", title: "Before Treatment", image: "/assets/squint/whatissquint1.png", callout: "Eyes misaligned", detail: "Difficulty focusing and depth perception", icon: Eye },
      { number: "02", title: "Eye Alignment Assessment", image: "/assets/squint/improve_binocular.png", callout: "Precise Evaluation", detail: "Detailed tests to assess eye alignment and visual function", icon: ScanEye },
      { number: "03", title: "Pediatric Examination", image: "/assets/squint/whatissquint2.png", callout: "Specialist Assessment", detail: "Child-friendly, comprehensive evaluation", icon: UserRoundCheck },
      { number: "04", title: "Improved Vision After Treatment", image: "/assets/squint/visual_confidence.png", callout: "Better Alignment", detail: "Improved vision, confidence and quality of life", icon: Eye },
    ];

    return (
      <section className={`${styles.section} ${styles.squintPathway}`} id="eligibility">
        <div className={styles.squintPathwayShell}>
          <div className={styles.squintCopy}>
            <span className={styles.squintLabel}><Eye aria-hidden="true" /> Squint &amp; Amblyopia</span>
            <h2>When Should You<br />Consider Evaluation?</h2>
            <p>A timely evaluation can help detect squint (misalignment of the eyes) and amblyopia (lazy eye) early. You may consider consultation if you experience:</p>
            <ul className={styles.squintChecks}>
              {content.checks.slice(0, 7).map((item, index) => {
                const Icon = signs[index];
                return <li key={item}><span><Icon aria-hidden="true" /></span>{item}</li>;
              })}
            </ul>
            <Link className={styles.squintCta} href="/contact#contact-form">Book an Evaluation <span><ArrowRight aria-hidden="true" /></span></Link>
          </div>

          <div className={styles.pathwayVisual} aria-label="Squint assessment and treatment pathway">
            <CornerDownRight className={`${styles.pathArrow} ${styles.pathArrowOne}`} aria-hidden="true" />
            <CornerDownLeft className={`${styles.pathArrow} ${styles.pathArrowTwo}`} aria-hidden="true" />
            <CornerUpLeft className={`${styles.pathArrow} ${styles.pathArrowThree}`} aria-hidden="true" />
            <CornerUpRight className={`${styles.pathArrow} ${styles.pathArrowFour}`} aria-hidden="true" />
            <i className={styles.pathDots} aria-hidden="true" />
            {stages.map(({ number, title, image, callout, detail, icon: Icon }, index) => (
              <article className={`${styles.pathStage} ${styles[`pathStage${index + 1}`]}`} key={number}>
                <img src={image} alt={title} />
                <div className={styles.stageTitle}><b>{number}</b><span>{title}</span></div>
                <div className={styles.stageCallout}><i><Icon aria-hidden="true" /></i><span><b>{callout}</b><small>{detail}</small></span></div>
              </article>
            ))}
            <div className={styles.pathwayPlan}><Eye aria-hidden="true" /> <span>Personalized Treatment Plan</span></div>
          </div>
        </div>
      </section>
    );
  }

  if (kind === "retina") {
    const warningChecks = content.checks.slice(0, 4);
    const riskCheck = content.checks[4];

    const defaultWarningImages = [
      { image: "/assets/retina/blurred-vision.jpg", label: "Blurred Vision" },
      { image: "/assets/retina/dark_spot.jpeg", label: "Dark Spots" },
      { image: "/assets/retina/low_vision.jpeg", label: "Low Light" },
      { image: "/assets/retina/side_vision.jpeg", label: "Side Vision" },
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
              <h3>Watch Out for These <br className={styles.desktopBr} /><span>Warning Signs</span></h3>
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
              <div className={styles.retinaNote}><b>Important:</b> {content.note}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (kind === "glaucoma") {
    return (
      <section className={`${styles.section} ${styles.glaucoma}`} id="eligibility" style={sectionStyle}>
        <div className={styles.glaucomaShell}>
          <div className={styles.glaucomaCopy}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2>
              When Should You <br />
              <span>Consider a</span> <br />
              <span>Glaucoma Evaluation?</span>
            </h2>
            <p>{content.body}</p>
            <ul className={styles.glaucomaChecks}>
              {content.checks.map((item) => (
                <li key={item}>
                  <svg className={styles.glaucomaCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.glaucomaVisual} aria-label="Glaucoma warning signs visual examples">
            <img className={styles.glaucomaSideVision} src="/assets/glaucoma/consider1.png" alt="Family history and glaucoma risk evaluation" />
            <img className={styles.glaucomaHeadache} src="/assets/glaucoma/consider2.png" alt="Age-related glaucoma screening" />
            <img className={styles.glaucomaLowVision} src="/assets/glaucoma/consider4.png" alt="Halos around lights visual symptoms" />
            <img className={styles.glaucomaHalos} src="/assets/glaucoma/consider3.png" alt="Peripheral vision loss assessment" />
            <div className={styles.glaucomaAgeBadge}>
              <strong>Risk-Based</strong>
              <span>Screening Guidance</span>
            </div>
            <div className={styles.glaucomaHaloBadge}>
              <strong>HALOS</strong>
              <span>Around Lights</span>
            </div>
          </div>
          <div className={styles.glaucomaNote}><b>Note:</b> {content.note}</div>
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
              <img className={`${styles.mainImage} ${styles.cataractMainImage}`} src="/assets/cataract/consider_surgery_right.jpeg" alt="Cataract surgery consultation room" />
              <img className={`${styles.eyeOne} ${styles.cataractEyeOne}`} src="/assets/cataract/consider_surgery1.jpeg" alt="Cloudy cataract eye" />
              <img className={`${styles.eyeThree} ${styles.cataractEyeThree}`} src="/assets/cataract/consider_surgery3.jpeg" alt="Cataract eye close-up" />
              <img className={`${styles.eyeTwo} ${styles.cataractEyeTwo}`} src="/assets/cataract/consider_surgery2.jpeg" alt="Eye after evaluation" />
              <span className={styles.cataractAgeBadge}><small>More Common</small><b>With Age</b><em>Can occur earlier too</em></span>
            </>
          ) : kind === "classic" ? (
            <>
              <img className={`${styles.mainImage} ${styles.classicMainImage}`} src="/assets/lasik/lasik_right.jpeg" alt="LASIK candidate vision check" />
              <img className={styles.floatImage} src="/assets/lasik/lasikright2.jpeg" alt="LASIK eye examination consultation" />
              <span className={styles.ageBadge}><b>Varies</b><small>By Procedure</small></span>
            </>
          ) : (
            <img className={styles.mainImage} src={content.image} alt="" />
          )}
        </div>
      </div>
    </section>
  );
}

