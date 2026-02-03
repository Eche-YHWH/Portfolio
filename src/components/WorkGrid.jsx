import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { content } from "../data/content";

export default function WorkGrid() {
  return (
    <section id="works" className="section">
      <SectionHeader
        eyebrow="[Selected work]"
        title="Selected work"
        subtitle="A few projects across fintech, media, and product work."
        meta="[2022 - 2025]"
      />

      <Container>
        <div className="grid gap-5 sm:grid-cols-2">
          {content.selectedWork.map((w, idx) => (
            <article
              key={w.title}
              className="card card-hover p-6 reveal"
              data-reveal
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug">{w.title}</h3>
                <span className="shrink-0 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-ghost">
                  {w.period}
                </span>
              </div>

              <p className="mt-3 text-sm text-muted">{w.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-ghost"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {w.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={w.cta.href}
                  className="btn btn-outline"
                >
                  {w.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
