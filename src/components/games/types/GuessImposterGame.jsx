import React, { useState } from "react";

const GuessImposterGame = ({ data, onWin, onLose }) => {
  const [lives, setLives] = useState(2); // Set to 2 lives as requested
  const [wrongFlash, setWrongFlash] = useState(null);
  const [solved, setSolved] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const colors = ["#FF69B4", "#00BFFF", "#32CD32", "#FFD700", "#FF6B35"];

  const pick = (opt) => {
    if (solved || gameOver || wrongFlash) return;

    if (opt === data.correct) {
      setSolved(true);
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      setWrongFlash(opt);
      
      if (newLives <= 0) {
        setTimeout(() => setGameOver(true), 700);
      } else {
        setTimeout(() => setWrongFlash(null), 700);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 16 }}>
      {/* Lives Tracker */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="press-start" style={{ fontSize: 8, color: "#333" }}>LIVES:</div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div 
            key={i} 
            style={{ 
              fontSize: 26, 
              opacity: i < lives ? 1 : 0.2, 
              filter: i < lives ? "none" : "grayscale(100%)",
              transition: "all 0.3s ease"
            }}
          >
            💗
          </div>
        ))}
      </div>

      <div className="vt323" style={{ fontSize: 22, color: "#222", textAlign: "center", maxWidth: 460 }}>
        👁 Which term does NOT belong?
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", opacity: gameOver ? 0.5 : 1 }}>
        {data.options.map((opt, i) => (
          <button
            key={i}
            className="btn-pixel"
            onClick={() => pick(opt)}
            disabled={gameOver || solved}
            style={{
              width: 150,
              height: 130,
              background: (solved && opt === data.correct) ? "#32CD32" : (wrongFlash === opt) ? "#e03333" : `${colors[i % 5]}22`,
              fontFamily: "'Press Start 2P'",
              fontSize: 8,
              animation: (wrongFlash === opt) ? "shake 0.5s ease" : (solved || gameOver) ? "none" : "bubble-float 3s ease-in-out infinite",
              pointerEvents: (solved || gameOver || wrongFlash) ? "none" : "auto",
              border: `4px solid ${(solved && opt === data.correct) ? "#32CD32" : (wrongFlash === opt) ? "#e03333" : "transparent"}`,
              transition: "background 0.3s, border 0.3s"
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Result Messages */}
      {(solved || gameOver) && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginTop: 10, animation: "pop-in 0.4s ease" }}>
          <div 
            className="press-start" 
            style={{ 
              fontSize: 10, 
              color: solved ? "#32CD32" : "#e03333", 
              animation: solved ? "victory-bounce 0.6s ease-in-out infinite" : "none" 
            }}
          >
            {solved ? "🎯 IMPOSTOR FOUND!" : "💀 OUT OF TRIES!"}
          </div>
          
          <button
            className="btn-pixel"
            onClick={() => solved ? onWin?.() : onLose?.()}
            style={{
              padding: "12px 24px",
              background: solved ? "#32CD32" : "#FF69B4",
              color: "#fff",
              fontSize: 10,
            }}
          >
            {solved ? "CONTINUE →" : "TRY AGAIN"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessImposterGame;