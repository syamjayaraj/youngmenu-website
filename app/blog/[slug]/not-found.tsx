import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

export default function BlogPostNotFound() {
  return (
    <>
      <SiteHeader />
      <div id="content-root" className="flex min-h-screen flex-col">
        <main className="flex-1 texture-soft py-24">
          <div className="site-shell text-center">
            <p className="kicker">Blog</p>
            <h1 className="display-title mt-3 text-4xl text-[#2d1f18]">
              Post not found
            </h1>
            <p
              className="mx-auto mt-4 max-w-md text-[0.94rem] leading-8"
              style={{ color: "var(--page-muted)" }}
            >
              This article may have been removed or the link is incorrect.
            </p>
            <Link href="/blog" className="framed-button mt-8" data-tone="amber">
              View all posts
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
