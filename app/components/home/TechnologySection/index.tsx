import { SectionHeading } from "@/app/site-components";
import styles from "./TechnologySection.module.css";
import { TechnologySlider } from "./TechnologySlider";

import { technology } from "./content";

export function TechnologySection() {
  return (
    <section className={`section technology-section ${styles.technologySection}`} id="technology">
      <div className="shell">
        <SectionHeading
          eyebrow="ADVANCED TECHNOLOGY"
          title="Cutting-Edge Equipment"
          accent="For Optimal Outcomes"
          body="We invest in the latest diagnostic and surgical technology to ensure the highest standards of precision and patient safety."
        />
        <TechnologySlider items={technology} />
      </div>
    </section>
  );
}

