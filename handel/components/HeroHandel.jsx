import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function HeroHandel() {
  return (
    <section style={{
      background: "#fff",
      height: "100vh",
      maxHeight: 960,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Giant H */}
      <div style={{
        position: "absolute",
        top: "-12vh",
        left: "-2vw",
        fontFamily: serif,
        fontWeight: 700,
        fontSize: "clamp(500px, 92vw, 1300px)",
        lineHeight: 1,
        color: "#1a1817",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.04em",
        transform: "scaleX(0.72)",
        transformOrigin: "left top",
        zIndex: 1,
      }}>
        H
      </div>

      {/* "andel" — left-aligned at right edge of H */}
      <div style={{
        position: "absolute",
        top: "38vh",
        left: "50.5vw",
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 60px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#1a1817",
          whiteSpace: "nowrap",
          lineHeight: 1,
          display: "block",
        }}>
          andel
        </span>
      </div>

      {/* Subline — centered further right, clear of H */}
      <div style={{
        position: "absolute",
        left: "52vw",
        right: 0,
        top: "52vh",
        padding: "0 4vw",
        textAlign: "center",
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          color: "#1a1817",
          lineHeight: 1.8,
          margin: "0 0 clamp(12px, 1.5vw, 20px)",
        }}>
          Vertrieb, Einkauf, Führungswechsel — wir besetzen die Positionen, die Handelsunternehmen im DACH-Raum weiterbringen.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          lineHeight: 1.8,
          margin: 0,
        }}>
          Ob Filialnetz, E-Commerce-Integration oder internationales Wachstum — wir kennen die spezifischen Anforderungen an Führungskräfte im Handel.
        </p>
      </div>

      {/* Headline — vertical in left stroke of H */}
      <div style={{
        position: "absolute",
        top: "26vh",
        left: "8%",
        width: "10%",
        display: "flex",
        justifyContent: "center",
        zIndex: 3,
      }}>
        <h1 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(12px, 1.3vw, 20px)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#fff",
          margin: 0,
          mixBlendMode: "screen",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          whiteSpace: "nowrap",
        }}>
          Handel · braucht · Führung.
        </h1>
      </div>

      {/* Top left in H — brand line */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "8%",
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#fff",
          mixBlendMode: "screen",
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          Bausch & Company
        </p>
      </div>

    </section>
  );
}
