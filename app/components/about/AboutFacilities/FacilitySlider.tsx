"use client";

import Slider from "react-slick";
import styles from "./AboutFacilities.module.css";

export function FacilitySlider({ items }: { items: { image: string; title: string; text: string }[] }) {
  return (
    <div className={`facility-grid ${styles.slider}`} aria-label="Hospital facilities">
      <Slider slidesToShow={3} slidesToScroll={1} infinite autoplay autoplaySpeed={3500} dots arrows={false} pauseOnHover accessibility responsive={[
        { breakpoint: 900, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ]}>
        {items.map((item) => (
          <div key={item.title} className={styles.slide}>
            <article>
              <img src={item.image} alt={item.title} />
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
}
