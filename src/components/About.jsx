import Container from "./Container";
import { content } from "../data/content";
import avatarImg from "../assets/Avatar.jpg";
import { RefreshCCWIcon } from "./ui/refresh-ccw";
import { WorkflowIcon } from "./ui/workflow";
import { MapPinIcon } from "./ui/map-pin";

export default function About() {
  const aboutStatement = content.about.body.join(" ");
  const aboutChars = Array.from(aboutStatement);
  const detailItems = [
    { label: content.about.bullets[0], Icon: RefreshCCWIcon },
    { label: content.about.bullets[1], Icon: WorkflowIcon },
    { label: content.about.bullets[2], Icon: MapPinIcon },
  ];

  return (
    <section id="about" className="section about-section">
      <Container>
        <div className="about-stack">
          <div className="about-profile reveal" data-reveal>
            <div className="about-avatar">
              <img src={avatarImg} alt={content.person.name} />
            </div>
            <div>
              <p className="about-name">{content.person.name}</p>
              <p className="about-role">{content.person.role}</p>
            </div>
          </div>

          <h2 className="about-title font-display" data-fill-text>
            {aboutChars.map((char, idx) => (
              <span key={`${char}-${idx}`} className="fill-char" data-fill-char>
                {char}
              </span>
            ))}
          </h2>

          <a href="#contact" className="btn btn-accent about-cta">
            Let's talk!
          </a>

          <div className="about-details">
            {detailItems.map(({ label, Icon }) => (
              <div key={label} className="about-pill">
                <Icon className="about-icon" size={20} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
