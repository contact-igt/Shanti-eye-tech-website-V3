import { Award, ShieldCheck, Star, Target } from "lucide-react";
import styles from "./TrustStrip.module.css";

export function TrustStrip() {
  return (
    <section className={`trust-strip ${styles.trustStrip}`} aria-hidden="true">
      <div className="trust-strip-marquee">
        <ul className="trust-strip-list">
          <li>
            <span>
              <Award size={20} />
            </span>{" "}
            Best Eye Hospital 2024
          </li>
          <li>
            <span>
              <ShieldCheck size={20} />
            </span>{" "}
            NABH Accredited
          </li>
          <li>
            <span>
              <Award size={20} />
            </span>{" "}
            25+ Years Excellence
          </li>
          <li>
            <span>
              <Star size={20} />
            </span>{" "}
            97% Patient Satisfaction Rate
          </li>
          <li>
            <span>
              <Target size={20} />
            </span>{" "}
            State-of-the-Art Technology
          </li>
          <li>
            <span>
              <ShieldCheck size={20} />
            </span>{" "}
            ISO 9001:2015 Certified
          </li>
        </ul>
        <ul className="trust-strip-list">
          <li>
            <span>
              <Award size={20} />
            </span>{" "}
            Best Eye Hospital 2024
          </li>
          <li>
            <span>
              <ShieldCheck size={20} />
            </span>{" "}
            NABH Accredited
          </li>
          <li>
            <span>
              <Award size={20} />
            </span>{" "}
            25+ Years Excellence
          </li>
          <li>
            <span>
              <Star size={20} />
            </span>{" "}
            97% Patient Satisfaction Rate
          </li>
          <li>
            <span>
              <Target size={20} />
            </span>{" "}
            State-of-the-Art Technology
          </li>
          <li>
            <span>
              <ShieldCheck size={20} />
            </span>{" "}
            ISO 9001:2015 Certified
          </li>
        </ul>
      </div>
    </section>
  );
}
