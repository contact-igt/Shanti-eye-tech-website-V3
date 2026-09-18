import type {
  BlogPublishedVersion,
  BlogTableBlock,
  BlogFeedbackBlock,
  BlogNewsletterBlock,
  BlogImageComparisonBlock,
  BlogNumberedListBlock,
  BlogExpertQuoteBlock,
  BlogDoctorProfileBlock,
  BlogAppointmentCtaBlock,
} from "@/lib/blogApi";
import { extractAllBlogBlocks, type BlogResolvedBlock } from "@/lib/blogApi";
import { BlogFeedback } from "../BlogFeedback/BlogFeedback";
import { BlogNewsletter } from "../BlogNewsletter/BlogNewsletter";
import { BlogTable } from "../BlogTable/BlogTable";
import { BlogImageComparison } from "../BlogImageComparison/BlogImageComparison";
import { BlogImageCards } from "../BlogImageCards/BlogImageCards";
import { BlogShareButtons } from "../BlogShareButtons/BlogShareButtons";
import { BlogNumberedList } from "../BlogNumberedList/BlogNumberedList";
import { BlogDoctorQuote } from "../BlogDoctorQuote/BlogDoctorQuote";
import { BlogDoctorInsight } from "../BlogDoctorInsight/BlogDoctorInsight";
import { BlogAppointmentCta } from "../BlogAppointmentCta/BlogAppointmentCta";
import styles from "./styles.module.css";

const formHref = (url: string) => url === "/contact" ? "/contact#contact-form" : url;

// Matches Pixeleye TEMPLATE_ONE_BLOCK_ORDER
const BLOCK_ORDER: string[] = [
  "hero",
  "rich_article_content",
  "richHtml",
  "key_takeaways",
  "image_comparison",
  "numbered_list",
  "symptoms",
  "expert_quote",
  "doctor_profile",
  "table",
  "medical_cta",
  "faq",
  "appointment_cta",
  "feedback",
  "feedback_share",
  "newsletter",
  "newsletter_card",
  "spacer",
  "divider",
  "disclaimer",
  "medical_disclaimer",
  "share",
];

