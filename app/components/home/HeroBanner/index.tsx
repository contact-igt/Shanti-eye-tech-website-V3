import Link from "next/link";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { CountUp } from "@/app/client";
import { Eyebrow } from "@/app/site-components";
import styles from "./HeroBanner.module.css";

export function HeroBanner() {
  return (
    <section className={`home-hero ${styles.homeHero}`}>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <Eyebrow>ADVANCED EYE CARE</Eyebrow>
          <h1>
            Your Vision,
            <br />
            <span>Our Precision</span>
          </h1>
          <p>
            Experience world-class ophthalmology care with cutting-edge technology and compassionate specialists dedicated to preserving and enhancing your vision.
          </p>
          <div className="hero-buttons">
            <Link
              className="button button-primary"
              href="/contact"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              Book Consultation <ArrowRight size={18} />
            </Link>
            <a
              className="button button-outline"
              href="tel:+919179191939"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              Call Now <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-metrics" aria-label="Shanti EyeTech highlights">
            <div>
              <span className="metric-icon" aria-hidden="true">
                <Award size={20} strokeWidth={2} color="#22c44a" />
              </span>
              <span className="metric-copy">
                <b>
                  <CountUp value={25} suffix="+" />
                </b>
                <span>Years Excellence</span>
              </span>
            </div>
            <div>
              <span className="metric-icon" aria-hidden="true">
                <Users size={20} strokeWidth={2} color="#22c44a" />
              </span>
              <span className="metric-copy">
                <b>
                  <CountUp value={50} suffix="K+" />
                </b>
                <span>Happy Patients</span>
              </span>
            </div>
            <div>
              <span className="metric-icon" aria-hidden="true">
                <Clock size={20} strokeWidth={2} color="#22c44a" />
              </span>
              <span className="metric-copy">
                <b>
                  <CountUp value={24} suffix="/7" />
                </b>
                <span>Emergency Care</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/solsanki_bg.png" alt="" className="hero-doctor-bg" />
        <img src="/assets/solanski.png" alt="Dr. Solanki Specialist" className="hero-doctor-img" />
      </div>
    </section>
  );
}
