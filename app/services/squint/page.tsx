import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "Squint Evaluation & Binocular Vision Care in Indore | Shanti Eye Tech",
  },
  description:
    "Learn about squint evaluation, binocular vision assessment and orthoptic exercises at Shanti Eye Tech in Indore.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/squint",
  },
};

const content = servicePages.squint;

const medicalProcedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Squint & Binocular Vision Evaluation",
  description: content.hero.text,
  procedureType: "https://schema.org/NonSurgicalProcedure",
  relevantSpecialty: "Ophthalmic",
  performer: {
    "@type": "Physician",
    name: "Dr. Amit N Solanki",
    medicalSpecialty: ["Squint Evaluation", "Pediatric Ophthalmology"],
    hasCredential: ["MBBS", "DOMS", "DNB Ophthalmology", "FAECS"],
  },
  location: {
    "@type": "MedicalClinic",
    name: "Shanti Eye Tech",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj",
      addressLocality: "Indore",
      addressRegion: "MP",
      postalCode: "452001",
      addressCountry: "IN",
    },
  },
};

export default function SquintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureJsonLd) }}
      />
      <ServicePage content={content} />
    </>
  );
}

