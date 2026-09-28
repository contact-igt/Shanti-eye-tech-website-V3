"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./AboutFacilities.module.css";

export function FacilitySlider({ items }: { items: { image: string; title: string; text: string }[] }) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateSlides = () => setSlidesToShow(window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    updateSlides();
    setReady(true);
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const cards = items.map((item) => (
    <div key={item.title} className={styles.slide}>
      <article>
        <img src={item.image} alt={item.title} />
        <div><h3>{item.title}</h3><p>{item.text}</p></div>
      </article>
    </div>
  ));

  return (
    <div className={`facility-grid ${styles.slider}`} aria-label="Hospital facilities">
      {ready ? (
        <Slider slidesToShow={slidesToShow} slidesToScroll={1} infinite autoplay autoplaySpeed={3500} dots arrows={false} pauseOnHover accessibility>
          {cards}
        </Slider>
      ) : <div className={styles.fallback}>{cards}</div>}
    </div>
  );
}
