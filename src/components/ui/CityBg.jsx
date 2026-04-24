import React, { useMemo } from "react";

const CityBg = () => {
  const buildingData = useMemo(() => {
    const cols = ["#b8d4f0", "#c4daf5", "#aacae8", "#d0e8ff", "#9fc0e0"];
    const wins = ["#FF69B4", "#00BFFF", "#FFD700", "#32CD32", "#ffffff"];
    return Array.from({ length: 44 }, (_, i) => ({
      w: 30 + (i * 17 + 11) % 60,
      h: 55 + (i * 23 + 7) % 160,
      color: cols[i % cols.length],
      win: wins[i % wins.length],
      id: i,
    }));
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", zIndex: 0, background: "linear-gradient(180deg,#a8d8ff 0%,#d4eeff 55%,#e8f6ff 100%)" }}>
      {/* Sun */}
      <div style={{ position: "absolute", top: 24, right: 90, width: 62, height: 62, background: "#FFE14D", border: "4px solid #000", borderRadius: "50%", boxShadow: "0 0 28px #FFE14D88" }} />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ position: "absolute", top: 24 + 31 - 2, right: 90 + 31 - 2, width: 4, height: 42, background: "#FFE14D", transformOrigin: "2px 0px", transform: `rotate(${i * 45}deg) translateY(38px)`, opacity: 0.45 }} />
      ))}
      {/* Clouds */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "200%", display: "flex", gap: 56, animation: "cloud-drift 42s linear infinite" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{ display: "flex", flexShrink: 0, alignItems: "flex-end", marginTop: 16 + (i * 31) % 55 }}>
            <div style={{ width: 38 + (i * 7) % 28, height: 26 + (i * 5) % 18, background: "#fff", border: "3px solid #aaa", borderRadius: "50% 50% 0 0" }} />
            <div style={{ width: 58 + (i * 11) % 38, height: 38 + (i * 9) % 22, background: "#fff", border: "3px solid #aaa", borderRadius: "50% 50% 0 0", marginLeft: -7 }} />
            <div style={{ width: 33 + (i * 13) % 23, height: 22 + (i * 7) % 14, background: "#fff", border: "3px solid #aaa", borderRadius: "50% 50% 0 0", marginLeft: -5 }} />
          </div>
        ))}
      </div>
      {/* Birds */}
      {[50, 130, 240, 360, 480].map((l, i) => (
        <div key={i} style={{ position: "absolute", top: 65 + (i * 23) % 55, left: l, fontSize: 15, animation: `float ${2 + i * 0.35}s ease-in-out ${i * 0.3}s infinite` }}>🐦</div>
      ))}
      {/* Scrolling buildings */}
      <div style={{ position: "absolute", bottom: 0, left: 0, display: "flex", alignItems: "flex-end", animation: "scroll-city 36s linear infinite", width: "200%" }}>
        {[...buildingData, ...buildingData].map((b, i) => (
          <div key={i} style={{
            width: b.w, minHeight: b.h,
            background: b.color, border: "3px solid #7aa8cc", borderBottom: "none",
            marginRight: 1, flexShrink: 0,
            display: "grid", gridTemplateColumns: `repeat(${Math.max(2, Math.floor(b.w / 14))}, 1fr)`,
            alignContent: "start", padding: 4, gap: 3
          }}>
            {Array.from({ length: Math.floor(b.h / 22) }).map((_, j) => (
              <div key={j} style={{
                width: 10, height: 10,
                background: (b.id + j) % 3 === 0 ? b.win : "#e8f4ff",
                border: "1px solid #7aa8cc",
                opacity: (b.id + j) % 5 === 0 ? 0.35 : 0.8
              }} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 10, background: "#6db36d", borderTop: "4px solid #000" }} />
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.018) 3px,rgba(0,0,0,0.018) 4px)", pointerEvents: "none" }} />
    </div>
  );
};

export default CityBg;