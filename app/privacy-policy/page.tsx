import type { Metadata } from "next";
import { LegalContent, LegalHero, type LegalSection } from "../components/legal";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Shanti EyeTech collects, uses, and protects the personal information you share with us online.",
};

const intro = [
  "At Shanti EyeTech, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how information may be collected, used, stored, and protected when you visit our website, submit an enquiry, request an appointment, or communicate with us through the contact options available on the website.",
  "By using this website, you acknowledge the practices described in this Privacy Policy.",
];

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    number: "1",
    title: "Information We May Collect",
    blocks: [
      {
        type: "p",
        text: "When you use our website or contact us, we may collect information that you voluntarily provide, such as:",
      },
      {
        type: "ul",
        items: [
          "Name",
          "Phone number",
          "Email address",
          "Appointment or consultation details",
          "Information submitted through enquiry or contact forms",
          "Messages or information you choose to provide while communicating with us",
        ],
      },
      {
        type: "p",
        text: "We may also automatically collect limited technical information such as browser type, device type, IP address, pages visited, referring source, and general website usage information through cookies, analytics tools, and similar technologies.",
      },
      {
        type: "p",
        text: "Please avoid submitting detailed or sensitive medical information through general website enquiry forms unless specifically requested through an appropriate channel.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    number: "2",
    title: "How We Use Your Information",
    blocks: [
      { type: "p", text: "Information collected through the website may be used to:" },
      {
        type: "ul",
        items: [
          "Respond to your enquiries",
          "Process appointment or consultation requests",
          "Contact you regarding your request",
          "Provide information about our eye-care services",
          "Improve our website and patient experience",
          "Understand website usage and performance",
          "Maintain website security and prevent misuse",
          "Comply with applicable legal or regulatory requirements",
        ],
      },
      { type: "p", text: "We do not sell or rent your personal information to third parties." },
    ],
  },
  {
    id: "health-and-medical-information",
    number: "3",
    title: "Health and Medical Information",
    blocks: [
      {
        type: "p",
        text: "Information submitted through this website does not automatically form a complete medical record and should not be considered a substitute for an in-person clinical consultation.",
      },
      {
        type: "p",
        text: "Any medical or health information collected as part of an actual consultation, diagnosis, treatment, or patient-care process may be handled separately in accordance with applicable healthcare, confidentiality, record-keeping, and data-protection requirements.",
      },
    ],
  },
  {
    id: "appointment-and-contact-forms",
    number: "4",
    title: "Appointment and Contact Forms",
    blocks: [
      {
        type: "p",
        text: "When you submit an appointment request or contact form, the information provided may be used by Shanti EyeTech and authorised personnel to contact you and assist with your enquiry.",
      },
      {
        type: "p",
        text: "Submitting an online appointment request does not necessarily mean that an appointment has been confirmed. Confirmation may be provided separately by the hospital or clinic team.",
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    number: "5",
    title: "Cookies and Analytics",
    blocks: [
      {
        type: "p",
        text: "Our website may use cookies and similar technologies to support website functionality and understand how visitors interact with the site.",
      },
      {
        type: "p",
        text: "These technologies may collect information such as pages visited, time spent on the website, device or browser information, and traffic sources.",
      },
      {
        type: "p",
        text: "Where third-party analytics or advertising services are used, those providers may process information according to their respective privacy practices and applicable law.",
      },
    ],
  },
  {
    id: "sharing-of-information",
    number: "6",
    title: "Sharing of Information",
    blocks: [
      { type: "p", text: "We may share personal information only when reasonably necessary with:" },
      {
        type: "ul",
        items: [
          "Authorised Shanti EyeTech personnel",
          "Website hosting and technology providers",
          "Appointment, communication, analytics, or other service providers supporting website operations",
          "Government, regulatory, judicial, or law-enforcement authorities when required by applicable law",
        ],
      },
      {
        type: "p",
        text: "Service providers are expected to process information only for the purposes for which it is provided and subject to appropriate safeguards.",
      },
    ],
  },
  {
    id: "data-security",
    number: "7",
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We take reasonable administrative and technical measures to protect personal information against unauthorised access, misuse, alteration, disclosure, or loss.",
      },
      {
        type: "p",
        text: "However, no website, internet transmission, or electronic storage system can be guaranteed to be completely secure. Users should therefore exercise reasonable care when providing information online.",
      },
    ],
  },
  {
    id: "data-retention",
    number: "8",
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "Personal information may be retained for as long as reasonably necessary to respond to enquiries, provide requested services, maintain appropriate records, resolve disputes, meet operational requirements, or comply with applicable legal obligations.",
      },
      {
        type: "p",
        text: "Information that is no longer required may be deleted, anonymised, or otherwise handled in accordance with applicable requirements.",
      },
    ],
  },
  {
    id: "your-choices-and-rights",
    number: "9",
    title: "Your Choices and Rights",
    blocks: [
      {
        type: "p",
        text: "Subject to applicable law, you may contact us regarding personal information you have provided through the website, including requests relating to access, correction, updating, withdrawal of consent where applicable, or deletion.",
      },
      {
        type: "p",
        text: "Certain information may need to be retained where required for legitimate healthcare, legal, regulatory, or record-keeping purposes.",
      },
    ],
  },
  {
    id: "third-party-links",
    number: "10",
    title: "Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "Our website may contain links to third-party websites or services. Shanti EyeTech is not responsible for the privacy practices, security, or content of external websites.",
      },
      {
        type: "p",
        text: "We recommend reviewing the privacy policy of any third-party website before providing personal information.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    number: "11",
    title: "Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Information concerning children should be submitted by, or with the involvement of, a parent or legal guardian where appropriate.",
      },
      {
        type: "p",
        text: "If we become aware that personal information relating to a child has been submitted inappropriately, reasonable steps may be taken to address the matter in accordance with applicable requirements.",
      },
    ],
  },
  {
    id: "medical-disclaimer",
    number: "12",
    title: "Medical Disclaimer",
    blocks: [
      {
        type: "p",
        text: "Information available on the Shanti EyeTech website is provided for general educational and informational purposes only.",
      },
      {
        type: "p",
        text: "Website content should not be used as a substitute for professional medical advice, examination, diagnosis, or treatment. Treatment recommendations can vary according to each patient's clinical condition and should be determined after evaluation by a qualified ophthalmologist.",
      },
      {
        type: "p",
        text: "If you are experiencing an eye emergency or sudden loss of vision, seek appropriate medical attention promptly rather than relying on website communication.",
      },
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    number: "13",
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "Shanti EyeTech may update this Privacy Policy periodically to reflect changes in website functionality, operational practices, legal requirements, or the services we use.",
      },
      {
        type: "p",
        text: "The revised version may be published on this page with an updated revision date.",
      },
    ],
  },
  {
    id: "contact-us",
    number: "14",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "For questions, concerns, or requests regarding this Privacy Policy or information submitted through the website, please contact:",
      },
    ],
    contact: {
      name: "Shanti EyeTech",
      address: "Indore, Madhya Pradesh, India",
      email: "info@shantieyetech.com",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          eyebrow="LEGAL & PRIVACY"
          title="Privacy Policy"
          description="How Shanti EyeTech collects, uses, and protects the information you share with us when you visit our website or reach out for care."
          lastUpdated="August 2026"
        />
        <LegalContent intro={intro} sections={sections} />
      </main>
      <Footer />
    </>
  );
}
