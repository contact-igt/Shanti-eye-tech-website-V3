import Link from "next/link";
import { AppointmentForm, FaqAccordion } from "./client";

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
          <a className="button emergency" href="tel:+919179191939">Emergency</a>
          <Link className="button button-primary nav-book" href="#appointment">Book Appointment</Link>
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

export function FeatureGrid({
  items,
  columns = 4,
  gradientFirst = false,
  showNumbers = false,
}: {
  items: { icon: string; title: string; text: string }[];
  columns?: number;
  gradientFirst?: boolean;
  showNumbers?: boolean;
}) {
  return (
    <div className={`feature-grid cols-${columns}`}>
      {items.map((item, index) => (
        <article className={`feature-card ${gradientFirst && index === 0 ? "gradient-card" : ""}`} key={item.title}>
          {showNumbers && <span className="feature-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
          <span className="icon-box">{showNumbers ? <TechnologyIcon title={item.title} /> : ["Precision Diagnostics", "Patient-Centered Care", "Proven Excellence", "Innovation & Research"].includes(item.title) ? <CommitmentIcon title={item.title} /> : item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Testimonials({
  accent = "blue",
  title = "You’re Not Alone,",
  subtitle = "Hear From Others Like You",
}: {
  accent?: "blue" | "cyan";
  title?: string;
  subtitle?: string;
}) {
  const quotes = [
    ["Best decision I ever made! I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless, and Dr. Kumar made me feel completely comfortable throughout.", "Priya Sharma", "LASIK Surgery"],
    ["I was nervous about the surgery, but the team at Shanthi EyeTech was amazing. Within 24 hours, my vision was crystal clear. No more contacts, no more hassle!", "Raj Patel", "Blade-Free LASIK"],
    ["As someone who wore glasses for 20 years, I cannot express how life-changing LASIK has been. The precision and care I received here exceeded all expectations.", "Anita Desai", "Custom LASIK"],
  ];
  return (
    <section className="section testimonials soft-section">
      <div className="shell">
        <SectionHeading eyebrow="PATIENT STORIES" title={title} accent={subtitle} />
        <div className="testimonial-grid">
          {quotes.map(([quote, name, treatment]) => (
            <article className={`testimonial ${accent}`} key={name}>
              <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <img src="/assets/star.png" alt="" key={index} />)}</div>
              <img className="testimonial-quote" src="/assets/qutation.png" alt="" aria-hidden="true" />
              <p>&quot;{quote}&quot;</p>
              <hr />
              <strong>{name}</strong>
              <small>{treatment}</small>
            </article>
          ))}
        </div>
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
}: {
  withForm?: boolean;
  image?: string;
}) {
  return (
    <section className="appointment-section" id="appointment">
      <div className="shell appointment-layout">
        <div className="appointment-copy">
          <Eyebrow>BOOK NOW</Eyebrow>
          <h2>{withForm ? "Ready to See" : "Start Your"}<br />{withForm ? "the World Clearly?" : "Vision Journey"}</h2>
          <p>Schedule your consultation today and take the first step towards better vision. Our expert team is ready to provide personalised care.</p>
          {withForm ? (
            <ul className="appointment-points">
              <li><span><AppointmentIcon type="clock" /></span><b>Quick Appointments</b><small>Same-day consultations available</small></li>
              <li><span><AppointmentIcon type="people" /></span><b>Expert Specialists</b><small>15+ experienced ophthalmologists</small></li>
              <li><span><AppointmentIcon type="phone" /></span><b>24/7 Support</b><small>Emergency eye care anytime</small></li>
            </ul>
          ) : (
            <>
              <Link className="button light-button button-wide" href="/contact">▣ Book Free Consultation →</Link>
              <a className="button ghost-light button-wide" href="tel:+911234567890">☎ Call: +91 (123) 456-7890</a>
              <p className="small-check">✓ Comprehensive Evaluation</p>
            </>
          )}
        </div>
        {withForm ? <AppointmentForm /> : (
          <div className="appointment-image">
            <img src={image} alt="Modern ophthalmology examination room" />
            <strong>Clear Vision</strong><small>A Brighter Tomorrow</small>
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
          <div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="YouTube">▶</a></div>
        </div>
        <div className="footer-contact">
          <div className="footer-location"><b>Visit Us</b><span>123 Medical Plaza, Bangalore<br />Karnataka 560001, India</span></div>
          <div className="footer-phone"><b>Call Us</b><span>+91 (123) 456-7890<br />24/7 Emergency</span></div>
          <div className="footer-email"><b>Email Us</b><span>info@shanthieyetech.com</span></div>
          <div className="footer-hours"><b>Working Hours</b><span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: 10:00 AM - 4:00 PM</span></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Shanthi EyeTech. All rights reserved.</span>
          <div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
