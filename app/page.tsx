import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Calendar, Eye, Stethoscope, ShieldCheck, Star, Target } from "lucide-react";
import { CountUp } from "./client";
import { HeroBanner } from "./components/home/HeroBanner";
import { TrustStrip } from "./components/home/TrustStrip";
import { NumbersSection } from "./components/home/NumbersSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { TechnologySection } from "./components/home/TechnologySection";
import { DoctorSection } from "./components/home/DoctorSection";
import { CommitmentSection } from "./components/home/CommitmentSection";
import {
  AppointmentSection,
  Eyebrow,
  FAQ,
  FeatureGrid,
  Footer,
  Header,
  SectionHeading,
  Testimonials,
} from "./site-components";

export const dynamic = "force-dynamic";

const CANONICAL_URL = "https://www.shantieyetech.com/";

export const metadata: Metadata = {
  title: "Shanti Eye Tech | Eye Hospital in Indore",
  description:
    "Shanti Eye Tech in Indore provides cataract, glaucoma, retina, vision-correction, keratoconus and paediatric eye care led by Dr. Amit N. Solanki.",
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Shanti Eye Tech",
  url: CANONICAL_URL,
  telephone: "+91-9179191939",
  email: "info@shantieyetech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.7228996,
    longitude: 75.8869233,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  medicalSpecialty: "Ophthalmic",
  physician: {
    "@type": "Physician",
    name: "Dr. Amit N Solanki",
    jobTitle: "Chief Ophthalmologist & Medical Director",
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Surgery" },
    { "@type": "MedicalProcedure", name: "Glaucoma Treatment" },
    { "@type": "MedicalProcedure", name: "Retina Care" },
    { "@type": "MedicalProcedure", name: "Vision Correction" },
    { "@type": "MedicalProcedure", name: "Keratoconus Care" },
    { "@type": "MedicalProcedure", name: "Pediatric Eye Care" },
  ],
};

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main className="home-page">
        <HeroBanner />
        <TrustStrip />
        <NumbersSection />
        <ServicesSection />
        <TechnologySection />
        <DoctorSection />
        <CommitmentSection />

        <div id="testimonials"><Testimonials title="Transforming Lives," subtitle="One Vision at a Time" /></div>
        <FAQ />
        <AppointmentSection />
      </main>
      <Footer home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}

