import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Layout373() {
  return (
    <section style={{
      background: "#fff",
      display: "flex",
      overflow: "hidden",
    }}>

      {/* Left spacer — pushes everything to the right */}
      <div style={{ flex: 1 }} />

      {/* Text content — same padding as Layout396's text column */}
      <div style={{
        flexShrink: 0,
        padding: "clamp(32px, 4vw, 60px) clamp(32px, 4vw, 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "clamp(28px, 4vh, 48px)",
      }}>

        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#1a1817",
          margin: 0,
        }}>
          Herausforderungen · Was Maschinenbauer bewegt
        </p>

        <div>
          <h3 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(16px, 1.4vw, 22px)",
            color: "#1a1817",
            margin: "0 0 0.4em",
            letterSpacing: "-0.01em",
          }}>
            Technologiewandel und Fachkräftemangel
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.8,
            color: "#1a1817",
            margin: 0,
            maxWidth: "55ch",
          }}>
            Digitalisierung und Automatisierung verändern die Anforderungen
            an Führung grundlegend. Wer heute sucht, braucht Kandidaten,
            die beides verstehen — die Technologie und die Menschen dahinter.
          </p>
        </div>

        <div>
          <h3 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(16px, 1.4vw, 22px)",
            color: "#1a1817",
            margin: "0 0 0.4em",
            letterSpacing: "-0.01em",
          }}>
            Globale Märkte verlangen neue Kompetenzen
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.8,
            color: "#1a1817",
            margin: 0,
            maxWidth: "55ch",
          }}>
            Internationale Expansion braucht andere Führungsprofile als der
            Heimatmarkt. Sprachkompetenz allein reicht nicht — gefragt ist
            kulturelles Verständnis und globale Erfahrung.
          </p>
        </div>

        <div>
          <h3 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(16px, 1.4vw, 22px)",
            color: "#1a1817",
            margin: "0 0 0.4em",
            letterSpacing: "-0.01em",
          }}>
            Generationswechsel und Nachfolge
          </h3>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.8,
            color: "#1a1817",
            margin: 0,
            maxWidth: "55ch",
          }}>
            Viele Maschinenbauunternehmen stehen vor dem Führungswechsel.
            Die Nachfolge entscheidet über Kontinuität oder Bruch —
            und braucht mehr als einen guten Lebenslauf.
          </p>
        </div>

        <div style={{
          borderTop: "1px solid #1a1817",
          paddingTop: "clamp(20px, 3vh, 36px)",
          marginTop: "clamp(4px, 1vh, 12px)",
        }}>
          <p style={{
            fontFamily: serif,
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(15px, 1.2vw, 20px)",
            lineHeight: 1.6,
            color: "#1a1817",
            margin: "0 0 0.5em",
          }}>
            „Change before you have to."
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(9px, 0.75vw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#1a1817",
            margin: 0,
          }}>
            Jack Welch
          </p>
        </div>

      </div>

      {/* Divider — same as Layout396 */}
      <div style={{
        width: 1,
        background: "#1a1817",
        flexShrink: 0,
        margin: "clamp(40px, 6vw, 80px) 0",
      }} />

      {/* Right: vertical "Wandel" — same padding as "Rollen" in Layout396 */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 5vw, 80px) clamp(80px, 10vw, 160px)",
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(60px, 9vw, 150px)",
          color: "#1a1817",
          writingMode: "vertical-rl",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}>
          Wandel
        </span>
      </div>

    </section>
  );
}
