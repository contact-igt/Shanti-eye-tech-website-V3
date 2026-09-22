import type { Metadata } from "next";
import { ServicePage } from "@/app/components/services/ServicePage/ServicePage";
import { servicePages } from "../constants";

export const metadata: Metadata = {
  title: {
    absolute: "Glaucoma Care in Indore | Shanti Eye Tech",
  },
  description:
    "Glaucoma evaluation, monitoring and treatment guidance at Shanti Eye Tech in Indore. Early assessment can help protect remaining vision.",
  alternates: {
    canonical: "https://www.shantieyetech.com/services/glaucoma",
  },
};

const content = servicePages.glaucoma;

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

export default function GlaucomaPage() {
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
