import { CountUp } from "@/app/client";
import { SectionHeading } from "@/app/site-components";
import styles from "./NumbersSection.module.css";

export function NumbersSection() {
  return (
    <section className={`section numbers-section ${styles.numbersSection}`}>
      <svg
        className="numbers-world-map"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern
            id="numbers-map-dots"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4.5" cy="4.5" r="1.45" fill="#d2d9e4" />
          </pattern>
        </defs>
        <g fill="url(#numbers-map-dots)">
          <path d="M177 98c42-25 85-29 129-12l44 32-12 49-42 8-25 38-41 4-17 38-34-12-10-47-34-18 12-42 30-14 1-36Z" />
          <path d="m308 263 43 20 13 48-21 41 4 64-27 59-26-23-4-67-20-39 17-42-13-31 34-30Z" />
          <path d="m592 104 38-20 43 8 13 27-24 24-23-4-15 25-35-17 3-43Z" />
          <path d="m650 173 42 8 29 48-17 37-9 61-34 52-29-56-20-47 17-47 20-16Z" />
          <path d="m698 101 66-30 103 17 39-17 86 30 76 1 59 34-8 35-75 9-45-10-29 30-48-5-37 28-48-2-42-23-55 3-37-29 9-42Z" />
          <path d="m1050 234 51 13 38 33-15 32-55 13-31-25 12-66Z" />
          <path d="m1127 390 53-16 59 20 24 39-40 27-70-7-32-33 6-30Z" />
        </g>
      </svg>
      <div className="shell">
        <SectionHeading
          eyebrow="TRUSTED BY THOUSANDS"
          title="Numbers That Speak"
          accent="Our Excellence"
        />
        <div className="numbers-grid">
          <article>
            <span className="number-watermark" aria-hidden="true">
              25
            </span>
            <b>
              <CountUp value={25} suffix="+" />
            </b>
            <span>Years of Excellence in Eye Care</span>
          </article>
          <article>
            <span className="number-watermark" aria-hidden="true">
              49999
            </span>
            <b>
              <CountUp value={49999} suffix="+" />
            </b>
            <span>Successful Procedures Completed</span>
          </article>
          <article>
            <span className="number-watermark" aria-hidden="true">
              97
            </span>
            <b>
              <CountUp value={97} suffix="%" />
            </b>
            <span>Patient Satisfaction Rate</span>
          </article>
          <article>
            <span className="number-watermark" aria-hidden="true">
              15
            </span>
            <b>
              <CountUp value={15} suffix="+" />
            </b>
            <span>Expert Ophthalmologists</span>
          </article>
        </div>
      </div>
    </section>
  );
}
