import type { ReactNode } from "react";

export type ServiceKind = "cataract" | "classic" | "retina";

export type HeroMetric = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  image: string;
  metrics: HeroMetric[];
};

export type WhyChooseItem = {
  icon: string;
  title: string;
  text: string;
};

export type WhyChooseContent = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  items: WhyChooseItem[];
};

export type IntroContent = {
  eyebrow: string;
  title: string;
  accent: string;
  paragraphs: string[];
  backgroundImage?: string;
  image?: string;
  callout?: {
    title: string;
    text: string;
  };
  lasikImages?: {
    patient: string;
    room: string;
    eye: string;
  };
  retinaImages?: {
    top: string;
    bottom: string;
  };
};

export type EligibilityContent = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  backgroundImage?: string;
  checks: string[];
  note: string;
  image: string;
  warningImages?: { image: string; label: string }[];
};

export type TreatmentOption = {
  image: string;
  title: string;
  tag: string;
  text: string;
  bullets?: string[];
};

export type TreatmentOptionsContent = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  options: TreatmentOption[];
};

export type ComparisonColumn = {
  key: string;
  title: string;
  subtitle?: string;
  image: string;
  highlighted?: boolean;
  popular?: boolean;
  values: string[];
};

export type ComparisonContent = {
  title: string;
  accent: string;
  body: string;
  features: string[];
  columns: ComparisonColumn[];
  noteTitle: string;
  noteText: string;
  cta: string;
};

export type BenefitItem = {
  image: string;
  title: string;
  description?: string;
};

export type BenefitsContent = {
  eyebrow: string;
  title: string;
  accent: string;
  body?: string;
  items: BenefitItem[];
};

export type TestimonialItem = {
  quote: string;
  name: string;
  meta: string;
};

export type TestimonialsContent = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  items: TestimonialItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  eyebrow: string;
  title: string;
  accent: string;
  cardTitle: string;
  cardText: string;
  items: FAQItem[];
};

export type AppointmentContent = {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  image: string;
  serviceLabel: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
  checkTitle?: string;
  checkSubtitle?: string;
};

export type ServicePageContent = {
  kind: ServiceKind;
  navService: "cataract" | "lasik" | "retina";
  hero: HeroContent;
  whyChoose: WhyChooseContent;
  intro: IntroContent;
  eligibility: EligibilityContent;
  treatmentOptions: TreatmentOptionsContent;
  comparison?: ComparisonContent;
  benefits: BenefitsContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  appointment: AppointmentContent;
};

export type IconRenderer = (name: string) => ReactNode;





