import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "Retina Care in Indore | Shanti Eye Tech",
  },
  description:
    "Retina evaluation and care in Indore at Shanti Eye Tech. Seek urgent assessment for sudden flashes, floaters, a curtain over vision or sudden vision loss.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/retina",
  },
};

const content = servicePages.retina;

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

export default function RetinaPage() {
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
