import React, { useState } from "react";

const serif = "'EB Garamond', Georgia, serif";

const sectors = [
  { name: "Maschinenbau",   image: "/bild-14.png" },
  { name: "Handel",         image: "/bild-15.png" },
  { name: "Bau",            image: "/bild-16.png" },
  { name: "Gesundheit",     image: "/bild-17.png" },
  { name: "Tech",           image: "/bild-18.png" },
  { name: "Konsumgüter",    image: "/bild-19.png" },
  { name: "Logistik",       image: "/bild-20.png" },
  { name: "Dienstleistung", image: "/bild-21.png" },
];

function SectorCard({ name, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        background: "#C8C2B8",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Hover image */}
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease",
            display: "block",
          }}
        />
      )}

      {/* Placeholder overlay when no image yet */}
      {!image && hovered && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#A09890",
          transition: "opacity 0.45s ease",
        }} />
      )}

      {/* Dark gradient overlay — always visible, stronger on hover */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)",
        transition: "background 0.45s ease",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        padding: "clamp(28px, 4vw, 52px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        zIndex: 2,
      }}>
        <h3 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(28px, 3.5vw, 52px)",
          lineHeight: 1.05,
          letterSpacing: "0.01em",
          color: hovered ? "#fff" : "#1a1817",
          margin: "0 0 clamp(20px, 2.5vw, 32px)",
          transition: "color 0.3s ease",
        }}>
          {name}
        </h3>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          border: `1px solid ${hovered ? "rgba(255,255,255,0.6)" : "rgba(26,24,23,0.35)"}`,
          padding: "clamp(10px, 1vw, 13px) clamp(20px, 2vw, 28px)",
          transition: "border-color 0.3s ease",
        }}>
          <span style={{
            fontFamily: serif,
            fontSize: "clamp(11px, 0.85vw, 13px)",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: hovered ? "#fff" : "#1a1817",
            transition: "color 0.3s ease",
          }}>
            Mehr erfahren
          </span>
        </div>
      </div>
    </div>
  );
}

export function BranchenGrid() {
  return (
    <section style={{ background: "#fff", paddingBottom: "clamp(64px, 9vw, 120px)" }}>

      {/* Header */}
      <div style={{
        padding: "clamp(64px, 9vw, 120px) clamp(40px, 7%, 120px) clamp(40px, 5vw, 64px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 40,
      }}>
        <div>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(9px, 0.75vw, 11px)",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#00693C",
          margin: "0 0 clamp(14px, 1.8vw, 22px)",
        }}>
          Branchen
        </p>
        <h2 style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "clamp(28px, 3.5vw, 52px)",
          lineHeight: 1.05,
          letterSpacing: "0.01em",
          color: "#1a1817",
          margin: "0 0 clamp(12px, 1.5vw, 20px)",
        }}>
          Unsere Sektoren
        </h2>
        <p style={{
          fontFamily: serif,
          fontSize: "clamp(14px, 1.1vw, 17px)",
          fontWeight: 400,
          color: "rgba(26,24,23,0.6)",
          lineHeight: 1.7,
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          Jahrzehnte Erfahrung in acht Kernbranchen des deutschsprachigen Mittelstands.
        </p>
        </div>

        {/* Quote — top right */}
        <div style={{
          maxWidth: 300,
          textAlign: "right",
          flexShrink: 0,
        }}>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(14px, 1.1vw, 17px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(26,24,23,0.55)",
            lineHeight: 1.65,
            margin: "0 0 8px",
          }}>
            „Erfahrung ist nicht das, was einem passiert. Es ist das, was man aus dem macht, was einem passiert."
          </p>
          <p style={{
            fontFamily: serif,
            fontSize: "clamp(10px, 0.8vw, 12px)",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(26,24,23,0.35)",
            margin: 0,
          }}>
            Aldous Huxley
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(2px, 0.3vw, 4px)",
        margin: "0 clamp(40px, 7%, 120px)",
      }}>
        {sectors.map((s) => (
          <SectorCard key={s.name} name={s.name} image={s.image} />
        ))}
      </div>
    </section>
  );
}
