import { SectionHeading } from "@/app/site-components";
import styles from "./AboutPhilosophy.module.css";

export function AboutPhilosophy() {
  return (
    <section className={`section philosophy-section ${styles.philosophySection}`}>
      <div className="shell">
        <SectionHeading
          eyebrow="OUR PHILOSOPHY"
          title="Mission, Vision &"
          accent="Values"
          singleLine
        />
        <div className="philosophy-grid">
          <article className="philosophy-card philosophy-mission">
            <span className="philosophy-number" aria-hidden="true">
              01
            </span>
            <span className="philosophy-icon" aria-hidden="true">
              ◎
            </span>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, world-class ophthalmology care that transforms lives through clinical excellence, compassionate service, and continuous innovation.
            </p>
          </article>
          <article className="philosophy-card philosophy-vision">
            <span className="philosophy-number" aria-hidden="true">
              02
            </span>
            <span className="philosophy-icon" aria-hidden="true">
              ◉
            </span>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted name in eye care, setting standards for quality, innovation, and patient satisfaction across the region.
            </p>
          </article>
          <article className="philosophy-card philosophy-values">
            <span className="philosophy-number" aria-hidden="true">
              03
            </span>
            <span className="philosophy-icon" aria-hidden="true">
              ✦
            </span>
            <h3>Our Values</h3>
            <ul>
              <li>Patient-First Care</li>
              <li>Clinical Excellence</li>
              <li>Continuous Innovation</li>
              <li>Ethical Practice</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
