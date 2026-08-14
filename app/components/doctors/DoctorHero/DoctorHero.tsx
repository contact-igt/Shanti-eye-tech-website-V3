import Link from "next/link";
import { ArrowRight, Award, CalendarDays, GraduationCap } from "lucide-react";
import { Eyebrow } from "@/app/site-components";
import styles from "./styles.module.css";

const statistics = [
  {
    value: "20+ Years",
    label: "Ophthalmology Experience",
    icon: Award,
  },
  {
    value: "MBBS, DOMS, DNB, FAECS",
    label: "Qualifications",
    icon: GraduationCap,
    compact: true,
  },
  {
    value: "Since 2003",
    label: "Dedicated to Ophthalmology",
    icon: CalendarDays,
  },
];

export function DoctorHero() {
  return (
    <section className={styles.hero} aria-labelledby="doctor-hero-title">
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          <Eyebrow>MEET YOUR EYE SURGEON</Eyebrow>
          <h1 id="doctor-hero-title">
            <span className={styles.titleLine}>Experience. Precision.</span>
            <span className={styles.accentLine}>Compassionate</span>
            <span className={styles.accentLine}>Eye Care.</span>
          </h1>
          <p>
            Meet Dr. Amit N. Solanki, Director of Shanti EyeTech and an experienced Cataract, Glaucoma &amp; Refractive Surgeon dedicated to ophthalmology since 2003.
          </p>

          <div className={styles.actions}>
            <Link className={`button button-primary ${styles.primaryButton}`} href="/contact">
              Book an Appointment <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className={`button button-outline ${styles.secondaryButton}`} href="/about#leadership">
              Know Your Doctor <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

        </div>

        <div className={styles.visual}>
          <img className={styles.visualBackground} src="/assets/doctors/doctor-hero-bg.png" alt="" aria-hidden="true" />
          <img className={styles.visualDoctor} src="/assets/doctors/doctor-hero-foreground.png" alt="Dr. Amit N. Solanki in the eye clinic" />
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
