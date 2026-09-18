"use client";

import Slider from "react-slick";
import { Activity, Eye, Microscope, Ruler, ScanEye } from "lucide-react";
import { technology } from "../../home/TechnologySection/content";
import styles from "./AboutCapabilities.module.css";

const icons = [Ruler, Eye, ScanEye, Activity, Microscope];

export function AboutCapabilitiesGrid() {
  return (
    <div className={styles.equipmentSlider} aria-label="Hospital equipment">
      <Slider slidesToShow={4} slidesToScroll={1} infinite autoplay autoplaySpeed={3500} dots arrows={false} pauseOnHover accessibility responsive={[
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ]}>
        {technology.map((item, index) => {
          const Icon = icons[index] ?? Activity;
          return <div key={item.title} className={styles.equipmentSlide}>
            <article className="feature-card">
              <span className="icon-box" aria-hidden="true"><Icon size={28} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </div>;
        })}
      </Slider>
    </div>
  );
}
