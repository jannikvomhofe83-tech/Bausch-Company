import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Gallery5() {
  return (
    <section style={{
      background: "#fff",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "70vh",
    }}>

      {/* Left half — giant "Praxis" */}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}>
        <div style={{ position: "relative", marginRight: "-0.2em" }}>
          <span style={{
            position: "absolute",
            fontFamily: serif,
            fontSize: "clamp(11px, 1vw, 15px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1a1817",
            whiteSpace: "nowrap",
            top: "18%",
            right: "11.5vw",
          }}>
            Aus der
          </span>
          <span style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(100px, 16vw, 240px)",
            lineHeight: 1,
            color: "#1a1817",
            whiteSpace: "nowrap",
            userSelect: "none",
            letterSpacing: "-0.03em",
            paddingLeft: "clamp(24px, 3vw, 48px)",
            display: "block",
          }}>
            Praxis
          </span>
        </div>
      </div>

      {/* Right half — image placeholders */}
      <div style={{
        padding: "clamp(48px, 8vw, 120px) clamp(32px, 7vw, 100px) clamp(48px, 8vw, 120px) clamp(32px, 5vw, 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "clamp(12px, 1.5vw, 20px)",
      }}>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#1a1817",
          margin: "0 0 clamp(16px, 2vh, 28px)",
        }}>
          Projekte · Anonymisierte Beispiele aus unserer Arbeit
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(10px, 1.2vw, 18px)",
        }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              background: "#e8e3da",
              aspectRatio: "4 / 3",
            }} />
          ))}
        </div>
      </div>

    </section>
  );
}
