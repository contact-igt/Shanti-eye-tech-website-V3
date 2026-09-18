import { DoctorHero } from "../components/doctors/DoctorHero";
import { DoctorProfileSections } from "../components/doctors/DoctorProfileSections";
import { AboutMilestones } from "../components/about/AboutMilestones";
import { AppointmentSection, Footer, Header } from "../site-components";

export default function DoctorsPage() {
  return (
    <>
      <Header active="doctors" />
      <main>
        <DoctorHero />
        <DoctorProfileSections />
        <AboutMilestones />
        <div className="home-page">
          <AppointmentSection withForm={false} kind="doctor" />
        </div>
      </main>
      <Footer home />
    </>
  );
}
