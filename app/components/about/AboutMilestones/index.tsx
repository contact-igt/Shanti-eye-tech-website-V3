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
    description: "Most prestigious award by M.P. State Ophthalmic Society at the MPSOS Annual Conference, Gwalior, October 2017.",
  },
  {
    year: "2016",
    title: "Best Poster Award",
    description: "M.P. State Ophthalmic Society Annual Conference, Bhopal, 2016.",
  },
  {
    year: "2014",
    title: "Vice President of Lions International",
    description: "Honoured as Vice President of Lions International, Sewa Ranjan, Indore, for the year 2013–14.",
  },
  {
    year: "2013",
    title: "Most Versatile Doctor of the Year",
    description: "Honoured as “Most Versatile Doctor of the Year 2013” by Dr. A.M. Arun, Chairman, Vasan Eye Care Hospital.",
  },
  {
    year: "2011",
    title: "Best Surgical Video",
    description: "Honoured with best surgical video titled “Small vs Large Rhexis for Endocapsular Phaco in White Mature Cataracts” by Professor Dr. Kevin Miller (U.S.A.) at Dr. Vasavada's National Phaco Workshop, Ahmedabad, September 2011.",
  },
  {
    year: "2011",
    title: "Best Paper Award for Glaucoma",
    description: "Best Paper Award for Glaucoma by Dr. Devendra Sood at Ophthalmology Tomorrow, Annual Conference by IDOS, Indore, June 2011.",
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
  {
    year: "1996",
    title: "Topped in HSC",
    description: "Topped in HSC at Karnavat Higher Secondary School, 1996.",
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
