"use client";

import { useSyncExternalStore } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TreatmentItem } from "./ComprehensiveTreatments";
import styles from "./styles.module.css";
import sliderStyles from "./TreatmentsSlider.module.css";

type Props = {
  treatments: TreatmentItem[];
};

const subscribe = () => () => {};
const mobileQuery = "(max-width: 575px)";

const subscribeToMobile = (callback: () => void) => {
  const mediaQuery = window.matchMedia(mobileQuery);
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
};

const getMobileSnapshot = () => window.matchMedia(mobileQuery).matches;

export function TreatmentsSlider({ treatments }: Props) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isMobile = useSyncExternalStore(subscribeToMobile, getMobileSnapshot, () => false);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: isMobile ? 1 : 1.5,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots ${sliderStyles.dots}`,
  };

  if (!mounted) {
    return (
      <div className={sliderStyles.sliderWrap}>
        <div className={sliderStyles.fallbackTrack}>
          {treatments.slice(0, 2).map((treatment) => (
              <div key={treatment.title} className={sliderStyles.fallbackSlide}>
                <Link
                  href={treatment.href}
                  className={styles.card}
                  aria-label={`Explore ${treatment.title}`}
                >
                  <img src={treatment.image} alt="" />
                  <div className={styles.overlay} />
                  <div className={styles.content}>
                    <h3>{treatment.title}</h3>
                    <p>{treatment.desc}</p>
                    <span className={styles.exploreBtn}>
                      Explore More <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={sliderStyles.sliderWrap}>
      <Slider key={isMobile ? "mobile" : "tablet"} {...settings}>
        {treatments.map((treatment) => (
            <div key={treatment.title} className={sliderStyles.slide}>
              <Link
                href={treatment.href}
                className={styles.card}
                aria-label={`Explore ${treatment.title}`}
              >
                <img src={treatment.image} alt="" />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.desc}</p>
                  <span className={styles.exploreBtn}>
                    Explore More <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
        ))}
      </Slider>
    </div>
  );
}
