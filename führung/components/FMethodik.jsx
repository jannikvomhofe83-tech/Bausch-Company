import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const steps = [
  "Situationsanalyse",
  "Rollenklärung",
  "Diskrete Suche",
  "Kandidatenbewertung",
  "Begleitung der Einarbeitung",
];

export function FMethodik() {
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
            Führungskräfte, die wirklich passen, suchen in der Regel nicht aktiv. Sie sind in Positionen, die ihnen etwas bedeuten — und sie wechseln nur, wenn Anspruch, Situation und Gesprächspartner stimmen. Wir erreichen genau diese Menschen.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 1.4em",
          }}>
            Bevor wir suchen, klären wir: Was braucht dieses Unternehmen in seiner aktuellen Lage wirklich? Nicht welche Führungskraft zuletzt da war, und nicht welche das Organigramm vorsieht — sondern welche Persönlichkeit jetzt gefragt ist. Diese Frage ehrlich zu beantworten ist die wichtigste Leistung, die wir erbringen.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 clamp(28px, 4vw, 48px)",
          }}>
            Wir suchen diskret, bewerten ehrlich — auch wenn das bedeutet, von einem Kandidaten abzuraten — und begleiten die Einarbeitung über den ersten Arbeitstag hinaus. Durchschnittliche Suchdauer: 9 Wochen.
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

        {/* Right: step list */}
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
