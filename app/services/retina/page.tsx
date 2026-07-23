import { ServicePage, type ServiceConfig } from "../../service-page";

const config: ServiceConfig = {
  kind: "retina",
  eyebrow: "EARLY DETECTION & PREVENTION",
  title: "Preserve Your Vision.",
  accent: "Cherish Every Moment.",
  heroText: "Your retina is essential for the vision you rely on every day. Early detection and expert care can help protect it from serious, vision-threatening conditions.",
  heroImage: "/assets/retina-hero.webp",
  metricA: "25+ yrs",
  metricB: "98%",
  metricC: "Essential",
  whyTitle: "Why Patients Choose",
  whyAccent: "Shanthi EyeTech",
  introTitle: "What is",
  introAccent: "Retina?",
  introText: [
    "The retina is the light-sensitive layer at the back of the eye that captures images and sends signals to the brain.",
    "Damage to the retina can lead to partial or total vision loss if not detected and treated early.",
  ],
  introImage: "/assets/retina-scan.webp",
  considerTitle: "When Should You",
  considerAccent: "Consider Evaluation?",
  checks: ["Blurred or distorted vision", "Floaters or dark spots in vision", "Difficulty seeing in low light", "Loss of peripheral (side) vision", "Diabetes or high blood pressure"],
  considerImage: "/assets/retina-exam.webp",
  optionsTitle: "Our Retina Care &",
  optionsAccent: "Treatment Options",
  options: [
    { image: "/assets/retina-treatment.webp", title: "Retina Surgery", tag: "ADVANCED CARE", text: "Advanced surgical solutions for complex retinal conditions." },
    { image: "/assets/retina-medical.webp", title: "Laser Therapy", tag: "TARGETED TREATMENT", text: "Targeted laser treatment to seal leaking retinal tears and reduce swelling." },
    { image: "/assets/retina-medical.webp", title: "Medical Management", tag: "PERSONALISED PLAN", text: "Medications and injections to manage retinal conditions and reduce swelling." },
  ],
  benefitsTitle: "Benefits of Timely",
  benefitsAccent: "Retina Care",
  serviceName: "Retina",
};

export default function RetinaPage() {
  return <ServicePage config={config} />;
}
