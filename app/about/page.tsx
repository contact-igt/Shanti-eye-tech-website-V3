import Link from "next/link";
import {
  AppointmentSection,
  Eyebrow,
  FeatureGrid,
  Footer,
  Header,
  SectionHeading,
} from "../site-components";

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
            <div className="story-image"><img src="/assets/exam-chair.webp" alt="Modern examination room" /><b>98%<small>Patient Satisfaction</small></b></div>
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
            </div>
          </div>
        </section>

        <section className="section philosophy-section">
          <div className="shell">
            <SectionHeading eyebrow="OUR PHILOSOPHY" title="Mission, Vision &" accent="Values" />
            <FeatureGrid columns={3} gradientFirst items={[
              { icon: "◎", title: "Our Mission", text: "To provide accessible, world-class ophthalmology care that transforms lives through clinical excellence, compassionate service, and continuous innovation." },
              { icon: "◉", title: "Our Vision", text: "To be the most trusted name in eye care, setting standards for quality, innovation, and patient satisfaction across the region." },
              { icon: "✦", title: "Our Values", text: "Patient-first care, clinical excellence, continuous innovation, and ethical practice." },
            ]} />
          </div>
        </section>

        <section className="section leadership-section" id="leadership">
          <div className="shell">
            <SectionHeading eyebrow="LEADERSHIP" title="The Visionary Behind" accent="Shanthi EyeTech" />
            <div className="leadership-layout">
              <img src="/assets/doctor-profile.webp" alt="Dr. Amit N Solanki" />
              <div><h2>Dr. Amit N Solanki</h2><h4>MBBS, MS, FRCS (Glasgow)</h4>
                <p>With over 25 years of dedicated service in ophthalmology, Dr. Amit N Solanki is a pioneer in advanced cataract and refractive surgery. His commitment to combining clinical excellence with compassionate care has been the cornerstone of Shanthi EyeTech’s success.</p>
                <p>After completing his fellowship at the prestigious All India Institute of Medical Sciences and advanced training at Royal College of Surgeons, Glasgow, he returned to establish a center that would bring world-class eye care to the community.</p>
                <div className="mini-stats"><div><b>15+</b><span>Awards</span></div><div><b>50+</b><span>Papers</span></div><div><b>25K+</b><span>Surgeries</span></div><div><b>25+</b><span>Years</span></div></div>
                <Link className="button button-primary" href="#appointment">▣ Book with Dr. Solanki</Link>
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
