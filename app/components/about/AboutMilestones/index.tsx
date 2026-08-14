import { SectionHeading } from "@/app/site-components";
import styles from "./AboutMilestones.module.css";

const milestones = [
  {
    year: "2018",
    title: "Best Video Award",
    description: "Shree SadGuru Seva Sansthan – Managed Post LASIK Epithelial Ingrowth",
  },
  {
    year: "2017",
    title: "Memorial Award",
    description: "Dr. Ramesh Krishna Agarwal Award – M.P.S.O.S Annual Conference, Gwalior",
  },
  {
    year: "2016",
    title: "Best Poster Award",
    description: "M.P. State Ophthalmic Society Annual Conference, Bhopal",
  },
  {
    year: "2011",
    title: "Best Surgical Video",
    description: "Small vs Large Rhexis for Endocapsular Phaco – IODOS, Indore",
  },
  {
    year: "",
    title: "Best Glaucoma Paper",
    description: "Ophthalmology Tomorrow Annual Conference, IODOS, Indore",
  },
];

export function AboutMilestones() {
  return (
    <section className={`section milestone-section ${styles.milestoneSection}`}>
      <div className="shell">
        <SectionHeading
          eyebrow="OUR JOURNEY"
          title="Milestones of"
          accent="Excellence & Growth"
          body="From a small clinic to a leading eye care center—our journey has been marked by continuous innovation and unwavering commitment to patient care."
        />
        <div className="timeline">
          {milestones.map((item, index) => (
            <article key={item.title + index}>
              <b>{item.year}</b>
              <span />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
