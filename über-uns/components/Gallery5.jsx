import React, { useState } from "react";

const serif = "'EB Garamond', Georgia, serif";

const TEAM = [
  { name: "Anna Reifenscheid", role: "Senior Research Analyst" },
  { name: "Markus Frenzel", role: "Berater Nachfolge & Führung" },
  { name: "Sophie Hartmann", role: "Projektmanagement" },
  { name: "Thomas Weiß", role: "Research & Kandidatenanalyse" },
  { name: "Laura Schindler", role: "Client Relations" },
];

export function Gallery5() {
  const [selected, setSelected] = useState(0);

  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 100px) clamp(40px, 6%, 100px)",
    }}>

      {/* "DAS TEAM" — large, right-aligned, with line above */}
      <div style={{
        borderTop: "1px solid rgba(26,24,23,0.18)",
        paddingTop: "clamp(20px, 2.5vw, 32px)",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "clamp(32px, 4vw, 52px)",
      }}>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(56px, 11vw, 160px)",
          lineHeight: 0.85,
          letterSpacing: "-0.03em",
          color: "#1a1817",
          margin: 0,
        }}>
          DAS TEAM
        </h2>
      </div>

      {/* Main content — 2 columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: "clamp(40px, 7vw, 96px)",
        borderTop: "1px solid rgba(26,24,23,0.18)",
        paddingTop: "clamp(32px, 4vw, 52px)",
        marginBottom: "clamp(48px, 6vw, 80px)",
      }}>

        {/* Left — intro text + stats */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(17px, 1.8vw, 26px)",
            lineHeight: 1.35,
            color: "#1a1817",
            margin: 0,
            marginBottom: "clamp(32px, 4vw, 52px)",
          }}>
            Wir sind Sparringspartner für Eigentümer und Geschäftsführer — keine klassischen Personalvermittler. Mit über zwei Jahrzehnten Erfahrung im deutschsprachigen Mittelstand kennen wir die Anforderungen, die wirklich zählen.
          </p>
          <div>
            <p style={{
              fontFamily: serif,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(26,24,23,0.45)",
              margin: 0,
              lineHeight: 2,
            }}>
              Seit 2005,<br />Europaweit aktiv,<br />Familienunternehmen
            </p>
          </div>
        </div>

        {/* Right — Johannes Bausch */}
        <div>
          <img
            src="/bild-24.jpg"
            alt="Johannes Bausch"
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
              marginBottom: "clamp(16px, 2vw, 24px)",
            }}
          />

          <div style={{
            borderTop: "1px solid rgba(26,24,23,0.18)",
            paddingTop: "clamp(14px, 1.8vw, 22px)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "clamp(12px, 1.5vw, 18px)",
              gap: 16,
              flexWrap: "wrap",
            }}>
              <span style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(18px, 1.6vw, 24px)", color: "#1a1817", letterSpacing: "-0.01em" }}>
                Johannes Bausch
              </span>
              <span style={{ fontFamily: serif, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(26,24,23,0.45)" }}>
                Gründer & Geschäftsführer
              </span>
            </div>
            <p style={{ fontFamily: serif, fontSize: "clamp(13px, 1vw, 15px)", fontWeight: 400, lineHeight: 1.9, color: "rgba(26,24,23,0.65)", margin: 0 }}>
              Gründer und Geschäftsführer von Bausch & Company. Über zwei Jahrzehnte
              Erfahrung in der Besetzung von Führungspositionen bei mittelständischen
              Familienunternehmen im deutschsprachigen Raum. Seine Arbeit konzentriert
              sich auf die Vermeidung kostspieliger Fehlentscheidungen durch präzise
              Rollenklärung und tiefgreifende Kandidatenanalyse.
            </p>
          </div>
        </div>
      </div>

      {/* Team list */}
      <div style={{ display: "grid", gridTemplateColumns: "clamp(80px, 12vw, 160px) 1fr", gap: "clamp(24px, 4vw, 52px)", alignItems: "start" }}>

        {/* Photo — updates on click */}
        <div style={{
          background: "rgba(26,24,23,0.07)",
          aspectRatio: "3 / 4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s ease",
        }}>
          <span style={{ fontFamily: serif, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,24,23,0.3)", textAlign: "center", padding: "0 8px" }}>
            {TEAM[selected].name}
          </span>
        </div>

        {/* Rows */}
        <div>
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              onClick={() => setSelected(i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "clamp(12px, 1.5vw, 18px) clamp(12px, 1.5vw, 20px)",
                borderBottom: "1px solid rgba(26,24,23,0.1)",
                background: selected === i ? "#1a1817" : "transparent",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              <span style={{
                fontFamily: serif,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                fontWeight: selected === i ? 700 : 400,
                color: selected === i ? "#fff" : "#1a1817",
                letterSpacing: "-0.01em",
              }}>
                {member.name}
              </span>
              <span style={{
                fontFamily: serif,
                fontSize: "clamp(12px, 0.9vw, 14px)",
                fontWeight: 400,
                color: selected === i ? "rgba(255,255,255,0.65)" : "rgba(26,24,23,0.5)",
                letterSpacing: "0.01em",
              }}>
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
