import { FeatureGrid, SectionHeading } from "@/app/site-components";
import styles from "./CommitmentSection.module.css";

export function CommitmentSection() {
  return (
    <section className={`section commitment-section ${styles.commitmentSection}`}>
      <div className="shell">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="Four Pillars of"
          accent="Our Commitment"
          body="What sets Shanti Eye Tech apart is our unwavering dedication to combining clinical excellence with genuine care for every patient who walks through our doors."
        />
        <FeatureGrid
          columns={2}
          items={[
            {
              icon: "◎",
              title: "Precision Diagnostics",
              text: "Advanced imaging and diagnostic tools enable us to detect eye conditions at their earliest stages, ensuring timely and effective treatment.",
            },
            {
              icon: "♡",
              title: "Patient-Centered Care",
              text: "Every patient receives personalized attention from our compassionate team, with treatment plans tailored to individual needs and lifestyle.",
            },
            {
              icon: "🛡",
              title: "Clinical Standards",
              text: "We adhere to structured clinical protocols, aseptic surgical standards, and comprehensive post-procedure monitoring to support patient safety and optimal care.",
            },
            {
              icon: "✦",
              title: "Compassionate Communication",
              text: "We believe in empathetic patient interaction, taking the time to listen, explain diagnostic findings clearly, and provide reassurance throughout the treatment process.",
            },
          ]}
        />
      </div>
    </section>
  );
}
