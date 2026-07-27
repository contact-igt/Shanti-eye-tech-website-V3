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
  items: { icon: string; title: string; text: string }[];
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
    ["Best decision I ever made! I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless.", "Priya Sharma", "LASIK Surgery"],
    ["I was nervous about the surgery, but the team at Shanthi EyeTech was amazing. Within 24 hours, my vision was crystal clear.", "Raj Patel", "Blade-Free LASIK"],
    ["The precision and care I received here exceeded all expectations. I feel confident and comfortable every day.", "Anita Desai", "Custom LASIK"],
  ];
  return (
    <section className="section testimonials soft-section">
      <div className="shell">
        <SectionHeading eyebrow="PATIENT STORIES" title={title} accent={subtitle} />
        <div className="testimonial-grid">
          {quotes.map(([quote, name, treatment]) => (
            <article className={`testimonial ${accent}`} key={name}>
              <div className="stars">★★★★★</div>
              <p>“{quote}”</p>
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
  const questions = [
    [`What should I expect during my first ${service} visit?`, "Your specialist will review your history, assess your vision and eye health, explain the findings, and recommend a personalised treatment plan."],
    [`Is ${service} treatment safe?`, "Treatment is recommended only after a detailed evaluation. Our specialists use modern technology and established clinical safety protocols."],
    ["How long does the consultation take?", "Most consultations take 30–45 minutes. Some advanced diagnostic tests may require a little longer."],
    ["Do you accept insurance?", "Our team can help you understand available insurance and payment options before treatment."],
    ["How soon can I book an appointment?", "Same-day consultations may be available. Call us or use the appointment form and our team will confirm the earliest suitable time."],
  ];
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
              <li><span>◷</span><b>Quick Appointments</b><small>Same-day consultations available</small></li>
              <li><span>♙</span><b>Expert Specialists</b><small>15+ experienced ophthalmologists</small></li>
              <li><span>☎</span><b>24/7 Support</b><small>Emergency eye care anytime</small></li>
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
