import React, { useState, useMemo, useEffect } from "react";
import { shuffle } from "../../../data/GameData";

const MixMatchGame = ({ data, onWin, onLose }) => {
  const [lives, setLives] = useState(3);
  const [selTerm, setSelTerm] = useState(null);
  const [selDef, setSelDef] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [won, setWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const shuffledDefs = useMemo(() => shuffle(data.map(d => d.definition)), [data]);
  const matchedDefs = matched.map(t => data.find(x => x.term === t)?.definition);

  // 1. Handle Game Win State
  useEffect(() => {
    if (matched.length === data.length && matched.length > 0) {
      setWon(true);
    }
  }, [matched.length, data.length]);

  // 2. Handle Game Lose State
  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true);
    }
  }, [lives]);

  // 3. Matching Logic
  useEffect(() => {
    if (selTerm && selDef) {
      const correct = data.find((d) => d.term === selTerm);

      if (correct?.definition === selDef) {
        setMatched((prevMatched) => [...prevMatched, selTerm]);
        setSelTerm(null);
        setSelDef(null);
      } else {
        setLives((l) => Math.max(0, l - 1));
        setWrongPair({ term: selTerm, def: selDef });

        const timer = setTimeout(() => {
          setWrongPair(null);
          setSelTerm(null);
          setSelDef(null);
        }, 1200); // Slightly longer to let the user read the error
        return () => clearTimeout(timer);
      }
    }
  }, [selTerm, selDef, data]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: 16 }}>
      {/* Lives / Status Bar */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="press-start" style={{ fontSize: 8, color: "#333" }}>LIVES:</div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} style={{ fontSize: 26, opacity: i < lives ? 1 : 0.2, animation: i < lives ? `heart-beat 1s ease-in-out ${i * 0.2}s infinite` : "none" }}>💗</div>
        ))}
      </div>

      {/* Wrong Answer Feedback */}
      {wrongPair && (
        <div className="vt323" style={{ color: "#e03333", fontSize: 22, animation: "shake 0.5s ease" }}>
          ❌ WRONG MATCH! TRY AGAIN 👀
        </div>
      )}

      {/* Main Game Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", maxWidth: 560, opacity: (won || gameOver) ? 0.3 : 1, transition: "opacity 0.5s" }}>
        {/* Terms Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {data.map(({ term }) => {
            const isMatched = matched.includes(term);
            const isSelected = selTerm === term;
            const isWrong = wrongPair?.term === term;
            return (
              <button
                key={term}
                className="btn-pixel vt323"
                onClick={() => !isMatched && !wrongPair && !won && !gameOver && setSelTerm(term)}
                style={{
                  padding: "12px 8px", fontSize: 20,
                  background: isMatched ? "#32CD32" : isWrong ? "#e03333" : isSelected ? "#FF69B4" : "#fff0f8",
                  color: (isMatched || isSelected || isWrong) ? "#fff" : "#d4006a",
                  border: `4px solid ${isMatched ? "#32CD32" : isWrong ? "#e03333" : "#FF69B4"}`,
                  pointerEvents: (isMatched || wrongPair || won || gameOver) ? "none" : "auto",
                  animation: isWrong ? "shake 0.5s ease" : "none"
                }}
              >{term}</button>
            );
          })}
        </div>

        {/* Definitions Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {shuffledDefs.map((def, i) => {
            const termKey = data.find(x => x.definition === def)?.term;
            const isMatched = matched.includes(termKey);
            const isSelected = selDef === def;
            const isWrong = wrongPair?.def === def;
            return (
              <button
                key={i}
                className="btn-pixel vt323"
                onClick={() => !isMatched && !wrongPair && !won && !gameOver && setSelDef(def)}
                style={{
                  padding: "10px 8px", fontSize: 16,
                  background: isMatched ? "#32CD32" : isWrong ? "#e03333" : isSelected ? "#00BFFF" : "#f0faff",
                  color: (isMatched || isSelected || isWrong) ? "#fff" : "#0066aa",
                  border: `4px solid ${isMatched ? "#32CD32" : isWrong ? "#e03333" : "#00BFFF"}`,
                  pointerEvents: (isMatched || wrongPair || won || gameOver) ? "none" : "auto",
                  animation: isWrong ? "shake 0.5s ease" : "none"
                }}
              >{def}</button>
            );
          })}
        </div>
      </div>

      {/* Manual Results UI */}
      {(won || gameOver) && (
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", background: "#fff", border: "4px solid #000", padding: "30px", boxShadow: "8px 8px 0 #000", display: "flex", flexDirection: "column", alignItems: "center", gap: 15, animation: "pop-in 0.4s ease", zIndex: 10 }}>
          <div style={{ fontSize: 50 }}>{won ? "🌸" : "💀"}</div>
          <div className="press-start" style={{ color: won ? "#32CD32" : "#e03333", fontSize: 14 }}>{won ? "MATCHED!" : "GAME OVER"}</div>
          <div className="vt323" style={{ fontSize: 24 }}>{won ? "Excellent memory, hero!" : "Out of lives! Keep studying!"}</div>
          <button 
            className="btn-pixel" 
            onClick={() => won ? onWin?.() : onLose?.()} 
            style={{ padding: "12px 24px", background: won ? "#32CD32" : "#FF69B4", color: "#fff", fontSize: 10 }}
          >
            {won ? "CONTINUE →" : "TRY AGAIN"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MixMatchGame;