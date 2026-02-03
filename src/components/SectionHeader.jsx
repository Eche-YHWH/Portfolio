import Container from "./Container";

export default function SectionHeader({ eyebrow, title, subtitle, meta }) {
  return (
    <Container>
      <div className="mb-10 reveal" data-reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
          </div>
          {meta ? <span className="pill text-ghost">{meta}</span> : null}
        </div>
      </div>
    </Container>
  );
}
