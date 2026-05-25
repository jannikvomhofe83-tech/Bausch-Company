import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Header123() {
  return (
    <section style={{
      background: "#fff",
      overflow: "hidden",
      position: "relative",
      height: "100vh",
      maxHeight: 900,
    }}>

        {/* Image — full height, left aligned */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}>
          <img
            src="/bild-8.png"
            alt=""
            style={{
              height: "100%",
              width: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Text — overlaid on image */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "38%",
          bottom: 0,
          right: 0,
          padding: "clamp(80px, 10vw, 120px) clamp(32px, 4%, 64px) clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>

          <p style={{
            fontFamily: serif,
            fontSize: "clamp(9px, 0.75vw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00693C",
            margin: "0 0 clamp(12px, 1.5vw, 20px)",
          }}>
            Branchen
          </p>

          <h1 style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(20px, 2.2vw, 32px)",
            lineHeight: 1.1,
            letterSpacing: "0.01em",
            color: "#1a1817",
            margin: "0 0 clamp(14px, 1.8vw, 24px)",
          }}>
            Branchenkompetenz im Mittelstand
          </h1>

          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.65)",
            lineHeight: 1.75,
            margin: "0 0 clamp(10px, 1.2vw, 16px)",
          }}>
            Acht Sektoren, ein Verständnis für Familienunternehmen in Deutschland, Österreich und der Schweiz.
          </p>

          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 16px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.65)",
            lineHeight: 1.75,
            margin: "0 0 clamp(20px, 2.5vw, 36px)",
          }}>
            Wir kennen die Strukturen, die Entscheidungswege und die besonderen Anforderungen jedes Sektors — und besetzen Führungspositionen, die zu den jeweiligen Gegebenheiten passen.
          </p>

          <div style={{
            borderTop: "1px solid rgba(26,24,23,0.12)",
            paddingTop: "clamp(14px, 1.8vw, 22px)",
            width: "100%",
          }}>
            {["Maschinenbau", "Handel", "Bau", "Gesundheit", "Tech", "Konsumgüter", "Logistik", "Dienstleistung"].map((s, i, arr) => (
              <span key={s} style={{
                fontFamily: serif,
                fontSize: "clamp(11px, 0.85vw, 13px)",
                fontWeight: 400,
                color: "rgba(26,24,23,0.45)",
                letterSpacing: "0.02em",
                display: "inline",
              }}>
                {s}{i < arr.length - 1 && <span style={{ margin: "0 6px", opacity: 0.4 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
    </section>
  );
}
