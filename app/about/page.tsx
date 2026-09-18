import { AboutHero } from "../components/about/AboutHero";
import { AboutStory } from "../components/about/AboutStory";
import { AboutPhilosophy } from "../components/about/AboutPhilosophy";
import { AboutLeadership } from "../components/about/AboutLeadership";
import { AboutCapabilities } from "../components/about/AboutCapabilities";
import { AboutWhyChoose } from "../components/about/AboutWhyChoose";
import { AboutImpactBand } from "../components/about/AboutImpactBand";
import { AboutFacilities } from "../components/about/AboutFacilities";
import { AppointmentSection, Footer, Header } from "../site-components";

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main className="about-page">
        <AboutHero />
        <AboutStory />
        <AboutPhilosophy />
        <AboutLeadership />
        <AboutCapabilities />
        <AboutWhyChoose />
        <AboutImpactBand />
        <AboutFacilities />
        <div className="home-page">
          <AppointmentSection />
        </div>
      </main>
      <Footer home />
    </>
  );
}
