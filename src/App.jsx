import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkGrid from "./components/WorkGrid";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    const aboutSection = document.querySelector("#about");
    const fillTitle = document.querySelector("[data-fill-text]");
    let frame;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastFillCount = -1;

    const updateFill = () => {
      if (!aboutSection || !fillTitle) return;
      const chars = Array.from(fillTitle.querySelectorAll("[data-fill-char]"));
      if (!chars.length) return;

      if (prefersReduced.matches) {
        chars.forEach((char) => char.classList.add("is-filled"));
        return;
      }

      const rect = aboutSection.getBoundingClientRect();
      const viewHeight = window.innerHeight || 0;
      const total = viewHeight + rect.height;
      const progress = (viewHeight - rect.top) / total;
      const clamped = Math.max(0, Math.min(1, progress));
      const fillCount = Math.floor(clamped * chars.length);
      if (fillCount === lastFillCount) return;
      lastFillCount = fillCount;

      chars.forEach((char, idx) => {
        if (idx < fillCount) {
          char.classList.add("is-filled");
        } else {
          char.classList.remove("is-filled");
        }
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateFill();
        frame = null;
      });
    };

    updateFill();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <WorkGrid />
        <About />
        <Testimonials />
        <Experience />
        <Articles />
        <Footer />
      </main>
    </div>
  );
}
