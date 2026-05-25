import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

export function LeadMagnetTeaser() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 9vw, 112px) clamp(40px, 14%, 220px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>

      {/* Top centered label */}
      <p style={{
        fontFamily: serif,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "rgba(26,24,23,0.55)",
        margin: 0,
        textAlign: "center",
      }}>
        Lead Magnet · Kostenlos herunterladen
      </p>

      {/* Content column */}
      <div style={{ width: "100%", marginTop: "clamp(24px, 3vw, 40px)" }}>

        {/* Big headline */}
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(72px, 12vw, 160px)",
          lineHeight: 0.9,
          letterSpacing: "-0.025em",
          color: "#1a1817",
          margin: 0,
          marginBottom: "clamp(28px, 3.5vw, 48px)",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          Checkliste
        </h2>

        {/* Small caps subtitle */}
        <p style={{
          fontFamily: serif,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#1a1817",
          margin: 0,
          marginBottom: "clamp(14px, 1.8vw, 22px)",
          textAlign: "center",
        }}>
          Nachfolge · Familienunternehmen
        </p>

        {/* Body text — narrow column, centered */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(14px, 1.1vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.7)",
            margin: 0,
            textAlign: "justify",
            marginBottom: "clamp(40px, 5vw, 64px)",
            maxWidth: "38ch",
          }}>
            Die 10 entscheidenden Fragen, die Eigentümer vor einer Führungsbesetzung
            klären müssen — als strukturiertes Denkinstrument für den Moment, in dem
            Nachfolge nicht mehr aufschiebbar ist. Kein Newsletter, kein Formular,
            kein Aufwand. Nur Substanz für Eigentümer und Geschäftsführer, die wissen,
            dass die richtige Führungsentscheidung über Jahrzehnte entscheidet.
            Wer zu spät beginnt, zahlt den Preis mit einem schlechten Übergang —
            und mit Unsicherheit im Unternehmen. Diese Checkliste hilft, das zu vermeiden.
            Kostenlos, direkt, ohne Umwege.
          </p>
        </div>
      </div>

      {/* Bottom — two lines with content between, like in screenshot */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <p style={{
          fontFamily: serif,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(26,24,23,0.55)",
          margin: 0,
          marginBottom: "clamp(20px, 2.5vw, 32px)",
          lineHeight: 1.9,
        }}>
          Checkliste:<br />
          Erfolgreiche Nachfolge im Familienunternehmen
        </p>

        <div style={{ height: 1, background: "rgba(26,24,23,0.18)", marginBottom: "clamp(20px, 2.5vw, 32px)" }} />

        <Link to="/lead-magnet" style={{
          fontFamily: serif,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textDecoration: "none",
          background: "#1a1817",
          color: "#fff",
          padding: "12px 36px",
          borderRadius: "100px",
          display: "inline-block",
          marginBottom: "clamp(20px, 2.5vw, 32px)",
        }}>
          Zur Checkliste
        </Link>

        <div style={{ height: 1, background: "rgba(26,24,23,0.18)" }} />
      </div>

    </section>
  );
}
