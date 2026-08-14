import Link from "next/link";
import { Eyebrow } from "../../services/common/Eyebrow/Eyebrow";
import styles from "./styles.module.css";

export function LegalHero({
  eyebrow,
  title,
  description,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
}) {
  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.shell}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>

        <Eyebrow>{eyebrow}</Eyebrow>

        <h1>{title}</h1>

        <p>{description}</p>

        <span className={styles.updated}>Last Updated: {lastUpdated}</span>
      </div>
    </section>
  );
}
