import { DoctorHero } from "../components/doctors/DoctorHero";
import { DoctorProfileSections } from "../components/doctors/DoctorProfileSections";
import { AppointmentSection, Footer, Header } from "../site-components";

export default function DoctorsPage() {
  return (
    <>
      <Header active="doctors" />
      <main>
        <DoctorHero />
        <DoctorProfileSections />
        <div className="home-page">
          <AppointmentSection />
        </div>
      </main>
      <Footer home />
    </>
  );
}
