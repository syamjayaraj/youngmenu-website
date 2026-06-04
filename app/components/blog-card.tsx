import Link from "next/link";
import { CmsImage } from "@/app/components/cms-image";
import type { BlogPost } from "@/app/lib/blog";
import { formatBlogDate } from "@/app/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const dateLabel = formatBlogDate(post.publishedDate);

  return (
    <article
      className={`blog-card paper-card overflow-hidden rounded-[1.75rem] ${featured ? "blog-card--featured" : ""}`.trim()}
    >
      <Link href={`/blog/${post.slug}`} className="blog-card__link group">
        <div className={`blog-card__media ${featured ? "blog-card__media--featured" : ""}`}>
          {post.coverImageUrl ? (
            <CmsImage
              src={post.coverImageUrl}
              alt={post.coverImageAlt ?? post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 720px"
                  : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
              }
            />
          ) : (
            <div className="blog-card__placeholder" aria-hidden="true" />
          )}
          {post.isFeatured ? (
            <span className="blog-card__badge">Featured</span>
          ) : null}
        </div>

        <div className="blog-card__body">
          {dateLabel ? <p className="blog-card__date">{dateLabel}</p> : null}
          <h2 className={`blog-card__title ${featured ? "blog-card__title--featured" : ""}`}>
            {post.title}
          </h2>
          {post.excerpt ? (
            <p className="blog-card__excerpt">{post.excerpt}</p>
          ) : null}
          <span className="blog-card__cta">Read article</span>
        </div>
      </Link>
    </article>
  );
}
