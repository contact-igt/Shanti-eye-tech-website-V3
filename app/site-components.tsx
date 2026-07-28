import type { ReactNode } from "react";
import Link from "next/link";
import { AppointmentForm } from "./client";

export function Header({ active = "" }: { active?: string }) {
  return (
    <header className={`site-header ${active === "home" ? "home-header" : ""}`}>
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label="Shanthi EyeTech home">
          <img src="/assets/logo.png" alt="Shanthi EyeTech" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={active === "about" ? "active" : ""} href="/about">About</Link>
          <details className="nav-services">
            <summary className={active === "services" ? "active" : ""}>Services</summary>
            <div className="nav-menu">
              <Link href="/services/lasik">LASIK Surgery</Link>
              <Link href="/services/cataract">Cataract Surgery</Link>
              <Link href="/services/retina">Retina Care</Link>
            </div>
          </details>
          <Link href="/about#leadership">Doctors</Link>
          <Link href="/#technology">Technology</Link>
          <Link className={active === "contact" ? "active" : ""} href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <a className="button emergency" href="tel:+919179191939">☎ Emergency</a>
          <Link className="button button-primary" href="#appointment">▣ Book Appointment</Link>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open menu">☰</summary>
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services/lasik">LASIK</Link>
            <Link href="/services/cataract">Cataract</Link>
            <Link href="/services/retina">Retina</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow"><i />{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  accent: string;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-heading ${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}<br /><span>{accent}</span></h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function FeatureGrid({
  items,
  columns = 4,
  gradientFirst = false,
}: {
  items: { icon: ReactNode; title: string; text: string }[];
  columns?: number;
  gradientFirst?: boolean;
}) {
  return (
    <div className={`feature-grid cols-${columns}`}>
      {items.map((item, index) => (
        <article className={`feature-card ${gradientFirst && index === 0 ? "gradient-card" : ""}`} key={item.title}>
          <span className="icon-box">{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

import { TestimonialCarousel } from "./testimonials-carousel";

export function Testimonials({
  accent = "blue",
  title = "You’re Not Alone,",
  subtitle = "Hear From Others Like You",
}: {
  accent?: "blue" | "cyan";
  title?: string;
  subtitle?: string;
}) {
  const testimonials = [
    { quote: "Best decision I ever made! I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless.", name: "Priya Sharma", meta: "LASIK Surgery - 29 years" },
    { quote: "I was nervous about the surgery, but the team at Shanthi EyeTech was amazing. Within 24 hours, my vision was crystal clear.", name: "Raj Patel", meta: "Blade-Free LASIK - 34 years" },
    { quote: "The precision and care I received here exceeded all expectations. I feel confident and comfortable every day.", name: "Anita Desai", meta: "Custom LASIK - 31 years" },
    { quote: "After years of struggling with cloudy vision, I can finally see my grandchildren clearly. Painless surgery and quick recovery!", name: "Ramesh Kumar", meta: "Cataract Surgery - 68 years" },
    { quote: "I came in with floaters and blurred vision. The team acted quickly, and the follow-up care gave me real peace of mind.", name: "Neela Iyer", meta: "Retina Care - 58 years" },
    { quote: "The laser treatment took less than 10 minutes per eye with no discomfort. Waking up with clear 20/20 vision feels miraculous!", name: "Amitabh Verma", meta: "Contoura LASIK - 33 years" },
  ];

  return (
    <section className="section testimonials soft-section">
      <div className="shell">
        <SectionHeading eyebrow="PATIENT STORIES" title={title} accent={subtitle} />
        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}

export function FAQ({
  title = "Questions?",
  accent = "We Have Answers",
  service = "eye care",
}: {
  title?: string;
  accent?: string;
  service?: string;
}) {
  const isModernService = ["cataract", "lasik", "retina"].includes(service);
  const questions = service === "cataract"
    ? [
        ["How do I know if I have cataracts?", "Common signs include cloudy or blurry vision, difficulty seeing at night, sensitivity to light, seeing halos around lights, fading colors, and frequent changes in glasses prescription. A comprehensive eye examination can confirm cataracts."],
        ["Is cataract surgery safe?", "Cataract surgery is one of the safest and most frequently performed surgical procedures in the world, with success rates over 98%."],
        ["How long does cataract surgery take?", "The procedure itself typically takes only 15 to 20 minutes per eye. You will spend about 2 hours at the center total for prep and recovery."],
        ["Will I need glasses after cataract surgery?", "It depends on the type of intraocular lens (IOL) you choose. Premium multifocal or trifocal lenses can reduce or eliminate your need for glasses."],
        ["What is the recovery time?", "Most patients notice improved vision within 24 to 48 hours, with complete recovery and final vision stabilization within a few weeks."],
      ]
    : [
        [`What should I expect during my first ${service} visit?`, "Your specialist will review your history, assess your vision and eye health, explain the findings, and recommend a personalised treatment plan."],
        [`Is ${service} treatment safe?`, "Treatment is recommended only after a detailed evaluation. Our specialists use modern technology and established clinical safety protocols."],
        ["How long does the consultation take?", "Most consultations take 30–45 minutes. Some advanced diagnostic tests may require a little longer."],
        ["Do you accept insurance?", "Our team can help you understand available insurance and payment options before treatment."],
        ["How soon can I book an appointment?", "Same-day consultations may be available. Call us or use the appointment form and our team will confirm the earliest suitable time."],
      ];

  if (isModernService) {
    return (
      <section className="section faq-section cataract-faq-section">
        <div className="shell cataract-faq-layout">
          <div className="cataract-faq-card">
            <h3>Have Questions About {service === "lasik" ? "LASIK" : service === "retina" ? "Retina Care" : "Cataracts"}?</h3>
            <p>Our {service === "lasik" ? "LASIK" : service === "retina" ? "retina" : "cataract"} specialists are here to answer your questions and guide you through your treatment options.</p>
            <div className="cataract-faq-actions">
              <Link className="button cataract-faq-btn-primary" href="#appointment">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Schedule Consultation
              </Link>
              <a className="button cataract-faq-btn-outline" href="tel:+911234567890">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us Now
              </a>
            </div>
          </div>
          <div className="cataract-faq-right">
            <div className="cataract-faq-header">
              <Eyebrow>COMMON QUESTIONS</Eyebrow>
              <h2>{title} <span>{accent}</span></h2>
            </div>
            <div className="cataract-faq-box">
              <div className="faq-list cataract-faq-list">
                {questions.map(([question, answer], index) => (
                  <details open={index === 0} key={question}>
                    <summary>
                      <span>{question}</span>
                      <span className="faq-icon-circle" aria-hidden="true" />
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section faq-section">
      <div className="shell faq-layout">
        <div className="faq-intro">
          <Eyebrow>COMMON QUESTIONS</Eyebrow>
          <h2>{title}<br /><span>{accent}</span></h2>
          <p>Find answers to common questions about our services, procedures, and patient care.</p>
          <Link href="/contact">Still have questions? Contact us →</Link>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => (
            <details open={index === 0} key={question}>
              <summary>{question}<b>{index === 0 ? "−" : "+"}</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppointmentSection({
  withForm = true,
  image = "/assets/exam-chair.webp",
  kind = "",
}: {
  withForm?: boolean;
  image?: string;
  kind?: string;
}) {
  const isModernService = ["cataract", "lasik", "retina"].includes(kind);
  const serviceLabel = kind === "lasik" ? "LASIK" : kind === "retina" ? "retina care" : "cataract treatment";
  const journeyCopy = kind === "lasik"
    ? "Take the first step toward freedom from glasses. Our experienced team is ready to guide you through safe, precise LASIK treatment."
    : kind === "retina"
      ? "Protect your sight with timely retina evaluation and expert care. Our specialists are ready to guide you through every step."
      : "Restore your clear vision and rediscover life's precious moments. Our experienced team is ready to guide you through safe, effective cataract treatment.";

  return (
    <section className={`appointment-section ${isModernService ? "cataract-journey-section" : ""}`} id="appointment">
      <div className={`shell appointment-layout ${isModernService ? "cataract-journey-layout" : ""}`}>
        <div className="appointment-copy">
          <Eyebrow>{isModernService ? "TAKE THE FIRST STEP" : "BOOK NOW"}</Eyebrow>
          <h2>{withForm ? "Ready to See" : "Start Your"}<br />{withForm ? "the World Clearly?" : "Vision Journey"}</h2>
          <p>{isModernService ? journeyCopy : "Schedule your consultation today and take the first step towards better vision. Our expert team is ready to provide personalised care."}</p>
          {withForm ? (
            <ul className="appointment-points">
              <li><span>◷</span><b>Quick Appointments</b><small>Same-day consultations available</small></li>
              <li><span>♙</span><b>Expert Specialists</b><small>15+ experienced ophthalmologists</small></li>
              <li><span>☎</span><b>24/7 Support</b><small>Emergency eye care anytime</small></li>
            </ul>
          ) : isModernService ? (
            <>
              <div className="cataract-journey-actions">
                <Link className="button light-button cataract-journey-btn-primary" href="/contact">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book Consultation <img className="btn-arrow" src="/assets/blue_arrow.png" alt="" aria-hidden="true" />
                </Link>
                <a className="button ghost-light cataract-journey-btn-outline" href="tel:+919179191939">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call: +91 91791 91939
                </a>
              </div>
              <div className="cataract-journey-check">
                <span className="check-badge">✓</span>
                <div>
                  <strong>Comprehensive Evaluation</strong>
                  <small>Complete assessment to determine the best {serviceLabel} option for you</small>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link className="button light-button button-wide" href="/contact">▣ Book Consultation →</Link>
              <a className="button ghost-light button-wide" href="tel:+919179191939">☎ Call: +91 91791 91939</a>
              <p className="small-check">✓ Comprehensive Evaluation</p>
            </>
          )}
        </div>
        {withForm ? <AppointmentForm /> : (
          <div className="appointment-image cataract-journey-image-card">
            <img src={image} alt="Modern ophthalmology examination room" />
            <div className="image-caption">
              <strong>Clear Vision</strong>
              <small>A Brighter Tomorrow</small>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export function Footer({ home = false }: { home?: boolean }) {
  return (
    <footer className={`site-footer ${home ? "home-footer" : ""}`}>
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="Shanthi EyeTech" />
            <p>Providing world-class ophthalmology care with cutting-edge technology and compassionate specialists for over 25 years.</p>
          </div>
          <div><h4>Quick Links</h4><Link href="/about">About Us</Link><Link href="/about#leadership">Our Doctors</Link><Link href="/services/lasik">Services</Link><Link href="/#technology">Technology</Link><Link href="/">Blog</Link></div>
          <div><h4>Services</h4><Link href="/services/cataract">Cataract Surgery</Link><Link href="/services/lasik">LASIK Surgery</Link><Link href="/services/retina">Retina Care</Link><Link href="/services/cataract">Glaucoma Treatment</Link><Link href="/services/retina">Pediatric Care</Link></div>
          <div><h4>Resources</h4><Link href="/contact">Patient Guide</Link><Link href="/contact">Insurance Info</Link><Link href="/contact#faq">FAQs</Link><Link href="/#testimonials">Testimonials</Link><Link href="/contact">Contact Us</Link></div>
          <div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a></div>
        </div>
        <div className="footer-contact">
          <div><b>⌖ Visit Us</b><span>123 Medical Plaza, Bangalore<br />Karnataka 560001, India</span></div>
          <div><b>☎ Call Us</b><span>+91 (123) 456-7890<br />24/7 Emergency</span></div>
          <div><b>✉ Email Us</b><span>info@shanthieyetech.com</span></div>
          <div><b>◷ Working Hours</b><span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</span></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Shanthi EyeTech. All rights reserved.</span>
          <div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
