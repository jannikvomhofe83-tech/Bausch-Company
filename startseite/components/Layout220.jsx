import React, { useState } from "react";
import { Link } from "react-router-dom";

const sans = "'EB Garamond', Georgia, serif";

function CrossIcon() {
  return (
    <div style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
      <div style={{
        position: "absolute", top: "50%", left: 0, right: 0,
        height: 1.5, background: "#00693C", transform: "translateY(-50%)",
      }} />
      <div style={{
        position: "absolute", left: "50%", top: 0, bottom: 0,
        width: 1.5, background: "#00693C", transform: "translateX(-50%)",
      }} />
    </div>
  );
}

function CardButton({ to }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: sans, fontSize: 13, fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase",
        color: "#fff", textDecoration: "none",
        background: hover ? "#005530" : "#00693C",
        padding: "15px 28px",
        borderRadius: 4,
        display: "inline-block",
        transition: "background 0.2s ease",
      }}
    >
      Mehr erfahren
    </Link>
  );
}

const cards = [
  {
    eyebrow: "Seit 2005 · 120+ Mandate",
    headline: "Tiefe Branchenkompetenz",
    body: "Unsere meist langjährigen Kunden sind vor allem Familienunternehmen aus dem produzierenden Mittelstand diverser Branchen sowie dem Handel — von traditionsreichen Hidden Champions bis zu Unternehmen ab € 20 Mio. Umsatz. Über 95 % aller Mandate wurden erfolgreich abgeschlossen, im Schnitt in 9 Wochen.",
    link: "/ueber-uns",
  },
  {
    eyebrow: "Situationsanalyse vor der Suche",
    headline: "Klare Rollendefinition",
    body: "Die meisten Fehlbesetzungen entstehen nicht in der Suche — sondern weil die Rolle nie klar definiert wurde. Bevor wir suchen, stellen wir die entscheidende Frage: Welche Führung braucht dieses Unternehmen in seiner aktuellen Situation wirklich? Nicht welche Führung es zuletzt hatte, und nicht welche es sich wünscht — sondern welche es jetzt braucht. Erst wenn diese Frage ehrlich beantwortet ist, beginnen wir. Dieser Schritt ist nicht optional — er ist unser Fundament für jedes Mandat, das wir annehmen.",
    link: "/nachfolge",
  },
  {
    eyebrow: "Für Eigentümer und Kandidaten",
    headline: "Diskretion und Struktur",
    body: "Besetzungen auf Führungsebene sind sensibel — für Eigentümer, Kandidaten und Organisationen gleichermaßen. Ein laufendes Mandat, das nach außen dringt, kann Schaden anrichten, bevor eine Entscheidung getroffen ist. Vertraulichkeit ist für uns deshalb keine Selbstverständlichkeit, die wir versprechen, sondern eine Arbeitsweise, die wir konsequent leben — in jedem Gespräch, in jeder Phase des Prozesses, gegenüber allen Beteiligten.\n\nStruktur bedeutet für uns: klare Prozesse, verlässliche Kommunikation und ein Vorgehen, das für alle Seiten nachvollziehbar ist. Kein Raten, kein Warten im Unklaren — sondern ein geführter Prozess, der Vertrauen schafft. Das ist kein Versprechen. Das ist unser Standard.",
    link: "/ueber-uns",
  },
];

export function Layout220() {
  return (
    <section style={{
      padding: "clamp(72px, 10vw, 140px) clamp(40px, 7%, 120px)",
    }}>

      {/* Section headline */}
      <h2 style={{
        fontFamily: sans, fontWeight: 900,
        fontSize: "clamp(28px, 4vw, 58px)",
        lineHeight: 1.05, letterSpacing: "-0.03em",
        color: "#1a1817",
        marginBottom: "clamp(48px, 6vw, 88px)",
      }}>
        Unsere Philosophie.
      </h2>

      {/* Three columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(32px, 4vw, 56px)",
        alignItems: "start",
      }}>
        {cards.map(({ eyebrow, headline, body, link }) => (
          <div key={headline} style={{ display: "flex", flexDirection: "column" }}>

            {/* Icon + eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <CrossIcon />
              <p style={{
                fontFamily: sans, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#00693C", margin: 0, lineHeight: 1.3,
              }}>
                {eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h3 style={{
              fontFamily: sans, fontWeight: 900,
              fontSize: "clamp(20px, 2vw, 30px)",
              lineHeight: 1.08, letterSpacing: "-0.025em",
              color: "#1a1817", marginBottom: 20,
            }}>
              {headline}
            </h3>

            {/* Body */}
            {body.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontFamily: sans, fontSize: "clamp(13px, 1vw, 15px)",
                fontWeight: 400, color: "rgba(26,24,23,0.62)",
                lineHeight: 1.75, marginBottom: i < body.split("\n\n").length - 1 ? 20 : 36,
              }}>
                {para}
              </p>
            ))}

            <CardButton to={link} />
          </div>
        ))}
      </div>
    </section>
  );
}
