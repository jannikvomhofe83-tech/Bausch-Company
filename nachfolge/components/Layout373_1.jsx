import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

const cases = [
  {
    number: "01",
    tag: "Maschinenbau · Süddeutschland",
    title: "Übergabe nach 30 Jahren Gründerführung",
    body: "Ein Gründer suchte nach drei Jahrzehnten einen externen Nachfolger für die Geschäftsführung — bei laufendem Betrieb, ohne dass die Suche nach außen dringen durfte. Die entscheidende Frage war nicht, ob ein externer Kandidat infrage kommt, sondern welche Art von Führung das Unternehmen in dieser spezifischen Übergangsphase wirklich braucht. Wir identifizierten drei geeignete Kandidaten innerhalb von sieben Wochen. Die Übergabe wurde in enger Abstimmung mit dem Beirat begleitet — bis weit über den ersten Arbeitstag hinaus.",
    duration: "7 Wochen",
  },
  {
    number: "02",
    tag: "Logistik · Mittelstand",
    title: "Externe CFO-Besetzung zur Generationenübergabe",
    body: "Parallel zur Übergabe der Geschäftsführung an die nächste Generation fehlte eine erfahrene Finanzführung, die beide Seiten verstand: die gewachsenen Strukturen des Hauses und die Anforderungen, die ein Wachstumskurs stellt. Wir besetzten die CFO-Rolle diskret, mit einem Kandidaten, der bereits in vergleichbaren Übergangssituationen gearbeitet hatte. Die ersten sechs Monate wurden aktiv begleitet.",
    duration: "9 Wochen",
  },
  {
    number: "03",
    tag: "Handel · Familiengeführt",
    title: "Vertriebsleiter für erstmaligen internationalen Markteintritt",
    body: "Ein traditionsreicher Handelsbetrieb wollte erstmals international expandieren — eine Situation, in der die bisherige Unternehmenskultur auf neue Anforderungen trifft. Der gesuchte Kandidat musste nicht nur vertrieblich stark sein, sondern auch in der Lage, intern Vertrauen aufzubauen und kulturell zu vermitteln. Die Besetzung erfolgte in acht Wochen, die Einarbeitungsphase wurde durch uns begleitet.",
    duration: "8 Wochen",
  },
];

export function Layout373_1() {
  return (
    <section style={{
      padding: "clamp(40px, 5vw, 64px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
    }}>

      {cases.map((c, i) => (
        <div
          key={c.number}
          style={{
            borderTop: "1px solid rgba(26,24,23,0.1)",
            borderBottom: i === cases.length - 1 ? "1px solid rgba(26,24,23,0.1)" : "none",
            padding: "clamp(40px, 5vw, 64px) 0",
            display: "grid",
            gridTemplateColumns: "clamp(40px, 5vw, 64px) 1fr clamp(140px, 14vw, 200px)",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          {/* Number */}
          <p style={{
            fontFamily: serif,
            fontWeight: 300,
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1,
            color: "#00693C",
            margin: 0,
            paddingTop: "0.1em",
          }}>
            {c.number}.
          </p>

          {/* Main content */}
          <div>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(10px, 0.85vw, 12px)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(26,24,23,0.4)",
              margin: "0 0 12px",
            }}>
              {c.tag}
            </p>

            <h3 style={{
              fontFamily: serif,
              fontWeight: 700,
              fontSize: "clamp(22px, 2.2vw, 32px)",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              color: "#1a1817",
              margin: "0 0 clamp(16px, 2vw, 24px)",
              maxWidth: 560,
            }}>
              {c.title}
            </h3>

            <p style={{
              fontFamily: serif,
              fontSize: "clamp(15px, 1.25vw, 18px)",
              fontWeight: 400,
              color: "rgba(26,24,23,0.72)",
              lineHeight: 1.8,
              margin: "0 0 clamp(24px, 3vw, 36px)",
              maxWidth: 640,
            }}>
              {c.body}
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
              Gespräch anfragen
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                <line x1="0" y1="8" x2="24" y2="8" stroke="#1a1817" strokeWidth="1.3" />
                <polyline points="17,2 24,8 17,14" fill="none" stroke="#1a1817" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Duration stat */}
          <div style={{ textAlign: "right", paddingTop: "0.2em" }}>
            <p style={{
              fontFamily: serif,
              fontWeight: 300,
              fontSize: "clamp(28px, 3vw, 44px)",
              lineHeight: 1,
              color: "#1a1817",
              margin: "0 0 6px",
            }}>
              {c.duration}
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(10px, 0.85vw, 12px)",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(26,24,23,0.35)",
              margin: 0,
            }}>
              Suchdauer
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
