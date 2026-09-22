"use client";

import { useEffect, useRef, useState } from "react";
import type { BlogAppointmentCtaBlock, BlogNewsletterBlock } from "@/lib/blogApi";
import { BlogAppointmentCta } from "../BlogAppointmentCta/BlogAppointmentCta";
import { BlogNewsletter } from "../BlogNewsletter/BlogNewsletter";
import styles from "./styles.module.css";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function buildToc(containerRef: React.RefObject<HTMLElement | null>): TocItem[] {
  if (!containerRef.current) return [];
  const headings = containerRef.current.querySelectorAll("h2, h3");
  return Array.from(headings)
    .map((h) => {
      if (!h.id) {
        h.id = h.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? "";
      }
      return {
        id: h.id,
        text: h.textContent ?? "",
        level: h.tagName === "H2" ? 2 : 3,
      };
    })
    .filter((item) => item.id && item.text);
}

function TableOfContents({ articleRef }: { articleRef: React.RefObject<HTMLElement | null> }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const items = buildToc(articleRef);
    setToc(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    const headings = articleRef.current?.querySelectorAll("h2, h3") ?? [];
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [articleRef]);

  if (!toc.length) return null;

  return (
    <nav className={styles.tocCard} aria-label="Table of contents">
      <h3 className={styles.tocTitle}>In This Article</h3>
      <ul className={styles.tocList}>
        {toc.map((item) => (
          <li key={item.id} className={item.level === 3 ? styles.tocSub : ""}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? styles.tocLinkActive : styles.tocLink}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface BlogSidebarProps {
  articleRef: React.RefObject<HTMLElement | null>;
  appointmentCta?: BlogAppointmentCtaBlock | null;
  newsletter?: BlogNewsletterBlock | null;
}

export function BlogSidebar({ articleRef, appointmentCta, newsletter }: BlogSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <TableOfContents articleRef={articleRef} />
      {appointmentCta ? (
        <BlogAppointmentCta data={{ ...appointmentCta, enabled: true }} />
      ) : (
        <BlogAppointmentCta
          data={{
            enabled: true,
            heading: "Book an Appointment",
            description: "Get a precise diagnosis and treatment plan from our specialist team.",
            book_appointment: { label: "Schedule Now", url: "/contact#contact-form" },
          }}
        />
      )}
      {newsletter?.enabled !== false ? (
        <BlogNewsletter data={newsletter ?? undefined} />
      ) : null}
    </aside>
  );
}
