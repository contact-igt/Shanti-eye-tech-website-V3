import styles from "./AboutImpactBand.module.css";

export function AboutImpactBand() {
  return (
    <section className={`impact-band ${styles.impactBand}`}>
      <div className={`shell ${styles.shell}`}>
        <h2>Clinical Highlights</h2>
        <p>Two decades of dedicated ophthalmic practice</p>
        <div className={styles.highlightsGrid}>
          <article className={styles.highlightCol}>
            <span className={styles.highlightVal}>20+</span>
            <span className={styles.underline} aria-hidden="true" />
            <p className={styles.highlightDesc}>Years – Dedicated Eye Care Practice</p>
          </article>
          <article className={styles.highlightCol}>
            <span className={styles.highlightVal}>6</span>
            <span className={styles.underline} aria-hidden="true" />
            <p className={styles.highlightDesc}>Eye Care Specialities</p>
          </article>
          <article className={styles.highlightCol}>
            <span className={styles.highlightVal}>Comprehensive Care</span>
            <span className={styles.underline} aria-hidden="true" />
            <p className={styles.highlightDesc}>Diagnostic &amp; Surgical Facilities</p>
          </article>
        </div>
      </div>
    </section>
  );
}
