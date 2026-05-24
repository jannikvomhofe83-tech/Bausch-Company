import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const sans = "'EB Garamond', Georgia, serif";

const steps = [
  {
    number: "01",
    label: "Situationsanalyse",
    body: "Jedes Mandat beginnt mit einer Diagnose der Unternehmensrealität. Welche Führung wird jetzt gebraucht? Erst wenn diese Frage ehrlich beantwortet ist, beginnen wir zu suchen.",
  },
  {
    number: "02",
    label: "Rollendefinition",
    body: "Ein Profil beschreibt, was jemand mitbringen soll. Eine Rolle beschreibt, was jemand leisten muss. Diesen Unterschied macht unser Prozess — und er entscheidet über den Erfolg.",
  },
  {
    number: "03",
    label: "Diskrete Suche",
    body: "Führungskräfte, die passen, suchen selten aktiv. Wir erreichen sie über unser Netzwerk — diskret, ohne dass ein laufendes Mandat nach außen dringt.",
  },
  {
    number: "04",
    label: "Kandidatenbewertung",
    body: "Passung entsteht im Gespräch, nicht auf dem Papier. Wir bewerten Kandidaten ehrlich — auch wenn das bedeutet, von einem Kandidaten abzuraten.",
  },
  {
    number: "05",
    label: "Begleitung",
    body: "Die Besetzung ist ein Anfang, kein Abschluss. Wir begleiten die ersten Monate, bleiben ansprechbar und sichern die Übergabe auch nach der Entscheidung ab.",
  },
];

function BBackground({ progress }) {
  const vbW = 560;
  const vbH = 900;
  const bandH = 200;
  const bandY = progress * (vbH + bandH) - bandH;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${vbW} ${vbH}`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "auto",
        height: "98%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <defs>
        <clipPath id="b-band-clip">
          <rect
            x="-100"
            width={vbW + 200}
            height={bandH}
            style={{
              y: bandY,
              transition: "y 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </clipPath>
      </defs>

      {/* Faint dark B — always visible */}
      <text
        x="-20" y="830"
        fontFamily="'EB Garamond', Georgia, serif"
        fontWeight="300"
        fontSize="900"
        fill="none"
        stroke="rgba(26,24,23,0.08)"
        strokeWidth="1"
      >B</text>

      {/* Green B — sliding band */}
      <text
        x="-20" y="830"
        fontFamily="'EB Garamond', Georgia, serif"
        fontWeight="300"
        fontSize="900"
        fill="none"
        stroke="#00693C"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        clipPath="url(#b-band-clip)"
      >B</text>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
      <line x1="0" y1="12" x2="28" y2="12" stroke="#00693C" strokeWidth="1.4" />
      <polyline
        points="20,4 28,12 20,20"
        fill="none"
        stroke="#00693C"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Layout302() {
  const [active, setActive] = useState(0);
  const [arrowTop, setArrowTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const step = steps[active];

  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) setArrowTop(el.offsetTop + el.offsetHeight / 2);
  }, [active]);

  useEffect(() => {
    const el = itemRefs.current[0];
    if (el) setArrowTop(el.offsetTop + el.offsetHeight / 2);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress = 0 when section bottom enters viewport, 1 when section top exits
      const total = vh + rect.height;
      const scrolled = vh - rect.top;
      setScrollProgress(Math.max(0, Math.min(1, scrolled / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>
      <BBackground progress={scrollProgress} />

      {/* ── Section 1: Headline + intro text ─────────────── */}
      <div
        style={{
          minHeight: "90vh",
          padding: "clamp(44px, 6vw, 80px) clamp(40px, 7%, 120px) clamp(48px, 7vw, 96px)",
          display: "grid",
          gridTemplateColumns: "58% 42%",
          alignItems: "start",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: sans,
            fontWeight: 500,
            fontSize: "clamp(36px, 5.5vw, 76px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#1a1817",
            margin: 0,
          }}
        >
          Wie wir<br />Mandate führen.
        </h2>

        <div
          style={{
            paddingTop: "clamp(140px, 24vh, 320px)",
            paddingLeft: "clamp(72px, 10vw, 148px)",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: 8,
              padding: "20px 24px",
              maxWidth: 310,
            }}
          >
          <div
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              border: "1.5px solid rgba(26,24,23,0.45)",
              marginBottom: 20,
            }}
          />
          <p
            style={{
              fontFamily: sans,
              fontSize: "clamp(13px, 1.05vw, 15px)",
              fontWeight: 400,
              color: "rgba(26,24,23,0.6)",
              lineHeight: 1.78,
              margin: 0,
              maxWidth: 310,
            }}
          >
            Fünf Schritte, ein klarer Prozess. Von der Situationsanalyse bis zur stabilen Übergabe — strukturiert, diskret und ohne Überraschungen. Durchschnittliche Suchdauer: 9 Wochen.
          </p>
          </div>
        </div>
      </div>

      {/* ── Section 2: Step list + sticky card ───────────── */}
      <div
        style={{
          padding: "0 clamp(40px, 7%, 120px) clamp(80px, 10vw, 140px)",
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left: step list with sliding arrow */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: arrowTop,
              transform: "translateY(-50%)",
              transition: "top 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <ArrowIcon />
          </div>

          <div style={{ paddingLeft: "clamp(52px, 6vw, 80px)" }}>
            {steps.map((s, i) => (
              <div
                key={s.number}
                ref={el => { itemRefs.current[i] = el; }}
                onMouseEnter={() => setActive(i)}
                style={{
                  marginBottom: i < steps.length - 1 ? "clamp(20px, 3vw, 44px)" : 0,
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 400,
                    fontSize: "clamp(22px, 2.8vw, 40px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                    color: active === i ? "#00693C" : "#1a1817",
                    transition: "color 0.2s ease",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: sticky orange card */}
        <div style={{ position: "sticky", top: 120 }}>
          <div
            style={{
              background: "#FF5800",
              borderRadius: 6,
              padding: "clamp(32px, 4vw, 52px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontFamily: sans,
                fontSize: "clamp(44px, 5vw, 68px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#fff",
                margin: 0,
                lineHeight: 1,
                marginBottom: "clamp(20px, 2.5vw, 36px)",
              }}
            >
              {step.number}.
            </p>

            <p
              style={{
                fontFamily: sans,
                fontSize: "clamp(13px, 1.05vw, 15px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.75,
                margin: 0,
                flexGrow: 1,
              }}
            >
              {step.body}
            </p>

            <div style={{ marginTop: "clamp(28px, 3.5vw, 48px)" }}>
              <Link
                to="/kontakt"
                style={{
                  fontFamily: sans,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                Gespräch anfragen
                <span
                  style={{
                    display: "block",
                    height: 1,
                    width: 44,
                    background: "rgba(255,255,255,0.7)",
                    flexShrink: 0,
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
