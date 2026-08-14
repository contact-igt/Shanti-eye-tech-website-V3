import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "../../components/blogs/BlogArticleBody/BlogArticleBody";
import { BlogHero } from "../../components/blogs/BlogHero/BlogHero";
import { AppointmentSection, Footer, Header } from "../../site-components";
import { BlogApiError, getBlogBySlug, resolveBlogImageUrl, type PublicBlogSummary } from "@/lib/blogApi";
import styles from "./styles.module.css";

async function loadOrigin(): Promise<string> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${protocol}://${host}`;
}

async function loadBlog(slug: string): Promise<PublicBlogSummary | null> {
  try {
    return await getBlogBySlug(slug);
  } catch (error) {
    if (error instanceof BlogApiError && error.message === "Not found") return null;
    throw error;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await loadBlog(slug);
  if (!blog || !blog.published_version) return { title: "Blog post not found" };

  const version = blog.published_version;
  const origin = await loadOrigin();
  const url = `${origin}/blogs/${blog.slug}`;
  const title = version.seo_title || blog.title;
  const description = version.seo_description || blog.excerpt || undefined;
  const imageUrl = resolveBlogImageUrl(blog.featured_media, "hero") ?? undefined;

  return {
    title,
    description,
    alternates: { canonical: version.canonical_url || url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: blog.title }] : undefined,
      publishedTime: blog.published_at ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await loadBlog(slug);
  if (!blog || !blog.published_version) notFound();

  const version = blog.published_version;
  const origin = await loadOrigin();
  const url = `${origin}/blogs/${blog.slug}`;
  const imageUrl = resolveBlogImageUrl(blog.featured_media, "hero");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: version.seo_description || blog.excerpt || undefined,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: blog.published_at ?? undefined,
    dateModified: blog.updated_at,
    author: {
      "@type": "Person",
      name: version.blocks_json?.blocks?.hero?.reviewer?.name || blog.author?.name || "Shanti Eye Tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Shanti Eye Tech",
      logo: { "@type": "ImageObject", url: `${origin}/assets/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <Header active="blogs" />
      <main className={styles.page}>
        <BlogHero blog={blog} />
        <section className={`section ${styles.bodySection}`}>
          <div className="shell">
            <BlogArticleBody version={version} title={blog.title} url={url} slug={blog.slug} />
          </div>
        </section>
        <div className="home-page">
          <AppointmentSection withForm={false} kind="overview" />
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
