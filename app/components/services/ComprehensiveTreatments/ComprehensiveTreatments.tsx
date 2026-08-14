import Link from "next/link";
import { Aperture, ArrowRight, Eye, Focus, Scan, ScanEye } from "lucide-react";
import styles from "./styles.module.css";

const treatments = [
  {
    title: "Freedom From Glasses",
    desc: "Vision-correction options designed to reduce dependence on spectacles or contact lenses for suitable patients.",
    image: "/assets/treatment-overview/freedom-glasses.png",
    href: "/services/lasik",
    icon: Scan,
  },
  {
    title: "Cataract Care",
    desc: "Evaluation and treatment for cataracts that can cause cloudy vision, glare and progressive reduction in visual clarity.",
    image: "/assets/treatment-overview/cataract.png",
    href: "/services/cataract",
    icon: Aperture,
  },
  {
    title: "Glaucoma Care",
    desc: "Evaluation, monitoring and treatment guidance for glaucoma, a group of conditions that can damage the optic nerve.",
    image: "/assets/treatment-overview/glaucoma.png",
    href: "/services/glaucoma",
    icon: Eye,
  },
  {
    title: "Keratoconus Care",
    desc: "Evaluation and management of keratoconus, a progressive condition in which the cornea becomes thinner and develops a cone-like shape.",
    image: "/assets/treatment-overview/keratoconus.png",
    href: "/services/keratoconus",
    icon: Focus,
  },
  {
    title: "Retina Care",
    desc: "Retinal evaluation and guidance for conditions affecting the retina and the vision it helps produce.",
    image: "/assets/treatment-overview/retina.png",
    href: "/services/retina",
    icon: ScanEye,
  },
  {
    title: "Squint Treatment",
    desc: "Expert diagnosis and surgical correction of squint (strabismus) for aligned vision and improved eye coordination.",
    image: "/assets/treatment-overview/squint-treatment.png",
    href: "/services/squint",
    icon: Eye,
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

        <div className={styles.grid}>
          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <Link href={treatment.href} className={styles.card} key={treatment.title} aria-label={`Explore ${treatment.title}`}>
                <img src={treatment.image} alt="" />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                  <span className={styles.exploreBtn}>
                    Explore More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
