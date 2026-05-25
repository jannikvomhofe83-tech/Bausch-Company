import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Testimonial1() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(60px, 10vh, 120px) clamp(40px, 8vw, 140px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>

      <p style={{
        fontFamily: serif,
        fontSize: "clamp(9px, 0.75vw, 11px)",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(26,24,23,0.45)",
        margin: "0 0 clamp(32px, 5vh, 60px)",
      }}>
        Aus der Praxis
      </p>

      <blockquote style={{
        fontFamily: serif,
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "clamp(24px, 3.2vw, 52px)",
        lineHeight: 1.45,
        color: "#1a1817",
        margin: "0 0 clamp(40px, 6vh, 72px)",
        maxWidth: "22em",
        letterSpacing: "-0.01em",
      }}>
        „Wir haben lange gesucht, bis wir verstanden haben, dass wir nicht nur
        einen Manager brauchten, sondern jemanden, der unsere Kultur
        versteht und die Zukunft mitgestaltet."
      </blockquote>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(16px, 2vw, 28px)",
      }}>
        <div style={{
          width: 32,
          height: 1,
          background: "#1a1817",
          flexShrink: 0,
        }} />
        <div>
          <p style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(13px, 1vw, 17px)",
            color: "#1a1817",
            margin: "0 0 0.2em",
          }}>
            Geschäftsführer
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(10px, 0.8vw, 13px)",
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(26,24,23,0.45)",
            margin: 0,
          }}>
            Maschinenbau · Baden-Württemberg
          </p>
        </div>
      </div>

    </section>
  );
}
