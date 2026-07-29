"use client";

import { useState } from "react";
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

function PhoneIcon({ size = 20, className }: { size?: number; className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 20, className }: { size?: number; className?: string }) {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon({ size = 20, className }: { size?: number; className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const cardData = [
  {
    id: "visit",
    icon: <LocationIcon size={22} />,
    title: "Visit Us",
    body: (
      <>
        Shekhar Central, M1 &amp; M2,
        <br />
        Palasia Square, Manorama Ganj,
        <br />
        Indore, MP 452001
      </>
    ),
    linkHref: "https://maps.google.com/?q=Shekhar+Central+Palasia+Indore",
    linkLabel: (
      <>
        <LocationIcon size={14} /> Get Directions
      </>
    ),
    isExternal: true,
  },
  {
    id: "call",
    icon: <PhoneIcon size={22} />,
    title: "Call Us Anytime",
    body: (
      <>
        9179191939 , 07314291939
      </>
    ),
    linkHref: "tel:+919179191939",
    linkLabel: (
      <>
        <PhoneIcon size={15} /> Call Now
      </>
    ),
    isExternal: false,
  },
  {
    id: "email",
    icon: <MailIcon size={22} />,
    title: "Email Us",
    body: "info@shanthieyetech.com",
    linkHref: "mailto:info@shanthieyetech.com",
    linkLabel: (
      <>
        <MailIcon size={14} /> Send Email
      </>
    ),
    isExternal: false,
  },
  {
    id: "hours",
    icon: <ClockIcon size={22} />,
    title: "Working Hours",
    body: (
      <>
        Monday – Friday: 8:00 AM – 8:00 PM
        <br />
        <br />
        Sunday: Closed
      </>
    ),
    linkHref: null,
    linkLabel: null,
    isExternal: false,
  },
];

export function ContactDetails() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default active card is index 1 ("Call Us Anytime") unless hovering another card
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 1;

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s Connect for your"
          accent="Personalised eye care"
          body="Have questions or need assistance? Our friendly eyecare team is here to help. Contact us by phone, email, or visit our medical center - we're always ready to assist you."
        />
        <div className={styles.grid} onMouseLeave={() => setHoveredIndex(null)}>
          {cardData.map((card, index) => {
            const isFeatured = index === activeIndex;

            return (
              <article
                key={card.id}
                className={`${styles.card} ${isFeatured ? styles.featuredCard : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <span className={`${styles.iconBox} ${isFeatured ? styles.featuredIconBox : ""}`}>
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                {card.linkHref && (
                  <a
                    className={isFeatured ? styles.lightButton : styles.cardLink}
                    href={card.linkHref}
                    target={card.isExternal ? "_blank" : undefined}
                    rel={card.isExternal ? "noreferrer" : undefined}
                  >
                    {card.linkLabel}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
