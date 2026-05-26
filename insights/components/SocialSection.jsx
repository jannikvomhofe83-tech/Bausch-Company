import React from "react";
import { FaLinkedinIn, FaXing, FaInstagram } from "react-icons/fa";

const serif = "'EB Garamond', Georgia, serif";

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "Johannes Bausch",
    href: "#",
    nr: "01",
    icon: FaLinkedinIn,
  },
  {
    label: "Xing",
    handle: "Johannes_Bausch",
    href: "http://www.xing.com/profile/Johannes_Bausch",
    nr: "02",
    icon: FaXing,
  },
  {
    label: "Instagram",
    handle: "@bauschandcompany",
    href: "#",
    nr: "03",
    icon: FaInstagram,
  },
];

export function SocialSection() {
  return (
    <section style={{
      background: "#fff",
      padding: "clamp(64px, 8vw, 112px) clamp(40px, 7%, 120px)",
      borderTop: "1px solid rgba(26,24,23,0.12)",
    }}>

      {/* Header row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "clamp(48px, 7vw, 96px)",
        flexWrap: "wrap",
        gap: 24,
      }}>
        <div>
          <p style={{
            fontFamily: serif,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00693C",
            margin: 0,
            marginBottom: "clamp(12px, 1.5vw, 18px)",
          }}>
            Folgen Sie uns
          </p>
          <h2 style={{
            fontFamily: serif,
            fontWeight: 900,
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#1a1817",
            margin: 0,
          }}>
            Johannes Bausch<br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>im Netz.</span>
          </h2>
        </div>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 400,
          lineHeight: 1.85,
          color: "rgba(26,24,23,0.55)",
          margin: 0,
          maxWidth: "34ch",
        }}>
          Gedanken zur Führung, zu Nachfolge und zu Menschen —
          direkt von Johannes Bausch.
        </p>
      </div>

      {/* Social rows */}
      <div style={{ borderTop: "1px solid rgba(26,24,23,0.18)" }}>
        {SOCIALS.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "clamp(20px, 2.5vw, 32px) 0",
                borderBottom: "1px solid rgba(26,24,23,0.18)",
                textDecoration: "none",
                gap: 24,
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector(".arrow").style.transform = "translateX(8px)";
                e.currentTarget.querySelector(".social-label").style.color = "#00693C";
                e.currentTarget.querySelector(".social-icon").style.color = "#00693C";
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector(".arrow").style.transform = "translateX(0)";
                e.currentTarget.querySelector(".social-label").style.color = "#1a1817";
                e.currentTarget.querySelector(".social-icon").style.color = "rgba(26,24,23,0.25)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 48px)" }}>
                <span style={{
                  fontFamily: serif,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(26,24,23,0.3)",
                  minWidth: 24,
                }}>
                  {s.nr}
                </span>

                <Icon
                  className="social-icon"
                  style={{
                    fontSize: "clamp(20px, 2.2vw, 32px)",
                    color: "rgba(26,24,23,0.25)",
                    transition: "color 0.2s ease",
                    flexShrink: 0,
                  }}
                />

                <span
                  className="social-label"
                  style={{
                    fontFamily: serif,
                    fontWeight: 900,
                    fontSize: "clamp(28px, 4vw, 60px)",
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: "#1a1817",
                    transition: "color 0.2s ease",
                  }}
                >
                  {s.label}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 2vw, 32px)" }}>
                <span style={{
                  fontFamily: serif,
                  fontSize: "clamp(12px, 0.9vw, 14px)",
                  fontWeight: 400,
                  color: "rgba(26,24,23,0.4)",
                  letterSpacing: "0.02em",
                }}>
                  {s.handle}
                </span>
                <span
                  className="arrow"
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(18px, 2vw, 28px)",
                    color: "#1a1817",
                    transition: "transform 0.2s ease",
                    display: "block",
                  }}
                >
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>

    </section>
  );
}
