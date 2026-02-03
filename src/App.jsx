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

    return () => observer.disconnect();
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
