import { ServicePage, type ServiceConfig } from "../../service-page";

const config: ServiceConfig = {
  kind: "lasik",
  eyebrow: "BLADE-FREE LASIK",
  title: "Freedom From Glasses",
  accent: "Starts Here",
  heroText: "Experience the clarity of life without glasses or contact lenses. Our advanced blade-free LASIK technology delivers precise, predictable results with quick recovery.",
  heroImage: "/assets/lasik-hero.webp",
  metricA: "25K+",
  metricB: "98%",
  metricC: "24hrs",
  whyTitle: "Why Patients Choose",
  whyAccent: "Shanthi EyeTech for LASIK",
  introTitle: "What is",
  introAccent: "LASIK?",
  introText: [
    "LASIK (Laser-Assisted In Situ Keratomileusis) is one of the most advanced and popular laser vision correction procedures available today.",
    "Using state-of-the-art femtosecond laser technology, the procedure creates a thin corneal flap, then precisely reshapes the underlying corneal tissue to correct your vision.",
  ],
  introImage: "/assets/lasik-eye.webp",
  considerTitle: "Is LASIK",
  considerAccent: "Right for You?",
  checks: ["At least 18 years of age", "Stable vision prescription", "Healthy eyes free from disease", "Tired of wearing glasses or contact lenses", "Myopia, hyperopia, or astigmatism"],
  considerImage: "/assets/eligibility.webp",
  optionsTitle: "Conditions LASIK",
  optionsAccent: "Can Correct",
  options: [
    { image: "/assets/slit-lamp.webp", title: "Myopia", tag: "NEARSIGHTEDNESS", text: "Difficulty seeing distant objects clearly. LASIK flattens the cornea to correct focus." },
    { image: "/assets/procedure-room.webp", title: "Hyperopia", tag: "FARSIGHTEDNESS", text: "Difficulty seeing nearby objects. LASIK steepens the cornea for better near vision." },
    { image: "/assets/phoropter-patient.webp", title: "Astigmatism", tag: "BLURRED VISION", text: "Irregular corneal shape causing blurred vision. LASIK smooths the cornea." },
  ],
  benefitsTitle: "Benefits of",
  benefitsAccent: "LASIK Surgery",
  serviceName: "LASIK",
};

export default function LasikPage() {
  return <ServicePage config={config} />;
}

