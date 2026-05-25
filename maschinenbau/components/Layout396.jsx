import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Layout396() {
  return (
    <section style={{
      background: "#fff",
      display: "flex",
      overflow: "hidden",
    }}>

      {/* Left: vertical "Rollen" */}
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
          transform: "rotate(180deg)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}>
          Rollen
        </span>
      </div>

      {/* Divider */}
      <div style={{
        width: 1,
        background: "#1a1817",
        flexShrink: 0,
        margin: "clamp(40px, 6vw, 80px) 0",
      }} />

      {/* Right: label + 3 positions */}
      <div style={{
        flex: 1,
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
          Typische Positionen im Maschinenbau · Diese Profile suchen wir regelmäßig
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
            Geschäftsführer für mittelständisches Unternehmen
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
            Strategische Leitung mit Erfahrung in Digitalisierung und internationalen
            Märkten. Gefragt sind Persönlichkeiten, die operative Tiefe mit
            unternehmerischem Denken verbinden.
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
            Technischer Leiter oder CTO
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
            Brücke zwischen Konstruktion und Geschäftsführung, mit Verständnis
            für Innovation und Automatisierung. Die Fähigkeit, technische Teams
            zu führen und strategisch zu denken, ist entscheidend.
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
            Produktionsleiter oder COO
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
            Operativer Verantwortlicher für Effizienz, Qualität und
            Fachkräfteentwicklung. Wir suchen Führungspersönlichkeiten, die
            Prozesse gestalten und Menschen mitnehmen können.
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
            „First who, then what. Get the right people on the bus,
            then figure out where to drive it."
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
            Jim Collins · Good to Great
          </p>
        </div>

      </div>

    </section>
  );
}
