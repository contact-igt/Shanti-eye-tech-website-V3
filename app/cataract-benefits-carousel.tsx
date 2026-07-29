"use client";

import { useState } from "react";

export type CataractBenefit = {
  image: string;
  title: string;
  description?: string;
};

export function CataractBenefitsCarousel({ benefits }: { benefits: CataractBenefit[] }) {
  const [activeIndex, setActiveIndex] = useState(1);

  if (!benefits.length) return null;

  const total = benefits.length;
  const ordered = [
    benefits[(activeIndex - 1 + total) % total],
    benefits[activeIndex],
    benefits[(activeIndex + 1) % total],
  ];

  const goPrev = () => setActiveIndex((index) => (index - 1 + total) % total);
  const goNext = () => setActiveIndex((index) => (index + 1) % total);

  return (
    <div className="cataract-benefits-carousel" aria-label="Benefits of modern cataract surgery">
      <button className="benefit-arrow benefit-arrow-prev" type="button" aria-label="Previous benefit" onClick={goPrev}>&lsaquo;</button>
      <div className="cataract-benefit-track" aria-live="polite">
        {ordered.map((benefit, index) => (
          <article className={`cataract-benefit-card ${index === 1 ? "is-active" : "is-side"}`} key={`${benefit.title}-${index}`}>
            <img src={benefit.image} alt={benefit.title} />
            <h3>{benefit.title}</h3>
            {benefit.description ? <p>{benefit.description}</p> : null}
          </article>
        ))}
      </div>
      <button className="benefit-arrow benefit-arrow-next" type="button" aria-label="Next benefit" onClick={goNext}>&rsaquo;</button>
    </div>
  );
}