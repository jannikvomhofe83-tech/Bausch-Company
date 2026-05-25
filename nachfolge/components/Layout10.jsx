import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const steps = [
  "Situationsanalyse",
  "Rollendefinition",
  "Diskrete Suche",
  "Kandidatenbewertung",
  "Begleitung der Übergabe",
];

export function Layout10() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(56px, 8vw, 96px)",
      background: "#fff",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(48px, 8vw, 120px)",
        alignItems: "start",
      }}>

        {/* Left: flowing text */}
        <div>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 1.4em",
          }}>
            Wir gewinnen für unsere Kunden jene Kandidaten, die neben exzellenten Qualifikationen auch über den Charakter verfügen, der für einen nachhaltigen Unternehmenserfolg erforderlich ist: Persönlichkeiten, die neben einem klugen Kopf und dem Gespür für richtige Entscheidungen auch über einen intakten Wertekanon verfügen.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 1.4em",
          }}>
            Die meisten Fehlbesetzungen entstehen nicht in der Suche — sondern weil die Rolle nie klar definiert wurde. Bevor wir suchen, stellen wir die entscheidende Frage: Welche Führung braucht dieses Unternehmen in seiner aktuellen Situation wirklich? Nicht welche Führung es zuletzt hatte, und nicht welche es sich wünscht — sondern welche es jetzt braucht.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 clamp(28px, 4vw, 48px)",
          }}>
            Dieser Schritt ist nicht optional — er ist unser Fundament für jedes Mandat, das wir annehmen. Erst wenn diese Frage ehrlich beantwortet ist, beginnen wir. Durchschnittliche Suchdauer: 9 Wochen.
          </p>

          <Link
            to="/kontakt"
            style={{
              fontFamily: serif,
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 500,
              color: "#1a1817",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            Gespräch vereinbaren
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <line x1="0" y1="8" x2="24" y2="8" stroke="#1a1817" strokeWidth="1.3" />
              <polyline points="17,2 24,8 17,14" fill="none" stroke="#1a1817" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Right: step list with dividers */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step}
              style={{
                borderTop: "1px solid rgba(26,24,23,0.1)",
                padding: "clamp(14px, 1.8vw, 22px) 0",
                borderBottom: i === steps.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
              }}
            >
              <p style={{
                fontFamily: serif,
                fontSize: "clamp(15px, 1.2vw, 18px)",
                fontWeight: 400,
                color: "#1a1817",
                margin: 0,
                lineHeight: 1.3,
              }}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
