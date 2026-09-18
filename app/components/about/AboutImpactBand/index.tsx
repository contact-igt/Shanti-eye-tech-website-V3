import { CountUp } from "@/app/client";
import styles from "./AboutImpactBand.module.css";

export function AboutImpactBand() {
  return (
    <section className={`impact-band ${styles.impactBand}`}>
      <div className="shell">
        <h2>Our Impact in Numbers</h2>
        <p>Two decades of excellence in eye care</p>
        <div>
          <b>
            <CountUp value={20} suffix="+" />
            <small>Years of Service</small>
          </b>
          <b>
            <CountUp value={49999} suffix="+" />
            <small>Successful Procedures</small>
          </b>
          <b>
            <CountUp value={97} suffix="%" />
            <small>Patient Satisfaction</small>
          </b>
        </div>
      </div>
    </section>
  );
}
