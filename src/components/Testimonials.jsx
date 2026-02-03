import Container from "./Container";
import { content } from "../data/content";
import testimonialImg from "../assets/Testimonial 1.avif";

export default function Testimonials() {
  const stackAngles = ["-1.6deg", "1deg", "-0.8deg"];

  return (
    <section id="testimonials" className="section testimonial-section">
      <Container>
        <div className="testimonial-heading">
          <h2 className="font-display">What my colleagues say</h2>
        </div>

        <div className="testimonial-stack">
          {content.testimonials.map((t, idx) => (
            <article
              key={t.headline}
              className="testimonial-card"
              style={{
                "--stack": idx,
                "--angle": stackAngles[idx % stackAngles.length],
              }}
            >
              <div className="testimonial-copy">
                <span className="testimonial-mark">“</span>
                <h3>{t.headline}</h3>
                <p>{t.body}</p>
                <div className="testimonial-meta">
                  <span className="testimonial-avatar" aria-hidden="true" />
                  <div>
                    <span className="name">{t.name}</span>
                    <span className="role">{t.title}</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-image">
                <img src={testimonialImg} alt={t.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-end">
          <a href={content.person.linkedinHref} className="btn btn-solid">
            Read on LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
