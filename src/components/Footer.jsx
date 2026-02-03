import Container from "./Container";
import { content } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="section border-t border-black/10">
      <Container>
        <div className="card card-hover p-8 reveal" data-reveal>
          <div className="flex flex-wrap items-center gap-2 text-xs text-ghost">
            <span className="pill">Drop me a follow</span>
            <span className="pill">{content.person.location}</span>
            <a className="pill" href={content.person.linkedinHref}>
              {content.person.linkedinLabel}
            </a>
            <a className="pill uppercase tracking-[0.35em]" href="#top">
              Go home
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Let us build</p>
              <h2 className="font-display mt-3 text-3xl font-semibold">
                {content.contact.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{content.contact.body}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {content.contact.ctas.map((c) => (
                <a key={c.label} href={c.href} className="btn btn-accent">
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-ghost">
            Copyright {new Date().getFullYear()} {content.person.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
