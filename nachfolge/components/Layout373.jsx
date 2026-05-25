import React from "react";

const serif = "'EB Garamond', Georgia, serif";

const challenges = [
  {
    number: "01",
    title: "Die richtige Person finden",
    body: "Ob interner Kandidat oder externe Führungskraft — die Entscheidung hängt nicht an Präferenzen, sondern an der konkreten Situation des Unternehmens. Wir helfen, diese Frage ehrlich zu beantworten, bevor die Suche beginnt.",
  },
  {
    number: "02",
    title: "Übergabe ohne Bruch",
    body: "Kontinuität zu wahren, während Neues entsteht, ist eine der anspruchsvollsten Aufgaben in der Unternehmensführung. Wir begleiten die Übergabe auch nach der Entscheidung.",
  },
  {
    number: "03",
    title: "Timing der Entscheidung",
    body: "Zu früh entschieden, zu spät begonnen — beides hat Konsequenzen. Wir helfen, den richtigen Moment zu erkennen und den Prozess rechtzeitig anzustoßen.",
  },
];

function Card({ number, title, body }) {
  return (
    <div>
      <p style={{
        fontFamily: serif,
        fontWeight: 300,
        fontSize: "clamp(44px, 5.5vw, 80px)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: "#00693C",
        margin: "0 0 16px",
      }}>
        {number}.
      </p>
      <h3 style={{
        fontFamily: serif,
        fontWeight: 700,
        fontSize: "clamp(20px, 2vw, 28px)",
        lineHeight: 1.15,
        color: "#1a1817",
        margin: "0 0 14px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: serif,
        fontSize: "clamp(14px, 1.1vw, 16px)",
        fontWeight: 400,
        color: "rgba(26,24,23,0.58)",
        lineHeight: 1.75,
        margin: 0,
      }}>
        {body}
      </p>
    </div>
  );
}

export function Layout373() {
  return (
    <section style={{
      padding: "clamp(8px, 1vw, 16px) clamp(40px, 7%, 120px) clamp(64px, 9vw, 100px)",
      background: "#fff",
      position: "relative",
    }}>

      {/* Zitat – oben rechts */}
      <div style={{
        position: "absolute",
        top: "clamp(8px, 1vw, 16px)",
        right: "8%",
        maxWidth: "clamp(200px, 24vw, 320px)",
        textAlign: "right",
      }}>
        <p style={{
          fontFamily: serif,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(12px, 1vw, 14px)",
          lineHeight: 1.7,
          color: "rgba(26,24,23,0.4)",
          margin: "0 0 8px",
        }}>
          „Wenn du die richtige Person auf dem richtigen Platz hast, ist die Führung fast schon ein Selbstläufer."
        </p>
        <span style={{
          fontFamily: serif,
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "clamp(10px, 0.8vw, 11px)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(26,24,23,0.28)",
        }}>
          — Jim Collins
        </span>
      </div>

      {/* Journey path visualization
          Layout (in % of 900 × 1100 viewBox):
            Card 01  top:0      left:0     width:29%   → x 0–261,  y 0–310
            Card 02  top:35%    right:0    width:29%   → x 639–900 y 385–695
            Card 03  bottom:0   left:35%   width:29%   → x 315–576 y 790–1100
      */}
      <div style={{ position: "relative", minHeight: 1100 }}>

        <svg
          viewBox="0 0 900 1100"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* Path 01 → 02: departs right edge of card 01, arrives left of card 02 with gap */}
          <path
            d="M 261 155 C 450 155, 560 415, 615 415"
            fill="none"
            stroke="rgba(0,105,60,0.18)"
            strokeWidth="1.5"
          />

          {/* Path 02 → 03: departs bottom of card 02, arrives above card 03 with gap */}
          <path
            d="M 770 695 C 770 790, 590 758, 490 758"
            fill="none"
            stroke="rgba(0,105,60,0.18)"
            strokeWidth="1.5"
          />

          {/* Station dot 01 — departure point from card 01 */}
          <circle cx="261" cy="155" r="4" fill="#00693C" opacity="0.3" />

          {/* Station dot 02 — arrival point at card 02 (gap before left edge 639) */}
          <circle cx="615" cy="415" r="4" fill="#00693C" opacity="0.3" />

          {/* Station dot 03 — arrival point above card 03 (gap before top edge ~790) */}
          <circle cx="490" cy="758" r="4" fill="#00693C" opacity="0.3" />
        </svg>

        {/* Card 01 — top left */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "29%",
          zIndex: 1,
        }}>
          <Card {...challenges[0]} />
        </div>

        {/* Card 02 — middle right */}
        <div style={{
          position: "absolute",
          top: "35%",
          right: 0,
          width: "29%",
          zIndex: 1,
        }}>
          <Card {...challenges[1]} />
        </div>

        {/* Card 03 — bottom center */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "40%",
          width: "29%",
          zIndex: 1,
        }}>
          <Card {...challenges[2]} />
        </div>
      </div>
    </section>
  );
}
