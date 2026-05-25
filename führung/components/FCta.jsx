import React, { useState } from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

export function FCta() {
  const [hover, setHover] = useState(false);

  return (
    <section style={{
      background: "#fff",
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
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
          Das Erstgespräch dauert in der Regel 45 bis 60 Minuten und findet auf Wunsch persönlich oder per Videokonferenz statt. Es ist kein Verkaufsgespräch — es ist eine ehrliche Bestandsaufnahme Ihrer Situation.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 1.4em",
        }}>
          Wir klären gemeinsam, welche Führung Ihr Unternehmen in seiner aktuellen Situation braucht — und ob und wie wir Sie dabei begleiten können. Am Ende des Gesprächs wissen beide Seiten, ob eine Zusammenarbeit Sinn ergibt.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 clamp(32px, 4vw, 48px)",
        }}>
          Diese Klarheit — für beide Seiten — halten wir für selbstverständlich.
        </p>

        <Link
          to="/kontakt"
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
          Erstgespräch vereinbaren
        </Link>
      </div>
    </section>
  );
}
