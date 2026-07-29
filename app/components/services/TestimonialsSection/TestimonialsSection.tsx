import { SectionHeading } from "../common/SectionHeading/SectionHeading";
import type { ServiceKind, TestimonialsContent } from "@/app/services/types";
import styles from "./styles.module.css";
import { TestimonialCarousel } from "@/app/testimonials-carousel";

export function TestimonialsSection({ content, kind }: { content: TestimonialsContent; kind: ServiceKind }) {
  return (
    <section className={`${styles.section} ${styles[kind]}`}>
      <div className={styles.shell}>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} accent={content.accent} body={content.body} />
        <TestimonialCarousel items={content.items} />
      </div>
    </section>
  );
}
