import Link from "next/link";
import {
  AppointmentSection,
  Eyebrow,
  FeatureGrid,
  Footer,
  Header,
  SectionHeading,
} from "../site-components";


function LeadershipIcon({ type }: { type: "award" | "book" | "users" | "calendar" }) {
  const paths = {
    award: <><circle cx="12" cy="8" r="4" /><path d="M9 12 7.5 20l4.5-2.5 4.5 2.5L15 12" /></>,
    book: <><path d="M4 5.5c2.5-1 5-.5 8 1v12c-3-1.5-5.5-2-8-1V5.5Z" /><path d="M20 5.5c-2.5-1-5-.5-8 1v12c3-1.5 5.5-2 8-1V5.5Z" /></>,
    users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5" /><path d="M14 14c3 .1 5 2.1 5 5" /></>,
    calendar: <><rect x="4" y="5.5" width="16" height="14" rx="2" /><path d="M8 3.5v4M16 3.5v4M4 10h16" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}


export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main>
        <section className="about-hero">
          <div className="shell about-hero-layout">
            <div>
              <Eyebrow>OUR STORY</Eyebrow>
              <h1>Building a<br />Legacy of<br /><span>Visionary Care</span></h1>
              <p>For over two decades, Shanthi EyeTech has been at the forefront of ophthalmology in India, combining clinical excellence with compassionate care to restore and preserve the gift of sight.</p>
              <div className="hero-buttons"><Link className="button button-primary" href="#appointment">▣ Book Consultation</Link><a className="button button-outline" href="tel:+919179191939">☎ Call Us</a></div>
            </div>
            <div className="about-hero-photos">
              <img className="main-photo" src="/assets/clinic-lounge.webp" alt="Shanthi EyeTech clinic lounge" />
              <img className="side-photo" src="/assets/clinic-reception.webp" alt="Clinic reception" />
              <div className="photo-stats"><div><b>25+</b><span>Years</span></div><div><b>50K+</b><span>Patients</span></div><div><b>15+</b><span>Specialists</span></div></div>
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="shell story-layout">
            <div className="story-image"><img src="/assets/Shanthi EyeTech Facility.png" alt="Modern examination room" /><b><i aria-hidden="true">♡</i><strong>98%</strong><small>Patient Satisfaction</small></b></div>
            <div>
              <Eyebrow>WHO WE ARE</Eyebrow>
              <h2>A Vision for<br /><span>Exceptional Eye Care</span></h2>
              <p>Founded in 1998, Shanthi EyeTech was born from a simple yet powerful mission: to make world-class ophthalmology accessible to everyone. What began as a small clinic has evolved into one of the region’s most trusted eye care centers.</p>
              <p>Our founder envisioned a facility where cutting-edge technology meets compassionate care. Today, that vision lives on through our team of 15+ specialist ophthalmologists and 50+ dedicated support staff.</p>
              <p>We’ve successfully performed over 50,000 procedures, from routine eye exams to complex surgical interventions. Each patient receives personalized treatment plans tailored to their unique needs and lifestyle.</p>
              <blockquote>“Our commitment is not just to restore vision, but to enhance the quality of life for every patient who walks through our doors.”<small>— Dr. Amit N Solanki, Founder &amp; Medical Director</small></blockquote>
            </div>
          </div>
        </section>

        <section className="section milestone-section">
          <div className="shell">
            <SectionHeading eyebrow="OUR JOURNEY" title="Milestones of" accent="Excellence & Growth" body="From a small clinic to a leading eye care center—our journey has been marked by continuous innovation and unwavering commitment to patient care." />
            <div className="timeline">
              <article><b>2018</b><span /><div><h3>Best Video Award</h3><p>Shree SadGuru Seva Sansthan – Managed Post LASIK Epithelial Ingrowth</p></div></article>
              <article><b>2017</b><span /><div><h3>Memorial Award</h3><p>Dr. Ramesh Krishna Agarwal Award – M.P.S.O.S Annual Conference, Gwalior</p></div></article>
              <article><b>2016</b><span /><div><h3>Best Poster Award</h3><p>M.P. State Ophthalmic Society Annual Conference, Bhopal</p></div></article>
              <article><b>2011</b><span /><div><h3>Best Surgical Video</h3><p>Small vs Large Rhexis for Endocapsular Phaco – IODOS, Indore</p></div></article>
              <article><b></b><span /><div><h3>Best Glaucoma Paper</h3><p>Ophthalmology Tomorrow Annual Conference, IODOS, Indore</p></div></article>
            </div>
          </div>
        </section>

        <section className="section philosophy-section">
          <div className="shell">
            <SectionHeading eyebrow="OUR PHILOSOPHY" title="Mission, Vision &" accent="Values" />
            <div className="philosophy-grid">
              <article className="philosophy-card philosophy-mission">
                <span className="philosophy-number" aria-hidden="true">01</span>
                <span className="philosophy-icon" aria-hidden="true">◎</span>
                <h3>Our Mission</h3>
                <p>To provide accessible, world-class ophthalmology care that transforms lives through clinical excellence, compassionate service, and continuous innovation.</p>
              </article>
              <article className="philosophy-card philosophy-vision">
                <span className="philosophy-number" aria-hidden="true">02</span>
                <span className="philosophy-icon" aria-hidden="true">◉</span>
                <h3>Our Vision</h3>
                <p>To be the most trusted name in eye care, setting standards for quality, innovation, and patient satisfaction across the region.</p>
              </article>
              <article className="philosophy-card philosophy-values">
                <span className="philosophy-number" aria-hidden="true">03</span>
                <span className="philosophy-icon" aria-hidden="true">✦</span>
                <h3>Our Values</h3>
                <ul>
                  <li>Patient-First Care</li>
                  <li>Clinical Excellence</li>
                  <li>Continuous Innovation</li>
                  <li>Ethical Practice</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

                <section className="section leadership-section" id="leadership">
          <div className="shell">
            <SectionHeading eyebrow="LEADERSHIP" title="The Visionary Behind" accent="Shanthi EyeTech" />
            <div className="leadership-layout">
              <div className="leadership-photo-wrap">
                <img src="/assets/doctor-profile.webp" alt="Dr. Amit N Solanki" />
                <span>Founder &amp; Medical Director</span>
              </div>
              <div className="leadership-copy">
                <h2>Dr. Amit N Solanki</h2>
                <h4>MBBS, MS, FRCS (Glasgow)</h4>
                <p>With over 25 years of dedicated service in ophthalmology, Dr. Amit N Solanki is a pioneer in advanced cataract and refractive surgery. His commitment to combining clinical excellence with compassionate care has been the cornerstone of Shanthi EyeTech’s success.</p>
                <p>After completing his fellowship at the prestigious All India Institute of Medical Sciences and advanced training at Royal College of Surgeons, Glasgow, Dr. Kumar returned to establish a center that would bring world-class eye care to the community.</p>
                <p>His expertise in premium IOL implants and complex anterior segment procedures has helped restore vision for thousands of patients. Beyond clinical practice, Dr. Kumar is actively involved in training young ophthalmologists and conducting research in phacoemulsification techniques.</p>
                <div className="leadership-stats">
                  <article><span className="leadership-stat-icon"><LeadershipIcon type="award" /></span><b>15+</b><strong>Awards</strong><small>National Recognition</small></article>
                  <article><span className="leadership-stat-icon"><LeadershipIcon type="book" /></span><b>50+</b><strong>Papers</strong><small>Published Research</small></article>
                  <article><span className="leadership-stat-icon"><LeadershipIcon type="users" /></span><b>25K+</b><strong>Surgeries</strong><small>Performed</small></article>
                  <article><span className="leadership-stat-icon"><LeadershipIcon type="calendar" /></span><b>25+ Years</b><strong>Experience</strong></article>
                </div>
                <Link className="button button-primary leadership-cta" href="#appointment">Book with Dr. Kumar</Link>
              </div>
            </div>
          </div>
        </section>
<section className="section capabilities-section">
          <div className="shell">
            <SectionHeading eyebrow="OUR CAPABILITIES" title="Expertise Backed by" accent="Advanced Technology" />
            <img className="wide-equipment" src="/assets/wide-phoropter.webp" alt="Eye diagnostic technology" />
            <FeatureGrid columns={4} items={[
              { icon: "♙", title: "Advanced Equipment", text: "State-of-the-art surgical microscopes and diagnostic tools." },
              { icon: "⌁", title: "Precision Diagnostics", text: "OCT, Topography, and biometry systems for accurate analysis." },
              { icon: "♢", title: "Safety Standards", text: "ISO certified with stringent infection control protocols." },
              { icon: "ϟ", title: "Rapid Recovery", text: "Minimally invasive techniques for faster healing." },
            ]} />
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <SectionHeading eyebrow="WHY CHOOSE US" title="What Sets Us" accent="Apart" />
            <FeatureGrid columns={2} items={[
              { icon: "♡", title: "Patient-Centered Care", text: "Every treatment plan is personalized to your unique needs and lifestyle goals." },
              { icon: "♙", title: "Expert Team", text: "15+ experienced ophthalmologists with specialized training in all subspecialties." },
              { icon: "♢", title: "Proven Track Record", text: "50,000+ successful procedures with 98% patient satisfaction." },
              { icon: "✦", title: "Continuous Innovation", text: "Investment in latest technology and ongoing training for optimal outcomes." },
            ]} />
          </div>
        </section>

        <section className="impact-band">
          <div className="shell"><h2>Our Impact in Numbers</h2><p>Two decades of excellence in eye care</p><div><b>25+<small>Years of Service</small></b><b>49999+<small>Successful Procedures</small></b><b>15+<small>Expert Ophthalmologists</small></b><b>97%<small>Patient Satisfaction</small></b></div></div>
        </section>

        <section className="section facilities-section">
          <div className="shell">
            <SectionHeading eyebrow="OUR FACILITIES" title="World-Class Infrastructure" accent="For Your Comfort" />
            <div className="facility-grid">
              <article><img src="/assets/slit-lamp.webp" alt="" /><div><h3>Modern Examination Rooms</h3><p>Comfortable, well-equipped consultation spaces</p></div></article>
              <article><img src="/assets/clinical-team.webp" alt="" /><div><h3>Reception & Waiting Area</h3><p>Welcoming and calming environment</p></div></article>
              <article><img src="/assets/phoropter-patient.webp" alt="" /><div><h3>Advanced Diagnostic Lab</h3><p>State-of-the-art equipment for precise diagnosis</p></div></article>
            </div>
          </div>
        </section>
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
