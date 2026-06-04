import { cmsFetch, getCmsUrl } from "@/app/lib/cms";

export type BlogPost = {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: unknown;
  coverImageUrl: string | null;
  coverImageAlt: string | null;
  coverImageWidth: number;
  coverImageHeight: number;
  publishedDate: string | null;
  isFeatured: boolean;
  sortOrder: number;
};

type StrapiListResponse = {
  data?: unknown[];
  meta?: { pagination?: { total?: number } };
};

function unwrapEntry(entry: unknown): Record<string, unknown> | null {
  if (!entry || typeof entry !== "object") return null;

  const record = entry as Record<string, unknown>;

  if (record.attributes && typeof record.attributes === "object") {
    return {
      id: record.id,
      ...(record.attributes as Record<string, unknown>),
    };
  }

  return record;
}

function resolveMediaUrl(media: unknown): {
  url: string;
  alt: string;
  width: number;
  height: number;
} | null {
  if (!media || typeof media !== "object") return null;

  const root = media as Record<string, unknown>;
  const nested = root.data;
  const node =
    nested && typeof nested === "object"
      ? (nested as Record<string, unknown>)
      : root;

  const attrs =
    node.attributes && typeof node.attributes === "object"
      ? (node.attributes as Record<string, unknown>)
      : node;

  const formats = attrs.formats as
    | Record<string, { url?: string; width?: number; height?: number }>
    | undefined;

  const format =
    formats?.large ?? formats?.medium ?? formats?.small ?? null;

  const rawUrl =
    (typeof format?.url === "string" && format.url) ||
    (typeof attrs.url === "string" && attrs.url) ||
    null;

  if (!rawUrl) return null;

  const base = getCmsUrl();
  const url = rawUrl.startsWith("http") ? rawUrl : `${base}${rawUrl}`;

  const width =
    (typeof format?.width === "number" && format.width) ||
    (typeof attrs.width === "number" && attrs.width) ||
    1200;

  const height =
    (typeof format?.height === "number" && format.height) ||
    (typeof attrs.height === "number" && attrs.height) ||
    675;

  const alt =
    typeof attrs.alternativeText === "string" ? attrs.alternativeText : "";

  return { url, alt, width, height };
}

function hasNoStore(attrs: Record<string, unknown>): boolean {
  if (!("store" in attrs)) return true;

  const store = attrs.store;

  if (store == null) return true;

  if (typeof store === "object") {
    const record = store as Record<string, unknown>;
    if (record.data === null) return true;
    if (record.data === undefined && record.id == null) return true;
  }

  return false;
}

function normalizeBlogPost(entry: unknown): BlogPost | null {
  const attrs = unwrapEntry(entry);
  if (!attrs) return null;

  if (!hasNoStore(attrs)) return null;

  const slug = attrs.slug;
  const title = attrs.title;

  if (typeof slug !== "string" || !slug || typeof title !== "string" || !title) {
    return null;
  }

  const cover = resolveMediaUrl(attrs.coverImage);

  return {
    id: (attrs.id as number | string) ?? slug,
    slug,
    title,
    excerpt: typeof attrs.excerpt === "string" ? attrs.excerpt : null,
    content: attrs.content ?? null,
    coverImageUrl: cover?.url ?? null,
    coverImageAlt: cover?.alt ?? title,
    coverImageWidth: cover?.width ?? 1200,
    coverImageHeight: cover?.height ?? 675,
    publishedDate:
      typeof attrs.publishedDate === "string" ? attrs.publishedDate : null,
    isFeatured: Boolean(attrs.isFeatured),
    sortOrder:
      typeof attrs.sortOrder === "number" ? attrs.sortOrder : Number(attrs.sortOrder) || 0,
  };
}

function blogQueryParams(extra?: Record<string, string | undefined>) {
  const params: Record<string, string | undefined> = {
    "sort[0]": "sortOrder:asc",
    "sort[1]": "publishedDate:desc",
    "pagination[pageSize]": "100",
    "populate[coverImage]": "true",
    "populate[store]": "true",
    "filters[publishedAt][$notNull]": "true",
    ...extra,
  };

  return params;
}

function sortPosts(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    const dateA = a.publishedDate ? Date.parse(a.publishedDate) : 0;
    const dateB = b.publishedDate ? Date.parse(b.publishedDate) : 0;
    return dateB - dateA;
  });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await cmsFetch<StrapiListResponse>("/api/blog-posts", {
    searchParams: blogQueryParams(),
    revalidate: 60,
    tags: ["blog-posts"],
  });

  if (!response?.data?.length) return [];

  const posts = response.data
    .map(normalizeBlogPost)
    .filter((post): post is BlogPost => post !== null);

  return sortPosts(posts);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await cmsFetch<StrapiListResponse>("/api/blog-posts", {
    searchParams: blogQueryParams({
      "filters[slug][$eq]": slug,
      "pagination[pageSize]": "1",
    }),
    revalidate: 60,
    tags: ["blog-posts", `blog-post-${slug}`],
  });

  const entry = response?.data?.[0];
  if (!entry) return null;

  return normalizeBlogPost(entry);
}

export function formatBlogDate(isoDate: string | null): string | null {
  if (!isoDate) return null;

  const parsed = Date.parse(isoDate);
  if (Number.isNaN(parsed)) return null;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(parsed));
}
