import type { Metadata } from "next";
import { ComprehensiveTreatments } from "../components/services/ComprehensiveTreatments";
import { OverviewWhyFaq } from "../components/services/OverviewWhyFaq";
import { TreatmentsOverviewHero } from "../components/services/TreatmentsOverviewHero";
import { AppointmentSection, Footer, Header } from "../site-components";

const CANONICAL_URL = "https://www.shantieyetech.com/services";

export const metadata: Metadata = {
  title: {
    absolute: "Eye Treatments in Indore | Shanti Eye Tech",
  },
  description:
    "Explore cataract, glaucoma, retina, keratoconus, paediatric eye care and vision-correction options at Shanti Eye Tech in Indore.",
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Shanti Eye Tech",
  url: "https://www.shantieyetech.com/",
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
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Care" },
    { "@type": "MedicalProcedure", name: "Glaucoma Care" },
    { "@type": "MedicalProcedure", name: "Retina Care" },
    { "@type": "MedicalProcedure", name: "Freedom From Glasses" },
    { "@type": "MedicalProcedure", name: "Keratoconus Care" },
    { "@type": "MedicalProcedure", name: "Pediatric Eye Care" },
  ],
};

export default function ServicesOverviewPage() {
  return (
    <>
      <Header active="services" />
      <main className="services-overview-page">
        <TreatmentsOverviewHero />
        <ComprehensiveTreatments />
        <OverviewWhyFaq />
        <div className="home-page">
          <AppointmentSection withForm={false} kind="overview" />
        </div>
      </main>
      <Footer home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
      />
    </>
  );
}
