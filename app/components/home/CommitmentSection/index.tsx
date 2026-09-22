import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
              title: "Proven Excellence",
              text: "With over 49,999 successful procedures and 97% patient satisfaction, our track record speaks to our commitment to exceptional outcomes.",
            },
            {
              icon: "✦",
              title: "Caring with a Spiritual Touch",
              text: "Healing with Positive Energy guides how we care for every patient, with compassion, reassurance, and a positive outlook throughout their treatment.",
            },
          ]}
        />
        <Link
          className="button button-primary center-button"
          href="/contact#contact-form"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          Experience the Difference <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
