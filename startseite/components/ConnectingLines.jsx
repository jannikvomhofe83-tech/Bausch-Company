import React, { useEffect, useState } from "react";

export function ConnectingLines() {
  const [dims, setDims] = useState({ width: 1440, height: 8000 });

  useEffect(() => {
    const update = () => {
      setDims({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const { width, height } = dims;
  const segments = 10;
  const segH = height / segments;

  const innerEdge = 14;
  const outerEdge = 58;
  const offset    = 11;

  const buildPath = (xOff) => {
    const a = innerEdge + xOff;
    const b = outerEdge + xOff;
    let d = `M ${a} 0`;
    for (let i = 0; i < segments; i++) {
      const fromX = i % 2 === 0 ? a : b;
      const toX   = i % 2 === 0 ? b : a;
      const y0 = i * segH;
      const y1 = (i + 1) * segH;
      d += ` C ${fromX} ${y0 + segH * 0.4}, ${toX} ${y0 + segH * 0.6}, ${toX} ${y1}`;
    }
    return d;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height,
        pointerEvents: "none",
        zIndex: 200,
        overflow: "hidden",
      }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          d={buildPath(0)}
          fill="none"
          stroke="#00693C"
          strokeWidth="2"
          opacity="0.45"
        />
        <path
          d={buildPath(offset)}
          fill="none"
          stroke="#FF5800"
          strokeWidth="2"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
