import Link from "next/link";
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
  ["05", "Pediatric Ophthalmology", "Specialized eye care for children including vision screening and childhood eye conditions.", "/services/retina"],
];

const technology = [
  { icon: "♙", title: "Zeiss Ophthalmic Systems", text: "Premium German-engineered surgical microscopes for precision in every procedure." },
  { icon: "⌗", title: "OCT Imaging", text: "Advanced Optical Coherence Tomography for detailed retinal and anterior segment analysis." },
  { icon: "◎", title: "Femto Laser Technology", text: "Blade-free cataract and LASIK surgeries with unmatched accuracy and safety." },
  { icon: "⌁", title: "Digital Diagnostics", text: "Comprehensive automated perimetry, topography, and biometry systems." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <Eyebrow>ADVANCED EYE CARE</Eyebrow>
              <h1>Your Vision,<br /><span>Our<br />Precision</span></h1>
              <p>Experience world-class ophthalmology care with cutting-edge technology and compassionate specialists dedicated to preserving and enhancing your vision.</p>
              <div className="hero-buttons">
                <Link className="button button-primary" href="#appointment">Book Consultation →</Link>
                <Link className="button button-outline" href="#services">Explore Services →</Link>
              </div>
              <div className="hero-metrics">
                <div><b>25+</b><span>Years Excellence</span></div>
                <div><b>50K+</b><span>Happy Patients</span></div>
                <div><b>24/7</b><span>Emergency Care</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <span className="orb orb-one" /><span className="orb orb-two" />
              <img src="/assets/doctor-cutout.png" alt="Dr. Amit N Solanki beside ophthalmology equipment" />
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div>Best Eye Hospital 2024</div><div>◎ NABH Accredited</div><div>♙ 25+ Years Excellence</div>
          <div>☆ 98% Success Rate</div><div>◉ State-of-the-Art Technology</div><div>ISO 9001:2015 Certified</div>
        </div>

        <section className="section numbers-section">
          <div className="shell">
            <SectionHeading eyebrow="TRUSTED BY THOUSANDS" title="Numbers That Speak" accent="Our Excellence" />
            <div className="numbers-grid">
              <article><b>25+</b><span>Years of Excellence in Eye Care</span></article>
              <article><b>2000+</b><span>Successful Procedures Completed</span></article>
              <article><b>97%</b><span>Patient Satisfaction Rate</span></article>
              <article><b>15+</b><span>Expert Ophthalmologists</span></article>
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
              <div className="service-collage">
                <img src="/assets/eye-consult.webp" alt="Eye examination" />
                <img src="/assets/phoropter.webp" alt="Advanced vision diagnostics" />
              </div>
            </div>
            <div className="service-grid">
              {services.map(([number, title, text, href], index) => (
                <article className={index === 2 ? "service-card featured" : "service-card"} key={title}>
                  <span className="service-number">{number}</span>
                  <span className="service-icon">{index === 2 ? "⌘" : "◉"}</span>
                  <h3>{title}</h3><p>{text}</p>
                  <Link href={href}>Learn More →</Link>
                </article>
              ))}
              <Link className="button button-outline service-cta" href="/services/lasik">Explore Services →</Link>
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
            <FeatureGrid items={technology} columns={2} />
            <img className="wide-equipment" src="/assets/wide-phoropter.webp" alt="Advanced eye diagnostic equipment" />
          </div>
        </section>

        <section className="section doctor-section" id="doctor">
          <div className="shell doctor-layout">
            <div className="doctor-photo">
              <span>Available Today</span>
              <img src="/assets/doctor-profile.webp" alt="Dr. Amit N Solanki" />
              <small>Medical Director of Shanthi Eye Care</small>
            </div>
            <div className="doctor-copy">
              <Eyebrow>DIRECTOR</Eyebrow>
              <h2>Dr. Amit N Solanki</h2>
              <h4>Chief Ophthalmologist &amp; Medical Director</h4>
              <p>With over 25 years of experience in advanced cataract and refractive surgery, Dr. Solanki is recognized for his expertise in premium lens implants and complex anterior segment procedures.</p>
              <ul><li>MBBS, MS Ophthalmology</li><li>FRCS (Glasgow), Fellowship in Phaco &amp; Refractive Surgery</li><li>Former Consultant - All India Institute of Medical Sciences</li></ul>
              <div className="doctor-stats"><div><b>15+</b><span>Awards &amp; Recognition</span></div><div><b>FRCS</b><span>Fellowship Royal College</span></div><div><b>25K+</b><span>Surgeries Performed</span></div></div>
              <div className="hero-buttons"><Link className="button green-button" href="#appointment">Book Consultation →</Link><Link className="button button-outline" href="/about#leadership">View Full Profile</Link></div>
            </div>
          </div>
        </section>

        <section className="section commitment-section">
          <div className="shell">
            <SectionHeading
              eyebrow="WHY CHOOSE US"
              title="Four Pillars of"
              accent="Our Commitment"
              body="What sets Shanthi EyeTech apart is our unwavering dedication to combining clinical excellence with genuine care for every patient."
            />
            <FeatureGrid columns={2} items={[
              { icon: "◎", title: "Precision Diagnostics", text: "Advanced imaging and diagnostic tools enable early detection and timely, effective treatment." },
              { icon: "♡", title: "Patient-Centered Care", text: "Every patient receives personalised attention and treatment plans tailored to individual needs." },
              { icon: "♢", title: "Proven Excellence", text: "More than 50,000 successful procedures and a 98% patient satisfaction record." },
              { icon: "✦", title: "Innovation & Research", text: "Continuous training, research participation, and adoption of cutting-edge technologies." },
            ]} />
            <Link className="button button-primary center-button" href="#appointment">Experience the Difference →</Link>
          </div>
        </section>

        <div id="testimonials"><Testimonials title="Transforming Lives," subtitle="One Vision at a Time" /></div>
        <FAQ />
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}
