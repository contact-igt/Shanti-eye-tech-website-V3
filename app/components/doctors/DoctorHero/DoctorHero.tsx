import Link from "next/link";
import { ArrowRight, Award, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { Eyebrow } from "@/app/site-components";
import styles from "./styles.module.css";

const statistics = [
  {
    value: "MBBS, DOMS, DNB, FAECS",
    label: "Verified Qualifications",
    icon: GraduationCap,
    compact: true,
  },
  {
    value: "20+ Years",
    label: "Clinical Practice",
    icon: Award,
  },
  {
    value: "50+ Papers",
    label: "Published Research",
    icon: BookOpen,
  },
  {
    value: "15+ Awards",
    label: "Awards & Recognition",
    icon: Trophy,
  },
];

export function DoctorHero() {
  return (
    <section className={styles.hero} id="doctor-banner" aria-labelledby="doctor-hero-title">
      <div className={styles.bannerMedia} data-gsap-done="1">
        <img className={styles.heroBgImage} src="/assets/doctor_banner.jpg" alt="" aria-hidden="true" data-gsap-done="1" />
        <div className={styles.heroOverlay} data-gsap-done="1" />
      </div>
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          <Eyebrow>MEET YOUR EYE SURGEON</Eyebrow>
          <h1 id="doctor-hero-title">
            <span className={styles.titleLine}>Experience. Precision.</span>
            <span className={styles.accentLine}>Compassionate</span>
            <span className={styles.accentLine}>Eye Care.</span>
          </h1>
          <p>
            Meet Dr. Amit N. Solanki, Director of Shanti Eye Tech and an experienced Cataract, Glaucoma &amp; Refractive Surgeon dedicated to ophthalmology since 2003.
          </p>

          <div className={styles.actions}>
            <Link className={`button button-primary ${styles.primaryButton}`} href="/contact#contact-form">
              Book an Appointment <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className={`button button-outline ${styles.secondaryButton}`} href="#doctor-profile">
              Know Your Doctor <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

        </div>

        <div className={styles.visual}>
          <img className={styles.visualDoctor} src="/assets/doctor_banner.jpg" alt="Dr. Amit N. Solanki in the eye clinic" data-gsap-done="1" />
        </div>

        <div className={styles.statistics} aria-label="Dr. Amit N. Solanki credentials">
          {statistics.map((statistic) => {
            const Icon = statistic.icon;

            return (
              <div className={styles.statistic} key={statistic.label}>
                <span className={styles.statisticIcon} aria-hidden="true">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className={styles.statisticCopy}>
                  <b className={statistic.compact ? styles.compactValue : undefined}>{statistic.value}</b>
                  <span>{statistic.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
