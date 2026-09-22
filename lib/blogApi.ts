const BLOG_API_BASE_URL = (
  process.env.NEXT_PUBLIC_BLOG_API_BASE_URL || "http://localhost:5000"
).replace(/\/+$/, "");
const BLOG_API_PREFIX = BLOG_API_BASE_URL.endsWith("/api/v1") ? "" : "/api/v1";

export interface BlogMediaAsset {
  id: string;
  original_file_name: string | null;
  original_url: string | null;
  variants: Record<string, { url: string; width?: number; height?: number }> | string | null;
  alt_text: string | null;
  status: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface BlogHeroBlock {
  category?: string;
  breadcrumb?: string[];
  reviewer?: { name: string; credentials?: string };
  reading_time_minutes?: number;
}

export interface BlogFeedbackBlock {
  enabled?: boolean;
  prompt?: string;
}

export interface BlogNewsletterBlock {
  enabled?: boolean;
  heading?: string;
  description?: string;
  email_placeholder?: string;
  button_label?: string;
}

export interface BlogTableBlock {
  enabled?: boolean;
  heading?: string;
  content?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogImageComparisonItem {
  media_id?: string | null;
  title?: string;
  description?: string;
  url?: string | null;
  original_url?: string | null;
  media?: BlogMediaAsset | null;
}

export interface BlogImageComparisonBlock {
  enabled?: boolean;
  heading?: string;
  items?: BlogImageComparisonItem[];
}

export interface BlogNumberedListItem {
  title?: string;
  description?: string;
}

export interface BlogNumberedListBlock {
  enabled?: boolean;
  heading?: string;
  items?: BlogNumberedListItem[];
}

export interface BlogExpertQuoteBlock {
  enabled?: boolean;
  quote?: string;
  name?: string;
  role?: string;
  url?: string | null;
  original_url?: string | null;
  profile_url?: string | null;
  media?: BlogMediaAsset | null;
}

export interface BlogDoctorProfileBlock {
  enabled?: boolean;
  name?: string;
  role?: string;
  credentials?: string;
  bio?: string;
  url?: string | null;
  original_url?: string | null;
  profile_url?: string | null;
  media?: BlogMediaAsset | null;
}

export interface BlogAppointmentCtaBlock {
  enabled?: boolean;
  heading?: string;
  description?: string;
  book_appointment?: { enabled?: boolean; label?: string; url?: string };
  call_now?: { enabled?: boolean; label?: string; phone?: string; url?: string };
}

export interface BlogSpacerBlock {
  enabled?: boolean;
  height?: number | string;
}

export interface BlogDividerBlock {
  enabled?: boolean;
  style?: string;
}

export interface BlogBlocksDocument {
  blocks?: {
    hero?: BlogHeroBlock;
    key_takeaways?: { enabled?: boolean; heading?: string; items?: string[] };
    faq?: { enabled?: boolean; heading?: string; items?: Array<{ question: string; answer: string }> };
    medical_cta?: {
      enabled?: boolean;
      heading?: string;
      description?: string;
      book_appointment?: { enabled?: boolean; label?: string; url?: string };
      primary?: { label?: string; url?: string };
      secondary?: { label?: string; url?: string };
    };
    feedback?: BlogFeedbackBlock;
    newsletter?: BlogNewsletterBlock;
    table?: BlogTableBlock;
    image_comparison?: BlogImageComparisonBlock;
    numbered_list?: BlogNumberedListBlock;
    expert_quote?: BlogExpertQuoteBlock;
    doctor_profile?: BlogDoctorProfileBlock;
    appointment_cta?: BlogAppointmentCtaBlock;
    spacer?: BlogSpacerBlock;
    divider?: BlogDividerBlock;
    disclaimer?: { enabled?: boolean; text?: string };
    share?: { enabled?: boolean };
    [key: string]: unknown;
  };
  sidebar?: {
    appointment_cta?: BlogAppointmentCtaBlock;
    newsletter?: BlogNewsletterBlock;
    [key: string]: unknown;
  };
  custom_instances?:
    | Record<string, { componentKey: string; enabled?: boolean; [key: string]: unknown }>
    | Array<{ componentKey: string; enabled?: boolean; [key: string]: unknown }>;
}

export interface BlogPublishedVersion {
  id: string;
  version_number: number;
  version_type: string;
  title: string;
  excerpt: string | null;
  content_html?: string | null;
  blocks_json: BlogBlocksDocument | null;
  template_config_json?: {
    schemaVersion?: number;
    layoutId?: string;
    sections?: Array<{
      id: string;
      layout?: string;
      responsiveStrategy?: string;
      enabled?: boolean;
      settings?: Record<string, unknown>;
      slots?: Array<{
        id: string;
        name?: string;
        components?: Array<{
          id: string;
          componentKey: string;
          blockId?: string;
          enabled?: boolean;
          settings?: Record<string, unknown>;
        }>;
      }>;
    }>;
  } | null;
  seo_title: string | null;
  seo_description: string | null;
  canonical_url: string | null;
  featured_media_id: string | null;
  template_key: string;
  template_version: number;
  created_at: string;
}

export interface PublicBlogSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  status: string;
  featured_media: BlogMediaAsset | null;
  author: BlogAuthor | null;
  published_at: string | null;
  updated_at: string;
  created_at: string;
  published_version: BlogPublishedVersion | null;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_previous_page: boolean;
}

export interface BlogListResult {
  items: PublicBlogSummary[];
  pagination: BlogPagination;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data?: T;
}

function isApiEnvelope<T>(value: unknown): value is ApiEnvelope<T> {
  return Boolean(value && typeof value === "object" && "success" in value);
}

export class BlogApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BlogApiError";
  }
}

