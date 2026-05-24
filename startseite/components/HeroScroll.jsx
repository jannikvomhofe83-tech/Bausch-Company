"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SCROLL_RANGE = 500;

export function HeroScroll() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [loaded,   setLoaded]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      setProgress(Math.max(0, Math.min(1, -top / SCROLL_RANGE)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imgY = progress * -35;

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(100vh + ${SCROLL_RANGE}px)` }}
    >
      <div
        className="sticky top-0 h-screen"
        style={{ background: "#f7f4ef" }}
      >

        {/* Wordmark – oben links */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "7%",
            zIndex: 2,
            pointerEvents: "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s 0.1s",
          }}
        >
          {/* BAUSCH */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.4vw" }}>
            <div style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(44px, 11vw, 165px)",
              lineHeight: 0.85,
              letterSpacing: "-0.03em",
              color: "#00693C",
            }}>
              BAUSCH
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignSelf: "stretch",
              paddingBottom: "0.1em",
              gap: "0.05em",
            }}>
              <div style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(12px, 1.9vw, 28px)",
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                color: "#00693C",
              }}>finding</div>
              <div style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(12px, 1.9vw, 28px)",
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                color: "#FF5800",
              }}>excellence</div>
            </div>
          </div>

          {/* & COMPANY */}
          <div style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 11vw, 165px)",
            lineHeight: 0.85,
            letterSpacing: "-0.03em",
            color: "#FF5800",
          }}>
            <span style={{ color: "#FF5800" }}>&amp;</span> COMPANY
          </div>
        </div>

        {/* Berg + Zebras */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: "-6%",
            width: "64%",
            zIndex: 4,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s",
            filter: "drop-shadow(0px 20px 50px rgba(0,0,0,0.10))",
          }}
        >
          <img
            src="/bild1.png"
            alt=""
            onLoad={() => setLoaded(true)}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Headline + Subline + CTAs – bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "7%",
            zIndex: 5,
            maxWidth: "clamp(260px, 36vw, 520px)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.9s 0.3s",
          }}
        >
          {/* grüne Akzentlinie */}
          <div style={{
            width: 32,
            height: 3,
            background: "#00693C",
            marginBottom: 16,
          }} />

          <p style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(16px, 1.45vw, 22px)",
            fontWeight: 700,
            color: "#1a1817",
            lineHeight: 1.3,
            margin: "0 0 10px 0",
          }}>
            Führung entscheidet über die Zukunft von Familienunternehmen.
          </p>

          <p style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(12px, 0.95vw, 14px)",
            fontWeight: 400,
            color: "rgba(26,24,23,0.65)",
            lineHeight: 1.65,
            margin: "0 0 22px 0",
          }}>
            Bausch & Company besetzt Schlüsselpositionen in Familienunternehmen
            im DACH-Raum – mit Fokus auf Nachfolge, Transformation und
            nachhaltige Führung.
          </p>

          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              to="/kontakt"
              style={{
                display: "inline-block",
                background: "#00693C",
                color: "#fff",
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "11px 22px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              Erstgespräch vereinbaren
            </Link>
            <Link
              to="/#prozess"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#1a1817",
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "10px 22px",
                borderRadius: "100px",
                border: "1.5px solid rgba(26,24,23,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              Unsere Vorgehensweise
            </Link>
          </div>
        </div>

        {!loaded && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "system-ui", fontSize: 10,
              letterSpacing: "0.4em", color: "rgba(26,24,23,0.3)",
              textTransform: "uppercase",
            }}>
              Laden …
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
