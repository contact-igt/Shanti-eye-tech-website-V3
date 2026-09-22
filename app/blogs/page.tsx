import type { Metadata } from "next";
import { BlogGrid } from "../components/blogs/BlogGrid/BlogGrid";
import { BlogPagination } from "../components/blogs/BlogPagination/BlogPagination";
import { SectionHeading } from "../components/services/common/SectionHeading/SectionHeading";
import { AppointmentSection, Footer, Header } from "../site-components";
import { listPublishedBlogs, type BlogListResult } from "@/lib/blogApi";
import { BlogSearchForm } from "./BlogSearchForm";
import styles from "./styles.module.css";

const PAGE_SIZE = 9;

async function loadBlogs(page: number, search?: string): Promise<{ result: BlogListResult | null; error: string | null }> {
  try {
    const result = await listPublishedBlogs({ page, limit: PAGE_SIZE, search });
    return { result, error: null };
  } catch {
    return { result: null, error: "We could not load blog posts right now. Please check back shortly." };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { result, error } = await loadBlogs(1);
  const articlesAvailable = !error && !!result && result.pagination.total_items > 0;

  return {
    title: {
      absolute: "Eye Care Blog | Shanti Eye Tech, Indore",
    },
    description: "Eye-care guidance, treatment explainers and vision-health updates from Shanti Eye Tech in Indore.",
    alternates: {
      canonical: "https://www.shantieyetech.com/blogs",
    },
    // The feed has no live articles yet (or the article service is unreachable) —
    // keep this page out of search results until it has something to show.
    robots: articlesAvailable ? undefined : { index: false, follow: true },
  };
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

  // "Articles available" must reflect the whole feed, not just this search —
  // a query with zero matches shouldn't hide search or show the "coming soon" copy.
  const overall = search ? await loadBlogs(1) : { result, error };
  const articlesAvailable = !overall.error && !!overall.result && overall.result.pagination.total_items > 0;

  return (
    <>
      <Header active="blogs" />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`shell ${styles.heroShell}`}>
            <div className={styles.heroCopy}>
              <SectionHeading
                as="h1"
                eyebrow="OUR BLOG"
                title="Insights for Healthier"
                accent="Vision"
                body={
                  articlesAvailable
                    ? "Practical eye-care guidance, treatment explainers and clinic updates from the Shanti Eye Tech specialist team."
                    : "Eye-care articles from Shanti Eye Tech are coming soon."
                }
                align="left"
              />
            </div>
          </div>
        </section>

        <section className={`section ${styles.listSection}`}>
          <div className="shell">
            {articlesAvailable ? <BlogSearchForm initialSearch={search} /> : null}
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
