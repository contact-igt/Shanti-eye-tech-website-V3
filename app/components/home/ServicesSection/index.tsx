import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/app/site-components";
import styles from "./ServicesSection.module.css";

const services = [
  [
    "01",
    "Advanced Cataract Surgery",
    "Evaluation and treatment for cataracts that can cause cloudy vision, glare and progressive reduction in visual clarity.",
    "/services/cataract",
  ],
  [
    "02",
    "Retina Care",
    "Dilated retinal examination to detect and diagnose retinal diseases, with guidance for further diagnostic procedures and treatment options.",
    "/services/retina",
  ],
  [
    "03",
    "Freedom From Glasses",
    "Vision-correction options designed to reduce dependence on spectacles or contact lenses for suitable patients. Suitability and visual outcomes depend on a detailed eye examination.",
    "/services/lasik",
  ],
  [
    "04",
    "Glaucoma Management",
    "Evaluation, monitoring and treatment guidance for glaucoma, a group of conditions that can damage the optic nerve.",
    "/services/glaucoma",
  ],
  // Squint Treatment temporarily unlisted — replaced by Pediatric Eye Care
  // [
  //   "05",
  //   "Squint Treatment",
  //   "Expert diagnosis and surgical correction of squint (strabismus) for aligned vision and improved eye coordination.",
  //   "/services/squint",
  // ],
  [
    "05",
    "Pediatric Eye Care",
    "Eye examinations and care focused on healthy vision and proper eye development in children.",
    "/services/pediatric-eye-care",
  ],
  [
    "06",
    "Keratoconus Care",
    "Evaluation and management of keratoconus, a progressive condition in which the cornea becomes thinner and develops a cone-like shape. Treatment depends on corneal findings and whether progression is present.",
    "/services/keratoconus",
  ],
];

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <g key="0">
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M4 8.5 6.5 6M20 8.5 17.5 6M4 15.5 6.5 18M20 15.5 17.5 18" />
    </g>,
    <g key="1">
      <path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </g>,
    <g key="2">
      <circle cx="8" cy="13" r="3.5" />
      <circle cx="16" cy="13" r="3.5" />
      <path d="M11.5 13h1M4.5 13H3M20.5 13H19M8 9.5V8M16 9.5V8" />
    </g>,
    <g key="3">
      <path d="M12 3c-1.5 3-5.5 5.8-5.5 10a5.5 5.5 0 0 0 11 0c0-4.2-4-7-5.5-10Z" />
    </g>,
    <g key="4">
      <path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </g>,
    <g key="5">
      <path d="M12 4c0 8-6 12-6 12h12S12 12 12 4Z" />
      <path d="M9 16c0 1.66 1.34 3 3 3s3-1.34 3-3" />
    </g>,
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[index]}
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section className={`section services-section ${styles.servicesSection}`} id="services">
      <div className="shell services-shell">
        <div className="services-header">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Comprehensive Eye Care"
            accent="For Every Need"
            body="From routine eye exams to complex surgical procedures, our team of expert ophthalmologists provides personalized care using the latest technology."
            align="left"
          />
        </div>
        <div className="service-grid">
          {services.map(([number, title, text, href], index) => (
            <Link
              className="service-card"
              href={`${href}#service-banner`}
              key={title}
              scroll
            >
              <span className="service-number">{number}</span>
              <span
                className={`service-icon service-icon-${index + 1}`}
                aria-hidden="true"
              >
                <ServiceIcon index={index} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span
                className="service-learn-more"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                Learn More <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
