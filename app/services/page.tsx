import { ComprehensiveTreatments } from "../components/services/ComprehensiveTreatments";
import { OverviewWhyFaq } from "../components/services/OverviewWhyFaq";
import { TreatmentsOverviewHero } from "../components/services/TreatmentsOverviewHero";
import { AppointmentSection, Footer, Header } from "../site-components";

export default function ServicesOverviewPage() {
  return (
    <>
      <Header active="services" />
      <main className="services-overview-page">
        <TreatmentsOverviewHero />
        <ComprehensiveTreatments />
        <OverviewWhyFaq />
        <div className="home-page">
          <AppointmentSection withForm={false} kind="overview" />
        </div>
      </main>
      <Footer home />
    </>
  );
}
