import Link from "next/link";
import { SectionHeading } from "@/app/site-components";
import styles from "./AboutLeadership.module.css";

function LeadershipIcon({ type }: { type: "award" | "book" | "users" | "calendar" }) {
  const paths = {
    award: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M9 12 7.5 20l4.5-2.5 4.5 2.5L15 12" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5c2.5-1 5-.5 8 1v12c-3-1.5-5.5-2-8-1V5.5Z" />
        <path d="M20 5.5c-2.5-1-5-.5-8 1v12c3-1.5 5.5-2 8-1V5.5Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c0-3.3 2.4-5.3 5.5-5.5s5.5 2.2 5.5 5.5" />
        <path d="M14 14c3 .1 5 2.1 5 5" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export function AboutLeadership() {
  return (
    <section className={`section leadership-section ${styles.leadershipSection}`} id="leadership">
      <div className="shell">
        <SectionHeading eyebrow="LEADERSHIP" title="The Visionary Behind" accent="Shanti Eye Tech" />
        <div className="leadership-layout">
          <div className="leadership-photo-wrap">
            <img src="/assets/home/doctor-profile.webp" alt="Dr. Amit N Solanki" />
            <span>Director — Dr. Amit N. Solanki</span>
          </div>
          <div className="leadership-copy">
            <h2>Dr. Amit N Solanki</h2>
            <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#475569", lineHeight: 1.4 }}>
              MBBS, DOMS, DNB (Ophthalmology), FAECS (Fellowship in Cataract &amp; Glaucoma)
            </h4>
            <p>
              Dr. Amit N. Solanki is a Cataract, Glaucoma &amp; Refractive-LASIK-LASER surgeon with more than 20 years of experience in ophthalmology.
            </p>
            <p>
              Dr. Solanki completed MBBS at B.J. Medical College, Ahmedabad; DOMS at M. &amp; J. Western Regional Institute of Ophthalmology; DNB Ophthalmology at Aravind Eye Hospital; and advanced phacoemulsification and glaucoma training at Aravind Eye Care Hospital, Coimbatore.
            </p>
            <p>
              This hands-on training honed his skills in advanced phaco cataract surgery as well as glaucoma diagnostics and management. Beyond clinical practice, Dr. Solanki has trained foreign doctors in Hanoi, Vietnam through the Alina Vision International Foundation, and is a regular speaker who has delivered scientific talks as guest faculty at national and international conferences.
            </p>
            <div className={styles.leadershipStats}>
              <article className={styles.statCard}>
                <span className={styles.statIcon}>
                  <LeadershipIcon type="award" />
                </span>
                <h4 className={styles.statHeading}>MBBS, DOMS, DNB, FAECS</h4>
                <p className={styles.statDesc}>Verified Qualifications</p>
              </article>
              <article className={styles.statCard}>
                <span className={styles.statIcon}>
                  <LeadershipIcon type="calendar" />
                </span>
                <h4 className={styles.statHeading}>20+ Years</h4>
                <p className={styles.statDesc}>Clinical Practice</p>
              </article>
              <article className={styles.statCard}>
                <span className={styles.statIcon}>
                  <LeadershipIcon type="book" />
                </span>
                <h4 className={styles.statHeading}>50+ Papers</h4>
                <p className={styles.statDesc}>Published Research</p>
              </article>
              <article className={styles.statCard}>
                <span className={styles.statIcon}>
                  <LeadershipIcon type="award" />
                </span>
                <h4 className={styles.statHeading}>15+ Awards</h4>
                <p className={styles.statDesc}>Awards &amp; Recognition</p>
              </article>
            </div>
            <Link className="button button-primary leadership-cta" href="/contact">
              Book with Dr. Amit N Solanki
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
