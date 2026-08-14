import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPagination as BlogPaginationData } from "@/lib/blogApi";
import styles from "./styles.module.css";

function pageHref(page: number, search?: string): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (search) params.set("search", search);
  const query = params.toString();
  return query ? `/blogs?${query}` : "/blogs";
}

function visiblePages(currentPage: number, totalPages: number): number[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  return Array.from({ length: 5 }, (_, index) => start + index);
}

export function BlogPagination({ pagination, search }: { pagination: BlogPaginationData; search?: string }) {
  if (pagination.total_pages <= 1) return null;

  const pages = visiblePages(pagination.page, pagination.total_pages);

  return (
    <nav className={styles.pagination} aria-label="Blog pagination">
      {pagination.has_previous_page ? (
        <Link href={pageHref(pagination.page - 1, search)} className={styles.step}>
          <ChevronLeft size={16} aria-hidden="true" /> Prev
        </Link>
      ) : (
        <span className={`${styles.step} ${styles.disabled}`} aria-disabled="true">
          <ChevronLeft size={16} aria-hidden="true" /> Prev
        </span>
      )}

      <div className={styles.pages}>
        {pages[0] > 1 ? (
          <>
            <Link href={pageHref(1, search)} className={styles.pageLink}>1</Link>
            <span className={styles.ellipsis}>...</span>
          </>
        ) : null}
        {pages.map((page) => (
          <Link
            key={page}
            href={pageHref(page, search)}
            aria-current={page === pagination.page ? "page" : undefined}
            className={`${styles.pageLink} ${page === pagination.page ? styles.active : ""}`}
          >
            {page}
          </Link>
        ))}
        {pages[pages.length - 1] < pagination.total_pages ? (
          <>
            <span className={styles.ellipsis}>...</span>
            <Link href={pageHref(pagination.total_pages, search)} className={styles.pageLink}>{pagination.total_pages}</Link>
          </>
        ) : null}
      </div>

      {pagination.has_next_page ? (
        <Link href={pageHref(pagination.page + 1, search)} className={styles.step}>
          Next <ChevronRight size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span className={`${styles.step} ${styles.disabled}`} aria-disabled="true">
          Next <ChevronRight size={16} aria-hidden="true" />
        </span>
      )}
    </nav>
  );
}
