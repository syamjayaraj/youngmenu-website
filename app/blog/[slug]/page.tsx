import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { CmsImage } from "@/app/components/cms-image";
import { BlogRichText } from "@/app/components/blog-rich-text";
import {
  formatBlogDate,
  getBlogPostBySlug,
  getBlogPosts,
} from "@/app/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const description =
    post.excerpt ??
    `Read ${post.title} on the YoungMenu blog.`;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedDate ?? undefined,
      images: post.coverImageUrl
        ? [{ url: post.coverImageUrl, alt: post.coverImageAlt ?? post.title }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const dateLabel = formatBlogDate(post.publishedDate);

  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 texture-soft">
          <section className="py-12 sm:py-16">
            <div className="site-shell">
              <Link href="/blog" className="blog-back-link">
                ← Back to blog
              </Link>

              <article className="blog-article">
                <header className="blog-article__header">
                  {dateLabel ? (
                    <p className="blog-article__date">{dateLabel}</p>
                  ) : null}
                  <h1 className="display-title blog-article__title">
                    {post.title}
                  </h1>
                </header>

                {post.coverImageUrl ? (
                  <div className="blog-article__cover paper-card overflow-hidden rounded-[1.75rem]">
                    <CmsImage
                      src={post.coverImageUrl}
                      alt={post.coverImageAlt ?? post.title}
                      width={post.coverImageWidth}
                      height={post.coverImageHeight}
                      className="h-auto w-full object-cover"
                      priority
                      sizes="(max-width: 1200px) 100vw, 1180px"
                    />
                  </div>
                ) : null}

                <div className="blog-article__content">
                  <BlogRichText content={post.content} />
                </div>
              </article>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
