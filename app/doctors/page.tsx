import type { Metadata } from "next";
import { DoctorHero } from "../components/doctors/DoctorHero";
import { DoctorProfileSections } from "../components/doctors/DoctorProfileSections";
import { AboutMilestones } from "../components/about/AboutMilestones";
import { AppointmentSection, Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: {
    absolute: "Dr. Amit N. Solanki | Eye Surgeon in Indore",
  },
  description:
    "Meet Dr. Amit N. Solanki, Cataract, Glaucoma and Refractive Surgeon at Shanti Eye Tech in Indore. MBBS, DOMS, DNB, FAECS.",
  alternates: {
    canonical: "https://www.shantieyetech.com/doctors",
  },
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Amit N Solanki",
  jobTitle: "Chief Ophthalmologist & Medical Director",
  medicalSpecialty: ["Cataract Surgery", "Glaucoma", "Refractive Surgery"],
  hasCredential: ["MBBS", "DOMS", "DNB Ophthalmology", "FAECS"],
  telephone: "+91-9179191939",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj",
    addressLocality: "Indore",
    addressRegion: "MP",
    postalCode: "452001",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "MedicalClinic",
    name: "Shanti Eye Tech",
    url: "https://www.shantieyetech.com/",
  },
};

export default function DoctorsPage() {
  return (
    <>
      <Header active="doctors" />
      <main>
        <DoctorHero />
        <DoctorProfileSections />
        <AboutMilestones />
        <div className="home-page">
          <AppointmentSection withForm={false} kind="doctor" />
        </div>
      </main>
      <Footer home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
    </>
  );
}