async function fetchBlogApi<T>(path: string, timeoutMs = 10000): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  let response: Response;

  try {
    response = await fetch(`${BLOG_API_BASE_URL}${BLOG_API_PREFIX}${path}`, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new BlogApiError("Blog service request timed out. Please try again.");
    }
    throw new BlogApiError(`Unable to connect to the blog service at ${BLOG_API_BASE_URL}.`);
  } finally {
    clearTimeout(timeout);
  }

  const result = (await response.json().catch(() => null)) as unknown;
  const envelope = isApiEnvelope<T>(result) ? result : null;
  if (!response.ok || !result || (envelope && envelope.success !== true)) {
    if (response.status === 404) throw new BlogApiError("Not found");
    throw new BlogApiError(envelope?.message || "Failed to load blog content");
  }

  return envelope ? envelope.data as T : result as T;
}

export async function listPublishedBlogs(options: { page?: number; limit?: number; search?: string } = {}): Promise<BlogListResult> {
  const params = new URLSearchParams();
  params.set("page", String(options.page ?? 1));
  params.set("limit", String(options.limit ?? 12));
  if (options.search) params.set("search", options.search);

  return fetchBlogApi<BlogListResult>(`/public/blogs?${params.toString()}`);
}

export async function getBlogBySlug(slug: string): Promise<PublicBlogSummary> {
  return fetchBlogApi<PublicBlogSummary>(`/public/blogs/${encodeURIComponent(slug)}`);
}

function resolveMediaVariants(media: BlogMediaAsset): Record<string, { url: string; width?: number; height?: number }> {
  if (!media.variants) return {};
  if (typeof media.variants === "string") {
    return JSON.parse(media.variants) as Record<string, { url: string; width?: number; height?: number }>;
  }
  return media.variants;
}

export function resolveBlogImageUrl(media: BlogMediaAsset | null | undefined, preferredVariant = "hero"): string | null {
  if (!media) return null;
  try {
    const variant = resolveMediaVariants(media)[preferredVariant];
    return variant?.url ?? media.original_url ?? null;
  } catch {
    return media.original_url ?? null;
  }
}

export interface BlogApiResponse<T = unknown> {
  ok: boolean;
  status: number;
  message: string | null;
  data: T | null;
  networkError?: boolean;
}

