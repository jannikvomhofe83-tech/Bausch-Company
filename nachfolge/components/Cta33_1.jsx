import React, { useState } from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

export function Cta33_1() {
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
          Wir klären gemeinsam, wo Sie im Prozess stehen: Ist die Nachfolge bereits konkret geplant oder noch im Stadium erster Überlegungen? Gibt es bereits Kandidaten — intern oder extern — oder beginnt die Suche von vorn? Und vor allem: Welche Führung braucht Ihr Unternehmen in seiner aktuellen Situation wirklich?
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(15px, 1.25vw, 18px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.75)",
          lineHeight: 1.8,
          margin: "0 0 clamp(32px, 4vw, 48px)",
        }}>
          Am Ende des Gesprächs wissen Sie, ob und wie wir Sie begleiten können — und wir wissen, ob wir das Mandat annehmen können und wollen. Beides gehört zur Ehrlichkeit, die wir unseren Klienten gegenüber für selbstverständlich halten.
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
