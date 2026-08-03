import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Calendar, Eye, Stethoscope, ShieldCheck, Star, Target } from "lucide-react";
import { CountUp } from "./client";
import {
  AppointmentSection,
  Eyebrow,
  FAQ,
  FeatureGrid,
  Footer,
  Header,
  SectionHeading,
  Testimonials,
} from "./site-components";

const services = [
  ["01", "Advanced Cataract Surgery", "State-of-the-art phacoemulsification with premium IOL options for crystal-clear vision restoration.", "/services/cataract"],
  ["02", "Retina Care", "Comprehensive medical and surgical retina services including laser treatments and injections.", "/services/retina"],
  ["03", "LASIK Surgery", "LASIK, SMILE, and PRK procedures for freedom from glasses and contact lenses.", "/services/lasik"],
  ["04", "Glaucoma Management", "Advanced diagnosis and treatment to preserve your vision through medical and surgical interventions.", "/services/cataract"],
  ["05", "Pediatric Ophthalmology", "Specialized eye care for children including vision screening and treatment of childhood eye conditions.", "/services/retina"],
];

const technology = [
  { icon: "♙", title: "Zeiss Ophthalmic Systems", text: "Premium German-engineered surgical microscopes for precision in every procedure." },
  { icon: "⌗", title: "OCT Imaging", text: "Advanced Optical Coherence Tomography for detailed retinal and anterior segment analysis." },
  { icon: "◎", title: "Femto Laser Technology", text: "Blade-free cataract and LASIK surgeries with unmatched accuracy and safety." },
  { icon: "⌏", title: "Digital Diagnostics", text: "Comprehensive automated perimetry, topography, and biometry systems." },
];

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    <><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="2.4" /><path d="M4 8.5 6.5 6M20 8.5 17.5 6M4 15.5 6.5 18M20 15.5 17.5 18" /></>,
    <><path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    <><circle cx="8" cy="13" r="3.5" /><circle cx="16" cy="13" r="3.5" /><path d="M11.5 13h1M4.5 13H3M20.5 13H19M8 9.5V8M16 9.5V8" /></>,
    <><path d="M12 3c-1.5 3-5.5 5.8-5.5 10a5.5 5.5 0 0 0 11 0c0-4.2-4-7-5.5-10Z" /></>,
    <><path d="m13 2-8 11h6l-1 9 8-12h-6l1-8Z" /></>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[index]}</svg>;
}

