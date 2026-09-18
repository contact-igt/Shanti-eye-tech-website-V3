import {
  ContactDetails,
  ContactFormSection,
  ContactHero,
} from "../components/contact";
import { Footer, Header } from "../site-components";

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactFormSection />
      </main>
      <Footer home />
    </>
  );
}
