import React, { useState, useMemo, useEffect } from "react"; // Added useEffect
import { shuffle } from "../../../data/GameData";

const MixMatchGame = ({ data, onWin, onLose }) => {
  const [lives, setLives] = useState(3);
  const [selTerm, setSelTerm] = useState(null);
  const [selDef, setSelDef] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [won, setWon] = useState(false);

  const shuffledDefs = useMemo(() => shuffle(data.map(d => d.definition)), [data]);
  const matchedDefs = matched.map(t => data.find(x => x.term === t)?.definition);

  // 1. Monitor matches and lives separately to handle game-over logic
useEffect(() => {
  if (matched.length === data.length && matched.length > 0) {
    setWon(true);
    const timer = setTimeout(() => onWin?.(), 900);
    return () => clearTimeout(timer);
  }
}, [matched.length, data.length, onWin]);

useEffect(() => {
  if (lives <= 0) {
    const timer = setTimeout(() => onLose?.(), 400);
    return () => clearTimeout(timer);
  }
}, [lives, onLose]);

// 2. Handle the actual matching logic
useEffect(() => {
  if (selTerm && selDef) {
    const correct = data.find((d) => d.term === selTerm);

    if (correct?.definition === selDef) {
      // Functional update: prevMatched is used to avoid 'matched' dependency
      setMatched((prevMatched) => [...prevMatched, selTerm]);
      setSelTerm(null);
      setSelDef(null);
    } else {
      setLives((l) => l - 1);
      setWrongPair({ term: selTerm, def: selDef });

      const timer = setTimeout(() => {
        setWrongPair(null);
        setSelTerm(null);
        setSelDef(null);
      }, 700);
      return () => clearTimeout(timer);
    }
  }
}, [selTerm, selDef, data]); // 'matched' and 'lives' are no longer dependencies

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: 16 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="press-start" style={{ fontSize: 8, color: "#333" }}>LIVES:</div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} style={{ fontSize: 26, opacity: i < lives ? 1 : 0.2, animation: i < lives ? `heart-beat 1s ease-in-out ${i * 0.2}s infinite` : "none" }}>💗</div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", maxWidth: 560 }}>
        {/* Terms Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {data.map(({ term }) => {
            const isMatched = matched.includes(term);
            const isSelected = selTerm === term;
            return (
              <button
                key={term}
                className="btn-pixel vt323"
                onClick={() => !isMatched && !wrongPair && setSelTerm(term)}
                style={{
                  padding: "12px 8px", fontSize: 20,
                  background: isMatched ? "#32CD32" : isSelected ? "#FF69B4" : "#fff0f8",
                  color: isMatched || isSelected ? "#fff" : "#d4006a",
                  border: `4px solid ${isMatched ? "#32CD32" : "#FF69B4"}`,
                  pointerEvents: isMatched || wrongPair ? "none" : "auto"
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
            return (
              <button
                key={i}
                className="btn-pixel vt323"
                onClick={() => !isMatched && !wrongPair && setSelDef(def)}
                style={{
                  padding: "10px 8px", fontSize: 16,
                  background: isMatched ? "#32CD32" : isSelected ? "#00BFFF" : "#f0faff",
                  color: isMatched || isSelected ? "#fff" : "#0066aa",
                  border: `4px solid ${isMatched ? "#32CD32" : "#00BFFF"}`,
                  pointerEvents: isMatched || wrongPair ? "none" : "auto"
                }}
              >{def}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MixMatchGame;