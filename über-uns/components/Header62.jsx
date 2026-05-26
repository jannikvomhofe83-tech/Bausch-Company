import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Header62() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(100px, 13vw, 160px) clamp(40px, 7%, 120px) clamp(80px, 10vw, 120px)",
    }}>

      {/* Large stacked headline */}
      <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
        <h1 style={{
          fontFamily: serif,
          fontWeight: 900,
          fontSize: "clamp(28px, 3.8vw, 54px)",
          lineHeight: 0.88,
          letterSpacing: "-0.03em",
          color: "#1a1817",
          margin: 0,
        }}>
          <div>Unsere Kunden —</div>
          <div>Unsere Expertise</div>
        </h1>

        {/* Orange underline */}
        <div style={{
          width: "clamp(80px, 10vw, 140px)",
          height: 3,
          background: "#FF5800",
          marginTop: "clamp(20px, 2.5vw, 32px)",
        }} />
      </div>

      {/* Two-column body text */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 80px)",
        marginBottom: "clamp(64px, 9vw, 120px)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 24px)" }}>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Bausch & Company findet und evaluiert für Sie Führungskräfte,
            Unternehmensnachfolger und Spezialisten — seit 2005 und europaweit.
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Wir gewinnen für unsere Kunden jene Kandidaten, die neben exzellenten
            Qualifikationen auch über den Charakter verfügen, der für einen
            nachhaltigen Unternehmenserfolg erforderlich ist: Persönlichkeiten,
            die neben einem klugen Kopf und dem Gespür für richtige Entscheidungen
            auch über einen intakten Wertekanon verfügen.
          </p>
        </div>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.65)",
          margin: 0,
        }}>
          Durch die eigene familiäre Verbundenheit mit zwei traditionsreichen
          Familienunternehmen (Papier/Kunststoff & Pharma) sind uns die hier
          oft komplexen Anforderungen an externe Führungskräfte bestens vertraut.
        </p>
      </div>

      {/* Secondary headline */}
      <div>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(28px, 3.8vw, 54px)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#1a1817",
          margin: 0,
          marginBottom: "clamp(12px, 1.5vw, 18px)",
          maxWidth: "22ch",
        }}>
          Seit 2005 für Familienunternehmen.
        </h2>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.55)",
          margin: 0,
        }}>
          Wir beraten Eigentümer und Kandidaten mit der Präzision, die Familienunternehmen verdienen.
        </p>
      </div>

    </section>
  );
}
