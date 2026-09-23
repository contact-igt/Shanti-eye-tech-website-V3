import { Award, Star, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/app/client";
import styles from "./styles.module.css";

const metrics = [
  { value: 20, suffix: "+", label: "Years Excellence", icon: Award },
  { value: 50, suffix: "K+", label: "Happy Patients", icon: Users },
  { value: 97, suffix: "%", label: "Patient Satisfaction", icon: Star },
];

export function TreatmentsOverviewHero() {
  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          {/* Eyebrow */}
          <span className={styles.eyebrow}>
            <i className={styles.eyebrowDot} aria-hidden="true" />
            OUR TREATMENTS
          </span>

          <h1>
            <span className={styles.titleLine}>Complete Eye Care,</span>{" "}
            <span className={styles.accentLine}>Made Easy to Explore</span>
          </h1>

          <p>
            Explore Shanti Eye Tech&apos;s range of eye-care services, from vision correction and cataract treatment to glaucoma, retina and pediatric eye care. Choose a service below to learn more.
          </p>

          <div className={styles.actions}>
            <a
              className={`button button-primary ${styles.primaryButton}`}
              href="#treatments"
            >
              Explore Treatments <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.metrics} aria-label="Treatment highlights">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label}>
                  <span className={styles.metricIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className={styles.metricCopy}>
                    <b>
                      <CountUp value={metric.value} suffix={metric.suffix} />
                    </b>
                    <span>{metric.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.visual}>
          <img src="/assets/eye-check.webp" alt="Eye specialist examining a patient with advanced diagnostic equipment" />
        </div>
      </div>
    </section>
  );
}
