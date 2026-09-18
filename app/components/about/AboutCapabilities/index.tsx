import { SectionHeading } from "@/app/site-components";
import { AboutCapabilitiesGrid } from "./AboutCapabilitiesGrid";
import styles from "./AboutCapabilities.module.css";

export function AboutCapabilities() {
  return (
    <section className={`section capabilities-section ${styles.capabilitiesSection}`}>
      <div className="shell">
        <SectionHeading eyebrow="OUR CAPABILITIES" title="Expertise Backed by" accent="Advanced Technology" />
        <img className="wide-equipment" src="/assets/home/outcome.jpeg" alt="Advanced ophthalmology technology" />
        <AboutCapabilitiesGrid />
      </div>
    </section>
  );
}
