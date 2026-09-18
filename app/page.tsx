import Link from "next/link";
import { ArrowRight, Award, Users, Clock, Calendar, Eye, Stethoscope, ShieldCheck, Star, Target } from "lucide-react";
import { CountUp } from "./client";
import { HeroBanner } from "./components/home/HeroBanner";
import { TrustStrip } from "./components/home/TrustStrip";
import { NumbersSection } from "./components/home/NumbersSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { TechnologySection } from "./components/home/TechnologySection";
import { DoctorSection } from "./components/home/DoctorSection";
import { CommitmentSection } from "./components/home/CommitmentSection";
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

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header active="home" />
      <main className="home-page">
        <HeroBanner />
        <TrustStrip />
        <NumbersSection />
        <ServicesSection />
        <TechnologySection />
        <DoctorSection />
        <CommitmentSection />

        <div id="testimonials"><Testimonials title="Transforming Lives," subtitle="One Vision at a Time" /></div>
        <FAQ />
        <AppointmentSection />
      </main>
      <Footer home />
    </>
  );
}