function blockOrderIndex(key: string): number {
  const idx = BLOCK_ORDER.indexOf(key);
  return idx === -1 ? 999 : idx;
}

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

  // Custom-template sections carry an explicit, CMS-authored block order (and can
  // repeat the same componentKey, e.g. several rich_article_content blocks). That
  // order must be preserved as-is. The semantic BLOCK_ORDER sort below is only
  // correct for system templates (template_1/template_2), whose fixed one-per-type
  // schema has no inherent order until BLOCK_ORDER imposes one.
  const hasAuthoredSectionOrder = Boolean(
    version.template_config_json?.sections && version.template_config_json.sections.length > 0
  );

  // ─── Render a single resolved block ───────────────────────────────────────
  function renderBlock(block: BlogResolvedBlock, index: number) {
    if (!block.enabled) return null;

    const key = block.componentKey;

    // ── Skip hero — handled by BlogHero above ─────────────────────────────
    if (key === "hero") return null;

    // ── Rich HTML (main article prose) ───────────────────────────────────
    if (key === "rich_article_content" || key === "richHtml") {
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

    // ── Key Takeaways ─────────────────────────────────────────────────────
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

    // ── Image Comparison → rendered as image cards ────────────────────────
    if (key === "image_comparison") {
      const d = block as unknown as BlogImageComparisonBlock;
      // If items array exists, render as image cards (Pixeleye approach)
      if (d.items && d.items.length > 0) {
        return <BlogImageCards key={block.id || index} data={d} />;
      }
      // Fallback: legacy slider comparison
      return <BlogImageComparison key={block.id || index} data={block as unknown as BlogImageComparisonBlock} />;
    }

    // ── Table ─────────────────────────────────────────────────────────────
    if (key === "table") {
      return <BlogTable key={block.id || index} data={block as unknown as BlogTableBlock} />;
    }

    // ── Numbered List ─────────────────────────────────────────────────────
    if (key === "numbered_list") {
      return <BlogNumberedList key={block.id || index} data={block as unknown as BlogNumberedListBlock} />;
    }

    // ── Expert Quote ──────────────────────────────────────────────────────
    if (key === "expert_quote") {
      return <BlogDoctorQuote key={block.id || index} data={block as unknown as BlogExpertQuoteBlock} />;
    }

    // ── Doctor Profile / Insight ──────────────────────────────────────────
    if (key === "doctor_profile" || key === "doctorInsight") {
      return <BlogDoctorInsight key={block.id || index} data={block as unknown as BlogDoctorProfileBlock} />;
    }

    // ── FAQ ───────────────────────────────────────────────────────────────
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

    // ── Medical CTA ───────────────────────────────────────────────────────
    if (key === "medical_cta") {
      const heading = (block.heading as string) || "";
      const description = (block.description as string) || "";
      const primary =
        (block.primary as { label?: string; url?: string }) ||
        (block.book_appointment as { label?: string; url?: string });
      const secondary = block.secondary as { label?: string; url?: string };
      return (
        <aside key={block.id || index} className={styles.medicalCta}>
          {heading ? <h2>{heading}</h2> : null}
          {description ? <p>{description}</p> : null}
          <div className={styles.ctaActions}>
            {primary?.url ? <a href={formHref(primary.url)}>{primary.label || "Book Appointment"}</a> : null}
            {secondary?.url ? <a href={formHref(secondary.url)}>{secondary.label || "Contact Us"}</a> : null}
          </div>
        </aside>
      );
    }

    // ── Appointment CTA ───────────────────────────────────────────────────
    if (key === "appointment_cta") {
      return (
        <BlogAppointmentCta key={block.id || index} data={block as unknown as BlogAppointmentCtaBlock} />
      );
    }

    // ── Feedback ──────────────────────────────────────────────────────────
    if (key === "feedback" || key === "feedback_share") {
      return <BlogFeedback key={block.id || index} slug={slug} data={block as unknown as BlogFeedbackBlock} />;
    }

    // ── Newsletter ────────────────────────────────────────────────────────
    if (key === "newsletter" || key === "newsletter_card") {
      return <BlogNewsletter key={block.id || index} data={block as unknown as BlogNewsletterBlock} />;
    }

    // ── Medical Disclaimer ────────────────────────────────────────────────
    if (key === "medical_disclaimer" || key === "disclaimer") {
      const text = (block.text as string) || (block.content as string) || "";
      if (!text) return null;
      return (
        <p key={block.id || index} className={styles.disclaimer}>
          {text}
        </p>
      );
    }

    // ── Share ─────────────────────────────────────────────────────────────
    if (key === "share") {
      return <BlogShareButtons key={block.id || index} title={title} url={url} />;
    }

    // ── Spacer ────────────────────────────────────────────────────────────
    if (key === "spacer") {
      const h = (block.height as number | string) ?? 32;
      return <div key={block.id || index} style={{ height: typeof h === "number" ? `${h}px` : h }} aria-hidden="true" />;
    }

    // ── Divider ───────────────────────────────────────────────────────────
    if (key === "divider") {
      return <hr key={block.id || index} className={styles.divider} />;
    }

    return null;
  }

  // ─── Template_config_json path (ordered blocks) ────────────────────────────
  if (resolvedBlocks.length > 0) {
    const ordered = hasAuthoredSectionOrder
      ? resolvedBlocks
      : [...resolvedBlocks].sort(
          (a, b) => blockOrderIndex(a.componentKey) - blockOrderIndex(b.componentKey)
        );
    return (
      <article className={styles.article}>
        {ordered.map((block, index) => renderBlock(block, index))}
        <BlogShareButtons title={title} url={url} />
      </article>
    );
  }

  // ─── Fallback: render directly from blocks_json.blocks ───────────────────
  const keyTakeaways = blocks?.key_takeaways;
  const tableBlock = blocks?.table as BlogTableBlock | undefined;
  const imageComparisonBlock = blocks?.image_comparison;
  const numberedListBlock = blocks?.numbered_list;
  const expertQuoteBlock = blocks?.expert_quote;
  const doctorProfileBlock = blocks?.doctor_profile;
  const faq = blocks?.faq;
  const medicalCta = blocks?.medical_cta;
  const appointmentCtaBlock = blocks?.appointment_cta;
  const feedbackBlock = blocks?.feedback;
  const newsletterBlock = blocks?.newsletter || sidebar?.newsletter;
  const disclaimer = blocks?.disclaimer;
  const shareEnabled = blocks?.share?.enabled !== false;

  const primaryCta =
    medicalCta?.book_appointment?.enabled === false
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
      {/* 1. Key Takeaways */}
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

      {/* 2. Image Comparison / Image Cards */}
      {imageComparisonBlock?.enabled !== false && imageComparisonBlock?.items?.length ? (
        <BlogImageCards data={imageComparisonBlock} />
      ) : imageComparisonBlock?.enabled !== false ? (
        <BlogImageComparison data={imageComparisonBlock} />
      ) : null}

      {/* 3. Table */}
      {tableBlock?.enabled !== false ? <BlogTable data={tableBlock} /> : null}

      {/* 4. Rich Article Content */}
      {version.content_html ? (
        <div className={styles.prose} dangerouslySetInnerHTML={{ __html: version.content_html }} />
      ) : null}

      {/* 5. Numbered List */}
      {numberedListBlock?.enabled !== false && numberedListBlock?.items?.length ? (
        <BlogNumberedList data={numberedListBlock} />
      ) : null}

      {/* 6. Expert Quote */}
      {expertQuoteBlock?.enabled !== false && expertQuoteBlock?.quote ? (
        <BlogDoctorQuote data={expertQuoteBlock} />
      ) : null}

      {/* 7. Doctor Profile */}
      {doctorProfileBlock?.enabled !== false && (doctorProfileBlock?.name || doctorProfileBlock?.bio) ? (
        <BlogDoctorInsight data={doctorProfileBlock} />
      ) : null}

      {/* 8. FAQ */}
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

      {/* 9. Medical CTA */}
      {showMedicalCta && medicalCta ? (
        <aside className={styles.medicalCta}>
          {medicalCta.heading ? <h2>{medicalCta.heading}</h2> : null}
          {medicalCta.description ? <p>{medicalCta.description}</p> : null}
          <div className={styles.ctaActions}>
            {primaryCta?.url ? <a href={formHref(primaryCta.url)}>{primaryCta.label || "Book Appointment"}</a> : null}
            {secondaryCta?.url ? (
              <a href={formHref(secondaryCta.url)}>{secondaryCta.label || "Contact Us"}</a>
            ) : null}
          </div>
        </aside>
      ) : null}

      {/* 10. Appointment CTA */}
      {appointmentCtaBlock?.enabled !== false && appointmentCtaBlock ? (
        <BlogAppointmentCta data={appointmentCtaBlock} />
      ) : null}

      {/* 11. Feedback */}
      {feedbackBlock?.enabled !== false ? <BlogFeedback slug={slug} data={feedbackBlock} /> : null}

      {/* 12. Newsletter */}
      {newsletterBlock?.enabled !== false ? <BlogNewsletter data={newsletterBlock} /> : null}

      {/* 13. Disclaimer */}
      {disclaimer?.enabled !== false && disclaimer?.text ? (
        <p className={styles.disclaimer}>{disclaimer.text}</p>
      ) : null}

      {/* 14. Share */}
      {shareEnabled ? <BlogShareButtons title={title} url={url} /> : null}
    </article>
  );
}
