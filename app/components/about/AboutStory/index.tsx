import { Eyebrow } from "@/app/site-components";
import styles from "./AboutStory.module.css";

export function AboutStory() {
  return (
    <section className={`section ${styles.storySection}`}>
      <div className={`shell ${styles.storyLayout}`}>
        <div className={styles.storyImage}>
          <img src="/assets/about/about.jpg" alt="Shanti Eye Tech clinic" />
          <b className={styles.establishedBadge}>
            <strong>Established 2003</strong>
            <small>Eye Care Clinic</small>
          </b>
        </div>
        <div className={styles.storyContent}>
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
          <p>
            Shanti EyeTech focuses on personalized eye care aimed at improving vision, comfort and quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}
