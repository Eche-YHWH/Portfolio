import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { content } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionHeader
        title="What people say"
        subtitle="Replace these placeholders with real quotes when you have them."
      />

      <Container>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {content.testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="card card-hover min-w-[260px] max-w-[320px] snap-start p-6 reveal"
              data-reveal
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              <blockquote className="text-sm text-muted">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-xs text-ghost">
                <span className="font-medium text-[var(--ink)]">{t.name}</span>
                <span> | {t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
