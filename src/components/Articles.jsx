import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { content } from "../data/content";

export default function Articles() {
  return (
    <section id="articles" className="section">
      <SectionHeader
        title="Articles"
        subtitle="Optional section. Keep, remove, or swap for LinkedIn posts."
      />

      <Container>
        <div className="grid gap-5 sm:grid-cols-3">
          {content.articles.map((a, idx) => (
            <a
              key={a.title}
              href={a.href}
              className="card card-hover p-6 reveal"
              data-reveal
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              <p className="text-xs text-ghost">{a.date}</p>
              <p className="mt-3 text-base font-semibold">{a.title}</p>
              <p className="mt-3 text-sm text-muted">Read more</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn btn-outline reveal" data-reveal style={{ "--delay": "0.1s" }}>
            Load more
          </button>
        </div>
      </Container>
    </section>
  );
}
