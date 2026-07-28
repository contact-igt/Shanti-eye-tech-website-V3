"use client";

import { useEffect, useState } from "react";

export type TestimonialItem = {
  quote: string;
  name: string;
  meta: string;
};

export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w <= 576) {
        setVisibleCount(1);
      } else if (w <= 992) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovered || items.length <= visibleCount) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [items.length, visibleCount, isHovered]);

  if (!items || items.length === 0) return null;

  const total = items.length;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(items[(currentIndex + i) % total]);
  }

  return (
    <div
      className="testimonial-carousel-container"
      aria-label="Patient reviews carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`testimonial-grid-wrapper visible-${visibleCount}`}>
        {visibleItems.map((item, idx) => (
          <article className="cataract-testimonial-card testimonial-slide-card" key={`${item.name}-${idx}`}>
            <span className="testimonial-pin" aria-hidden="true"></span>
            <div className="testimonial-stars" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="/assets/testimonial_star.png" alt="" key={index} />
              ))}
            </div>
            <img className="testimonial-quote-mark" src="/assets/quote.png" alt="" aria-hidden="true" />
            <p>"{item.quote}"</p>
            <hr />
            <strong>{item.name}</strong>
            <small>{item.meta}</small>
          </article>
        ))}
      </div>

      <div className="testimonial-carousel-controls">
        <button
          type="button"
          className="testimonial-nav-btn prev-btn"
          onClick={goPrev}
          aria-label="Previous review"
        >
          ‹
        </button>
        <div className="testimonial-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`testimonial-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="testimonial-nav-btn next-btn"
          onClick={goNext}
          aria-label="Next review"
        >
          ›
        </button>
      </div>
    </div>
  );
}
