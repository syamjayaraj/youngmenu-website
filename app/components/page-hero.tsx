type PageHeroProps = {
  kicker: string;
  title: string;
  description?: string;
  meta?: string;
};

export function PageHero({ kicker, title, description, meta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-shell">
        <p className="kicker page-hero__kicker">{kicker}</p>
        <h1 className="display-title page-hero__title mt-4">{title}</h1>
        {description ? (
          <p className="page-hero__desc mt-5 max-w-2xl">{description}</p>
        ) : null}
        {meta ? <p className="page-hero__meta mt-4">{meta}</p> : null}
      </div>
    </section>
  );
}
