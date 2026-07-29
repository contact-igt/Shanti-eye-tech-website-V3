import Link from "next/link";
import { Footer, Header } from "../site-components";

export default function SubmissionErrorPage() {
  return (
    <>
      <Header />
      <main className="submission-status-page">
        <section className="submission-status-card" aria-labelledby="error-title">
          <span className="submission-status-icon error" aria-hidden="true">!</span>
          <p className="submission-status-eyebrow">SUBMISSION NOT COMPLETED</p>
          <h1 id="error-title">Something Went Wrong</h1>
          <p>We could not send your request right now. Please try again, or contact our team directly for immediate assistance.</p>
          <div className="submission-status-actions">
            <Link className="button button-primary" href="/contact">Try Again</Link>
            <a className="button button-outline" href="tel:+919179191939">Call Us</a>
          </div>
        </section>
      </main>
      <Footer home />
    </>
  );
}