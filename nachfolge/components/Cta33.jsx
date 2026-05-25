import React, { useState } from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

export function Cta33() {
  const [hover, setHover] = useState(false);

  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 1.4em",
        }}>
          Die meisten Nachfolgeprozesse scheitern nicht an fehlendem Willen — sondern daran, dass zu spät mit der Vorbereitung begonnen wurde. Wer die richtigen Fragen früh stellt, gewinnt Handlungsspielraum.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 1.4em",
        }}>
          Unsere Checkliste strukturiert die drei kritischsten Bereiche einer Nachfolge: die Definition der Rolle, das Anforderungsprofil an den Kandidaten und die Planung des Übergabeprozesses. Sie ist kein Formular — sie ist ein Denkwerkzeug.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 clamp(32px, 4vw, 48px)",
        }}>
          Kostenlos, sofort anwendbar — und erfahrungsgemäß der erste ehrliche Blick auf das, was in einem Unternehmen noch nicht geklärt ist.
        </p>

        <Link
          to="/lead-magnet"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            fontWeight: 500,
            color: "#fff",
            background: hover ? "#005530" : "#00693C",
            textDecoration: "none",
            display: "inline-block",
            padding: "clamp(14px, 1.5vw, 18px) clamp(28px, 3vw, 44px)",
            borderRadius: 4,
            transition: "background 0.2s ease",
          }}
        >
          Checkliste herunterladen
        </Link>
      </div>
    </section>
  );
}
