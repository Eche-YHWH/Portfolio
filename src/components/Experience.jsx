import { useState } from "react";
import Container from "./Container";
import { content } from "../data/content";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="section experience-section">
      <Container>
        <div className="experience-header reveal" data-reveal>
          <h2 className="font-display">Recent experience</h2>
        </div>

        <div className="experience-list">
          {content.experience.map((e, idx) => {
            const isOpen = activeIndex === idx;
            const summary = e.summary;
            return (
              <div
                key={`${e.company}-${e.period}`}
                className={`experience-row ${isOpen ? "is-open" : ""}`}
              >
                <div className="experience-period">
                  <span className="experience-dates">{e.period}</span>
                  {e.duration ? (
                    <span className="experience-duration">{e.duration}</span>
                  ) : null}
                </div>

                <div className="experience-role">
                  <span className="experience-title">{e.title}</span>
                  {isOpen ? (
                    <div className="experience-details">
                      {summary ? (
                        <p className="experience-summary">{summary}</p>
                      ) : null}
                      {e.points?.length ? (
                        <ul className="experience-points">
                          {e.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="experience-company">{e.company}</div>

                <button
                  type="button"
                  className="experience-toggle"
                  aria-expanded={isOpen}
                  aria-label={isOpen ? "Collapse details" : "Expand details"}
                  onClick={() => setActiveIndex(idx)}
                >
                  {isOpen ? "—" : "+"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="experience-cta">
          <a
            className="btn btn-solid"
            href="https://drive.google.com/file/d/1TfkMefPg2MmyqctZO05BcAgze50QuQfY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </Container>
    </section>
  );
}
