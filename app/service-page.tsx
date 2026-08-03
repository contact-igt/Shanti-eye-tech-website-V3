import type { ReactNode } from "react";
import Link from "next/link";
import { CataractBenefitsCarousel } from "./cataract-benefits-carousel";
import { TestimonialCarousel } from "./testimonials-carousel";
import {
  AppointmentSection,
  Eyebrow,
  FAQ,
  FeatureGrid,
  Footer,
  Header,
  SectionHeading,
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
  options: { image: string; title: string; tag: string; text: string; bullets?: string[] }[];
  benefitsTitle: string;
  benefitsAccent: string;
  serviceName: string;
};

const cataractLensComparison = [
  {
    key: "monofocal",
    title: "Monofocal",
    subtitle: "Standard Lens",
    image: "/assets/monofocal.png",
    popular: false,
    values: ["Excellent", "Needs glasses", "Limited", "No", "Usually needed", "Minimal risk", "Usually covered", "Budget conscious; happy to wear glasses", "\u20B925,000 - \u20B942,000"],
  },
  {
    key: "toric",
    title: "Toric",
    subtitle: "For Astigmatism",
    image: "/assets/toric.png",
    popular: false,
    values: ["Excellent", "Needs glasses", "Limited", "Yes", "Reduced need", "Minimal risk", "~ Partial coverage", "Patients with astigmatism", "\u20B942,000 - \u20B955,000"],
  },
  {
    key: "enhanced-monofocal",
    title: "Enhanced Monofocal",
    subtitle: "",
    image: "/assets/enhanced-monofocal.png",
    popular: false,
    values: ["Excellent", "Needs glasses", "Clear", "In toric variants", "Reduced dependency", "Minimal risk", "Usually covered", "Who want less dependency on glasses", "\u20B950,000 - \u20B970,000"],
  },
  {
    key: "trifocal",
    title: "Trifocal / Multifocal",
    subtitle: "Premium Lens",
    image: "/assets/trifocal2.png",
    popular: true,
    values: ["Excellent", "Clear", "Clear", "~ Varies", "Rarely needed", "~ Brief adjustment", "Premium", "Spectacle-free living", "\u20B955,000 - \u20B9115,000"],
  },
];


const lasikProcedureComparison = [
  {
    key: "lasik",
    title: "LASIK",
    subtitle: "Most Popular",
    image: "/assets/lasik1.png",
    highlighted: false,
    values: ["Common spectacle removal cases", "Laser reshapes cornea after creating a flap", "Usually quick", "Reduced significantly", "Needs evaluation", "No", "Yes"],
  },
  {
    key: "smile",
    title: "SMILE",
    subtitle: "Flapless Laser",
    image: "/assets/smile1.png",
    highlighted: false,
    values: ["Suitable candidates wanting flapless laser option", "Laser removes a small lenticule through tiny incision", "Usually quick", "Reduced significantly", "Often considered in selected cases", "No", "Yes"],
  },
  {
    key: "prk",
    title: "PRK",
    subtitle: "Surface Laser",
    image: "/assets/prk1.png",
    highlighted: false,
    values: ["Thin cornea / selected cases", "Surface laser treatment without flap", "Slower than LASIK/SMILE", "Reduced significantly", "Depends on eye condition", "No", "Yes"],
  },
  {
    key: "icl",
    title: "ICL",
    subtitle: "Implantable Lens",
    image: "/assets/icl1.png",
    highlighted: true,
    values: ["High power or unsuitable cornea cases", "Implantable lens placed inside eye", "Usually quick", "Reduced significantly", "Depends on eye condition", "No", "Yes"],
  },
];

