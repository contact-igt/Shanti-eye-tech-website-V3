"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Ruler, Eye, ScanEye, Activity, Microscope } from "lucide-react";
import styles from "./TechnologySection.module.css";

const equipmentIcons = [Ruler, Eye, ScanEye, Activity, Microscope];

export function TechnologySlider({ items }: { items: { title: string; text: string }[] }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateWidth = () => setSlidesToShow(window.innerWidth <= 640 ? 1 : window.innerWidth <= 992 ? 2 : 3);
    updateWidth();
    setReady(true);
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const cards = items.map((item, index) => {
    const Icon = equipmentIcons[index] ?? Activity;
    return (
    <div key={item.title} className={styles.slide}>
      <article className={styles.card}>
        <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.icon} aria-hidden="true"><Icon size={28} strokeWidth={1.8} /></span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>
    </div>
    );
  });

  return (
    <div className={styles.slider} aria-label="Advanced technology and equipment">
      {ready ? (
        <Slider
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          initialSlide={0}
          infinite
          autoplay
          autoplaySpeed={3500}
          speed={600}
          cssEase="cubic-bezier(0.45, 0, 0.55, 1)"
          dots
          arrows={false}
          pauseOnHover={false}
          pauseOnFocus={false}
          pauseOnDotsHover={false}
          accessibility
        >
          {cards}
        </Slider>
      ) : <div className={styles.fallback}>{cards}</div>}
    </div>
  );
}
