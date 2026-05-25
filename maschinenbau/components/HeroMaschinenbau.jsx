import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function HeroMaschinenbau() {
  return (
    <section style={{
      background: "#000",
      height: "100vh",
      maxHeight: 960,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Giant B */}
      <div style={{
        position: "absolute",
        top: "-12vh",
        left: "-2vw",
        fontFamily: serif,
        fontWeight: 700,
        fontSize: "clamp(500px, 92vw, 1300px)",
        lineHeight: 1,
        color: "#fff",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.04em",
        transform: "scaleX(0.72)",
        transformOrigin: "left top",
        zIndex: 1,
      }}>
        M
      </div>

      {/* "aschinenbau" — horizontal at right edge of M */}
      <div style={{
        position: "absolute",
        top: "38vh",
        left: "58vw",
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 60px)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#fff",
          whiteSpace: "nowrap",
          lineHeight: 1,
          display: "block",
        }}>
          aschinenbau
        </span>
      </div>

      {/* Headline — vertical text running down the left stroke of the B */}
      <div style={{
        position: "absolute",
        top: "26vh",
        left: "3.5%",
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
          color: "#000",
          margin: 0,
          mixBlendMode: "multiply",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          whiteSpace: "nowrap",
        }}>
          Maschinenbau · braucht · Führung.
        </h1>
      </div>

      {/* Subline — centered below aschinenbau */}
      <div style={{
        position: "absolute",
        left: "58vw",
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
          color: "#fff",
          lineHeight: 1.8,
          margin: "0 0 clamp(12px, 1.5vw, 20px)",
        }}>
          Präzision, Skalierung, Führungswechsel — wir besetzen die Positionen, die Maschinenbauer im DACH-Raum weiterbringen.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.8,
          margin: 0,
        }}>
          Ob Generationswechsel, Post-M&A-Integration oder internationales Wachstum — wir kennen die spezifischen Anforderungen an Führungskräfte in diesem Sektor.
        </p>
      </div>

      {/* Top left in M — brand line */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "3.5%",
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#000",
          mixBlendMode: "multiply",
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          Bausch & Company
        </p>
      </div>

    </section>
  );
}