const lasikProcedureFeatures = [
  "Procedure View",
  "Best For",
  "How It Works",
  "Recovery",
  "Glasses Dependency",
  "Dry Eye Consideration",
  "Suitable for Everyone?",
  "Doctor Advice Needed?",
];
const cataractLensFeatures = [
  "Lens Design",
  "Distance vision",
  "Reading (near)",
  "Computer (intermediate)",
  "Corrects astigmatism",
  "Glasses needed after surgery",
  "Night vision / halos",
  "Insurance / cost",
  "Best for",
  "Typical starting cost (per eye)",
];
const cataractBenefits = [
  { image: "/assets/cataract/cataractbenefit2.jpeg", title: "Improved color perception" },
  { image: "/assets/cataract/cataractbenefit1.jpeg", title: "Clearer, brighter vision" },
  { image: "/assets/cataract/cataractbenefit3.jpeg", title: "Better quality of life" },
];
const cataractTestimonials = [
  {
    quote: "After years of struggling with cloudy vision, I can finally see my grandchildren clearly. The surgery was painless and recovery was quick. Dr. Kumar and the team made me feel comfortable every step of the way.",
    name: "Ramesh Kumar",
    meta: "Cataract Surgery - 68 years",
  },
  {
    quote: "I was nervous about surgery, but the results exceeded my expectations. Colors are vibrant again, and I can read without strain. I wish I had done this sooner!",
    name: "Lakshmi Devi",
    meta: "Premium IOL Surgery - 72 years",
  },
  {
    quote: "Both my eyes were treated with such precision and care. The difference is life-changing. I can drive confidently again and enjoy my hobbies. Highly recommended!",
    name: "Suresh Patel",
    meta: "Bilateral Cataract Surgery - 65 years",
  },
  {
    quote: "The advanced lens option restored my distance and reading vision seamlessly. I haven't worn glasses in months. Truly outstanding care by Shanthi EyeTech!",
    name: "Sunita Agarwal",
    meta: "Multifocal IOL Surgery - 61 years",
  },
  {
    quote: "From pre-op consultation to post-op checkups, the staff were incredibly kind and professional. The procedure was smooth and completely pain-free.",
    name: "Vikram Malhotra",
    meta: "Laser Cataract Surgery - 70 years",
  },
  {
    quote: "I had cataracts in both eyes and was hesitant to undergo surgery. Dr. Solanki & team made the entire experience easy and comforting. My vision is 20/20 now!",
    name: "Meena Sharma",
    meta: "Cataract Surgery - 66 years",
  },
];
const serviceBenefitItems: Record<ServiceConfig["kind"], { image: string; title: string; description?: string }[]> = {
  cataract: cataractBenefits,
  lasik: [
    { image: "/assets/lasik/quick_recovery.jpeg", title: "Quick Recovery Time", description: "Most patients return to normal activities within 24 hours with minimal discomfort." },
    { image: "/assets/lasik/long_lasting.jpeg", title: "Long-Lasting Results", description: "LASIK provides permanent vision correction that can last a lifetime." },
    { image: "/assets/lasik/vision_journey.jpeg", title: "Improved Quality of Life", description: "Freedom from glasses and contacts opens up new lifestyle possibilities." },
    { image: "/assets/lasik/improve_quality.jpeg", title: "Cost-Effective Solution", description: "Save money long-term by eliminating glasses, contacts, and solutions." },
    { image: "/assets/lasik/lasik-eye.webp", title: "Enhanced Sports Performance", description: "Participate in activities without worrying about glasses or contacts." },
  ],
  retina: [
    { image: "/assets/active-life.webp", title: "Maintain an active life" },
    { image: "/assets/preserve-vision.webp", title: "Preserve your vision" },
    { image: "/assets/independent-life.webp", title: "Live independently" },
  ],
};

