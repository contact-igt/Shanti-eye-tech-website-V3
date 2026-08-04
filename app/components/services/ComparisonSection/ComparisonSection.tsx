import Link from "next/link";
import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { ComparisonContent, ServiceKind } from "@/app/services/types";
import styles from "./styles.module.css";

function isPositive(value: string) {
  return /Excellent|Clear|Yes|Reduced|Usually|Common|Suitable|Thin|High|Laser|Surface|Implantable|covered|Minimal/.test(value);
}

export function ComparisonSection({ content, kind }: { content: ComparisonContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <SectionHeading title={content.title} accent={content.accent} body={content.body} />
        <div className={styles.tableWrap}>
          <div className={styles.table} role="table">
            <div className={`${styles.row} ${styles.head}`} role="row">
              <div role="columnheader">Feature</div>
              {content.columns.map((column) => (
                <div className={column.highlighted || column.popular ? styles.highlighted : ""} role="columnheader" key={column.key}>
                  {column.popular ? <span className={styles.popularTag}><span aria-hidden="true">•</span> MOST POPULAR</span> : null}
                  <b>{column.title}</b>
                  {column.subtitle ? <small>{column.subtitle}</small> : null}
                </div>
              ))}
            </div>
            {content.features.map((feature, rowIndex) => (
              <div className={`${styles.row} ${rowIndex === 0 ? styles.imageRow : ""}`} role="row" key={feature}>
                <div role="rowheader">{feature}</div>
                {content.columns.map((column) => (
                  <div role="cell" key={`${column.key}-${feature}`}>
                    {rowIndex === 0 ? (
                      <img src={column.image} alt={`${column.title} view`} />
                    ) : (
                      <span className={isPositive(column.values[rowIndex - 1]) ? styles.positive : ""}>{column.values[rowIndex - 1]}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.note}>
          <span className={styles.infoBadge} aria-hidden="true">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="21" fill="#16a34a" />
              <circle cx="21" cy="21" r="10.5" stroke="#ffffff" strokeWidth="2" fill="none" />
              <circle cx="21" cy="15.5" r="1.3" fill="#ffffff" />
              <line x1="21" y1="19.2" x2="21" y2="25.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div className={styles.noteTextWrap}>
            <b>{content.noteTitle}</b>
            <span>{content.noteText}</span>
          </div>
        </div>
        <Link className={styles.cta} href="/contact">
          <span>{content.cta}</span>
          <img src="/assets/white_arrow.png" alt="" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
