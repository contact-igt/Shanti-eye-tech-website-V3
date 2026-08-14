import { FeatureGrid, SectionHeading } from "@/app/site-components";
import styles from "./AboutCapabilities.module.css";

export function AboutCapabilities() {
  return (
    <section className={`section capabilities-section ${styles.capabilitiesSection}`}>
      <div className="shell">
        <SectionHeading eyebrow="OUR CAPABILITIES" title="Expertise Backed by" accent="Advanced Technology" />
        <img className="wide-equipment" src="/assets/home/outcome.jpeg" alt="Advanced ophthalmology technology" />
        <FeatureGrid
          columns={4}
          items={[
            { icon: "♙", title: "Advanced Equipment", text: "State-of-the-art surgical microscopes and diagnostic tools." },
            { icon: "⌁", title: "Precision Diagnostics", text: "OCT, Topography, and biometry systems for accurate analysis." },
            { icon: "♢", title: "Safety Standards", text: "ISO certified with stringent infection control protocols." },
            { icon: "ϟ", title: "Rapid Recovery", text: "Minimally invasive techniques for faster healing." },
          ]}
        />
      </div>
    </section>
  );
}
