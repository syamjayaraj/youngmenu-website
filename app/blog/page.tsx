import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { BlogCard } from "@/app/components/blog-card";
import { getBlogPosts } from "@/app/lib/blog";
import { getCmsUrl } from "@/app/lib/cms";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, product updates, and stories from YoungMenu for restaurants, cafes, and home bakers.",
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured =
    posts.find((post) => post.isFeatured) ?? (posts.length > 0 ? posts[0] : null);
  const rest = featured
    ? posts.filter((post) => post.slug !== featured.slug)
    : posts;
  const cmsConfigured = Boolean(process.env.CMS_URL?.trim());

  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 texture-soft">
          <section
            className="py-24 text-white sm:py-32"
            style={{ background: "#13110f" }}
          >
            <div className="site-shell">
              <p className="kicker" style={{ color: "var(--page-amber)" }}>
                YoungMenu Blog
              </p>
              <h1 className="display-title mt-4 max-w-3xl text-5xl text-white sm:text-6xl">
                Stories from the food ecosystem.
              </h1>
              <p
                className="mt-5 max-w-2xl text-base leading-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Product updates, restaurant operations tips, and announcements
                from the YoungMenu team.
              </p>
            </div>
          </section>

          <section className="py-14 sm:py-20">
            <div className="site-shell">
              {posts.length === 0 ? (
                <BlogEmptyState cmsConfigured={cmsConfigured} />
              ) : (
                <div className="blog-index">
                  {featured ? (
                    <div className="blog-index__featured">
                      <BlogCard post={featured} featured />
                    </div>
                  ) : null}

                  {rest.length > 0 ? (
                    <div className="blog-index__grid">
                      {rest.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

function BlogEmptyState({ cmsConfigured }: { cmsConfigured: boolean }) {
  const cmsUrl = getCmsUrl();

  return (
    <div className="blog-empty paper-card rounded-[1.75rem] px-6 py-12 text-center sm:px-10">
      <p className="kicker">No posts yet</p>
      <h2 className="display-title mt-3 text-3xl text-[#2d1f18]">
        Check back soon
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-[0.94rem] leading-8" style={{ color: "var(--page-muted)" }}>
        {cmsConfigured
          ? "Publish official YoungMenu blog posts in Strapi with no store selected, then publish them. Enable public read access on blog-posts — or set CMS_API_TOKEN."
          : "Add CMS_URL to your environment (see env.example) to load posts from Strapi."}
      </p>
      {cmsConfigured ? (
        <ul className="mx-auto mt-5 max-w-lg space-y-2 text-left text-sm" style={{ color: "#9a7e6e" }}>
          <li>CMS: {cmsUrl}</li>
          <li>Only posts with an empty store field appear on this site.</li>
          <li>Strapi → Settings → Users & Permissions → Public → enable Blog Post find / findOne</li>
        </ul>
      ) : null}
    </div>
  );
}
