import { FeatureGrid, SectionHeading } from "@/app/site-components";
import styles from "./AboutWhyChoose.module.css";

export function AboutWhyChoose() {
  return (
    <section className={`section soft-section ${styles.whyChooseSection}`}>
      <div className="shell">
        <SectionHeading eyebrow="WHY CHOOSE US" title="What Sets Us" accent="Apart" singleLine />
        <FeatureGrid
          columns={2}
          items={[
            { icon: "♡", title: "Patient-Centered Care", text: "Every treatment plan is personalized to your unique needs and lifestyle goals." },
            { icon: "♙", title: "Expert Team", text: "15+ experienced ophthalmologists with specialized training in all subspecialties." },
            { icon: "♢", title: "Proven Track Record", text: "49,999+ successful procedures with 97% patient satisfaction." },
            { icon: "✦", title: "Continuous Innovation", text: "Investment in latest technology and ongoing training for optimal outcomes." },
          ]}
        />
      </div>
    </section>
  );
}
