import type { Metadata } from "next";
import { Header, Footer } from "../site-components";
import { SubmissionStatus } from "../components/common/SubmissionStatus/SubmissionStatus";

export const metadata: Metadata = {
  title: "Thank You | Shanti Eye Tech",
  description: "Thank you for contacting Shanti Eye Tech in Indore. Our care team will reach out to you shortly.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function ThankYouPage() {
  return (
    <>
      <Header />
      <SubmissionStatus
        variant="success"
        icon="✓"
        eyebrow="REQUEST RECEIVED"
        titleId="thank-you-title"
        title="Thank You!"
        body="Our care team has received your request and will contact you shortly to confirm the next steps."
        actions={[
          { label: "Back to Home", href: "/", variant: "primary" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />
      <Footer home />
    </>
  );
}