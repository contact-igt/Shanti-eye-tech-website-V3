import { Header, Footer } from "../site-components";
import { SubmissionStatus } from "../components/common/SubmissionStatus/SubmissionStatus";

export default function SubmissionErrorPage() {
  return (
    <>
      <Header />
      <SubmissionStatus
        variant="error"
        icon="!"
        eyebrow="SUBMISSION NOT COMPLETED"
        titleId="error-title"
        title="Something Went Wrong"
        body="We could not send your request right now. Please try again, or contact our team directly for immediate assistance."
        actions={[
          { label: "Try Again", href: "/contact", variant: "primary" },
          { label: "Call Us", href: "tel:+919179191939", variant: "outline", external: true },
        ]}
      />
      <Footer home />
    </>
  );
}