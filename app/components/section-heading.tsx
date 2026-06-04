type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  id?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  kicker,
  title,
  description,
  id,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`section-heading ${alignClass}`.trim()}>
      <p className="kicker">{kicker}</p>
      {id ? (
        <h2 id={id} className="display-title section-heading__title mt-4">
          {title}
        </h2>
      ) : (
        <h2 className="display-title section-heading__title mt-4">{title}</h2>
      )}
      {description ? (
        <p className="section-heading__desc mt-5 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
