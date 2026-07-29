import Link from "next/link";
import { Footer, Header } from "../site-components";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="submission-status-page">
        <section className="submission-status-card" aria-labelledby="thank-you-title">
          <span className="submission-status-icon success" aria-hidden="true">✓</span>
          <p className="submission-status-eyebrow">REQUEST RECEIVED</p>
          <h1 id="thank-you-title">Thank You!</h1>
          <p>Our care team has received your request and will contact you shortly to confirm the next steps.</p>
          <div className="submission-status-actions">
            <Link className="button button-primary" href="/">Back to Home</Link>
            <Link className="button button-outline" href="/contact">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer home />
    </>
  );
}