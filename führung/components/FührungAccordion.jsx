import React, { useState } from "react";
import { FRollen } from "./FRollen";
import { FSituationen } from "./FSituationen";
import { FUnterschied } from "./FUnterschied";
import { FProzess } from "./FProzess";
import { FCta } from "./FCta";

const serif = "'EB Garamond', Georgia, serif";

const sections = [
  { id: "rollen",       title: "Rollen",              component: <FRollen /> },
  { id: "situationen",  title: "Situationen",          component: <FSituationen /> },
  { id: "unterschied",  title: "Was uns unterscheidet", component: <FUnterschied /> },
  { id: "prozess",      title: "Prozess",              component: <FProzess /> },
  { id: "erstgespraech", title: "Erstgespräch anfragen", component: <FCta /> },
];

const SIDE_PAD = "clamp(40px, 7%, 120px)";

function ToggleSwitch({ on, onChange }) {
  return (
    <button
      onClick={() => onChange(!on)}
      aria-label="Alle anzeigen"
      style={{
        width: 48,
        height: 26,
        borderRadius: 13,
        background: on ? "#1a1817" : "rgba(26,24,23,0.18)",
        position: "relative",
        border: "none",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.25s ease",
        padding: 0,
      }}
    >
      <div style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#fff",
        position: "absolute",
        top: 3,
        left: on ? 25 : 3,
        transition: "left 0.25s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}

function AccordionSection({ title, children, isOpen, onToggle }) {
  return (
    <div>
      <div style={{ height: 1, background: "rgba(26,24,23,0.12)" }} />
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `clamp(24px, 3.5vw, 44px) ${SIDE_PAD}`,
          cursor: "pointer",
          gap: 24,
        }}
      >
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(30px, 4.5vw, 68px)",
          lineHeight: 1.02,
          letterSpacing: "0.01em",
          color: "#00693C",
          margin: 0,
        }}>
          {title}
        </h2>

        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 500,
            color: isOpen ? "#fff" : "#1a1817",
            background: isOpen ? "#1a1817" : "rgba(26,24,23,0.08)",
            border: "none",
            borderRadius: 100,
            padding: "clamp(9px, 1vw, 12px) clamp(18px, 2vw, 26px)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
            whiteSpace: "nowrap",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          {isOpen ? "Ausblenden" : "Anzeigen"}
          <span style={{ fontSize: 18, lineHeight: 1, fontWeight: 300 }}>
            {isOpen ? "—" : "+"}
          </span>
        </button>
      </div>

      <div style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function FührungAccordion() {
  const [openSections, setOpenSections] = useState({});

  const allOpen = sections.every((s) => openSections[s.id]);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShowAll = (val) => {
    const next = {};
    if (val) sections.forEach((s) => { next[s.id] = true; });
    setOpenSections(next);
  };

  return (
    <section style={{ background: "#fff", paddingTop: "clamp(56px, 8vw, 96px)", paddingBottom: "clamp(72px, 10vw, 120px)" }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `0 ${SIDE_PAD}`,
        marginBottom: "clamp(32px, 4vw, 52px)",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 16px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.5)",
          margin: 0,
        }}>
          Unsere Beratungsthemen
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.6)",
          }}>
            Alle anzeigen
          </span>
          <ToggleSwitch on={allOpen} onChange={handleShowAll} />
        </div>
      </div>

      {sections.map((s) => (
        <AccordionSection
          key={s.id}
          title={s.title}
          isOpen={!!openSections[s.id]}
          onToggle={() => toggleSection(s.id)}
        >
          {s.component}
        </AccordionSection>
      ))}

      <div style={{ height: 1, background: "rgba(26,24,23,0.12)" }} />
    </section>
  );
}
