import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PublicBlogSummary } from "@/lib/blogApi";
import { resolveBlogImageUrl } from "@/lib/blogApi";
import styles from "./styles.module.css";

function formatBlogDate(value: string | null): string | null {
  if (!value) return null;
  try {
    return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));
  } catch {
    return null;
  }
}

export function BlogCard({ blog }: { blog: PublicBlogSummary }) {
  const version = blog.published_version;
  const imageUrl = resolveBlogImageUrl(blog.featured_media, "card");
  const category = version?.blocks_json?.blocks?.hero?.category;
  const publishedDate = formatBlogDate(blog.published_at);

  return (
    <Link href={`/blogs/${blog.slug}`} className={styles.card} aria-label={`Read ${blog.title}`}>
      <div className={styles.imageWrap}>
        {imageUrl ? (
          <img src={imageUrl} alt={blog.featured_media?.alt_text ?? ""} loading="lazy" />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
        {category ? <span className={styles.category}>{category}</span> : null}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {publishedDate ? <span>{publishedDate}</span> : null}
          {blog.author?.name ? <span>{blog.author.name}</span> : null}
        </div>
        <h3>{blog.title}</h3>
        {blog.excerpt ? <p>{blog.excerpt}</p> : null}
        <span className={styles.readMore}>
          Read More <ArrowRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
