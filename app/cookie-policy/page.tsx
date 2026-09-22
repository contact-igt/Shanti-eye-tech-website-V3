import type { Metadata } from "next";
import { LegalContent, LegalHero, type LegalSection } from "../components/legal";
import { Footer, Header } from "../site-components";

export const metadata: Metadata = {
  title: {
    absolute: "Cookie Policy | Shanti Eye Tech",
  },
  description:
    "Learn what cookies and third-party embeds are used on the Shanti Eye Tech website, and how you can manage them.",
  alternates: {
    canonical: "https://www.shantieyetech.com/cookie-policy",
  },
};

const intro = [
  "This Cookie Policy explains what cookies and similar technologies are currently used on the Shanti Eye Tech website, and how you can manage them. It should be read together with our Privacy Policy.",
];

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    number: "1",
    title: "What Are Cookies",
    blocks: [
      {
        type: "p",
        text: "Cookies are small text files that a website can place on your device to remember information, such as preferences or activity, typically for the duration of your visit or a set period afterward.",
      },
    ],
  },
  {
    id: "cookies-we-use",
    number: "2",
    title: "Cookies We Use",
    blocks: [
      {
        type: "p",
        text: "Our website does not currently set analytics, advertising, or tracking cookies. We do not use tools such as Google Analytics, Google Tag Manager, Meta/Facebook Pixel, or similar services, and we do not use cookies to track you across other websites.",
      },
      {
        type: "p",
        text: "If this changes in the future, we will update this page to name the specific tools used, their purpose, how long each cookie is retained, and how you can opt out.",
      },
    ],
  },
  {
    id: "third-party-embeds",
    number: "3",
    title: "Third-Party Embeds",
    blocks: [
      {
        type: "p",
        text: "Our Contact page embeds a Google Map to show our clinic location. Google provides this map directly, and loading it may allow Google to set its own cookies and collect information according to Google's own privacy and cookie policies. We do not control, and are not responsible for, cookies set by Google or other third parties.",
      },
      {
        type: "p",
        text: "If you prefer not to have the map load Google's cookies, you can avoid interacting with the embedded map and use the address and directions link provided in text on the Contact page instead.",
      },
    ],
  },
  {
    id: "managing-cookies",
    number: "4",
    title: "Managing Cookies",
    blocks: [
      {
        type: "p",
        text: "Because this website does not set its own analytics or advertising cookies, there is currently no on-site cookie preference tool to configure. You can still control third-party cookies, such as those Google may set when the embedded map loads, through your browser's cookie and privacy settings.",
      },
    ],
  },
  {
    id: "changes-to-this-cookie-policy",
    number: "5",
    title: "Changes to This Cookie Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Cookie Policy if the cookies or third-party tools used on the website change. The revised version will be published on this page with an updated revision date.",
      },
    ],
  },
  {
    id: "contact-us",
    number: "6",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "For questions about this Cookie Policy, please contact:",
      },
    ],
    contact: {
      name: "Shanti Eye Tech",
      address: "Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj, Indore, Madhya Pradesh 452001",
      email: "info@shantieyetech.com",
    },
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          eyebrow="LEGAL & PRIVACY"
          title="Cookie Policy"
          description="What cookies and third-party embeds are used on the Shanti Eye Tech website, and how you can manage them."
          lastUpdated="September 2026"
        />
        <LegalContent intro={intro} sections={sections} />
      </main>
      <Footer />
    </>
  );
}