const serviceTestimonials: Record<ServiceConfig["kind"], { quote: string; name: string; meta: string }[]> = {
  cataract: cataractTestimonials,
  lasik: [
    {
      quote: "Best decision I ever made. I can finally wake up and see clearly without reaching for glasses. The procedure was quick and painless.",
      name: "Priya Sharma",
      meta: "Blade-Free LASIK - 29 years",
    },
    {
      quote: "I was nervous before LASIK, but the team explained everything clearly. My vision felt sharper by the next day and recovery was smooth.",
      name: "Raj Patel",
      meta: "Custom LASIK - 34 years",
    },
    {
      quote: "Contact lenses used to bother me every day. LASIK gave me the comfort and confidence I was hoping for. Highly recommended.",
      name: "Anita Desai",
      meta: "LASIK Surgery - 31 years",
    },
    {
      quote: "The laser treatment took less than 10 minutes per eye with no discomfort. Waking up with clear 20/20 vision feels miraculous!",
      name: "Amitabh Verma",
      meta: "Contoura LASIK - 33 years",
    },
    {
      quote: "Fantastic experience! The doctors were extremely reassuring and answered all my questions. I was back at work in two days.",
      name: "Kavita Rao",
      meta: "Femto LASIK - 27 years",
    },
    {
      quote: "No more fogged glasses while cooking or working out. LASIK at Shanthi EyeTech completely elevated my lifestyle.",
      name: "Deepak Joshi",
      meta: "Blade-Free LASIK - 36 years",
    },
  ],
  retina: [
    {
      quote: "Early retina care helped protect my sight. The doctors were calm, precise, and explained every scan and treatment option clearly.",
      name: "Mahesh Rao",
      meta: "Retina Evaluation - 61 years",
    },
    {
      quote: "I came in with floaters and blurred vision. The team acted quickly, and the follow-up care gave me real peace of mind.",
      name: "Neela Iyer",
      meta: "Retina Care - 58 years",
    },
    {
      quote: "My diabetes had started affecting my eyes. Regular retina treatment helped me stay independent and confident with my vision.",
      name: "Farhan Khan",
      meta: "Diabetic Retina Care - 64 years",
    },
    {
      quote: "State-of-the-art retina imaging equipment and deeply knowledgeable specialists. They saved my vision from retinal detachment.",
      name: "Sanjay Gupta",
      meta: "Retinal Laser Therapy - 55 years",
    },
    {
      quote: "Outstanding diagnostic accuracy and compassionate treatment. I am deeply thankful to Dr. Solanki and the entire retina team.",
      name: "Radhika Kulkarni",
      meta: "Macular Care - 69 years",
    },
    {
      quote: "Very thorough examination and gentle injection procedure. My vision has remained stable and clear thanks to timely intervention.",
      name: "Harish Chandra",
      meta: "Anti-VEGF Treatment - 73 years",
    },
  ],
};

const serviceBenefitEyebrows: Record<ServiceConfig["kind"], string> = {
  cataract: "ADVANTAGES",
  lasik: "ADVANTAGES",
  retina: "ADVANTAGES",
};

const serviceStoryBodies: Record<ServiceConfig["kind"], string> = {
  cataract: "Real experiences from patients who restored their vision with cataract surgery",
  lasik: "Real experiences from patients who found clearer vision with LASIK surgery",
  retina: "Real experiences from patients who protected their sight with retina care",
};
const whyIcon = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {path}
  </svg>
);

const whyItems = [
  { icon: "01", title: "Expert Surgeons", text: "25+ years of specialized cataract surgery experience" },
  { icon: "02", title: "Advanced Technology", text: "State-of-the-art equipment for precision and safety" },
  { icon: "03", title: "Personalized Care", text: "Customized treatment plans for your unique needs" },
  { icon: "04", title: "Compassionate Team", text: "Dedicated support throughout your journey" },
  { icon: "05", title: "Quick Recovery", text: "Most patients resume activities within days" },
  { icon: "06", title: "Comprehensive Support", text: "Lifetime post-operative care and monitoring" },
  { icon: "07", title: "Premium IOL Options", text: "Multiple lens choices for optimal vision correction" },
  { icon: "08", title: "Proven Results", text: "15,000+ successful cataract procedures" },
];

