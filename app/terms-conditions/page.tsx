import type { Metadata } from "next";
import { LegalContent, LegalHero, type LegalSection } from "../components/legal";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Shanti Eye Tech",
  },
  description:
    "Read the terms governing use of the Shanti Eye Tech website, including medical-information, appointment and website-use terms.",
  alternates: {
    canonical: "https://www.shantieyetech.com/terms-conditions",
  },
};

const intro = [
  "Welcome to the website of Shanti Eye Tech. These Terms & Conditions govern your access to and use of this website, including its content, appointment-request features, contact forms, and other services made available through the website.",
  "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with these terms, please discontinue use of the website.",
];

const sections: LegalSection[] = [
  {
    id: "purpose-of-this-website",
    number: "1",
    title: "Purpose of This Website",
    blocks: [
      {
        type: "p",
        text: "The Shanti Eye Tech website provides general information about the hospital/clinic, doctors, eye conditions, treatments, services, facilities, and ways to contact or request an appointment with us.",
      },
      {
        type: "p",
        text: "Information available on this website is intended for general informational and educational purposes and should not be considered a substitute for professional medical consultation, examination, diagnosis, or treatment.",
      },
    ],
  },
  {
    id: "medical-information",
    number: "2",
    title: "Medical Information",
    blocks: [
      {
        type: "p",
        text: "Content relating to eye diseases, symptoms, diagnostic procedures, treatments, surgeries, expected outcomes, recovery, or other medical subjects is provided for general awareness.",
      },
      {
        type: "p",
        text: "Medical conditions and treatment outcomes vary between individuals. Information on this website should therefore not be interpreted as:",
      },
      {
        type: "ul",
        items: [
          "A medical diagnosis",
          "A treatment recommendation for a particular individual",
          "A prescription",
          "A guarantee of treatment suitability",
          "A guarantee of treatment outcome or recovery",
          "A replacement for consultation with a qualified medical professional",
        ],
      },
      {
        type: "p",
        text: "A qualified ophthalmologist should evaluate your individual condition before any treatment decision is made.",
      },
    ],
  },
  {
    id: "appointments",
    number: "3",
    title: "Appointments",
    blocks: [
      { type: "p", text: "The website may allow users to submit appointment or consultation requests." },
      {
        type: "p",
        text: "Submitting a request through the website does not necessarily constitute a confirmed appointment. An appointment may be considered confirmed only after confirmation from Shanti Eye Tech or its authorised team. Availability is confirmed separately by the hospital team.",
      },
      {
        type: "p",
        text: "Appointment availability may depend on doctor schedules, operating hours, emergencies, clinical requirements, and other circumstances.",
      },
      {
        type: "p",
        text: "Shanti Eye Tech may need to reschedule or cancel an appointment when reasonably necessary.",
      },
    ],
  },
  {
    id: "eye-emergencies",
    number: "4",
    title: "Eye Emergencies",
    blocks: [
      {
        type: "p",
        text: "The website and its enquiry or appointment forms should not be relied upon for emergency medical assistance.",
      },
      {
        type: "p",
        text: "Symptoms such as sudden loss of vision, severe eye pain, sudden flashes or floaters, eye injury, chemical exposure, or other rapidly developing eye symptoms may require prompt medical evaluation.",
      },
      {
        type: "p",
        text: "For sudden loss of vision, severe eye pain, chemical injury, flashes/floaters with a curtain or shadow, seek urgent medical attention immediately. Please seek appropriate medical attention without waiting for a response through the website.",
      },
    ],
  },
  {
    id: "treatment-information-and-eligibility",
    number: "5",
    title: "Treatment Information and Eligibility",
    blocks: [
      {
        type: "p",
        text: "Descriptions of treatments or procedures available on the website do not mean that every treatment is suitable for every patient.",
      },
      {
        type: "p",
        text: "Suitability for procedures such as cataract surgery, LASIK or other refractive procedures, glaucoma treatment, keratoconus management, or other eye-care interventions depends on individual clinical findings.",
      },
      { type: "p", text: "Final recommendations are made only after appropriate medical evaluation." },
    ],
  },
  {
    id: "treatment-results",
    number: "6",
    title: "Treatment Results",
    blocks: [
      {
        type: "p",
        text: "Images, descriptions, patient experiences, statistics, or other information presented on the website should not be interpreted as a promise or guarantee that another patient will achieve the same outcome.",
      },
      {
        type: "p",
        text: "Individual results may vary depending on the condition, age, medical history, severity of disease, treatment selected, adherence to medical advice, and other clinical factors.",
      },
    ],
  },
  {
    id: "accuracy-of-website-information",
    number: "7",
    title: "Accuracy of Website Information",
    blocks: [
      { type: "p", text: "Shanti Eye Tech aims to maintain accurate and useful information on this website." },
      {
        type: "p",
        text: "However, medical knowledge, technology, treatment approaches, doctor availability, operating hours, pricing, services, and other information may change over time.",
      },
      { type: "p", text: "We may update, modify, correct, or remove website content without prior notice." },
      {
        type: "p",
        text: "For information directly affecting your treatment or appointment, please confirm the details with Shanti Eye Tech.",
      },
    ],
  },
  {
    id: "website-content-and-intellectual-property",
    number: "8",
    title: "Website Content and Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "Unless otherwise stated, the website's original text, branding, graphics, design elements, logos, photographs, videos, and other original materials are owned by or appropriately licensed to Shanti Eye Tech.",
      },
      {
        type: "p",
        text: "Website content may not be copied, reproduced, republished, distributed, modified, or commercially exploited without appropriate permission, except where permitted by applicable law.",
      },
      {
        type: "p",
        text: "Third-party names, trademarks, technologies, or materials remain the property of their respective owners.",
      },
    ],
  },
  {
    id: "acceptable-use",
    number: "9",
    title: "Acceptable Use",
    blocks: [
      { type: "p", text: "You agree not to use this website:" },
      {
        type: "ul",
        items: [
          "For unlawful or fraudulent purposes",
          "To interfere with website security or functionality",
          "To attempt unauthorised access to website systems or data",
          "To introduce malware, viruses, or harmful code",
          "To impersonate another individual",
          "To submit intentionally false or misleading information",
          "To misuse appointment or communication facilities",
        ],
      },
      { type: "p", text: "We reserve the right to restrict access where misuse is reasonably suspected." },
    ],
  },
  {
    id: "third-party-websites-and-services",
    number: "10",
    title: "Third-Party Websites and Services",
    blocks: [
      {
        type: "p",
        text: "The website may contain links or integrations involving third-party services, including maps, social media platforms, communication services, analytics providers, or other external platforms.",
      },
      {
        type: "p",
        text: "Shanti Eye Tech does not control the content, availability, security, or privacy practices of independent third-party services.",
      },
      { type: "p", text: "Accessing third-party services is subject to their respective terms and policies." },
    ],
  },
  {
    id: "privacy",
    number: "11",
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Personal information submitted through this website is handled in accordance with the Shanti Eye Tech Privacy Policy and applicable requirements.",
      },
      {
        type: "p",
        text: "Please review the Privacy Policy for information about how website data may be collected, used, shared, retained, and protected.",
      },
    ],
  },
  {
    id: "limitation-of-website-liability",
    number: "12",
    title: "Limitation of Website Liability",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, Shanti Eye Tech is not responsible for losses arising solely from reliance on general informational website content instead of obtaining appropriate professional medical advice.",
      },
      {
        type: "p",
        text: "Nothing in these Terms & Conditions is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law.",
      },
    ],
  },
  {
    id: "changes-to-these-terms",
    number: "13",
    title: "Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may revise these Terms & Conditions periodically to reflect changes in website functionality, services, policies, operational practices, or applicable requirements.",
      },
      {
        type: "p",
        text: "The revised terms may be published on this page with an updated revision date.",
      },
    ],
  },
  {
    id: "governing-law",
    number: "14",
    title: "Governing Law",
    blocks: [
      { type: "p", text: "These Terms & Conditions are governed by the applicable laws of India." },
      {
        type: "p",
        text: "Subject to applicable law, disputes relating specifically to the use of this website shall be subject to the jurisdiction of the competent courts in Indore, Madhya Pradesh.",
      },
    ],
  },
  {
    id: "contact-us",
    number: "15",
    title: "Contact Us",
    blocks: [
      { type: "p", text: "For questions regarding these Terms & Conditions, please contact:" },
    ],
    contact: {
      name: "Shanti Eye Tech",
      address: "Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj, Indore, Madhya Pradesh 452001",
      email: "info@shantieyetech.com",
    },
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          eyebrow="LEGAL & COMPLIANCE"
          title="Terms & Conditions"
          description="The terms that govern your access to and use of the Shanti Eye Tech website, its content, and its appointment features."
          lastUpdated="August 2026"
        />
        <LegalContent intro={intro} sections={sections} />
      </main>
      <Footer />
    </>
  );
}
