import type { Metadata } from "next";
import {
  ContactDetails,
  ContactFormSection,
  ContactHero,
} from "../components/contact";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Shanti Eye Tech | Eye Hospital in Indore",
  },
  description:
    "Contact Shanti Eye Tech in Indore to request an eye consultation. Find our address, phone numbers, email and clinic hours.",
  alternates: {
    canonical: "https://www.shantieyetech.com/contact",
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
  hasMap: "https://www.google.com/maps/place/Dr.+Amit+Solanki+Eye+Specialist+Shanti+EyeTech+Best+Eye+Hospital+in+Indore/@22.7229045,75.8843484,655m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3962fd5037568439:0xb4160c93774cf232!8m2!3d22.7228996!4d75.8869233!16s%2Fg%2F11fn98lrpr",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactFormSection />
      </main>
      <Footer home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
      />
    </>
  );
}
