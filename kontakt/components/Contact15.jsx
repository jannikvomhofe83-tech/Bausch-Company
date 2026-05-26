import React from "react";

const serif = "'EB Garamond', Georgia, serif";

export function Contact15() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 100px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>

      <p style={{
        fontFamily: serif,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00693C",
        margin: 0,
        marginBottom: "clamp(32px, 4vw, 52px)",
      }}>
        Standorte
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 64px)",
      }}>

        {/* München */}
        <div>
          <p style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(18px, 1.8vw, 26px)",
            letterSpacing: "-0.01em",
            color: "#1a1817",
            margin: 0,
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}>
            München
          </p>
          <iframe
            title="Bausch & Company München"
            src="https://maps.google.com/maps?q=Stollbergstr.+22,+80539+M%C3%BCnchen&output=embed&z=15"
            width="100%"
            height="320"
            style={{ border: 0, display: "block", marginBottom: "clamp(14px, 1.8vw, 20px)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Stollbergstr. 22, 80539 München
          </p>
        </div>

        {/* Hamburg */}
        <div>
          <p style={{
            fontFamily: serif,
            fontWeight: 700,
            fontSize: "clamp(18px, 1.8vw, 26px)",
            letterSpacing: "-0.01em",
            color: "#1a1817",
            margin: 0,
            marginBottom: "clamp(16px, 2vw, 24px)",
          }}>
            Hamburg
          </p>
          <iframe
            title="Bausch & Company Hamburg"
            src="https://maps.google.com/maps?q=Gro%C3%9Fe+Theaterstra%C3%9Fe+14,+20354+Hamburg&output=embed&z=15"
            width="100%"
            height="320"
            style={{ border: 0, display: "block", marginBottom: "clamp(14px, 1.8vw, 20px)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(13px, 1vw, 15px)",
            lineHeight: 1.85,
            color: "rgba(26,24,23,0.65)",
            margin: 0,
          }}>
            Große Theaterstraße 14, 20354 Hamburg
          </p>
        </div>

      </div>
    </section>
  );
}
