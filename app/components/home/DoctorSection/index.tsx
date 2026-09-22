import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/app/client";
import { Eyebrow } from "@/app/site-components";
import styles from "./DoctorSection.module.css";

function DoctorStatIcon({ type }: { type: "award" | "cap" | "people" }) {
  if (type === "cap")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 9 9-4 9 4-9 4-9-4Z" />
        <path d="M7 11.5V16c2.8 2.2 7.2 2.2 10 0v-4.5M21 10v5" />
        <circle cx="21" cy="17" r="1" />
      </svg>
    );
  if (type === "people")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.4-3.4 2.4-5.3 6-5.3s5.6 1.9 6 5.3M16 10c2.4-.1 4 1.3 4.5 3.8M16.5 15.4c2.8.3 4.2 1.8 4.5 4.6" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" />
      <path d="m9.5 8-2-1.5.8-2.4 2.4-.3L12 2l1.3 1.8 2.4.3.8 2.4-2 1.5" />
    </svg>
  );
}

export function DoctorSection() {
  return (
    <section className={`section doctor-section ${styles.doctorSection}`} id="doctor">
      <div className="shell doctor-layout">
        <div className="doctor-photo">
          <span>
            <span className="green-dot"></span>Available Today
          </span>
          <img src="/assets/meet_doctor.jpg" alt="Dr. Amit N Solanki beside eye examination equipment" />
          <small>Medical Director of Shanti Eye Care</small>
        </div>
        <div className="doctor-copy">
          <Eyebrow>DIRECTOR</Eyebrow>
          <h2>Dr. Amit N Solanki</h2>
          <h4>Chief Ophthalmologist &amp; Medical Director</h4>
          <p>
            Dedicated to ophthalmology since 2003 in cataract, glaucoma, and refractive surgery, Dr. Solanki is recognized internationally for his expertise in advanced phaco cataract surgery and glaucoma management.
          </p>
          <ul>
            <li>Cataract, Glaucoma and Refractive Surgeon</li>
            <li>Former Senior Resident - Aravind Eye Hospital, Tamil Nadu</li>
          </ul>
          <div className="doctor-stats">
            <div>
              <DoctorStatIcon type="award" />
              <b>
                <CountUp value={15} suffix="+" />
              </b>
              <span>Awards &amp; Recognition</span>
            </div>
            <div>
              <DoctorStatIcon type="cap" />
              <b>FAECS</b>
              <span>Professional Fellowship</span>
            </div>
            <div>
              <DoctorStatIcon type="people" />
              <b>
                <CountUp value={49} suffix="K+" />
              </b>
              <span>Surgeries Performed</span>
            </div>
          </div>
          <div className="hero-buttons">
            <Link
              className="button green-button"
              href="/contact#contact-form"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <svg className="doctor-action-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M8 3v4M16 3v4M4 10h16" />
              </svg>
              Book Consultation <ArrowRight size={18} />
            </Link>
            <Link className="button button-outline" href="/doctors#doctor-banner">
              View Full Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}