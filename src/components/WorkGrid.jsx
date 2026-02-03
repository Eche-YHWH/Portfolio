import Container from "./Container";
import { content } from "../data/content";
import daashImg from "../assets/Workgrid assets/Daash Landing Page.png";
import leedsImg from "../assets/Workgrid assets/Leeds Money UK.png";

export default function WorkGrid() {
  const workItems = content.selectedWork.slice(0, 4);
  const workImages = [daashImg, leedsImg, daashImg, leedsImg];
  const layoutMap = ["work-card--wide", "work-card--tall", "work-card--tall", "work-card--wide"];

  return (
    <section id="works" className="section">
      <Container>
        <div className="work-header">
          <h2 className="font-display">Selected work</h2>
          <p className="work-range">[2022 - 2025]</p>
        </div>
      </Container>

      <Container>
        <div className="work-grid">
          {workItems.map((w, idx) => (
            <article
              key={w.title}
              className={`work-card ${layoutMap[idx]} reveal`}
              data-reveal
              style={{ "--delay": `${idx * 0.08}s` }}
            >
              <img className="work-image" src={workImages[idx]} alt={w.title} />
              <div className="work-info">
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
