"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Activity, Eye, Microscope, Ruler, ScanEye } from "lucide-react";
import { technology } from "../../home/TechnologySection/content";
import styles from "./AboutCapabilities.module.css";

const icons = [Ruler, Eye, ScanEye, Activity, Microscope];

export function AboutCapabilitiesGrid() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateSlides = () => setSlidesToShow(window.innerWidth <= 640 ? 1 : window.innerWidth <= 992 ? 2 : 4);
    updateSlides();
    setReady(true);
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const cards = technology.map((item, index) => {
    const Icon = icons[index] ?? Activity;
    return <div key={item.title} className={styles.equipmentSlide}>
      <article className="feature-card">
        <span className="icon-box" aria-hidden="true"><Icon size={28} /></span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>
    </div>;
  });

  return (
    <div className={styles.equipmentSlider} aria-label="Hospital equipment">
      {ready ? (
        <Slider slidesToShow={slidesToShow} slidesToScroll={1} infinite autoplay autoplaySpeed={3500} dots arrows={false} pauseOnHover accessibility>
          {cards}
        </Slider>
      ) : <div className={styles.fallback}>{cards}</div>}
    </div>
  );
}
