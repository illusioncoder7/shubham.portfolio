import { useState, useEffect, useRef } from "react";
import {
  profile,
  images,
  about,
  experience,
  education,
  techStacks,
} from "./data/resume";
import BackgroundEffects from "./components/BackgroundEffects";
import BlockchainSideDecor from "./components/BlockchainSideDecor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const baseUrl = (path) => {
  const base = import.meta.env.BASE_URL || "/";
  return base + (path.startsWith("/") ? path.slice(1) : path);
};

const NAV_SECTIONS = [
  { id: "about", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "tech-stacks", label: "My Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activeNav, setActiveNav] = useState("#");
  const [revealed, setRevealed] = useState({});
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map((s) => s.id).filter(
      (id) => id !== "top",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target.id) return;
          if (entry.isIntersecting) {
            setRevealed((v) => ({ ...v, [entry.target.id]: true }));
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const top = vh * 0.15;
          const bottom = vh * 0.5;
          if (rect.top < vh - top && rect.bottom > bottom) {
            setRevealed((v) => (v[id] ? v : { ...v, [id]: true }));
          }
        });
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const checkTechStacksInView = () => {
      const el = document.getElementById("tech-stacks");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh * 0.75 && rect.bottom > vh * 0.25) {
        setRevealed((v) =>
          v["tech-stacks"] ? v : { ...v, "tech-stacks": true },
        );
      }
    };
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 300) setActiveNav("#");
      lastScrollY.current = y;
      checkTechStacksInView();
    };
    checkTechStacksInView();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el =
      id === "top" ? document.documentElement : document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <BackgroundEffects />
      <BlockchainSideDecor />

      <div className="flex flex-col md:flex-row md:items-start p-4 md:p-8 lg:p-12 gap-4 md:gap-8 lg:gap-32">
        {/* left side of the screen */}
        <div className="v4-left-sticky w-full flex flex-col gap-4 max-md:pt-[58px]">
          <div className="max-md:fixed max-md:top-0 max-md:inset-x-0 max-md:z-50 max-md:px-4 max-md:pt-4">
            <Navbar
              sections={NAV_SECTIONS}
              activeNav={activeNav}
              handleNavClick={handleNavClick}
              baseUrl={baseUrl}
            />
          </div>
          <HeroSection
            profile={profile}
            images={images}
            baseUrl={baseUrl}
            handleNavClick={handleNavClick}
          />
        </div>
        {/* right side of the screen */}
        <main className="font-serif md:w-3/5 md:flex-[0_0_60%]">
          <a
            href="#about"
            className="block text-center text-[1.22rem] font-semibold text-neon no-underline overflow-hidden hover:text-neon-bright transition-colors duration-200 "
            onClick={handleNavClick}
            aria-label="Home"
          >
            <span className="inline-block w-[min(60ch,100%)] max-w-full min-w-0 overflow-hidden align-middle">
              <span className="v4-nav-logo-typewriter text-neon tracking-[0.02em] text-[0.75rem] md:text-[1rem]">
                My code is poetry in a language you don't speak
              </span>
            </span>
          </a>

          <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-4 z-50 pointer-events-auto max-lg:hidden">
            <div className="v4-hero-mail-line w-px h-[90px] bg-linear-to-b from-neon to-transparent ml-auto" />
            <a
              href={`mailto:${profile.email}`}
              className="text-base font-serif tracking-widest [writing-mode:vertical-rl] text-muted no-underline p-[5px] transition-all duration-250 hover:text-neon hover:-translate-y-[3px]"
            >
              {profile.email}
            </a>
          </div>

          <AboutSection
            about={about}
            images={images}
            baseUrl={baseUrl}
            revealed={revealed}
          />
          <ExperienceSection experience={experience} revealed={revealed} />
          <SkillsSection
            techStacks={techStacks}
            baseUrl={baseUrl}
            revealed={revealed}
          />
          <EducationSection education={education} revealed={revealed} />
          <ContactSection profile={profile} revealed={revealed} />
        </main>
      </div>

      <Footer name={profile.name} />
    </>
  );
}

export default App;
