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

export type ServiceConfig = {
  kind: "lasik" | "cataract" | "retina";
  eyebrow: string;
  title: string;
  accent: string;
  heroText: string;
  heroImage: string;
  metricA: string;
  metricB: string;
  metricC: string;
  whyTitle: string;
  whyAccent: string;
  introTitle: string;
  introAccent: string;
  introText: string[];
  introImage: string;
  considerTitle: string;
  considerAccent: string;
  checks: string[];
  considerImage: string;
  optionsTitle: string;
  optionsAccent: string;
  options: { image: string; title: string; tag: string; text: string }[];
  benefitsTitle: string;
  benefitsAccent: string;
  serviceName: string;
};

const whyItems = [
  { icon: "♙", title: "Expert Surgeons", text: "Decades of specialised clinical and surgical experience." },
  { icon: "ϟ", title: "Advanced Technology", text: "State-of-the-art equipment for precision and safety." },
  { icon: "♙", title: "Experienced Specialists", text: "Doctor-led care with specialist attention at every step." },
  { icon: "♡", title: "Personalized Care", text: "Custom treatment plans designed around your eyes." },
  { icon: "◷", title: "Quick Recovery", text: "Modern procedures designed for a confident return to daily life." },
  { icon: "♢", title: "Comprehensive Support", text: "Lifetime guidance, monitoring, and post-operative care." },
  { icon: "◉", title: "Proven Results", text: "Thousands of successful procedures and satisfied patients." },
  { icon: "☆", title: "Trusted by Thousands", text: "Compassionate care with clear explanations at every stage." },
];

