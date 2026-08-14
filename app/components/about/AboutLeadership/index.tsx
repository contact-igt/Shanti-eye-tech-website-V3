import Link from "next/link";
import { CountUp } from "@/app/client";
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
        <SectionHeading eyebrow="LEADERSHIP" title="The Visionary Behind" accent="Shanti EyeTech" />
        <div className="leadership-layout">
          <div className="leadership-photo-wrap">
            <img src="/assets/home/doctor-profile.webp" alt="Dr. Amit N Solanki" />
            <span>Founder &amp; Medical Director</span>
          </div>
          <div className="leadership-copy">
            <h2>Dr. Amit N Solanki</h2>
            <h4>MBBS, MS, FRCS (Glasgow)</h4>
            <p>
              With over 25 years of dedicated service in ophthalmology, Dr. Amit N Solanki is a pioneer in advanced cataract and refractive surgery. His commitment to combining clinical excellence with compassionate care has been the cornerstone of Shanti EyeTech’s success.
            </p>
            <p>
              After completing his fellowship at the prestigious All India Institute of Medical Sciences and advanced training at Royal College of Surgeons, Glasgow, Dr. Solanki returned to establish a center that would bring world-class eye care to the community.
            </p>
            <p>
              His expertise in premium IOL implants and complex anterior segment procedures has helped restore vision for thousands of patients. Beyond clinical practice, Dr. Solanki is actively involved in training young ophthalmologists and conducting research in phacoemulsification techniques.
            </p>
            <div className="leadership-stats">
              <article>
                <span className="leadership-stat-icon">
                  <LeadershipIcon type="award" />
                </span>
                <b>
                  <CountUp value={15} suffix="+" />
                </b>
                <strong>Awards</strong>
                <small>National Recognition</small>
              </article>
              <article>
                <span className="leadership-stat-icon">
                  <LeadershipIcon type="book" />
                </span>
                <b>
                  <CountUp value={50} suffix="+" />
                </b>
                <strong>Papers</strong>
                <small>Published Research</small>
              </article>
              <article>
                <span className="leadership-stat-icon">
                  <LeadershipIcon type="users" />
                </span>
                <b>
                  <CountUp value={25} suffix="K+" />
                </b>
                <strong>Surgeries</strong>
                <small>Performed</small>
              </article>
              <article>
                <span className="leadership-stat-icon">
                  <LeadershipIcon type="calendar" />
                </span>
                <b>
                  <CountUp value={25} suffix="+" /> Years
                </b>
                <strong>Experience</strong>
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
