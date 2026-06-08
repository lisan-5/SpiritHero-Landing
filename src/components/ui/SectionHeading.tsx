type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
