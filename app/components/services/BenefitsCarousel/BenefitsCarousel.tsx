"use client";

import { useState } from "react";
import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { BenefitsContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function BenefitsCarousel({ content, kind }: { content: BenefitsContent; kind: ServiceKind }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = content.items.length;
  const ordered = [
    content.items[(activeIndex - 1 + total) % total],
    content.items[activeIndex],
    content.items[(activeIndex + 1) % total],
  ];

  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} accent={content.accent} body={content.body} />
        <div className={styles.carousel}>
          <button className={`${styles.arrow} ${styles.prev}`} type="button" aria-label="Previous benefit" onClick={() => setActiveIndex((index) => (index - 1 + total) % total)}><img src="/assets/arrowleft_slider.png" alt="" aria-hidden="true" /></button>
          <div className={styles.track} aria-live="polite">
            {ordered.map((benefit, index) => (
              <article className={`${styles.card} ${index === 1 ? styles.active : styles.side}`} key={`${benefit.title}-${index}`}>
                <img src={benefit.image} alt={benefit.title} />
                <h3>{benefit.title}</h3>
                {benefit.description ? <p>{benefit.description}</p> : null}
              </article>
            ))}
          </div>
          <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next benefit" onClick={() => setActiveIndex((index) => (index + 1) % total)}><img src="/assets/arrowright_slider.png" alt="" aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}


