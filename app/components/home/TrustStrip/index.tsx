import { Building2, Eye, HeartHandshake, Microscope } from "lucide-react";
import styles from "./TrustStrip.module.css";

const badgeItems = [
  { icon: Building2, label: "Established Eye Care" },
  { icon: Eye, label: "Comprehensive Eye Care" },
  { icon: Microscope, label: "Modern Diagnostic Facilities" },
  { icon: HeartHandshake, label: "Patient-Centred Care" },
];

export function TrustStrip() {
  return (
    <section className={`trust-strip ${styles.trustStrip}`} aria-hidden="true">
      <div className="trust-strip-marquee">
        <ul className="trust-strip-list">
          {badgeItems.concat(badgeItems).map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <li key={`strip-1-${idx}`}>
                <span>
                  <Icon size={20} />
                </span>{" "}
                {badge.label}
              </li>
            );
          })}
        </ul>
        <ul className="trust-strip-list">
          {badgeItems.concat(badgeItems).map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <li key={`strip-2-${idx}`}>
                <span>
                  <Icon size={20} />
                </span>{" "}
                {badge.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
