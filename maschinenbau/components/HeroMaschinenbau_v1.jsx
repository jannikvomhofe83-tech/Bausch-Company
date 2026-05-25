import React from "react";

const serif = "'EB Garamond', Georgia, serif";
const sans = "'Inter', 'Helvetica Neue', Arial, sans-serif";

export function HeroMaschinenbau() {
  return (
    <section style={{
      background: "#fff",
      height: "100vh",
      maxHeight: 960,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "clamp(80px, 10vw, 120px) clamp(40px, 7%, 100px) clamp(48px, 6vw, 80px)",
    }}>

      {/* Top left: big headline */}
      <div>
        <h1 style={{
          fontFamily: sans,
          fontWeight: 800,
          fontSize: "clamp(48px, 7.5vw, 112px)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          color: "#1a1817",
          margin: 0,
          display: "inline-block",
        }}>
          <span style={{ display: "block" }}>Maschinenbau</span>
          <span style={{ display: "block", textAlign: "center" }}>braucht</span>
          <span style={{ display: "block", textAlign: "center" }}>Führung.</span>
        </h1>
      </div>

      {/* Bottom right: subline */}
      <div style={{
        marginLeft: "clamp(300px, 42%, 580px)",
        width: "clamp(200px, 22%, 280px)",
        textAlign: "left",
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 17px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          lineHeight: 1.75,
          margin: "0 0 clamp(12px, 1.5vw, 18px)",
        }}>
          Präzision, Skalierung, Führungswechsel — wir besetzen die Positionen, die Maschinenbauer im DACH-Raum weiterbringen.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 17px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          lineHeight: 1.75,
          margin: "0 0 clamp(12px, 1.5vw, 18px)",
        }}>
          Ob Generationswechsel, Post-M&A-Integration oder internationales Wachstum — wir kennen die spezifischen Anforderungen an Führungskräfte in diesem Sektor.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 17px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          lineHeight: 1.75,
          margin: "0 0 clamp(20px, 2.5vw, 32px)",
        }}>
          Durchschnittliche Besetzungszeit: 7 Wochen.
        </p>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00693C",
          margin: 0,
        }}>
          Bausch & Company · Maschinenbau
        </p>
      </div>
    </section>
  );
}
