import React, { useEffect, useRef } from "react";
import { Navbar2 } from "./components/Navbar2";
import { HeroScroll } from "./components/HeroScroll";
import { Layout362 } from "./components/Layout362";
import { SituationSection, situations } from "./components/Layout394";
import { Layout220 } from "./components/Layout220";
import { Layout302 } from "./components/Layout302";
import { Blog36 } from "./components/Blog36";
import { Faq2 } from "./components/Faq2";
import { Cta33 } from "./components/Cta33";
import { Footer6 } from "./components/Footer6";
import { ConnectingLines } from "./components/ConnectingLines";

// Sections stack via DOM order (no explicit z-index on outer div).
// Background layer at z-index 0 → below ConnectingLines (z-index 1).
// Content layer  at z-index 2 → above ConnectingLines.
// Animation runs imperatively so transform is set to "none" after completion,
// which dissolves the temporary stacking context that transform creates.
function StackPanel({ id, children, bg = "#fff" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = "translateY(200px) scale(0.97)";
    el.style.opacity = "0";

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          el.style.transition =
            "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease";
          el.style.transform = "translateY(0) scale(1)";
          el.style.opacity = "1";

          // Remove transform after animation so stacking context dissolves
          timer = setTimeout(() => {
            el.style.transition = "";
            el.style.transform = "none";
          }, 1150);
        }
      },
      { threshold: 0.04 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      style={{
        position: "relative",
      }}
    >
      {/* z-index 0: below ConnectingLines (z-index 1) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: bg,
          zIndex: 0,
        }}
      />
      {/* z-index 2: above ConnectingLines (z-index 1) — content covers lines */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      {/* z-index 1: above section backgrounds (0), below section content (2) */}
      <ConnectingLines />

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>

      <div id="einstieg" style={{ position: "relative", zIndex: 20 }}>
        <HeroScroll />
      </div>

      <StackPanel id="zielgruppen" bg="#fff">
        <Layout362 />
      </StackPanel>

      {situations.map(({ id, bg, ...props }) => (
        <StackPanel key={id} id={id} bg={bg}>
          <SituationSection {...props} />
        </StackPanel>
      ))}

      <StackPanel id="ansatz" bg="#fff">
        <Layout220 />
      </StackPanel>

      <StackPanel id="prozess" bg="#fff">
        <Layout302 />
      </StackPanel>

      <StackPanel id="insights-teaser" bg="#fff">
        <Blog36 />
      </StackPanel>

      <StackPanel id="faq" bg="#fff">
        <Faq2 />
      </StackPanel>

      <StackPanel bg="#fff">
        <Cta33 />
      </StackPanel>

      <StackPanel bg="#fff">
        <Footer6 />
      </StackPanel>
    </div>
  );
}
