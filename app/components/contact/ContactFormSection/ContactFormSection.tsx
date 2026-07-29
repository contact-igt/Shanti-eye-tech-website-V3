import { ContactForm } from "@/app/client";
import { SectionHeading } from "../../services/common/SectionHeading/SectionHeading";
import styles from "./styles.module.css";

function LocationIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function NavPointerIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

export function ContactFormSection() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="We’re here for you."
          accent="Our team will contact Shortly"
          body="Have questions or need assistance? Share your details and our friendly eyecare team is here to help. Contact us by phone, email, or visit our medical center - we're always ready to assist you."
        />
        <div className={styles.layout}>
          <ContactForm />
          <div className={styles.mapCard}>
            <iframe
              title="Shanti EyeTech location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1437014017415!2d75.88692329999999!3d22.722899599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5037568439%3A0xb4160c93774cf232!2sDr.%20Amit%20Solanki%20Eye%20Specialist%20Shanti%20EyeTech%20Best%20Eye%20Hospital%20in%20Indore!5e0!3m2!1sen!2sin!4v1783316499353!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <article className={styles.mapArticle}>
              <span className={styles.mapCardIcon}>
                <LocationIcon size={18} />
              </span>
              <div>
                <h3>Shanthi EyeTech</h3>
                <p>
                  Shekhar Central, M1 &amp; M2,
                  <br />
                  Palasia Square, Manorama Ganj,
                  <br />
                  Indore, MP 452001
                </p>
                <a
                  href="https://maps.google.com/?q=Shekhar+Central+Palasia+Indore"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.directionsLink}
                >
                  <img src="/assets/contact_getdirection.png" alt="" aria-hidden="true" style={{ width: 14, height: 14 }} /> Get Directions
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
