import { Header, Footer } from "@/app/site-components";
import type { ServicePageContent } from "@/app/services/types";
import { AppointmentCTA } from "../AppointmentCTA/AppointmentCTA";
import { BenefitsCarousel } from "../BenefitsCarousel/BenefitsCarousel";
import { ComparisonSection } from "../ComparisonSection/ComparisonSection";
import { EligibilitySection } from "../EligibilitySection/EligibilitySection";
import { FAQSection } from "../FAQSection/FAQSection";
import { HeroBanner } from "../HeroBanner/HeroBanner";
import { IntroSection } from "../IntroSection/IntroSection";
import { TestimonialsSection } from "../TestimonialsSection/TestimonialsSection";
import { TreatmentOptions } from "../TreatmentOptions/TreatmentOptions";
import { WhyChoose } from "../WhyChoose/WhyChoose";
import styles from "./styles.module.css";

export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <Header active="services" />
      <main className={styles.page}>
        <HeroBanner content={content.hero} kind={content.kind} />
        <WhyChoose content={content.whyChoose} kind={content.kind} />
        <IntroSection content={content.intro} kind={content.kind} />
        <EligibilitySection content={content.eligibility} kind={content.kind} />
        <TreatmentOptions content={content.treatmentOptions} kind={content.kind} />
        {content.comparison ? <ComparisonSection content={content.comparison} kind={content.kind} /> : null}
        <BenefitsCarousel content={content.benefits} kind={content.kind} />
        <TestimonialsSection content={content.testimonials} kind={content.kind} />
        <FAQSection content={content.faq} kind={content.kind} />
        <AppointmentCTA content={content.appointment} kind={content.kind} />
      </main>
      <Footer />
    </>
  );
}
