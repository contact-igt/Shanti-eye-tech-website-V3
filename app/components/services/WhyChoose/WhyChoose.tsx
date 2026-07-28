import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { ServiceKind, WhyChooseContent } from "@/app/services/types";
import styles from "./styles.module.css";

function renderIcon(name: string) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const getSvg = (key: string) => {
    switch (key) {
      case "award":
      case "doctor":
      case "01":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/></svg>;
      case "zap":
      case "tech":
      case "02":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2"/></svg>;
      case "users":
      case "attention":
      case "03":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
      case "heart":
      case "care":
      case "04":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>;
      case "clock":
      case "05":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
      case "shield":
      case "06":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
      case "eye":
      case "07":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M1.5 12s3.8-6 10.5-6 10.5 6 10.5 6-3.8 6-10.5 6S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>;
      case "star":
      case "08":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"/></svg>;
      case "dollar":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
      case "location":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
      case "staff":
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
      default:
        return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>;
    }
  };

  return <span className={styles.icon}>{getSvg(name)}</span>;
}
export function WhyChoose({ content, kind }: { content: WhyChooseContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} accent={content.accent} body={content.body} />
        <div className={styles.grid}>
          {content.items.map((item, idx) => (
            <article className={styles.card} key={item.title}>
              {renderIcon(item.icon)}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

