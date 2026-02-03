import Container from "./Container";
import { content } from "../data/content";
import avatarImg from "../assets/Avatar.jpg";

export default function Hero() {
  const emphasisWords = new Set(["products", "partnerships", "execution"]);
  const headlineParts = content.hero.headline.split(/(\b\w+\b)/);
  const brandItems = ["Amara", "Treva", "Foxhub", "Openlane", "North"];

  return (
    <section id="top" className="hero-section">
      <div className="hero-stage">
        <a className="hero-chip chip-follow" href={content.person.linkedinHref}>
          <span className="chip-label">Drop me a follow</span>
          <span className="chip-icons" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.388-4.1 11.6-11.6 11.6-2.308 0-4.455-.676-6.264-1.84.33.038.647.05.99.05a8.2 8.2 0 0 0 5.078-1.748 4.1 4.1 0 0 1-3.828-2.844c.248.038.495.064.756.064.362 0 .724-.05 1.06-.14a4.093 4.093 0 0 1-3.284-4.02v-.05c.544.304 1.176.494 1.84.52A4.091 4.091 0 0 1 2.6 6.286c0-.76.202-1.45.546-2.054a11.63 11.63 0 0 0 8.44 4.28 4.62 4.62 0 0 1-.102-.94 4.09 4.09 0 0 1 7.078-2.793 8.09 8.09 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.796 2.256 8.2 8.2 0 0 0 2.35-.633 8.79 8.79 0 0 1-2.04 2.105z" />
            </svg>
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h3.96v12H3V9zm7.5 0H14v1.7h.05c.48-.9 1.66-1.85 3.41-1.85 3.65 0 4.33 2.4 4.33 5.5V21h-3.96v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.05 1.38-2.05 2.8V21H10.5V9z" />
            </svg>
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3.94 6.06-4.95 4.95-2.12-2.12-1.42 1.42L11 15.85l6.36-6.36-1.42-1.43z" />
            </svg>
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.2-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </span>
        </a>
        <span className="hero-chip chip-location">{content.person.location}</span>
        <a className="hero-chip chip-scroll chip-action" href="#about">
          <span className="chip-text">Scroll</span>
          <span className="chip-cursor" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
          </span>
        </a>
        <a className="hero-chip chip-work chip-action" href="#works">
          <span className="chip-text">
            <span className="chip-text-default">Check my work</span>
            <span className="chip-text-hover">Click me</span>
          </span>
          <span className="chip-cursor" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
          </span>
        </a>

        <Container>
          <div className="hero-center reveal" data-reveal>
            <div className="hero-profile">
              <div className="hero-avatar">
                <img src={avatarImg} alt={content.person.name} />
              </div>
              <div>
                <p className="hero-name">{content.person.name}</p>
                <p className="hero-role">{content.person.role}</p>
                <div className="hero-availability">
                  <span className="status-dot" aria-hidden="true" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            <h1 className="hero-title font-display">
              {headlineParts.map((part, idx) => {
                if (emphasisWords.has(part.toLowerCase())) {
                  return (
                    <span key={`em-${idx}`} className="hero-emphasis">
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </h1>
            <p className="hero-subtitle">{content.hero.subheadline}</p>

            <div className="hero-actions">
              <a href={content.hero.primaryCta.href} className="btn btn-accent">
                {content.hero.primaryCta.label}
              </a>
              <a href={content.hero.secondaryCta.href} className="btn btn-outline">
                {content.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="hero-brands reveal" data-reveal style={{ "--delay": "0.1s" }}>
          {brandItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
