import { ContactForm } from "../client";
import { Eyebrow, FAQ, Footer, Header, SectionHeading } from "../site-components";

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <section className="contact-hero">
          <div className="shell contact-hero-layout">
            <div><h1><span>We’re Here</span><br />For You</h1><p>Our friendly eyecare team is here to help</p></div>
            <div className="contact-doctor-wrap">
              <img className="contact-clinic" src="/assets/contact-clinic.webp" alt="" />
              <img className="contact-doctor" src="/assets/contact-doctor.png" alt="Shanthi EyeTech doctor beside eye examination equipment" />
            </div>
          </div>
        </section>

        <section className="section contact-details">
          <div className="shell">
            <SectionHeading eyebrow="CONTACT" title="Let’s Connect for your" accent="Personalized eyecare" body="Have questions or need assistance? Our friendly eyecare team is here to help. Contact us by phone, email, or visit our medical center—we’re always ready to assist you." />
            <div className="contact-card-grid">
              <article><span className="icon-box">⌖</span><h3>Visit Us</h3><p>Shekhar Central, M1 &amp; M2,<br />Palasia Square, Manorama Ganj,<br />Indore, MP 452001</p><a href="https://maps.google.com/?q=Shekhar+Central+Palasia+Indore" target="_blank" rel="noreferrer">⌖ Get Directions</a></article>
              <article className="contact-card-featured"><span className="icon-box">☎</span><h3>Call Us Anytime</h3><p>+91 91791 91939<br />0731-4291939</p><a className="button light-button" href="tel:+919179191939">☎ Call Now</a></article>
              <article><span className="icon-box">✉</span><h3>Email Us</h3><p>info@shanthieyetech.com</p><a href="mailto:info@shanthieyetech.com">✉ Send Email</a></article>
              <article><span className="icon-box">◷</span><h3>Working Hours</h3><p>Monday – Friday: 8:00 AM – 8:00 PM<br /><br />Sunday: Closed</p></article>
            </div>
          </div>
        </section>

        <section className="section contact-form-section">
          <div className="shell">
            <SectionHeading eyebrow="GET IN TOUCH" title="We’re here for you." accent="Our team will contact Shortly" body="Have questions or need assistance? Share your details and our friendly eyecare team will get back to you." />
            <div className="contact-form-layout">
              <ContactForm />
              <div className="map-card">
                <span>⌖</span>
                <article><h3>Shanthi EyeTech</h3><p>Shekhar Central, M1 &amp; M2,<br />Palasia Square, Manorama Ganj,<br />Indore, MP 452001</p><a href="https://maps.google.com/?q=Shekhar+Central+Palasia+Indore" target="_blank" rel="noreferrer">↗ Get Directions</a></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-faq" id="faq">
          <div className="shell contact-faq-layout">
            <aside><span>☎</span><h2>Still not sure? Book a free discovery call now.</h2><a className="button light-button button-wide" href="tel:+919179191939">☎ Book a call</a><small>or</small><a href="mailto:info@shanthieyetech.com">✉ info@shanthieyetech.com</a></aside>
            <div>
              <Eyebrow>FREQUENTLY ASKED QUESTION</Eyebrow>
              <h2>Answers to your<br /><span>asked queries</span></h2>
              <FAQ title="" accent="" service="doctor consultation" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