export async function submitBlogFeedback(slug: string, responseValue: "yes" | "no"): Promise<BlogApiResponse> {
  try {
    const res = await fetch(`${BLOG_API_BASE_URL}${BLOG_API_PREFIX}/public/blogs/${encodeURIComponent(slug)}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response: responseValue }),
    });
    const json = await res.json().catch(() => null);
    return {
      ok: res.ok,
      status: res.status,
      message: (json && json.message) || null,
      data: (json && json.data) ?? null,
    };
  } catch (err) {
    console.error(`submitBlogFeedback(${slug}) failed:`, err);
    return { ok: false, status: 0, message: null, data: null, networkError: true };
  }
}

export async function subscribeToNewsletter(payload: {
  email: string;
  consent: boolean;
  consentVersion?: string;
  source?: string;
}): Promise<BlogApiResponse> {
  try {
    const res = await fetch(`${BLOG_API_BASE_URL}${BLOG_API_PREFIX}/public/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: payload.email,
        consent: payload.consent,
        consent_version: payload.consentVersion ?? "v1",
        source: payload.source ?? "blog_detail",
      }),
    });
    const json = await res.json().catch(() => null);
    return {
      ok: res.ok,
      status: res.status,
      message: (json && json.message) || null,
      data: (json && json.data) ?? null,
    };
  } catch (err) {
    console.error("subscribeToNewsletter failed:", err);
    return { ok: false, status: 0, message: null, data: null, networkError: true };
  }
}

export interface BlogResolvedBlock {
  id: string;
  componentKey: string;
  enabled: boolean;
  [key: string]: unknown;
}

export function extractAllBlogBlocks(version: BlogPublishedVersion): BlogResolvedBlock[] {
  const blocksJson = version.blocks_json;
  if (!blocksJson) return [];

  const rawInstances = blocksJson.custom_instances;
  let instancesMap: Record<string, { componentKey: string; enabled?: boolean; [key: string]: unknown }> = {};

  if (Array.isArray(rawInstances)) {
    rawInstances.forEach((inst, index) => {
      const key = (inst.id as string) || (inst.blockId as string) || `inst-${index}`;
      instancesMap[key] = inst;
    });
  } else if (rawInstances && typeof rawInstances === "object") {
    instancesMap = rawInstances as Record<string, { componentKey: string; enabled?: boolean; [key: string]: unknown }>;
  }

  const templateConfig = version.template_config_json;

  if (templateConfig?.sections && Array.isArray(templateConfig.sections)) {
    const resolvedBlocks: BlogResolvedBlock[] = [];
    templateConfig.sections.forEach((section) => {
      if (section.enabled === false) return;
      (section.slots || []).forEach((slot) => {
        (slot.components || []).forEach((comp) => {
          if (comp.enabled === false) return;

          const blockId = comp.blockId || comp.id || comp.componentKey || "";
          const instanceData = instancesMap[blockId] || (blocksJson.blocks as Record<string, unknown>)?.[comp.componentKey || ""] || {};

          resolvedBlocks.push({
            ...(instanceData as Record<string, unknown>),
            ...(comp.settings || {}),
            id: blockId,
            componentKey: comp.componentKey || (instanceData as { componentKey?: string }).componentKey || "",
            enabled: (instanceData as { enabled?: boolean }).enabled !== false,
          });
        });
      });
    });

    if (resolvedBlocks.length > 0) {
      return resolvedBlocks;
    }
  }

  // Fallback: If custom_instances dictionary exists, return all instances
  const instanceValues = Object.entries(instancesMap).map(([id, data]) => ({
    ...data,
    id: (data.id as string) || id,
    componentKey: data.componentKey || "",
    enabled: data.enabled !== false,
  }));

  if (instanceValues.length > 0) {
    return instanceValues;
  }

  // Standard fallback from blocks
  const blocksObj = blocksJson.blocks || {};
  return Object.entries(blocksObj).map(([key, data]) => ({
    ...((data as Record<string, unknown>) || {}),
    id: key,
    componentKey: key,
    enabled: (data as { enabled?: boolean })?.enabled !== false,
  }));
}


