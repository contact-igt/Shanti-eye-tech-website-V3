import Link from "next/link";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  Eye,
  FlaskConical,
  GraduationCap,
  Hospital,
  Microscope,
  Presentation,
  Stethoscope,
  Trophy,
} from "lucide-react";
import { Eyebrow } from "@/app/site-components";
import styles from "./styles.module.css";

const trustPoints = [
  { icon: Award, title: "20+ Years", copy: "Decades of clinical and surgical expertise." },
  { icon: Eye, title: "Cataract Expertise", copy: "Specialized in advanced phacoemulsification." },
  { icon: Stethoscope, title: "Glaucoma Care", copy: "Comprehensive diagnosis and management." },
  { icon: Microscope, title: "LASIK Training", copy: "Certified in refractive surgery techniques." },
  { icon: Hospital, title: "Clinical Training", copy: "Extensive background in premier institutions." },
  { icon: GraduationCap, title: "Academic Exposure", copy: "Active participant in global ophthalmology." },
  { icon: BookOpen, title: "Scientific Contributions", copy: "Published research and clinical studies." },
  { icon: Trophy, title: "Award-Winning Work", copy: "Recognized for excellence in eye care." },
];

const specialisations = [
  "Advanced Phacoemulsification Cataract Surgery",
  "Comprehensive Glaucoma Management",
  "Refractive Procedures (LASIK)",
  "Medical Retina Evaluation",
  "Anterior Segment Diagnostics",
];

const expertise = [
  {
    label: "SURGERY",
    title: "Cataract Surgery",
    copy: "State-of-the-art phacoemulsification with premium intraocular lens (IOL) implantation for clear, youthful vision.",
    image: "/assets/cataract/cataract-hero.webp",
    href: "/services/cataract",
  },
  {
    label: "TREATMENT",
    title: "Glaucoma Management",
    copy: "Early detection, medical management, and surgical intervention to preserve optic nerve health and prevent vision loss.",
    image: "/assets/retina/retina-exam.webp",
    href: "/services/glaucoma",
  },
  {
    label: "REFRACTIVE",
    title: "LASIK & Refractive",
    copy: "Advanced laser procedures to correct myopia, hyperopia, and astigmatism, reducing dependency on glasses.",
    image: "/assets/lasik/lasik-procedure.webp",
    href: "/services/lasik",
  },
];

const education = [
  ["MBBS", "Medical College, Baroda", "Foundation of medical training."],
  ["DOMS", "M & J Institute of Ophthalmology, Ahmedabad", "Diploma in Ophthalmic Medicine & Surgery."],
  ["DNB", "Sankara Nethralaya, Chennai", "Diplomate of National Board."],
  ["Phaco Training", "L.V. Prasad Eye Institute, Hyderabad", "Advanced cataract surgery techniques."],
  ["LASIK Certification", "New Delhi", "Specialized refractive surgery training."],
];

const contributions = [
  {
    icon: Presentation,
    title: "Guest Faculty",
    copy: "Regular speaker at national ophthalmology conferences, sharing insights on advanced surgical techniques.",
  },
  {
    icon: GraduationCap,
    title: "Training in Vietnam",
    copy: "Participated in international surgical training programs, elevating global standards of eye care.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Faculty",
    copy: "Active contributor to academic journals and scientific committees driving ophthalmic research.",
  },
];

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <header className={styles.sectionHeading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
    </header>
  );
}

export function DoctorProfileSections() {
  return (
    <>
      <section className={`${styles.section} ${styles.trustSection}`} aria-labelledby="doctor-trust-title">
        <div className="shell">
          <SectionHeading eyebrow="WHY CONSULT DR. AMIT SOLANKI">
            <span id="doctor-trust-title">Why Patients Trust </span><strong>Dr. Amit N. Solanki</strong>
          </SectionHeading>
          <div className={styles.trustGrid}>
            {trustPoints.map(({ icon: Icon, title, copy }) => (
              <article className={styles.trustCard} key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutSection}`} id="doctor-profile" aria-labelledby="meet-doctor-title">
        <div className={`shell ${styles.aboutGrid}`}>
          <div className={styles.portrait}>
            <img src="/assets/doctor-profile.webp" alt="Dr. Amit N. Solanki at Shanti EyeTech" />
          </div>
          <div className={styles.aboutCopy}>
            <Eyebrow>ABOUT THE DOCTOR</Eyebrow>
            <h2 id="meet-doctor-title">Meet <strong>Dr. Amit N. Solanki</strong></h2>
            <p>
              Dr. Amit N. Solanki is a highly respected ophthalmologist with over two decades of dedicated service in the field of eye care. His commitment to clinical excellence and patient well-being has made him a trusted name in advanced surgical treatments.
            </p>
            <blockquote>
              &ldquo;My mission is to deliver world-class eye care with a compassionate approach, ensuring every patient receives the best possible visual outcome.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.specialisationSection}`} aria-labelledby="specialisation-title">
        <div className={`shell ${styles.specialisationGrid}`}>
          <div>
            <Eyebrow>CLINICAL EXPERTISE</Eyebrow>
            <h2 id="specialisation-title">Areas of <strong>Specialisation</strong></h2>
            <ul className={styles.specialisationList}>
              {specialisations.map((item) => (
                <li key={item}><span><Check size={16} strokeWidth={2.5} aria-hidden="true" /></span>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.specialisationVisual}>
            <img src="/assets/home/eye-surgery.webp" alt="Advanced ophthalmic surgical procedure" />
            <div className={styles.excellenceBadge}>
              <BadgeCheck aria-hidden="true" />
              <span><b>20+ Years</b>Surgical Excellence</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.expertiseSection}`} aria-labelledby="expertise-title">
        <div className="shell">
          <SectionHeading eyebrow="CORE SPECIALISATIONS">
            <span id="expertise-title">Expertise Across </span><strong>Advanced Eye Care</strong>
          </SectionHeading>
          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article className={styles.expertiseCard} key={item.title}>
                <img src={item.image} alt="" />
                <div className={styles.expertiseContent}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <Link href={item.href}>Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.educationSection}`} aria-labelledby="education-title">
        <div className="shell">
          <SectionHeading eyebrow="EDUCATION & TRAINING">
            <span id="education-title">A Journey Built on Continuous </span><strong>Learning</strong>
          </SectionHeading>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr><th>Qualification / Training</th><th>Institution</th><th>Details</th></tr>
              </thead>
              <tbody>
                {education.map(([qualification, institution, details]) => (
                  <tr key={qualification}>
                    <th scope="row">{qualification}</th>
                    <td data-label="Institution">{institution}</td>
                    <td data-label="Details">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote className={styles.philosophy}>
            &ldquo;A note on clinical philosophy: True mastery in surgery comes not just from knowing the technique, but from a lifelong dedication to refining it for the benefit of the patient.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contributionSection}`} aria-labelledby="contribution-title">
        <div className="shell">
          <SectionHeading eyebrow="BEYOND CLINICAL PRACTICE">
            <span id="contribution-title">National &amp; International </span><strong>Academic Contributions</strong>
          </SectionHeading>
          <div className={styles.contributionGrid}>
            {contributions.map(({ icon: Icon, title, copy }) => (
              <article className={styles.contributionCard} key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