export function ServicePage({ config }: { config: ServiceConfig }) {
  const isRetina = config.kind === "retina";
  return (
    <>
      <Header active="services" />
      <main className={`service-page ${config.kind}`}>
        <section className="service-hero" style={{ backgroundImage: `url(${config.heroImage})` }}>
          <div className="shell service-hero-layout">
            <div className="service-hero-copy">
              <Eyebrow>{config.eyebrow}</Eyebrow>
              <h1>{config.title}<br /><span>{config.accent}</span></h1>
              <p>{config.heroText}</p>
              <div className="hero-buttons"><Link className="button button-primary" href="#appointment">▣ {isRetina ? "Book Consultation" : "Start a Consultation"}</Link><Link className="button button-outline" href="#eligibility">◉ Check Your Eligibility</Link></div>
              <div className="hero-metrics"><div><b>{config.metricA}</b><span>{isRetina ? "Retina Expertise" : "Procedures"}</span></div><div><b>{config.metricB}</b><span>Success Rate</span></div><div><b>{config.metricC}</b><span>{isRetina ? "Early Detection" : "Recovery"}</span></div></div>
            </div>
          </div>
        </section>

        <section className="section service-why">
          <div className="shell">
            <SectionHeading eyebrow="WHY CHOOSE US" title={config.whyTitle} accent={config.whyAccent} body="Combining advanced technology with personalized care for safe, effective treatment and optimal outcomes." />
            <FeatureGrid columns={4} items={whyItems} />
          </div>
        </section>

        <section className="section service-intro eye-pattern">
          <div className="shell split-layout">
            <div>
              <Eyebrow>{isRetina ? "ESSENTIAL KNOWLEDGE" : config.kind === "lasik" ? "THE PROCEDURE" : "UNDERSTANDING CATARACTS"}</Eyebrow>
              <h2>{config.introTitle}<br /><span>{config.introAccent}</span></h2>
              {config.introText.map((text) => <p key={text}>{text}</p>)}
              <div className="info-callout"><b>{isRetina ? "Light-Sensitive Layer" : "Good News"}</b><span>{isRetina ? "Retina care focuses on conditions affecting the retina, macula, and blood vessels at the back of the eye." : "Modern treatment is safe, precise, and carefully planned after a comprehensive evaluation."}</span></div>
            </div>
            <div className="image-stack">
              <img className="stack-main" src={config.introImage} alt={config.introTitle} />
              <span>{isRetina ? "Early Evaluation" : config.kind === "lasik" ? "15–20 min" : "50+"}<small>{isRetina ? "Protects Vision" : config.kind === "lasik" ? "Procedure Time" : "Age-related"}</small></span>
            </div>
          </div>
        </section>

        <section className="section eligibility-section" id="eligibility">
          <div className="shell split-layout reverse-mobile">
            <div>
              <Eyebrow>{isRetina ? "WARNING SIGNS" : "ELIGIBILITY"}</Eyebrow>
              <h2>{config.considerTitle}<br /><span>{config.considerAccent}</span></h2>
              <p>{isRetina ? "Watch out for these warning signs and schedule a comprehensive evaluation if they occur." : "You may be a good candidate if you meet the following criteria:"}</p>
              <ul className="check-list">{config.checks.map((item) => <li key={item}>✓ <span>{item}</span></li>)}</ul>
              <div className="note-box"><b>Important:</b> Only your eye care specialist can determine the right treatment for you after a detailed assessment.</div>
            </div>
            <div className="eligibility-image">
              <img src={config.considerImage} alt="" />
              <span>{isRetina ? "Early" : config.kind === "lasik" ? "18–45" : "60+"}<small>{isRetina ? "Detection" : "Ideal Age Range"}</small></span>
            </div>
          </div>
        </section>

        <section className="section options-section eye-pattern">
          <div className="shell">
            <SectionHeading eyebrow={isRetina ? "TREATMENT OPTIONS" : "LENS & PROCEDURE OPTIONS"} title={config.optionsTitle} accent={config.optionsAccent} body={isRetina ? "Advanced, precise care for better outcomes." : "Choose the best option for your eyes and lifestyle."} />
            <div className={`option-grid ${isRetina ? "three" : ""}`}>
              {config.options.map((option) => (
                <article key={option.title}>
                  <img src={option.image} alt="" />
                  <div><h3>{option.title}</h3><b>{option.tag}</b><p>{option.text}</p><Link href="#appointment">Book Consultation →</Link></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {!isRetina && (
          <section className="section comparison-section">
            <div className="shell">
              <SectionHeading title="Choose the Vision Correction Option" accent="That Fits Your Eyes" body="There is no single best procedure for everyone. The right option depends on your eye power, corneal health, lifestyle, and long-term safety." />
              <div className="comparison-table" role="table" aria-label="Treatment options comparison">
                <div className="table-head"><b>Feature</b><b>Standard</b><b>Advanced</b><b>Premium</b><b>Specialist</b></div>
                {[
                  ["Best for", "Daily vision", "Reduced glasses", "Multiple distances", "Complex cases"],
                  ["How it works", "Proven method", "Precision treatment", "Enhanced optics", "Tailored procedure"],
                  ["Recovery", "Usually quick", "Usually quick", "Planned follow-up", "Case dependent"],
                  ["Doctor advice", "✓ Yes", "✓ Yes", "✓ Yes", "✓ Yes"],
                ].map((row) => <div className="table-row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
              </div>
              <div className="surgeon-note"><b>◉ A note from the Eye Surgeon:</b> The best procedure is the one that is safest for your eyes and your lifestyle. A detailed evaluation comes first.</div>
              <Link className="button button-primary center-button" href="#appointment">Get My Personalised Recommendation →</Link>
            </div>
          </section>
        )}

        <section className="section benefit-section">
          <div className="shell">
            <SectionHeading eyebrow="KEY BENEFITS" title={config.benefitsTitle} accent={config.benefitsAccent} />
            <div className="benefit-grid">
              {(isRetina
                ? [["/assets/active-life.webp", "Maintain an Active Life"], ["/assets/preserve-vision.webp", "Preserve Your Vision"], ["/assets/independent-life.webp", "Live Independently"]]
                : [["/assets/slit-lamp.webp", "Quick Recovery Time"], ["/assets/eligibility.webp", "Greater Confidence"], ["/assets/exam-chair.webp", "Improved Quality of Life"], ["/assets/phoropter-patient.webp", "Active Lifestyle"]]
              ).map(([image, title]) => <article key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>Enjoy clearer vision and more confidence in everyday life.</p></div></article>)}
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQ title={`${config.serviceName}`} accent="FAQs" service={config.serviceName.toLowerCase()} />
        <AppointmentSection withForm={false} image={config.kind === "lasik" ? "/assets/slit-lamp.webp" : config.kind === "retina" ? "/assets/retina-chair.webp" : "/assets/cataract-chair.webp"} />
      </main>
      <Footer />
    </>
  );
}

