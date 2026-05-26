import React from "react";
import { Link } from "react-router-dom";

const serif = "'EB Garamond', Georgia, serif";

export function Cta33() {
  return (
    <section style={{
      background: "#fff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(80px, 12vh, 140px) clamp(32px, 7vw, 100px)",
    }}>

      {/* Outer row: " left + right column */}
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "clamp(12px, 1.5vw, 24px)",
      }}>

        {/* Large quotation marks */}
        <span style={{
          fontFamily: serif,
          fontSize: "clamp(120px, 18vw, 240px)",
          lineHeight: 0.75,
          color: "#1a1817",
          flexShrink: 0,
          display: "block",
          marginTop: "-0.1em",
          fontWeight: 700,
        }}>
          "
        </span>

        {/* Right column: text + lines + button */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

          {/* Quote text */}
          <p style={{
            fontFamily: serif,
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.8vw, 44px)",
            lineHeight: 1.3,
            color: "#1a1817",
            margin: "0 0 clamp(28px, 4vh, 48px)",
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}>
            Wir suchen keinen<br />
            Kandidaten.<br />
            Wir suchen<br />
            die Person.
          </p>

          {/* Horizontal line — centered under quote */}
          <div style={{
            width: "100%",
            height: 1,
            background: "#1a1817",
          }} />

          {/* Attribution */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "clamp(16px, 2.5vh, 28px) 0 clamp(8px, 1.5vh, 16px)",
          }}>
            <p style={{
              fontFamily: serif,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.1vw, 18px)",
              color: "#1a1817",
              margin: "0 0 0.2em",
            }}>
              Johannes Bausch
            </p>
            <p style={{
              fontFamily: serif,
              fontSize: "clamp(9px, 0.7vw, 11px)",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(26,24,23,0.45)",
              margin: 0,
            }}>
              CEO · Bausch & Company
            </p>
          </div>

          {/* Vertical line — centered on horizontal line */}
          <div style={{
            width: 1,
            height: "clamp(200px, 30vh, 360px)",
            background: "#1a1817",
          }} />

          {/* Button */}
          <Link to="/kontakt" style={{
            fontFamily: serif,
            fontSize: "clamp(11px, 0.85vw, 13px)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            background: "#1a1817",
            color: "#fff",
            padding: "clamp(10px, 1.2vh, 16px) clamp(28px, 3vw, 48px)",
            borderRadius: "100px",
            display: "inline-block",
            marginTop: "clamp(20px, 3vh, 36px)",
          }}>
            Erstgespräch vereinbaren
          </Link>

        </div>
      </div>

    </section>
  );
}
