import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "Cataract Surgery in Indore | Shanti Eye Tech",
  },
  description:
    "Learn about cataract evaluation, IOL lens options and cataract surgery at Shanti Eye Tech in Indore. Treatment suitability is determined after an eye examination.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/cataract",
  },
};

const content = servicePages.cataract;

const medicalProcedureJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Cataract Surgery",
  description: content.hero.text,
  procedureType: "https://schema.org/SurgicalProcedure",
  relevantSpecialty: "Ophthalmic",
  performer: {
    "@type": "Physician",
    name: "Dr. Amit N Solanki",
    medicalSpecialty: ["Cataract Surgery", "Glaucoma", "Refractive Surgery"],
    hasCredential: ["MBBS", "DOMS", "DNB Ophthalmology", "FAECS"],
  },
  location: {
    "@type": "MedicalClinic",
    name: "Shanti Eye Tech",
    url: "https://www.shantieyetech.com/",
    telephone: "+91-9179191939",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CataractPage() {
  return (
    <>
      <ServicePage content={content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
