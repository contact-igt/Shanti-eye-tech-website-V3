import type { ReactNode } from "react";
import Link from "next/link";
import { AppointmentForm, FaqAccordion } from "./client";

export function Header({ active = "" }: { active?: string }) {
  return (
    <header className="site-header home-header">
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
          <a className="button emergency" href="tel:+919179191939"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 3.5 8.8 3l1.7 4.2-2.1 1.7c1.2 2.5 3.2 4.5 5.7 5.7l1.7-2.1 4.2 1.7-.5 3.3c-.2 1.2-1.2 2-2.4 1.8C9.9 18.4 5.6 14.1 4.7 6.9c-.2-1.2.6-2.2 1.8-2.4Z" /></svg><span>Emergency</span></a>
          <Link className="button button-primary nav-book" href="#appointment"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg><span>Book Appointment</span></Link>
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

function TechnologyIcon({ title }: { title: string }) {
  const icon = title === "Zeiss Ophthalmic Systems" ? (
    <><path d="M12 5v4M9 9h6l2 3v5H7v-5l2-3Z" /><path d="M6 19h12M9 16h6M10 5h4" /></>
  ) : title === "OCT Imaging" ? (
    <><path d="M7 4H5a2 2 0 0 0-2 2v2M17 4h2a2 2 0 0 1 2 2v2M7 20H5a2 2 0 0 1-2-2v-2M17 20h2a2 2 0 0 0 2-2v-2" /></>
  ) : title === "Femto Laser Technology" ? (
    <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" /></>
  ) : (
    <><path d="M3 14h4l2-8 4 12 2-8 2 4h4" /></>
  );
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}

function CommitmentIcon({ title }: { title: string }) {
  const icon = title === "Precision Diagnostics" ? (
    <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.5" /></>
  ) : title === "Patient-Centered Care" ? (
    <path d="M20.8 8.2c0 5-8.8 10.8-8.8 10.8S3.2 13.2 3.2 8.2A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.8 1.2Z" />
  ) : title === "Proven Excellence" ? (
    <><path d="M12 3 19 6v5c0 4.5-3 7.9-7 9.5-4-1.6-7-5-7-9.5V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>
  ) : (
    <><path d="m13 2-8 11h6l-1 9 8-12h-6l1-8Z" /><path d="M18 4h3M19.5 2.5v3" /></>
  );
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}

function WhyChooseIcon({ title }: { title: string }) {
  const icon = title === "Patient-Centered Care" ? (
    <path d="M20.8 8.2c0 5-8.8 10.8-8.8 10.8S3.2 13.2 3.2 8.2A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.8 1.2Z" />
  ) : title === "Expert Team" ? (
    <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5M14 14c3 .1 5 2.1 5 5" /></>
  ) : title === "Proven Track Record" ? (
    <><circle cx="12" cy="8" r="4" /><path d="M9 12 7.5 20l4.5-2.5 4.5 2.5L15 12" /></>
  ) : (
    <><path d="m13 2-8 11h6l-1 9 8-12h-6l1-8Z" /><path d="M18 4h3M19.5 2.5v3" /></>
  );
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}
function CapabilityIcon({ title }: { title: string }) {
  const icon = title === "Advanced Equipment" ? (
    <><path d="M9 3h4M11 3v5M8 8h6" /><path d="M9 8v4a4 4 0 0 0 4 4h2" /><path d="M15 16h2a3 3 0 0 1 3 3v1H5" /><path d="M8 21h10M6 12h5" /></>
  ) : title === "Precision Diagnostics" ? (
    <path d="M3 13h4l2-9 4 16 3-10 2 3h3" />
  ) : title === "Safety Standards" ? (
    <path d="M12 3 19 6v5c0 4.5-3 7.9-7 9.5-4-1.6-7-5-7-9.5V6l7-3Z" />
  ) : (
    <path d="m13 2-8 11h6l-1 9 8-12h-6l1-8Z" />
  );
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}
export function FeatureGrid({
  items,
  columns = 4,
  gradientFirst = false,
  showNumbers = false,
}: {
  items: { icon: ReactNode; title: string; text: string }[];
  columns?: number;
  gradientFirst?: boolean;
  showNumbers?: boolean;
}) {
  return (
    <div className={`feature-grid cols-${columns}`}>
      {items.map((item, index) => (
        <article className={`feature-card ${gradientFirst && index === 0 ? "gradient-card" : ""}`} key={item.title}>
          {showNumbers && <span className="feature-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
          <span className="icon-box">{showNumbers ? <TechnologyIcon title={item.title} /> : ["Patient-Centered Care", "Expert Team", "Proven Track Record", "Continuous Innovation"].includes(item.title) ? <WhyChooseIcon title={item.title} /> : ["Advanced Equipment", "Precision Diagnostics", "Safety Standards", "Rapid Recovery"].includes(item.title) ? <CapabilityIcon title={item.title} /> : ["Precision Diagnostics", "Proven Excellence", "Innovation & Research"].includes(item.title) ? <CommitmentIcon title={item.title} /> : item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

import { TestimonialCarousel, type TestimonialItem } from "./testimonials-carousel";

export function Testimonials({
  accent = "blue",
  title = "You’re Not Alone,",
  subtitle = "Hear From Others Like You",
}: {
  accent?: "blue" | "cyan";
  title?: string;
  subtitle?: string;
}) {
  const quotes: TestimonialItem[] = [
    { quote: "Best decision I ever made! I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless, and Dr. Kumar made me feel completely comfortable throughout.", name: "Priya Sharma", meta: "LASIK Surgery" },
    { quote: "I was nervous about the surgery, but the team at Shanthi EyeTech was amazing. Within 24 hours, my vision was crystal clear. No more contacts, no more hassle!", name: "Raj Patel", meta: "Blade-Free LASIK" },
    { quote: "As someone who wore glasses for 20 years, I cannot express how life-changing LASIK has been. The precision and care I received here exceeded all expectations.", name: "Anita Desai", meta: "Custom LASIK" },
  ];

  return (
    <section className="section testimonials soft-section">
      <div className="shell">
        <SectionHeading eyebrow="PATIENT STORIES" title={title} accent={subtitle} />
        <TestimonialCarousel items={quotes} />
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
  const isHomeFaq = title === "Questions?" && accent === "We Have Answers" && service === "eye care";
  const questions: [string, string][] = isHomeFaq ? [
    ["What eye conditions do you treat?", "We provide comprehensive care for all eye conditions including cataracts, glaucoma, diabetic retinopathy, macular degeneration, corneal diseases, refractive errors, and pediatric eye problems. Our specialists are equipped to handle both routine and complex cases."],
    ["Is LASIK surgery safe and permanent?", "LASIK is a well-established procedure. Your specialist will determine whether it is suitable for your eyes after a detailed assessment."],
    ["How long does cataract surgery take?", "Most cataract procedures are completed quickly, followed by a carefully planned recovery and review schedule."],
    ["Do you accept insurance?", "Our team can help you understand available insurance and payment options before treatment."],
    ["When should children have their first eye exam?", "A child should have an eye evaluation when recommended by their paediatrician or if you notice a vision concern."],
  ] : [
    [`What should I expect during my first ${service} visit?`, "Your specialist will review your history, assess your vision and eye health, explain the findings, and recommend a personalised treatment plan."],
    [`Is ${service} treatment safe?`, "Treatment is recommended only after a detailed evaluation. Our specialists use modern technology and established clinical safety protocols."],
    ["How long does the consultation take?", "Most consultations take 30-45 minutes. Some advanced diagnostic tests may require a little longer."],
    ["Do you accept insurance?", "Our team can help you understand available insurance and payment options before treatment."],
    ["How soon can I book an appointment?", "Same-day consultations may be available. Call us or use the appointment form and our team will confirm the earliest suitable time."],
  ];
  return (
    <section className="section faq-section">
      <div className="shell faq-layout">
        <div className="faq-intro">
          <Eyebrow>{isHomeFaq ? "FAQS" : "COMMON QUESTIONS"}</Eyebrow>
          <h2>{title}<br /><span>{accent}</span></h2>
          <p>Find answers to common questions about our services, procedures, and patient care.</p>
          <Link href="/contact">Still have questions? Contact us &rarr;</Link>
        </div>
        <div className="faq-list">
          <FaqAccordion questions={questions} />
        </div>
      </div>
    </section>
  );
}

function AppointmentIcon({ type }: { type: "clock" | "people" | "phone" }) {
  const icon = type === "clock" ? <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></> : type === "people" ? <><circle cx="9" cy="8" r="3" /><path d="M3 20c.5-3.4 2.5-5.2 6-5.2s5.5 1.8 6 5.2M16 10c2.4 0 4 1.4 4.5 3.8" /></> : <path d="M5.5 3.5 8.8 3l1.7 4.2-2.1 1.7c1.2 2.5 3.2 4.5 5.7 5.7l1.7-2.1 4.2 1.7-.5 3.3c-.2 1.2-1.2 2-2.4 1.8C9.9 18.4 5.6 14.1 4.7 6.9c-.2-1.2.6-2.2 1.8-2.4Z" />;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
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
    <section className={`appointment-section ${withForm && !isModernService ? "appointment-home-style" : ""} ${isModernService ? "cataract-journey-section" : ""}`} id="appointment">
      <div className={`shell appointment-layout ${isModernService ? "cataract-journey-layout" : ""}`}>
        <div className="appointment-copy">
          <Eyebrow>{isModernService ? "TAKE THE FIRST STEP" : "BOOK NOW"}</Eyebrow>
          <h2>{withForm ? "Ready to See" : "Start Your"}<br />{withForm ? "the World Clearly?" : "Vision Journey"}</h2>
          <p>{isModernService ? journeyCopy : "Schedule your consultation today and take the first step towards better vision. Our expert team is ready to provide personalised care."}</p>
          {withForm ? (
            <ul className="appointment-points">
              <li><span><AppointmentIcon type="clock" /></span><b>Quick Appointments</b><small>Same-day consultations available</small></li>
              <li><span><AppointmentIcon type="people" /></span><b>Expert Specialists</b><small>15+ experienced ophthalmologists</small></li>
              <li><span><AppointmentIcon type="phone" /></span><b>24/7 Support</b><small>Emergency eye care anytime</small></li>
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
          <div className="socials">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r="1" /></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12c0 3.4-.4 5.5-1 6.4-.7.9-2.3 1.1-8 1.1s-7.3-.2-8-1.1C3.4 17.5 3 15.4 3 12s.4-5.5 1-6.4C4.7 4.7 6.3 4.5 12 4.5s7.3.2 8 1.1c.6.9 1 3 1 6.4Z" /><path d="m10 8.7 5 3.3-5 3.3V8.7Z" /></svg></a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-location"><span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" /><circle cx="12" cy="10" r="2.3" /></svg></span><div><b>Visit Us</b><span>123 Medical Plaza, Bangalore<br />Karnataka 560001, India</span></div></div>
          <div className="footer-phone"><span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5.5 3.5 8.8 3l1.7 4.2-2.1 1.7c1.2 2.5 3.2 4.5 5.7 5.7l1.7-2.1 4.2 1.7-.5 3.3c-.2 1.2-1.2 2-2.4 1.8C9.9 18.4 5.6 14.1 4.7 6.9c-.2-1.2.6-2.2 1.8-2.4Z" /></svg></span><div><b>Call Us</b><span>+91 (123) 456-7890<br />24/7 Emergency</span></div></div>
          <div className="footer-email"><span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></span><div><b>Email Us</b><span>info@shanthieyetech.com</span></div></div>
          <div className="footer-hours"><span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg></span><div><b>Working Hours</b><span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</span></div></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Shanthi EyeTech. All rights reserved.</span>
          <div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
