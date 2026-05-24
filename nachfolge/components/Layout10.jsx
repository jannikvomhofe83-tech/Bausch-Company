import React from "react";
import { Link } from "react-router-dom";

const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";

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

const features = [
  {
    title: "Rolle klären",
    body: "Anforderungen präzise definieren, bevor die Suche beginnt — nicht was das Unternehmen zuletzt hatte, sondern was es jetzt braucht.",
  },
  {
    title: "Person finden",
    body: "Kandidaten aus unserem Netzwerk, diskret angesprochen — ohne dass ein laufendes Mandat nach außen dringt.",
  },
];

const stats = [
  { value: "120+", label: "Mandate erfolgreich\nbegleitet" },
  { value: "95%+", label: "Erfolgsquote über\nalle Mandate" },
  { value: "9 Wo.", label: "Durchschnittliche\nSuchdauer" },
  { value: "2005", label: "Gegründet in\nMünchen" },
];

export function Layout10() {
  return (
    <section style={{
      padding: "clamp(72px, 10vw, 120px) clamp(40px, 7%, 120px)",
      background: "#fff",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "clamp(48px, 8vw, 100px)",
        alignItems: "center",
      }}>

        {/* Left: text content */}
        <div>
          <p style={{
            fontFamily: sans,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00693C",
            margin: "0 0 16px",
          }}>
            Methodik
          </p>

          <h2 style={{
            fontFamily: sans,
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 60px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#1a1817",
            margin: "0 0 clamp(20px, 2.5vw, 32px)",
          }}>
            Wie wir Nachfolge wirklich angehen.
          </h2>

          <p style={{
            fontFamily: sans,
            fontSize: "clamp(15px, 1.3vw, 18px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.62)",
            lineHeight: 1.75,
            margin: "0 0 clamp(36px, 5vw, 56px)",
            maxWidth: 520,
          }}>
            Die meisten Fehlentscheidungen entstehen nicht in der Auswahl, sondern in der unklaren Definition der Rolle. Wir beginnen dort, wo andere aufhören.
          </p>

          {/* Feature items */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 3vw, 40px)",
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}>
            {features.map(({ title, body }) => (
              <div key={title}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <CrossIcon />
                  <h3 style={{
                    fontFamily: sans,
                    fontWeight: 700,
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                    letterSpacing: "-0.01em",
                    color: "#1a1817",
                    margin: 0,
                  }}>
                    {title}
                  </h3>
                </div>
                <p style={{
                  fontFamily: sans,
                  fontSize: "clamp(12px, 0.9vw, 14px)",
                  fontWeight: 400,
                  color: "rgba(26,24,23,0.55)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/kontakt"
            style={{
              fontFamily: sans,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#1a1817",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: 4,
              display: "inline-block",
            }}
          >
            Gespräch vereinbaren
          </Link>
        </div>

        {/* Right: stats panel */}
        <div style={{
          background: "#1a1817",
          borderRadius: 8,
          padding: "clamp(36px, 4vw, 52px)",
        }}>
          <p style={{
            fontFamily: sans,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            margin: "0 0 32px",
          }}>
            In Zahlen
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 3vw, 36px)",
          }}>
            {stats.map(({ value, label }) => (
              <div key={value}>
                <p style={{
                  fontFamily: sans,
                  fontWeight: 900,
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#00693C",
                  margin: "0 0 8px",
                }}>
                  {value}
                </p>
                <p style={{
                  fontFamily: sans,
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  margin: 0,
                  whiteSpace: "pre-line",
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "clamp(32px, 4vw, 48px)",
            paddingTop: "clamp(24px, 3vw, 36px)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}>
            <p style={{
              fontFamily: sans,
              fontSize: "clamp(13px, 1vw, 15px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
            }}>
              Bausch & Company begleitet Eigentümer von Familienunternehmen seit 2005 — diskret, strukturiert und mit klarem Fokus auf nachhaltige Besetzungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
