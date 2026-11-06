import { SectionHeading } from "@/app/site-components";
import styles from "./AboutMilestones.module.css";

const milestones = [
  {
    year: "2018",
    title: "Best Video Award",
    description: "“Shree SadGuru Seva Sansthan Best Video Award” titled Managing the Post LASIK Epithelial Ingrowth, October 2018.",
  },
  {
    year: "2017",
    title: "Dr. Ramesh Krishna Agarwal Memorial Award",
    description: "Dr. Ramesh Krishna Agarwal Memorial Award — M.P. State Ophthalmic Society Annual Conference, Gwalior, 2017.",
  },
  {
    year: "2016",
    title: "Best Poster Award",
    description: "M.P. State Ophthalmic Society Annual Conference, Bhopal, 2016.",
  },
  {
    year: "2011",
    title: "Best Surgical Video",
    description: "Honoured with surgical video presentation titled “Small vs Large Rhexis for Endocapsular Phaco in White Mature Cataracts” at National Phaco Workshop, Ahmedabad, September 2011.",
  },
  {
    year: "2011",
    title: "Best Paper Award for Glaucoma",
    description: "Best Paper Award for Glaucoma at Ophthalmology Tomorrow, Annual Conference by IDOS, Indore, June 2011.",
  },
  {
    year: "2006",
    title: "Best Paper of Session",
    description: "Best Paper of Session at AIOS (All India Ophthalmological Society) Conference, Bhopal, 2006.",
  },
  {
    year: "2005",
    title: "Third Rank in Gujarat University",
    description: "Third Rank in Gujarat University during postgraduate training in Ophthalmology at RIO, Ahmedabad, 2005.",
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
          body="A career marked by clinical training, academic contribution and continued learning."
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