const lasikWhyItems = [
  { icon: whyIcon(<><path d="M8 21l4-2 4 2v-7H8v7z" /><path d="M7 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0z" /><path d="M12 7v3l2 1" /></>), title: "Award-Winning Excellence", text: "Recognized nationally for refractive surgery outcomes" },
  { icon: whyIcon(<path d="M13 2L4 14h7l-1 8 10-13h-7l1-7z" />), title: "Blade-Free Technology", text: "Advanced femtosecond laser for precision and safety" },
  { icon: whyIcon(<><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M17 3.13a4 4 0 0 1 0 7.75" /></>), title: "Experienced Specialists", text: "Over 25 years of LASIK surgical expertise" },
  { icon: whyIcon(<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />), title: "Personalized Treatment", text: "Custom wavefront-guided procedures for your eyes" },
  { icon: whyIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>), title: "Quick Recovery", text: "Most patients resume normal activities within 24 hours" },
  { icon: whyIcon(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />), title: "Comprehensive Care", text: "Lifetime post-operative support and monitoring" },
  { icon: whyIcon(<><path d="M1.5 12s3.8-6 10.5-6 10.5 6 10.5 6-3.8 6-10.5 6S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" /></>), title: "All-Laser LASIK", text: "No blades involved in any part of the procedure" },
  { icon: whyIcon(<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1L12 2z" />), title: "Trusted by Thousands", text: "25,000+ successful LASIK procedures performed" },
];

export function ServicePage({ config }: { config: ServiceConfig }) {
  const isRetina = config.kind === "retina";
  const serviceWhyItems = config.kind === "lasik" ? lasikWhyItems : whyItems;
  const serviceWhyBody = config.kind === "lasik" ? "Combining advanced technology with personalized care for optimal vision correction results" : "Trusted expertise and compassionate care for safe, effective cataract treatment";
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
                            <div className="hero-buttons">
                <Link className="button button-primary" href="/contact">
                  <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {isRetina ? "Book Consultation" : "Start a Consultation"}
                </Link>
                <Link className="button button-outline" href="#eligibility">
                  <img className="button-icon" src="/assets/check_green.png" alt="" aria-hidden="true" />
                  Check Your Eligibility
                </Link>
              </div>
              <div className="hero-metrics">
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 7.5 14.2 11l-2.2 1.5L9.8 11 12 7.5Z" /><path d="M9.5 14.5h5M10.5 17h3" /></svg>
                  </span>
                  <span className="metric-copy">
                    <b style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, display: "block" }}>{config.metricA}</b>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#334155", display: "block", marginTop: "2px" }}>{isRetina ? "Retina Expertise" : "Procedures"}</span>
                  </span>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="3" /><path d="M3.5 19c.7-3.1 2.5-4.7 5.5-4.7s4.8 1.6 5.5 4.7" /><path d="M16 7.5c2.6.1 4.1 1.7 4.5 4.2M16.2 14.4c2.4.4 3.7 1.9 4.1 4.6" /></svg>
                  </span>
                  <span className="metric-copy">
                    <b style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, display: "block" }}>{config.metricB}</b>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#334155", display: "block", marginTop: "2px" }}>Success Rate</span>
                  </span>
                </div>
                <div>
                  <span className="metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  </span>
                  <span className="metric-copy">
                    <b style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, display: "block" }}>{config.metricC}</b>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#334155", display: "block", marginTop: "2px" }}>{isRetina ? "Early Detection" : "Recovery"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section service-why">
          <div className="shell">
            <SectionHeading eyebrow="WHY CHOOSE US" title={config.whyTitle} accent={config.whyAccent} body={serviceWhyBody} />
            <FeatureGrid columns={4} items={serviceWhyItems} />
          </div>
        </section>

        {config.kind === "lasik" ? (
          <section className="section service-intro lasik-intro whatis-lasik-section">
            <div className="shell split-layout service-intro-layout lasik-intro-layout">
              <div className="lasik-intro-copy">
                <Eyebrow>THE PROCEDURE</Eyebrow>
                <h2>What is <span>LASIK?</span></h2>
                <p>
                  <strong>LASIK (Laser-Assisted In Situ Keratomileusis)</strong> is the most advanced and popular laser vision correction procedure available today. It permanently reshapes the cornea to correct refractive errors and reduce dependence on glasses or contact lenses.
                </p>
                <p>
                  Using state-of-the-art femtosecond laser technology, the procedure creates a thin corneal flap, then precisely reshapes the underlying corneal tissue with an excimer laser to correct your vision. The entire process takes just 15-20 minutes for both eyes.
                </p>
                <div className="lasik-info-callout">
                  <div className="callout-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                    </svg>
                  </div>
                  <div>
                    <b>Quick &amp; Comfortable</b>
                    <span>The procedure is virtually painless with numbing eye drops, and most patients experience improved vision within 24 hours.</span>
                  </div>
                </div>
              </div>
              <div className="lasik-visual-container">
                <div className="lasik-top-images">
                  <img className="lasik-img-patient" src="/assets/lasik/lasik-procedure.webp" alt="Patient undergoing LASIK laser eye procedure" />
                  <img className="lasik-img-room" src="/assets/lasik/lasik-machine.webp" alt="Modern LASIK procedure room" />
                </div>
                <div className="lasik-bottom-image">
                  <img className="lasik-img-eye" src="/assets/whatlasik3.png" alt="Close-up LASIK precision laser procedure" />
                </div>
                <div className="lasik-badge">
                  <b>15-20 min</b>
                  <small>Procedure Time</small>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className={`section service-intro ${config.kind}-intro ${config.kind === "cataract" ? "whatis-section" : "eye-pattern"}`}>
            <div className="shell split-layout service-intro-layout">
              <div>
                <Eyebrow>{isRetina ? "ESSENTIAL KNOWLEDGE" : "UNDERSTANDING CATARACTS"}</Eyebrow>
                <h2>{config.introTitle}<br /><span>{config.introAccent}</span></h2>
                {config.introText.map((text) => <p key={text}>{text}</p>)}
                <div className="info-callout"><b>{isRetina ? "Light-Sensitive Layer" : "Good News"}</b><span>{isRetina ? "Retina care focuses on conditions affecting the retina, macula, and blood vessels at the back of the eye." : "Cataracts are treatable. Modern cataract surgery is one of the safest and most successful procedures, restoring clear vision and improving quality of life for millions of patients worldwide."}</span></div>
              </div>
              <div className="image-stack">
                <img className="stack-main" src={config.introImage} alt={config.introTitle} />
                <span>{isRetina ? "Early Evaluation" : "50+"}<small>{isRetina ? "Protects Vision" : "Age-related"}</small></span>
              </div>
            </div>
          </section>
        )}

        <section className={`section eligibility-section ${config.kind === "cataract" ? "consider-surgery-section" : config.kind === "lasik" ? "lasik-eligibility-section" : ""}`} id="eligibility">
          <div className="shell split-layout reverse-mobile consider-surgery-layout">
            <div>
              <Eyebrow>{isRetina ? "WARNING SIGNS" : "ELIGIBILITY"}</Eyebrow>
              <h2>{config.considerTitle}<br /><span>{config.considerAccent}</span></h2>
              <p>{isRetina ? "Watch out for these warning signs and schedule a comprehensive evaluation if they occur." : config.kind === "cataract" ? "Cataract surgery may be recommended if you experience any of the following:" : "You may be a good candidate if you meet the following criteria:"}</p>
              <ul className="check-list">{config.checks.map((item) => <li key={item}><img className="check-list-icon" src="/assets/blue_check.png" alt="" aria-hidden="true" /><span>{item}</span></li>)}</ul>
              <div className="note-box"><b>Important:</b> {config.kind === "cataract" ? "Only your eye care specialist can determine if cataract surgery is right for you. Schedule a comprehensive evaluation to discuss your options." : "Only your eye care specialist can determine the right treatment for you after a detailed assessment."}</div>
            </div>
            {config.kind === "cataract" ? (
              <div className="eligibility-image consider-surgery-visual">
                <img className="consider-main" src="/assets/cataract/consider_surgery2.jpeg" alt="Cataract consultation room" />
                <img className="consider-eye consider-eye-cloudy" src="/assets/cataract/consider_surgery1.jpeg" alt="Cloudy cataract eye" />
                <img className="consider-eye consider-eye-clear" src="/assets/cataract/consider_surgery3.jpeg" alt="Eye after evaluation" />
                <span><small>Common Age</small>60+<small>Years Old</small></span>
              </div>
            ) : config.kind === "lasik" ? (
              <div className="eligibility-image lasik-eligibility-visual">
                <img className="lasik-right-primary" src="/assets/lasik/lasik_right.jpeg" alt="LASIK candidate vision check" />
                <img className="lasik-right-secondary" src="/assets/lasik/lasikright2.jpeg" alt="LASIK eye examination consultation" />
                <span>18-45<small>Ideal Age Range</small></span>
              </div>
            ) : (
              <div className="eligibility-image">
                <img src={config.considerImage} alt="" />
                <span>{isRetina ? "Early" : "60+"}<small>{isRetina ? "Detection" : "Ideal Age Range"}</small></span>
              </div>
            )}
          </div>
        </section>

        <section className={`section options-section ${config.kind === "cataract" ? "cataract-options-section" : config.kind === "lasik" ? "lasik-options-section" : "eye-pattern"}`}>
          <div className="shell">
            <SectionHeading eyebrow={isRetina ? "TREATMENT OPTIONS" : config.kind === "lasik" ? "TREATABLE CONDITIONS" : "LENS & PROCEDURE OPTIONS"} title={config.optionsTitle} accent={config.optionsAccent} body={config.kind === "cataract" ? "Types of Intraocular Lenses (IOLs) - Choose the best option for your lifestyle" : config.kind === "lasik" ? "Our advanced LASIK technology effectively treats the most common refractive errors" : isRetina ? "Advanced, precise care for better outcomes." : "Choose the best option for your eyes and lifestyle."} />
            <div className={`option-grid ${isRetina ? "three" : ""}`}>
              {config.options.map((option, optionIndex) => (
                <article key={option.title}>
                  <div className="option-card-image-wrap">
                    <img src={option.image} alt={option.title} />
                    {config.kind === "lasik" && (
                      <span className="option-card-eye-badge" aria-hidden="true">
                        {optionIndex === 2 ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        ) : (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <polyline points="9 21 3 21 3 15"></polyline>
                            <line x1="21" y1="3" x2="14" y2="10"></line>
                            <line x1="3" y1="21" x2="10" y2="14"></line>
                          </svg>
                        )}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3>{option.title}</h3>
                    <b>{option.tag}</b>
                    <p>{option.text}</p>
                    {option.bullets ? (
                      <ul>{option.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    ) : (
                      config.kind !== "lasik" && <Link href="/contact">Book Consultation →</Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {!isRetina && (
          config.kind === "cataract" ? (
            <section className="section comparison-section cataract-comparison-section">
              <div className="shell">
                <SectionHeading title="Choose the" accent="Vision You Want" body="The lens you choose shapes the rest of your life. Want to put your glasses away for good? There's a lens for that. Happy using readers? That works too. Here's the honest, side-by-side comparison - no pressure, no up-sell." />
                <div className="lens-comparison-wrap">
                  <div className="lens-comparison-table" role="table" aria-label="Cataract lens comparison">
                    <div className="lens-row lens-head" role="row">
                      <div role="columnheader">Feature</div>
                      {cataractLensComparison.map((lens) => (
                        <div className={lens.popular ? "popular-lens" : ""} role="columnheader" key={lens.key}>
                          {lens.popular && <span className="popular-badge">MOST POPULAR</span>}
                          <b>{lens.title}</b>
                          {lens.subtitle && <small>{lens.subtitle}</small>}
                        </div>
                      ))}
                    </div>
                    {cataractLensFeatures.map((feature, rowIndex) => (
                      <div className={`lens-row ${rowIndex === 0 ? "lens-image-row" : ""}`} role="row" key={feature}>
                        <div role="rowheader">{feature}</div>
                        {cataractLensComparison.map((lens) => (
                          <div role="cell" key={`${lens.key}-${feature}`}>
                            {rowIndex === 0 ? <img src={lens.image} alt={`${lens.title} lens`} /> : <span className={/Excellent|Clear|Yes|Reduced|Usually covered|Minimal/.test(lens.values[rowIndex - 1]) ? "positive" : ""}>{lens.values[rowIndex - 1]}</span>}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="surgeon-note cataract-surgeon-note">
                  <span className="surgeon-note-icon" aria-hidden="true">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="21" r="21" fill="#16a34a" />
                      <circle cx="21" cy="21" r="10.5" stroke="#ffffff" strokeWidth="2" fill="none" />
                      <circle cx="21" cy="15.5" r="1.3" fill="#ffffff" />
                      <line x1="21" y1="19.2" x2="21" y2="25.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="surgeon-note-text">
                    <b>A note from the Eye Surgeon:</b>
                    <span>The &quot;best&quot; lens is the one that matches your eyes, your prescription, and how you live your life. We do a detailed evaluation before recommending anything - and we will always explain why.</span>
                  </div>
                </div>
                <Link className="button button-primary center-button" href="/contact">Get a Personalised Lens Recommendation &rarr;</Link>
              </div>
            </section>
          ) : (
            <section className="section comparison-section cataract-comparison-section lasik-comparison-section">
              <div className="shell">
                <SectionHeading title="Choose the Vision Correction Option" accent="That Fits Your Eyes" body="There is no single best procedure for everyone. The right option depends on your eye power, corneal thickness, dry eye status, lifestyle, and long-term safety. Shanthi EyeTech helps you understand your options clearly before you decide." />
                <div className="lens-comparison-wrap lasik-comparison-wrap">
                  <div className="lens-comparison-table lasik-comparison-table" role="table" aria-label="LASIK vision correction procedure comparison">
                    <div className="lens-row lens-head" role="row">
                      <div role="columnheader">Feature</div>
                      {lasikProcedureComparison.map((procedure) => (
                        <div className={procedure.highlighted ? "popular-lens" : ""} role="columnheader" key={procedure.key}>
                          <b>{procedure.title}</b>
                          <small>{procedure.subtitle}</small>
                        </div>
                      ))}
                    </div>
                    {lasikProcedureFeatures.map((feature, rowIndex) => (
                      <div className={`lens-row ${rowIndex === 0 ? "lens-image-row" : ""}`} role="row" key={feature}>
                        <div role="rowheader">{feature}</div>
                        {lasikProcedureComparison.map((procedure) => (
                          <div role="cell" key={`${procedure.key}-${feature}`}>
                            {rowIndex === 0 ? (
                              <img src={procedure.image} alt={`${procedure.title} procedure view`} />
                            ) : (
                              <span className={/Usually|Reduced|Yes|Common|Suitable|Thin|High|Laser|Surface|Implantable/.test(procedure.values[rowIndex - 1]) ? "positive" : ""}>{procedure.values[rowIndex - 1]}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="surgeon-note cataract-surgeon-note lasik-surgeon-note">
                  <span className="surgeon-note-icon" aria-hidden="true">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="21" cy="21" r="21" fill="#16a34a" />
                      <circle cx="21" cy="21" r="10.5" stroke="#ffffff" strokeWidth="2" fill="none" />
                      <circle cx="21" cy="15.5" r="1.3" fill="#ffffff" />
                      <line x1="21" y1="19.2" x2="21" y2="25.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="surgeon-note-text">
                    <b>A note from the Eye Surgeon:</b>
                    <span>The best procedure is not the most popular one. The best procedure is the one that is safest for your eyes, your cornea, your power, and your lifestyle. That is why we do a detailed evaluation before recommending anything.</span>
                  </div>
                </div>
                <Link className="button button-primary center-button lasik-recommendation-button" href="/contact"><span>Get My Personalised Vision Correction Recommendation</span><img src="/assets/white_arrow.png" alt="" aria-hidden="true" /></Link>
              </div>
            </section>
          )
        )}
        <section className="section benefit-section cataract-benefits-section service-benefits-section">
          <div className="shell">
            <SectionHeading eyebrow={serviceBenefitEyebrows[config.kind]} title={config.benefitsTitle} accent={config.benefitsAccent} />
            <CataractBenefitsCarousel benefits={serviceBenefitItems[config.kind]} />
          </div>
        </section>
        <section className="section cataract-testimonials-section service-testimonials-section">
          <div className="shell">
            <SectionHeading eyebrow="PATIENT STORIES" title="You're Not Alone," accent="Hear From Others Like You" body={serviceStoryBodies[config.kind]} />
            <TestimonialCarousel items={serviceTestimonials[config.kind]} />
          </div>
        </section>
        <FAQ title={`${config.serviceName}`} accent="FAQs" service={config.serviceName.toLowerCase()} />
        <AppointmentSection withForm={false} kind={config.kind} image={config.kind === "lasik" ? "/assets/lasik/vision_journey.jpeg" : config.kind === "retina" ? "/assets/retina-chair.webp" : "/assets/cataract-chair.webp"} />
      </main>
      <Footer home />
    </>
  );
}