function DoctorStatIcon({ type }: { type: "award" | "cap" | "people" }) {
  if (type === "cap") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-4 9 4-9 4-9-4Z" /><path d="M7 11.5V16c2.8 2.2 7.2 2.2 10 0v-4.5M21 10v5" /><circle cx="21" cy="17" r="1" /></svg>;
  if (type === "people") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" /><path d="M3 20c.4-3.4 2.4-5.3 6-5.3s5.6 1.9 6 5.3M16 10c2.4-.1 4 1.3 4.5 3.8M16.5 15.4c2.8.3 4.2 1.8 4.5 4.6" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3" /><path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" /><path d="m9.5 8-2-1.5.8-2.4 2.4-.3L12 2l1.3 1.8 2.4.3.8 2.4-2 1.5" /></svg>;
}

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main className="home-page">
        <section className="home-hero">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <Eyebrow>ADVANCED EYE CARE</Eyebrow>
              <h1>Your Vision,<br /><span>Our Precision</span></h1>
              <p>Experience world-class ophthalmology care with cutting-edge technology and compassionate specialists dedicated to preserving and enhancing your vision.</p>
              <div className="hero-buttons">
                <Link className="button button-primary" href="/contact" style={{ display: "flex", alignItems: "center", gap: "6px" }}>Book Consultation <ArrowRight size={18} /></Link>
                <a className="button button-outline" href="tel:+919179191939" style={{ display: "flex", alignItems: "center", gap: "6px" }}>Call Now <ArrowRight size={18} /></a>
              </div>
              <div className="hero-metrics" aria-label="Shanthi EyeTech highlights">
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <Award size={20} strokeWidth={2} color="#22c44a" />
                  </span>
                  <span className="metric-copy">
                    <b>
                      <CountUp value={25} suffix="+" />
                    </b>
                    <span>Years Excellence</span>
                  </span>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <Users size={20} strokeWidth={2} color="#22c44a" />
                  </span>
                  <span className="metric-copy">
                    <b>
                      <CountUp value={50} suffix="K+" />
                    </b>
                    <span>Happy Patients</span>
                  </span>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <Clock size={20} strokeWidth={2} color="#22c44a" />
                  </span>
                  <span className="metric-copy">
                    <b>
                      <CountUp value={24} suffix="/7" />
                    </b>
                    <span>Emergency Care</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/solsanki_bg.png" alt="" className="hero-doctor-bg" />
            <img src="/assets/solanski.png" alt="Dr. Solanki Specialist" className="hero-doctor-img" />
          </div>
        </section>

        <section className="trust-strip" aria-hidden="true">
          <div className="trust-strip-marquee">
            <ul className="trust-strip-list">
              <li><span><Award size={20} /></span> Best Eye Hospital 2024</li>
              <li><span><ShieldCheck size={20} /></span> NABH Accredited</li>
              <li><span><Award size={20} /></span> 25+ Years Excellence</li>
              <li><span><Star size={20} /></span> 98% Success Rate</li>
              <li><span><Target size={20} /></span> State-of-the-Art Technology</li>
              <li><span><ShieldCheck size={20} /></span> ISO 9001:2015 Certified</li>
            </ul>
            <ul className="trust-strip-list">
              <li><span><Award size={20} /></span> Best Eye Hospital 2024</li>
              <li><span><ShieldCheck size={20} /></span> NABH Accredited</li>
              <li><span><Award size={20} /></span> 25+ Years Excellence</li>
              <li><span><Star size={20} /></span> 98% Success Rate</li>
              <li><span><Target size={20} /></span> State-of-the-Art Technology</li>
              <li><span><ShieldCheck size={20} /></span> ISO 9001:2015 Certified</li>
            </ul>
          </div>
        </section>

        <section className="section numbers-section">
          <svg className="numbers-world-map" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
            <defs>
              <pattern id="numbers-map-dots" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="4.5" cy="4.5" r="1.45" fill="#d2d9e4" />
              </pattern>
            </defs>
            <g fill="url(#numbers-map-dots)">
              <path d="M177 98c42-25 85-29 129-12l44 32-12 49-42 8-25 38-41 4-17 38-34-12-10-47-34-18 12-42 30-14 1-36Z" />
              <path d="m308 263 43 20 13 48-21 41 4 64-27 59-26-23-4-67-20-39 17-42-13-31 34-30Z" />
              <path d="m592 104 38-20 43 8 13 27-24 24-23-4-15 25-35-17 3-43Z" />
              <path d="m650 173 42 8 29 48-17 37-9 61-34 52-29-56-20-47 17-47 20-16Z" />
              <path d="m698 101 66-30 103 17 39-17 86 30 76 1 59 34-8 35-75 9-45-10-29 30-48-5-37 28-48-2-42-23-55 3-37-29 9-42Z" />
              <path d="m1050 234 51 13 38 33-15 32-55 13-31-25 12-66Z" />
              <path d="m1127 390 53-16 59 20 24 39-40 27-70-7-32-33 6-30Z" />
            </g>
          </svg>
          <div className="shell">
            <SectionHeading eyebrow="TRUSTED BY THOUSANDS" title="Numbers That Speak" accent="Our Excellence" />
            <div className="numbers-grid">
              <article><span className="number-watermark" aria-hidden="true">25</span><b><CountUp value={25} suffix="+" /></b><span>Years of Excellence in Eye Care</span></article>
              <article><span className="number-watermark" aria-hidden="true">2000</span><b><CountUp value={2000} suffix="+" /></b><span>Successful Procedures Completed</span></article>
              <article><span className="number-watermark" aria-hidden="true">97</span><b><CountUp value={97} suffix="%" /></b><span>Patient Satisfaction Rate</span></article>
              <article><span className="number-watermark" aria-hidden="true">15</span><b><CountUp value={15} suffix="+" /></b><span>Expert Ophthalmologists</span></article>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell services-shell">
            <div className="services-header">
              <SectionHeading
                eyebrow="OUR SERVICES"
                title="Comprehensive Eye Care"
                accent="For Every Need"
                body="From routine eye exams to complex surgical procedures, our team of expert ophthalmologists provides personalized care using the latest technology."
                align="left"
              />
            </div>
            <div className="service-side-images" aria-hidden="true">
              <img className="service-side-image service-image-1" src="/assets/service1.png" alt="" />
              <img className="service-side-image service-image-2" src="/assets/service2.png" alt="" />
              <img className="service-side-image service-image-3" src="/assets/service3.png" alt="" />
              <img className="service-side-image service-image-4" src="/assets/service4.png" alt="" />
            </div>
            <div className="service-grid">
              {services.map(([number, title, text, href], index) => (
                <article className="service-card" key={title}>
                  <span className="service-number">{number}</span>
                  <span className={`service-icon service-icon-${index + 1}`} aria-hidden="true"><ServiceIcon index={index} /></span>
                  <h3>{title}</h3><p>{text}</p>
                  <Link href={href} style={{ display: "flex", alignItems: "center", gap: "6px" }}>Learn More <ArrowRight size={16} aria-hidden="true" /></Link>
                </article>
              ))}
              {/* <Link className="button button-outline service-cta" href="/services/lasik" style={{ display: "flex", alignItems: "center", gap: "6px" }}>Explore Services <ArrowRight size={18} /></Link> */}
            </div>
          </div>
        </section>

        <section className="section technology-section" id="technology">
          <div className="shell">
            <SectionHeading
              eyebrow="ADVANCED TECHNOLOGY"
              title="Cutting-Edge Equipment"
              accent="For Optimal Outcomes"
              body="We invest in the latest diagnostic and surgical technology to ensure the highest standards of precision and patient safety."
            />
            <FeatureGrid items={technology} columns={2} showNumbers />
            <img className="wide-equipment" src="/assets/home/outcome.jpeg" alt="Advanced technology outcomes" />
          </div>
        </section>

        <section className="section doctor-section" id="doctor">
          <div className="shell doctor-layout">
            <span className="doctor-number" aria-hidden="true">01</span>
            <div className="doctor-photo">
              <span><span className="green-dot"></span>Available Today</span>
              <img src="/assets/home/doctor-profile.webp" alt="Dr. Amit N Solanki" />
              <small>Medical Director of Shanthi Eye Care</small>
            </div>
            <div className="doctor-copy">
              <Eyebrow>DIRECTOR</Eyebrow>
              <h2>Dr. Amit N Solanki</h2>
              <h4>Chief Ophthalmologist &amp; Medical Director</h4>
              <p>With over 25 years of experience in advanced cataract and refractive surgery, Dr. Solanki is recognized for his expertise in premium lens implants and complex anterior segment procedures.</p>
              <ul><li>MBBS, MS Ophthalmology</li><li>FRCS (Glasgow), Fellowship in Phaco &amp; Refractive Surgery</li><li>Former Consultant - All India Institute of Medical Sciences</li></ul>
              <div className="doctor-stats"><div><DoctorStatIcon type="award" /><b><CountUp value={15} suffix="+" /></b><span>Awards &amp; Recognition</span></div><div><DoctorStatIcon type="cap" /><b>FRCS</b><span>Fellowship Royal College</span></div><div><DoctorStatIcon type="people" /><b><CountUp value={25} suffix="K+" /></b><span>Surgeries Performed</span></div></div>
              <div className="hero-buttons"><Link className="button green-button" href="/contact" style={{ display: "flex", alignItems: "center", gap: "6px" }}><svg className="doctor-action-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg>Book Consultation <ArrowRight size={18} /></Link><Link className="button button-outline" href="/about#leadership">View Full Profile</Link></div>
            </div>
          </div>
        </section>

        <section className="section commitment-section">
          <div className="shell">
            <SectionHeading
              eyebrow="WHY CHOOSE US"
              title="Four Pillars of"
              accent="Our Commitment"
              body="What sets Shanthi EyeTech apart is our unwavering dedication to combining clinical excellence with genuine care for every patient who walks through our doors."
            />
            <FeatureGrid columns={2} items={[
              { icon: "â—Ž", title: "Precision Diagnostics", text: "Advanced imaging and diagnostic tools enable us to detect eye conditions at their earliest stages, ensuring timely and effective treatment." },
              { icon: "â™¡", title: "Patient-Centered Care", text: "Every patient receives personalized attention from our compassionate team, with treatment plans tailored to individual needs and lifestyle." },
              { icon: "â™¢", title: "Proven Excellence", text: "With over 50,000 successful procedures and 98% patient satisfaction, our track record speaks to our commitment to exceptional outcomes." },
              { icon: "âœ¦", title: "Innovation & Research", text: "We stay at the forefront of ophthalmology through continuous training, research participation, and adoption of cutting-edge technologies." },
            ]} />
            <Link className="button button-primary center-button" href="/contact" style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}>Experience the Difference <ArrowRight size={18} /></Link>
          </div>
        </section>

        <div id="testimonials"><Testimonials title="Transforming Lives," subtitle="One Vision at a Time" /></div>
        <FAQ />
        <AppointmentSection />
      </main>
      <Footer home />
    </>
  );
}

