import type { PublicBlogSummary } from "@/lib/blogApi";
import { BlogCard } from "../BlogCard/BlogCard";
import styles from "./styles.module.css";

export function BlogGrid({ blogs }: { blogs: PublicBlogSummary[] }) {
  return (
    <div className={styles.grid}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
