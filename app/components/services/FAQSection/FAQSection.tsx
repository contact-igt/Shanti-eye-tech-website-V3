"use client";

import Link from "next/link";
import { Eyebrow } from "../common/Eyebrow/Eyebrow";
import type { FAQContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

export function FAQSection({ content, kind }: { content: FAQContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <div className={styles.card}>
          <h3>{content.cardTitle}</h3>
          <p>{content.cardText}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="#appointment">Schedule Consultation</Link>
            <a className={styles.outline} href="tel:+919179191939">Call Us Now</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2>{content.title} <span>{content.accent}</span></h2>
          </div>
          <div className={styles.faqBox}>
            {content.items.map((item, index) => (
              <details open={index === 0} key={item.question}>
                <summary><span>{item.question}</span><b aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
