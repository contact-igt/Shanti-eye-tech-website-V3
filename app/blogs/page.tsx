import type { Metadata } from "next";
import { BlogGrid } from "../components/blogs/BlogGrid/BlogGrid";
import { BlogPagination } from "../components/blogs/BlogPagination/BlogPagination";
import { SectionHeading } from "../components/services/common/SectionHeading/SectionHeading";
import { AppointmentSection, Footer, Header } from "../site-components";
import { listPublishedBlogs, type BlogListResult } from "@/lib/blogApi";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Eye-care guidance, treatment insights and patient resources from the Shanti Eye Tech clinical team.",
};

const PAGE_SIZE = 9;

async function loadBlogs(page: number, search?: string): Promise<{ result: BlogListResult | null; error: string | null }> {
  try {
    const result = await listPublishedBlogs({ page, limit: PAGE_SIZE, search });
    return { result, error: null };
  } catch {
    return { result: null, error: "We could not load blog posts right now. Please check back shortly." };
  }
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const requestedPage = Number(params.page) > 0 ? Number(params.page) : 1;
  const search = typeof params.search === "string" ? params.search.trim() : "";
  const { result, error } = await loadBlogs(requestedPage, search || undefined);

  return (
    <>
      <Header active="blogs" />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`shell ${styles.heroShell}`}>
            <div className={styles.heroCopy}>
              <SectionHeading
                eyebrow="OUR BLOG"
                title="Insights for Healthier"
                accent="Vision"
                body="Practical eye-care guidance, treatment explainers and clinic updates from the Shanti Eye Tech specialist team."
                align="left"
              />
            </div>
          </div>
        </section>

        <section className={`section ${styles.listSection}`}>
          <div className="shell">
            <form className={styles.searchForm} action="/blogs">
              <label className={styles.searchLabel} htmlFor="blog-search">Search articles</label>
              <div className={styles.searchRow}>
                <input id="blog-search" name="search" type="search" defaultValue={search} placeholder="Search eye-care topics" />
                <button type="submit">Search</button>
              </div>
            </form>
            {error ? (
              <p className={styles.state}>{error}</p>
            ) : !result || result.items.length === 0 ? (
              <p className={styles.state}>{search ? "No blog posts matched your search." : "No blog posts have been published yet. Please check back soon."}</p>
            ) : (
              <>
                <BlogGrid blogs={result.items} />
                <BlogPagination pagination={result.pagination} search={search} />
              </>
            )}
          </div>
        </section>

        <div className="home-page">
          <AppointmentSection withForm={false} kind="overview" />
        </div>
      </main>
      <Footer />
    </>
  );
}
