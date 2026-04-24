import React, { useState } from "react";
import { GAME_LABELS, GAMES, GAME_LOGOS } from "../../data/GameData";

const MysteryCard = ({ gameIndex, partColor, onSelect, done }) => {
  const [flipped, setFlipped]   = useState(false);
  const [revealed, setRevealed] = useState(false);

  const gameType = GAMES[gameIndex];
  const logoPath = GAME_LOGOS[gameType];

  const flip = () => { 
    if(flipped) return; 
    setFlipped(true); 
    setTimeout(() => setRevealed(true), 320); 
  };

  return (
    <div style={{ position: "relative", width: 180, height: 230 }}>
      {done && (
        <div style={{
          position: "absolute", top: -8, right: -8, zIndex: 10,
          width: 28, height: 28, background: "#32CD32",
          border: "3px solid #000", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14
        }}>✓</div>
      )}
      <div className="card-3d" style={{ width: "100%", height: "100%", cursor: flipped ? "default" : "pointer" }} onClick={!flipped ? flip : undefined}>
        <div className={`card-inner${flipped ? " flipped" : ""}`}>
          
          {/* Back Side (The Mystery Flask) */}
          <div className="card-face card-back-face" style={{
            background: "linear-gradient(135deg,#fff0f8,#f0faff)",
            border: "4px solid #000", boxShadow: "4px 4px 0 #000",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
            animation: "float 2.5s ease-in-out infinite"
          }}>
            <div style={{ fontSize: 32 }}>⚗️</div>
            <div className="press-start" style={{ fontSize: 10, color: "#bbb", textAlign: "center" }}>MYSTERY</div>
            <div style={{ width: "80%", height: 3, background: "repeating-linear-gradient(90deg,#FF69B4,#00BFFF,#32CD32,#FF69B4)" }} />
            <div className="press-start" style={{ fontSize: 12, color: "#ccc", animation: "blink 1.2s step-end infinite" }}>TAP!</div>
          </div>

          {/* Front Side (The Revealed Game) */}
          <div className="card-face card-front-face" style={{
            background: `linear-gradient(135deg,${partColor}22,#fff)`,
            border: `4px solid ${partColor}`, boxShadow: "4px 4px 0 #000",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: 12
          }}>
            {revealed && (
              <>
                <img 
                  src={logoPath} 
                  alt={gameType}
                  style={{ 
                    width: "100px", 
                    height: "120px", 
                    objectFit: "contain",
                    animation: "float 2s ease-in-out infinite" 
                  }} 
                />
                
                <div className="press-start" style={{ 
                  fontSize: 12, 
                  color: partColor, 
                  textAlign: "center", 
                  lineHeight: 1.4,
                  marginTop: 4
                }}>
                  {GAME_LABELS[gameIndex]}
                </div>

                <button 
                  className="btn-pixel" 
                  onClick={(e) => { e.stopPropagation(); onSelect(gameIndex); }} 
                  style={{
                    padding: "10px 16px", 
                    fontSize: 10, 
                    background: partColor, 
                    color: "#fff", 
                    border: "3px solid #000", 
                    marginTop: 8
                  }}
                >
                  ▶ START
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysteryCard;