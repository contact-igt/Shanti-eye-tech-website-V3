import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "Pediatric Eye Care in Indore | Shanti Eye Tech",
  },
  description:
    "Pediatric eye care in Indore at Shanti Eye Tech. Eye evaluations for children with vision concerns, symptoms, failed screening or myopia-management needs.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/pediatric-eye-care",
  },
};

const content = servicePages.pediatric;

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

export default function PediatricEyeCarePage() {
  return (
    <>
      <ServicePage content={content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
