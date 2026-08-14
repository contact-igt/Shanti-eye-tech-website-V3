import type { BlogPublishedVersion, BlogTableBlock, BlogFeedbackBlock, BlogNewsletterBlock } from "@/lib/blogApi";
import { extractAllBlogBlocks, type BlogResolvedBlock } from "@/lib/blogApi";
import { BlogFeedback } from "../BlogFeedback/BlogFeedback";
import { BlogNewsletter } from "../BlogNewsletter/BlogNewsletter";
import { BlogTable } from "../BlogTable/BlogTable";
import { BlogShareButtons } from "../BlogShareButtons/BlogShareButtons";
import styles from "./styles.module.css";

export function BlogArticleBody({
  version,
  title,
  url,
  slug,
}: {
  version: BlogPublishedVersion;
  title: string;
  url: string;
  slug: string;
}) {
  const resolvedBlocks = extractAllBlogBlocks(version);
  const blocks = version.blocks_json?.blocks;
  const sidebar = version.blocks_json?.sidebar;

  // Render a resolved block by its componentKey
  function renderBlock(block: BlogResolvedBlock, index: number) {
    if (!block.enabled) return null;

    const key = block.componentKey;

    if (key === "table") {
      return <BlogTable key={block.id || index} data={block as unknown as BlogTableBlock} />;
    }

    if (key === "rich_article_content") {
      const htmlContent = (block.html as string) || version.content_html || "";
      if (!htmlContent) return null;
      return (
        <div
          key={block.id || index}
          className={styles.prose}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    }

    if (key === "feedback" || key === "feedback_share") {
      return <BlogFeedback key={block.id || index} slug={slug} data={block as unknown as BlogFeedbackBlock} />;
    }

    if (key === "newsletter" || key === "newsletter_card") {
      return <BlogNewsletter key={block.id || index} data={block as unknown as BlogNewsletterBlock} />;
    }

    if (key === "key_takeaways") {
      const items = Array.isArray(block.items) ? (block.items as string[]) : [];
      if (!items.length) return null;
      return (
        <aside key={block.id || index} className={styles.takeaways}>
          <h2>{(block.heading as string) || (block.title as string) || "Key Takeaways"}</h2>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </aside>
      );
    }

    if (key === "faq") {
      const items = Array.isArray(block.items)
        ? (block.items as Array<{ question: string; answer: string }>)
        : [];
      if (!items.length) return null;
      return (
        <section key={block.id || index} className={styles.faq}>
          <h2>{(block.heading as string) || (block.title as string) || "Frequently Asked Questions"}</h2>
          <div className={styles.faqList}>
            {items.map((item, i) => (
              <details key={item.question || i}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      );
    }

    if (key === "medical_cta") {
      const heading = (block.heading as string) || "";
      const description = (block.description as string) || "";
      const primary = (block.primary as { label?: string; url?: string }) || (block.book_appointment as { label?: string; url?: string });
      const secondary = block.secondary as { label?: string; url?: string };
      return (
        <aside key={block.id || index} className={styles.medicalCta}>
          {heading ? <h2>{heading}</h2> : null}
          {description ? <p>{description}</p> : null}
          <div className={styles.ctaActions}>
            {primary?.url ? <a href={primary.url}>{primary.label || "Book Appointment"}</a> : null}
            {secondary?.url ? <a href={secondary.url}>{secondary.label || "Contact Us"}</a> : null}
          </div>
        </aside>
      );
    }

    if (key === "medical_disclaimer" || key === "disclaimer") {
      const text = (block.text as string) || (block.content as string) || "";
      if (!text) return null;
      return (
        <p key={block.id || index} className={styles.disclaimer}>
          {text}
        </p>
      );
    }

    if (key === "share") {
      return <BlogShareButtons key={block.id || index} title={title} url={url} />;
    }

    if (key === "hero") {
      return null; // Rendered in BlogHero top component
    }

    return null;
  }

  // Fallback checks if resolvedBlocks is empty
  const keyTakeaways = blocks?.key_takeaways;
  const tableBlock = blocks?.table as BlogTableBlock | undefined;
  const faq = blocks?.faq;
  const medicalCta = blocks?.medical_cta;
  const feedbackBlock = blocks?.feedback;
  const newsletterBlock = blocks?.newsletter || sidebar?.newsletter;
  const disclaimer = blocks?.disclaimer;
  const shareEnabled = blocks?.share?.enabled !== false;

  const primaryCta = medicalCta?.book_appointment?.enabled === false
    ? null
    : medicalCta?.book_appointment || medicalCta?.primary;
  const secondaryCta = medicalCta?.secondary;
  const showMedicalCta = Boolean(
    medicalCta &&
    medicalCta.enabled !== false &&
    (medicalCta.heading || medicalCta.description || primaryCta?.url || secondaryCta?.url)
  );

  return (
    <article className={styles.article}>
      {resolvedBlocks.length > 0 ? (
        resolvedBlocks.map((block, index) => renderBlock(block, index))
      ) : (
        <>
          {keyTakeaways?.enabled !== false && keyTakeaways?.items?.length ? (
            <aside className={styles.takeaways}>
              <h2>{keyTakeaways.heading || "Key Takeaways"}</h2>
              <ul>
                {keyTakeaways.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          {tableBlock?.enabled !== false ? <BlogTable data={tableBlock} /> : null}

          {version.content_html ? (
            <div className={styles.prose} dangerouslySetInnerHTML={{ __html: version.content_html }} />
          ) : null}

          {faq?.enabled !== false && faq?.items?.length ? (
            <section className={styles.faq}>
              <h2>{faq.heading || "Frequently Asked Questions"}</h2>
              <div className={styles.faqList}>
                {faq.items.map((item, i) => (
                  <details key={item.question || i}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {showMedicalCta && medicalCta ? (
            <aside className={styles.medicalCta}>
              {medicalCta.heading ? <h2>{medicalCta.heading}</h2> : null}
              {medicalCta.description ? <p>{medicalCta.description}</p> : null}
              <div className={styles.ctaActions}>
                {primaryCta?.url ? <a href={primaryCta.url}>{primaryCta.label || "Book Appointment"}</a> : null}
                {secondaryCta?.url ? <a href={secondaryCta.url}>{secondaryCta.label || "Contact Us"}</a> : null}
              </div>
            </aside>
          ) : null}

          {feedbackBlock?.enabled !== false ? <BlogFeedback slug={slug} data={feedbackBlock} /> : null}

          {newsletterBlock?.enabled !== false ? <BlogNewsletter data={newsletterBlock} /> : null}

          {disclaimer?.enabled !== false && disclaimer?.text ? (
            <p className={styles.disclaimer}>{disclaimer.text}</p>
          ) : null}

          {shareEnabled ? <BlogShareButtons title={title} url={url} /> : null}
        </>
      )}
    </article>
  );
}
