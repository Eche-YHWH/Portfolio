import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { content } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        title="Recent experience"
        subtitle="Roles and scope from my CV."
      />

      <Container>
        <div className="space-y-6">
          {content.experience.map((e, idx) => (
            <div
              key={`${e.company}-${e.period}`}
              className="card card-hover p-6 reveal"
              data-reveal
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="eyebrow">{e.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {e.title} | {e.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{e.location}</p>
                </div>

                <a className="btn btn-outline w-fit" href="#contact">
                  Request full CV
                </a>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
