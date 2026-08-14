import { CountUp } from "@/app/client";
import { Eyebrow } from "@/app/site-components";
import styles from "./AboutStory.module.css";

export function AboutStory() {
  return (
    <section className={`section story-section ${styles.storySection}`}>
      <div className="shell story-layout">
        <div className="story-image">
          <img src="/assets/about/modern.jpeg" alt="Modern examination room" />
          <b>
            <i aria-hidden="true">♡</i>
            <strong>
              <CountUp value={97} suffix="%" />
            </strong>
            <small>Patient Satisfaction</small>
          </b>
        </div>
        <div>
          <Eyebrow>WHO WE ARE</Eyebrow>
          <h2>
            A Vision for<br />
            <span>Exceptional Eye Care</span>
          </h2>
          <p>
            Founded in 1998, Shanti EyeTech was born from a simple yet powerful mission: to make world-class ophthalmology accessible to everyone. What began as a small clinic has evolved into one of the region’s most trusted eye care centers.
          </p>
          <p>
            Our founder envisioned a facility where cutting-edge technology meets compassionate care. Today, that vision lives on through our team of 15+ specialist ophthalmologists and 50+ dedicated support staff.
          </p>
          <p>
            We’ve successfully performed over 2,000 procedures, from routine eye exams to complex surgical interventions. Each patient receives personalized treatment plans tailored to their unique needs and lifestyle.
          </p>
          <blockquote>
            “Our commitment is not just to restore vision, but to enhance the quality of life for every patient who walks through our doors.”
            <small>— Dr. Amit N Solanki, Founder &amp; Medical Director</small>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
