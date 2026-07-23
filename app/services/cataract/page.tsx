import { ServicePage, type ServiceConfig } from "../../service-page";

const config: ServiceConfig = {
  kind: "cataract",
  eyebrow: "ADVANCED CATARACT CARE",
  title: "Restore Clear Vision.",
  accent: "Rediscover Everyday Life.",
  heroText: "Modern cataract surgery safely restores your vision, helping you regain independence and enjoy life’s precious moments with clarity and confidence.",
  heroImage: "/assets/cataract-hero.webp",
  metricA: "15K+",
  metricB: "98%",
  metricC: "Same Day",
  whyTitle: "Why Patients Choose",
  whyAccent: "Shanthi EyeTech for Cataract Care",
  introTitle: "What is a",
  introAccent: "Cataract?",
  introText: [
    "A cataract is a clouding of the eye’s natural lens, which lies behind the iris and pupil. This lens works like a camera lens, focusing light onto the retina.",
    "As we age, proteins in the lens can clump together, causing the lens to become cloudy. This cloudiness prevents light from passing through clearly.",
  ],
  introImage: "/assets/cataract-eye.webp",
  considerTitle: "When Should You",
  considerAccent: "Consider Surgery?",
  checks: ["Vision interferes with daily activities", "Glasses no longer improve your vision", "Difficulty reading or driving safely", "Glare or halos around lights at night", "Cataracts are affecting your independence"],
  considerImage: "/assets/cataract-chair.webp",
  optionsTitle: "Our Advanced",
  optionsAccent: "Cataract Care",
  options: [
    { image: "/assets/phoropter-patient.webp", title: "Standard Monofocal", tag: "SINGLE FOCUS LENS", text: "Provides clear vision at one distance with proven reliability." },
    { image: "/assets/procedure-room.webp", title: "Premium Multifocal", tag: "MULTIPLE FOCUS LENS", text: "Enables clear vision at multiple distances with reduced glasses dependency." },
    { image: "/assets/eligibility.webp", title: "Toric Lens", tag: "ASTIGMATISM CORRECTION", text: "Corrects astigmatism while providing clear distance vision." },
  ],
  benefitsTitle: "Benefits of Modern",
  benefitsAccent: "Cataract Surgery",
  serviceName: "Cataract",
};

export default function CataractPage() {
  return <ServicePage config={config} />;
}

