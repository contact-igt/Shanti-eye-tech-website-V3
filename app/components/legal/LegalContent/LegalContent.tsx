import type { LegalSection } from "../types";
import styles from "./styles.module.css";

export function LegalContent({
  intro,
  sections,
}: {
  intro: string[];
  sections: LegalSection[];
}) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`shell ${styles.shell}`}>
        <div className={styles.card}>
          <div className={styles.intro}>
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {sections.map((sectionItem) => (
            <article className={styles.entry} id={sectionItem.id} key={sectionItem.id}>
              <h2>
                <span className={styles.number} aria-hidden="true">{sectionItem.number}</span>
                {sectionItem.title}
              </h2>
              {sectionItem.blocks.map((block, index) =>
                block.type === "p" ? (
                  <p key={index}>{block.text}</p>
                ) : (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
              {sectionItem.contact && (
                <div className={styles.contactCard}>
                  <strong>{sectionItem.contact.name}</strong>
                  <span>{sectionItem.contact.address}</span>
                  <a href={`mailto:${sectionItem.contact.email}`}>{sectionItem.contact.email}</a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
