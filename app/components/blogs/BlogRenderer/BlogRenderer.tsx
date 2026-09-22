"use client";

import { useRef } from "react";
import type { BlogPublishedVersion } from "@/lib/blogApi";
import { BlogArticleBody } from "../BlogArticleBody/BlogArticleBody";
import { BlogSidebar } from "../BlogSidebar/BlogSidebar";
import styles from "./styles.module.css";

function normaliseTemplateKey(key: string | undefined | null): string {
  if (!key) return "template-1";
  return key.replace(/_/g, "-").toLowerCase();
}

interface BlogRendererProps {
  version: BlogPublishedVersion;
  title: string;
  url: string;
  slug: string;
}

// ── Template 1: Full-width single column ──────────────────────────────────────
function TemplateOne({ version, title, url, slug }: BlogRendererProps) {
  return (
    <BlogArticleBody version={version} title={title} url={url} slug={slug} />
  );
}

// ── Template 2: Two-column with sidebar ───────────────────────────────────────
function TemplateTwo({ version, title, url, slug }: BlogRendererProps) {
  const articleRef = useRef<HTMLElement>(null);
  const sidebar = version.blocks_json?.sidebar;
  const appointmentCta = sidebar?.appointment_cta ?? null;
  const newsletter = sidebar?.newsletter ?? null;

  return (
    <div className={styles.sidebarLayout}>
      <article ref={articleRef} className={styles.mainColumn}>
        <BlogArticleBody version={version} title={title} url={url} slug={slug} />
      </article>
      <div className={styles.sidebarColumn}>
        <BlogSidebar
          articleRef={articleRef}
          appointmentCta={appointmentCta}
          newsletter={newsletter}
        />
      </div>
    </div>
  );
}

// ── Custom Template: Same as Template 1 for now ───────────────────────────────
// template_config_json.sections ordering is already handled in BlogArticleBody
// via extractAllBlogBlocks → resolvedBlocks path.
function CustomTemplate(props: BlogRendererProps) {
  return <TemplateOne {...props} />;
}

// ── Router ────────────────────────────────────────────────────────────────────
const TEMPLATE_MAP: Record<string, (props: BlogRendererProps) => React.ReactElement> = {
  "template-1": (props) => <TemplateOne {...props} />,
  "template-2": (props) => <TemplateTwo {...props} />,
  "custom-builder": (props) => <CustomTemplate {...props} />,
  "custom-template": (props) => <CustomTemplate {...props} />,
};

export function BlogRenderer({ version, title, url, slug }: BlogRendererProps) {
  const templateKey = normaliseTemplateKey(version.template_key);
  const render = TEMPLATE_MAP[templateKey] ?? TEMPLATE_MAP["template-1"];
  return render({ version, title, url, slug });
}
