import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { CountUp } from "@/app/client";
import { Eyebrow } from "@/app/site-components";
import styles from "./AboutHero.module.css";
import { AboutVideoButton } from "./AboutVideoButton";

export function AboutHero() {
  return (
    <section className={`about-hero ${styles.aboutHero}`}>
      <div className="shell about-hero-layout">
        <div>
          <Eyebrow>OUR STORY</Eyebrow>
          <h1>
            Building a Legacy of<br />
            <span>Visionary Care</span>
          </h1>
          <p>
            For over two decades, Shanti EyeTech has been at the forefront of ophthalmology in India, combining clinical excellence with compassionate care to restore and preserve the gift of sight.
          </p>
          <div className="hero-buttons">
            <Link
              className="button button-primary"
              href="/contact#contact-form"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Calendar size={18} /> Book Consultation
            </Link>
            <a
              className="button button-outline"
              href="tel:+919179191939"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
        <div className="about-hero-photos">
          <img
            className="main-photo"
            src="/assets/clinic-lounge.webp"
            alt="Shanti EyeTech clinic lounge"
          />
          <img
            className="side-photo"
            src="/assets/clinic-reception.webp"
            alt="Clinic reception"
          />
          <AboutVideoButton />
          <div className="photo-stats">
            <div>
              <b>
                <CountUp value={20} suffix="+" />
              </b>
              <span>Years</span>
            </div>
            <div>
              <b>
                <CountUp value={50} suffix="K+" />
              </b>
              <span>Patients</span>
            </div>
            <div>
              <b>
                <CountUp value={97} suffix="%" />
              </b>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
