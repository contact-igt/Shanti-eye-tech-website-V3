import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./styles.module.css";
import { TreatmentsSlider } from "./TreatmentsSlider";

export type TreatmentItem = {
  title: string;
  desc: string;
  image: string;
  href: string;
};

const treatments: TreatmentItem[] = [
  {
    title: "Freedom From Glasses",
    desc: "Touchless LASIK, ICL and PRELEX — advanced vision-correction options to reduce or eliminate dependence on glasses and contact lenses. Suitability and visual outcomes depend on a detailed eye examination.",
    image: "/assets/treatment-overview/freedom-glasses.png",
    href: "/services/lasik#service-banner",
  },
  {
    title: "Cataract Care",
    desc: "Evaluation and treatment for cataracts that can cause cloudy vision, glare and progressive reduction in visual clarity.",
    image: "/assets/treatment-overview/cataract.png",
    href: "/services/cataract#service-banner",
  },
  {
    title: "Glaucoma Care",
    desc: "Evaluation, monitoring and treatment guidance for glaucoma, a group of conditions that can damage the optic nerve.",
    image: "/assets/treatment-overview/glaucoma.png",
    href: "/services/glaucoma#service-banner",
  },
  {
    title: "Keratoconus Care",
    desc: "Evaluation and management of keratoconus, a progressive condition in which the cornea becomes thinner and develops a cone-like shape. Treatment depends on corneal findings and whether progression is present.",
    image: "/assets/treatment-overview/keratoconus.png",
    href: "/services/keratoconus#service-banner",
  },
  {
    title: "Retina Care",
    desc: "Evaluation and management of retinal conditions, with treatment recommendations based on clinical findings.",
    image: "/assets/treatment-overview/retina.png",
    href: "/services/retina#service-banner",
  },
  // Squint Treatment temporarily unlisted — replaced by Pediatric Eye Care
  // {
  //   title: "Squint Treatment",
  //   desc: "Expert diagnosis and surgical correction of squint (strabismus) for aligned vision and improved eye coordination.",
  //   image: "/assets/treatment-overview/squint-treatment.png",
  //   href: "/services/squint#service-banner",
  // },
  {
    title: "Pediatric Eye Care",
    desc: "Comprehensive eye examinations and guidance for children and teenagers.",
    image: "/assets/pediatric/options1.png",
    href: "/services/pediatric-eye-care#service-banner",
  },
];

export function ComprehensiveTreatments() {
  return (
    <section className={styles.section} id="treatments" aria-labelledby="comprehensive-treatments-title">
      <div className={styles.shell}>
        <header className={styles.heading}>
          <h2 id="comprehensive-treatments-title">Comprehensive Treatments</h2>
          <p>
            We provide specialized care for a wide spectrum of ocular conditions using state-of-the-art technology and evidence-based clinical practices.
          </p>
        </header>

        {/* Desktop grid (>992px) */}
        <div className={`${styles.grid} ${styles.desktopGrid}`}>
          {treatments.map((treatment) => (
              <Link href={treatment.href} className={styles.card} key={treatment.title} aria-label={`Explore ${treatment.title}`}>
                <img src={treatment.image} alt="" />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                  <span className={styles.exploreBtn}>
                    Explore More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
          ))}
        </div>

        {/* Mobile/tablet slider (<=992px) */}
        <div className={styles.mobileSlider}>
          <TreatmentsSlider treatments={treatments} />
        </div>
      </div>
    </section>
  );
}
