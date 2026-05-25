import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const steps = [
  "Situationsanalyse",
  "Rollenklärung",
  "Diskrete Suche",
  "Kandidatenbewertung",
  "Begleitung der Integration",
];

export function TVorgehen() {
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

        <div>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 1.4em",
          }}>
            Seit 2005 begleiten wir Familienunternehmen durch ihre anspruchsvollsten Veränderungsphasen. Wir kennen die Widerstände, die in solchen Momenten entstehen — und die Menschen, die sie überwinden können.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 1.4em",
          }}>
            Transformation gelingt nicht durch bessere Pläne allein — sie gelingt durch die richtigen Führungspersönlichkeiten zur richtigen Zeit. Wir klären zuerst, was eine Situation wirklich braucht, bevor wir suchen. Diese Frage ehrlich zu beantworten ist der entscheidende erste Schritt.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.75)",
            lineHeight: 1.8,
            margin: "0 0 clamp(28px, 4vw, 48px)",
          }}>
            Wir arbeiten diskret, bewerten Kandidaten ehrlich und begleiten die Integration aktiv — weit über den ersten Arbeitstag hinaus. Durchschnittliche Suchdauer: 9 Wochen.
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
