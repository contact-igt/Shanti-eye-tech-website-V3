import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "LASIK, ICL & PRELEX in Indore | Shanti Eye Tech",
  },
  description:
    "Explore laser vision correction, ICL and PRELEX options at Shanti Eye Tech in Indore. Suitability is determined after a comprehensive eye examination.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/lasik",
  },
};

const content = servicePages.lasik;

const clinicLocation = {
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
};

const performer = {
  "@type": "Physician",
  name: "Dr. Amit N Solanki",
  medicalSpecialty: ["Cataract Surgery", "Glaucoma", "Refractive Surgery"],
  hasCredential: ["MBBS", "DOMS", "DNB Ophthalmology", "FAECS"],
};

// One MedicalProcedure entry per procedure actually offered on this page —
// confirmed with the clinic: Touchless LASIK, SMILE, PRK, ICL and PRELEX.
const medicalProcedureJsonLd = content.treatmentOptions.options.map((option) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: option.title,
  description: option.text,
  relevantSpecialty: "Ophthalmic",
  performer,
  location: clinicLocation,
}));

export default function LasikPage() {
  return (
    <>
      <ServicePage content={content} />
      {medicalProcedureJsonLd.map((entry) => (
        <script
          key={entry.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
