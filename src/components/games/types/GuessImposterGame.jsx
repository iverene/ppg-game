import React, { useState } from "react";

const GuessImposterGame = ({ data, onWin }) => {
  const [wrongFlash, setWrongFlash] = useState(null);
  const [solved, setSolved] = useState(false);
  const colors = ["#FF69B4", "#00BFFF", "#32CD32", "#FFD700", "#FF6B35"];

  const pick = (opt) => {
    if (solved) return;
    if (opt === data.correct) {
      setSolved(true);
    } else {
      setWrongFlash(opt);
      setTimeout(() => setWrongFlash(null), 700);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 16 }}>
      <div className="vt323" style={{ fontSize: 22, color: "#222", textAlign: "center", maxWidth: 460 }}>
        👁 Which term does NOT belong?
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
        {data.options.map((opt, i) => (
          <button
            key={i}
            className="btn-pixel"
            onClick={() => pick(opt)}
            style={{
              width: 130,
              height: 130,
              // Exact background logic retained
              background: solved && opt === data.correct ? "#32CD32" : wrongFlash === opt ? "#e03333" : `${colors[i % 5]}22`,
              fontFamily: "'Press Start 2P'",
              fontSize: 8,
              // Exact animation logic retained
              animation: wrongFlash === opt ? "shake 0.5s ease" : "bubble-float 3s ease-in-out infinite",
              // Disable clicking once solved
              pointerEvents: solved ? "none" : "auto"
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Manual Continue Button */}
      {solved && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginTop: 10, animation: "pop-in 0.4s ease" }}>
          <div className="press-start" style={{ fontSize: 10, color: "#32CD32", animation: "victory-bounce 0.6s ease-in-out infinite" }}>
            🎯 IMPOSTOR FOUND!
          </div>
          <button
            className="btn-pixel"
            onClick={() => onWin?.()}
            style={{
              padding: "12px 24px",
              background: "#32CD32",
              color: "#fff",
              fontSize: 10,
            }}
          >
            CONTINUE →
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessImposterGame;