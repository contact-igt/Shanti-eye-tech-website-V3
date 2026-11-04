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
            { icon: "♙", title: "Qualified Clinical Team", text: "Experienced ophthalmology care led by Dr. Amit N. Solanki, supported by trained optometrists, ophthalmic assistants and clinical staff." },
            { icon: "♢", title: "Established Clinical Experience", text: "Over two decades of dedicated ophthalmic clinical practice, focusing on individualised evaluation and established surgical protocols." },
            { icon: "✦", title: "Continuous Innovation", text: "Investment in latest technology and ongoing training for optimal outcomes." },
          ]}
        />
      </div>
    </section>
  );
}
