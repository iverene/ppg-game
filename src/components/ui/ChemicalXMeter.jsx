import React from "react";
import { GAME_DATA, PARTS } from "../../data/GameData";

const ChemicalXMeter = ({ stagesStarted }) => {
  const filled = stagesStarted.size;
  const total = PARTS.length;
  const pct = Math.round((filled / total) * 100);
  const full = filled >= total;
  return (
    <div style={{
      position: "fixed", bottom: 14, left: "50%", transform: "translateX(-50%)",
      zIndex: 1000,
      display: "flex", alignItems: "center", gap: 10,
      background: "#fff", border: "4px solid #000",
      padding: "8px 16px", boxShadow: "4px 4px 0 #000",
      whiteSpace: "nowrap"
    }}>
      <div className="press-start" style={{ fontSize: 10, color: "#7700cc" }}>🧪 CHEM X</div>
      <div style={{ display: "flex", gap: 4 }}>
        {PARTS.map((pk, i) => {
          const done = stagesStarted.has(pk);
          const col = GAME_DATA[pk].color;
          return (
            <div key={i} title={GAME_DATA[pk].label} style={{
              width: 30, height: 20,
              background: done ? col : "#e5e5e5",
              border: `3px solid ${done ? col : "#bbb"}`,
              transition: "all 0.4s ease",
              position: "relative", overflow: "hidden",
              boxShadow: done ? `0 0 8px ${col}88` : "none"
            }}>
              {done && <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(90deg,transparent,transparent 5px,rgba(255,255,255,0.28) 5px,rgba(255,255,255,0.28) 7px)" }} />}
            </div>
          );
        })}
      </div>
      <div className="vt323" style={{ fontSize: 21, color: "#7700cc", minWidth: 38 }}>{pct}%</div>
      {full && <div style={{ fontSize: 17, animation: "heart-beat 0.6s ease-in-out infinite" }}>✨</div>}
    </div>
  );
};

export default ChemicalXMeter;