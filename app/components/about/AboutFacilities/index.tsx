import { SectionHeading } from "@/app/site-components";
import styles from "./AboutFacilities.module.css";
import { FacilitySlider } from "./FacilitySlider";

const facilities = [
  {
    image: "/assets/about/modern.jpeg",
    title: "Modern Examination Rooms",
    text: "Comfortable, well-equipped consultation spaces",
  },
  {
    image: "/assets/about/waiting_room.jpeg",
    title: "Reception & Waiting Area",
    text: "Welcoming and calming environment",
  },
  {
    image: "/assets/about/room.jpeg",
    title: "Advanced Diagnostic Lab",
    text: "State-of-the-art equipment for precise diagnosis",
  },
];

export function AboutFacilities() {
  return (
    <section className={`section facilities-section ${styles.facilitiesSection}`}>
      <div className="shell">
        <SectionHeading
          eyebrow="OUR FACILITIES"
          title="World-Class Infrastructure"
          accent="For Your Comfort"
        />
        <FacilitySlider items={facilities} />
      </div>
    </section>
  );
}
