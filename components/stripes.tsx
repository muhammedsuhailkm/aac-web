const lines = Array.from({ length: 16 }, (_, index) => -360 + index * 56);

// The diagonal stripe motif from the company profile.
export function Stripes({
  className,
  accent = true,
  lineClassName = "stroke-line",
}: {
  className?: string;
  accent?: boolean;
  lineClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
      className={className}
    >
      {lines.map((offset, index) => {
        const accentColor =
          accent && index === 8 ? "stroke-brand" : accent && index === 9 ? "stroke-gold" : undefined;
        return (
          <line
            key={offset}
            x1={offset}
            y1={400}
            x2={offset + 400}
            y2={0}
            strokeWidth={index % 2 === 0 ? 11 : 7}
            className={accentColor ?? lineClassName}
          />
        );
      })}
    </svg>
  );
}
