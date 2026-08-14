import Link from "next/link";
import { Calendar, Clock, Tag, UserCheck } from "lucide-react";
import type { PublicBlogSummary } from "@/lib/blogApi";
import { resolveBlogImageUrl } from "@/lib/blogApi";
import styles from "./styles.module.css";

function formatBlogDate(value: string | null): string | null {
  if (!value) return null;
  try {
    return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
  } catch {
    return null;
  }
}

export function BlogHero({ blog }: { blog: PublicBlogSummary }) {
  const version = blog.published_version;
  const hero = version?.blocks_json?.blocks?.hero;
  const imageUrl = resolveBlogImageUrl(blog.featured_media, "hero");
  const publishedDate = formatBlogDate(blog.published_at);
  const reviewer = hero?.reviewer?.name;
  const authorName = reviewer || blog.author?.name;

  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.shell}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blogs">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{blog.title}</span>
        </nav>

        {hero?.category ? (
          <span className={styles.categoryTag}>
            <Tag size={13} aria-hidden="true" />
            {hero.category}
          </span>
        ) : null}

        <h1>{blog.title}</h1>

        {blog.excerpt ? <p className={styles.excerpt}>{blog.excerpt}</p> : null}

        <div className={styles.meta}>
          {authorName ? (
            <span className={styles.metaChip}>
              <UserCheck size={14} className={styles.metaIcon} aria-hidden="true" />
              <span>
                By <strong>{authorName}</strong>
                {hero?.reviewer?.credentials ? `, ${hero.reviewer.credentials}` : ""}
              </span>
            </span>
          ) : null}

          {publishedDate ? (
            <span className={styles.metaChip}>
              <Calendar size={14} className={styles.metaIcon} aria-hidden="true" />
              <span>{publishedDate}</span>
            </span>
          ) : null}

          {hero?.reading_time_minutes ? (
            <span className={styles.metaChip}>
              <Clock size={14} className={styles.metaIcon} aria-hidden="true" />
              <span>{hero.reading_time_minutes} min read</span>
            </span>
          ) : null}
        </div>
      </div>

      {imageUrl ? (
        <div className={styles.imageWrap}>
          <img src={imageUrl} alt={blog.featured_media?.alt_text ?? ""} />
        </div>
      ) : null}
    </section>
  );
}
