import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { content } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader title={content.about.title} subtitle={content.about.body[0]} />

      <Container>
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4 text-muted reveal" data-reveal>
            <p className="spaced-copy">{content.about.body[0]}</p>
            <div className="flex flex-wrap gap-2">
              {content.about.bullets.slice(0, 3).map((b) => (
                <span key={b} className="pill text-ghost">
                  {b}
                </span>
              ))}
            </div>
            {content.about.body.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div
              className="card card-hover p-6 reveal"
              data-reveal
              style={{ "--delay": "0.1s" }}
            >
              <p className="eyebrow">What I do</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {content.about.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
