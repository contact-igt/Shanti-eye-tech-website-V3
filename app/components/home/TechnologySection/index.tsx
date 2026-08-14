import { FeatureGrid, SectionHeading } from "@/app/site-components";
import styles from "./TechnologySection.module.css";

const technology = [
  {
    icon: "♙",
    title: "Zeiss Ophthalmic Systems",
    text: "Premium German-engineered surgical microscopes for precision in every procedure.",
  },
  {
    icon: "⌗",
    title: "OCT Imaging",
    text: "Advanced Optical Coherence Tomography for detailed retinal and anterior segment analysis.",
  },
  {
    icon: "◎",
    title: "Femto Laser Technology",
    text: "Blade-free cataract and LASIK surgeries with unmatched accuracy and safety.",
  },
  {
    icon: "⌏",
    title: "Digital Diagnostics",
    text: "Comprehensive automated perimetry, topography, and biometry systems.",
  },
];

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
        <FeatureGrid items={technology} columns={2} showNumbers />
        <img
          className="wide-equipment"
          src="/assets/home/outcome.jpeg"
          alt="Advanced technology outcomes"
        />
      </div>
    </section>
  );
}
