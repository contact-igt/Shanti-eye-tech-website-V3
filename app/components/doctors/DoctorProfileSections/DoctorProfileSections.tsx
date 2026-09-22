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
  { icon: Award, title: "20+ Years", copy: "Dedicated to the field of ophthalmology since 2003." },
  { icon: Eye, title: "Cataract Expertise", copy: "Advanced training in phacoemulsification and modern cataract surgery." },
  { icon: Stethoscope, title: "Glaucoma Care", copy: "Specialized training in glaucoma diagnosis, management and surgical care." },
  { icon: Microscope, title: "LASIK Training", copy: "Trained in LASIK laser surgery for refractive vision correction." },
  { icon: Hospital, title: "Clinical Training", copy: "Further ophthalmic training and Senior Residency at Aravind Eye Hospital, Tamil Nadu." },
  { icon: GraduationCap, title: "Academic Exposure", copy: "Invited as international guest faculty at major ophthalmology congresses." },
  { icon: BookOpen, title: "Scientific Contributions", copy: "Guest faculty and presenter at national and international ophthalmology conferences." },
  { icon: Trophy, title: "Recognised Academic and Clinical Contributions", copy: "Recognized for contributions in glaucoma, cataract surgery and ophthalmic research." },
];

const specialisations = [
  "Cataract Surgery",
  "Advanced Phacoemulsification",
  "Glaucoma Diagnosis",
  "Glaucoma Management",
  "Refractive Surgery",
  "LASIK Vision Correction",
  "Comprehensive Eye Evaluation",
];

const expertise = [
  {
    label: "SURGERY",
    title: "Cataract Surgery",
    copy: "Advanced cataract evaluation and surgical care with specialised training in phacoemulsification.",
    tags: ["Phaco Surgery", "Cataract Care"],
    buttonLabel: "Explore Cataract Care",
    image: "/assets/cataract/cataract-hero.webp",
    href: "/services/cataract#service-banner",
  },
  {
    label: "TREATMENT",
    title: "Glaucoma Care",
    copy: "Evaluation and management of glaucoma with specialised training in glaucoma diagnostics and treatment.",
    tags: ["Diagnosis", "Management"],
    buttonLabel: "Explore Glaucoma Care",
    image: "/assets/retina/retina-exam.webp",
    href: "/services/glaucoma#service-banner",
  },
  {
    label: "REFRACTIVE",
    title: "Refractive & LASIK Surgery",
    copy: "Refractive vision correction backed by dedicated LASIK surgical training.",
    tags: ["LASIK", "Vision Correction"],
    buttonLabel: "Explore LASIK",
    image: "/assets/lasik/lasik-procedure.webp",
    href: "/services/lasik#service-banner",
  },
];

const education = [
  ["MBBS", "B.J. Medical College, New Civil Hospital, Ahmedabad"],
  ["DOMS – Diploma in Ophthalmology", "M. & J. Western Regional Institute of Ophthalmology, Civil Hospital, Ahmedabad"],
  ["DNB Ophthalmology", "Aravind Eye Hospital & Postgraduate Institute of Ophthalmology, Tamil Nadu"],
  ["Phacoemulsification & Glaucoma Training", "Aravind Eye Care Hospital, Coimbatore"],
  ["LASIK Surgical Training", "Vadodara, Gujarat"],
];

const contributions = [
  {
    icon: Presentation,
    title: "International Guest Faculty",
    copy: "Invited as International Guest Faculty at the World Glaucoma Congress in Kuala Lumpur, Malaysia, and the Asia-Australia Congress in Thailand.",
  },
  {
    icon: GraduationCap,
    title: "Training & Knowledge Sharing",
    copy: "Associated with Alina Vision International Foundation and involved in training foreign doctors in Hanoi, Vietnam.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Faculty",
    copy: "Delivered scientific talks and presentations as guest faculty at national and international ophthalmology conferences.",
  },
];

function SectionHeading({
  eyebrow,
  support,
  children,
}: {
  eyebrow: string;
  support?: string;
  children: React.ReactNode;
}) {
  return (
    <header className={styles.sectionHeading}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
      {support ? <p className={styles.sectionSupport}>{support}</p> : null}
    </header>
  );
}

export function DoctorProfileSections() {
  return (
    <>
      <section className={`${styles.section} ${styles.trustSection}`} aria-labelledby="doctor-trust-title">
        <div className="shell">
          <SectionHeading
            eyebrow="WHY CONSULT DR. AMIT SOLANKI"
            support="Decades of clinical experience, advanced surgical training and a patient-focused approach to eye care."
          >
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
            <img src="/assets/meet_doctor.jpg" alt="Dr. Amit N. Solanki at Shanti Eye Tech" />
          </div>
          <div className={styles.aboutCopy}>
            <Eyebrow>ABOUT THE DOCTOR</Eyebrow>
            <h2 id="meet-doctor-title">Meet <strong>Dr. Amit N. Solanki</strong></h2>
            <p>
              Dr. Amit N. Solanki is the Director of Shanti Eye Tech and a Cataract, Glaucoma &amp; Refractive Surgeon, practising ophthalmology since 2003.
            </p>
            <p>
              His clinical journey includes advanced training at leading ophthalmic institutions, with specialised expertise in phaco cataract surgery, glaucoma diagnosis and management, and LASIK refractive surgery.
            </p>
            <div className={styles.highlightBox}>
              <span className={styles.highlightIcon}>
                <Award aria-hidden="true" />
              </span>
              <div>
                <strong>20+ Years of Ophthalmology Experience</strong>
                <span>Combining clinical experience with advanced surgical training and personalised patient care.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.specialisationSection}`} aria-labelledby="specialisation-title">
        <div className={`shell ${styles.specialisationGrid}`}>
          <div>
            <Eyebrow>CLINICAL EXPERTISE</Eyebrow>
            <h2 id="specialisation-title">Areas of <strong>Specialisation</strong></h2>
            <p className={styles.specialisationIntro}>
              Dr. Amit Solanki&rsquo;s training and clinical experience include:
            </p>
            <ul className={styles.specialisationList}>
              {specialisations.map((item) => (
                <li key={item}><span><Check size={16} strokeWidth={2.5} aria-hidden="true" /></span>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.specialisationVisual}>
            <img src="/assets/specialization_doctor.jpg" alt="Dr. Amit N. Solanki providing specialised eye care" />
            <div className={styles.excellenceBadge}>
              <BadgeCheck aria-hidden="true" />
              <span><b>20+ Years</b>Clinical Experience</span>
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
                  <div className={styles.expertiseTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.expertiseTag}>{tag}</span>
                    ))}
                  </div>
                  <Link href={item.href}>{item.buttonLabel}</Link>
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
                <tr><th>Qualification / Training</th><th>Institution / Location</th></tr>
              </thead>
              <tbody>
                {education.map(([qualification, institution]) => (
                  <tr key={qualification}>
                    <th scope="row">{qualification}</th>
                    <td data-label="Institution / Location">{institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote className={styles.philosophy}>
            &ldquo;A note on clinical philosophy: Every eye and every patient&rsquo;s needs are different. Care begins with a detailed evaluation, followed by treatment recommendations based on the patient&rsquo;s individual eye condition and visual requirements.&rdquo;
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
