import {
  ContactDetails,
  ContactFAQSection,
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
        <ContactFAQSection />
      </main>
      <Footer home />
    </>
  );
}
