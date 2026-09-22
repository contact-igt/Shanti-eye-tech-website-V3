import type { Metadata } from "next";
import { AboutHero } from "../components/about/AboutHero";
import { AboutStory } from "../components/about/AboutStory";
import { AboutPhilosophy } from "../components/about/AboutPhilosophy";
import { AboutLeadership } from "../components/about/AboutLeadership";
import { AboutCapabilities } from "../components/about/AboutCapabilities";
import { AboutWhyChoose } from "../components/about/AboutWhyChoose";
import { AboutImpactBand } from "../components/about/AboutImpactBand";
import { AboutFacilities } from "../components/about/AboutFacilities";
import { AppointmentSection, Footer, Header } from "../site-components";

const CANONICAL_URL = "https://www.shantieyetech.com/about";

export const metadata: Metadata = {
  title: {
    absolute: "About Shanti Eye Tech | Eye Hospital in Indore",
  },
  description:
    "Learn about Shanti Eye Tech in Indore, its patient-first approach, advanced eye-care technology and Dr. Amit N. Solanki’s ophthalmology expertise.",
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
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Surgery" },
    { "@type": "MedicalProcedure", name: "Glaucoma Treatment" },
    { "@type": "MedicalProcedure", name: "Retina Care" },
    { "@type": "MedicalProcedure", name: "Vision Correction" },
    { "@type": "MedicalProcedure", name: "Keratoconus Care" },
    { "@type": "MedicalProcedure", name: "Pediatric Eye Care" },
  ],
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Amit N Solanki",
  jobTitle: "Chief Ophthalmologist & Medical Director",
  medicalSpecialty: "Ophthalmic",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "B.J. Medical College, Ahmedabad" },
    { "@type": "CollegeOrUniversity", name: "M. & J. Western Regional Institute of Ophthalmology" },
    { "@type": "CollegeOrUniversity", name: "Aravind Eye Hospital" },
    { "@type": "CollegeOrUniversity", name: "Aravind Eye Care Hospital, Coimbatore" },
  ],
  worksFor: {
    "@type": "MedicalClinic",
    name: "Shanti Eye Tech",
    url: "https://www.shantieyetech.com/",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main className="about-page">
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <AboutLeadership />
        <AboutCapabilities />
        <AboutWhyChoose />
        <AboutImpactBand />
        <AboutFacilities />
        <div className="home-page">
          <AppointmentSection />
        </div>
      </main>
      <Footer home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
    </>
  );
}
