"use client";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  const track = [...items, ...items];

  return (
    <div className="testimonials-marquee" aria-hidden="false">
      <div className="testimonials-marquee__track">
        {track.map((item, index) => (
          <article
            key={`${item.author}-${index}`}
            className="testimonials-marquee__card paper-card"
          >
            <p className="testimonials-marquee__stars" aria-hidden="true">
              ★★★★★
            </p>
            <blockquote className="testimonials-marquee__quote">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="testimonials-marquee__author">
              <span className="testimonials-marquee__avatar">{item.initials}</span>
              <div>
                <p className="testimonials-marquee__name">{item.author}</p>
                <p className="testimonials-marquee__role">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
