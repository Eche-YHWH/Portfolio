import { useState } from "react";
import Container from "./Container";
import { content } from "../data/content";

const links = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Articles", href: "#articles" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[rgba(255,249,242,0.86)] backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#top" className="signature tracking-tight">
          {content.person.name}
        </a>

        <nav className="hidden items-center gap-6 rounded-full border border-black/10 bg-white/80 px-6 py-2 text-sm text-ghost shadow-[0_12px_30px_rgba(20,18,16,0.08)] md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-solid hidden md:inline-flex">
          Let's connect
        </a>

        <button
          type="button"
          className={`hamburger md:hidden ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </Container>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
        <div className="mobile-panel">
          <nav className="mobile-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="menu-actions">
            <a href="#works" className="btn btn-outline" onClick={closeMenu}>
              View work
            </a>
            <a href="#contact" className="btn btn-solid" onClick={closeMenu}>
              Let's connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
