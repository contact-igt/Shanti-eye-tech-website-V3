import { CountUp } from "@/app/client";
import { Eyebrow } from "@/app/site-components";
import styles from "./AboutStory.module.css";

export function AboutStory() {
  return (
    <section className={`section story-section ${styles.storySection}`}>
      <div className="shell story-layout">
        <div className="story-image">
          <img src="/assets/about/about.jpg" alt="Shanti Eye Tech clinic" />
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
            Where Peace Meets<br />
            <span>Advanced Eye Care</span>
          </h2>
          <p>
            At Shanti Eye Tech, we believe good eye care is not only about advanced treatment—it is also about making every patient feel comfortable, understood, and cared for. “Shanti” represents peace, while “EyeTech” reflects our commitment to modern eye care. Together, they define the experience we want every patient to have.
          </p>
          <p>
            Our doctors and clinical team take the time to listen, explain things clearly, and guide each patient through the right treatment with confidence. With modern technology, experienced professionals, and a patient-first approach, we aim to make quality eye care simple, reassuring, and accessible.
          </p>
          <p>
            For us, restoring vision is more than a medical outcome. It is about helping people return to everyday life with greater comfort, confidence, and peace of mind.
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
