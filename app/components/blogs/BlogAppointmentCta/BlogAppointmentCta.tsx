import type { BlogAppointmentCtaBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

const formHref = (url: string) => url === "/contact" ? "/contact#contact-form" : url;

export function BlogAppointmentCta({ data }: { data?: BlogAppointmentCtaBlock }) {
  if (!data || data.enabled === false) return null;

  const heading = data.heading || "Book an Appointment";
  const description = data.description || "Get a precise diagnosis and treatment plan from our eye care team.";
  const book = data.book_appointment;
  const call = data.call_now;

  return (
    <aside className={styles.card}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        {book?.url && book.enabled !== false ? (
          <a href={formHref(book.url)} className={styles.bookBtn}>
            {book.label || "Schedule Now"}
          </a>
        ) : null}
        {call?.url && call.enabled !== false ? (
          <a href={formHref(call.url)} className={styles.callBtn}>
            {call.label || "Call Now"}
          </a>
        ) : null}
      </div>
    </aside>
  );
}
