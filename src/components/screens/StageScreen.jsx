import React, { useState, useMemo } from "react";
import { useApp } from "../../context/AppContext";
import { GAME_DATA, shuffle } from "../../data/GameData";
import MysteryCard from "../games/MysteryCard";
import GameModal from "../games/GameModal";

const StageScreen = ({ partKey, onBack }) => {
  const { completedGames, markDone, markStageStarted } = useApp();
  const part = GAME_DATA[partKey];
  const cardOrder = useMemo(() => shuffle([0, 1, 2, 3, 4]), []);
  const [activeGame, setActiveGame] = useState(null);


    const handleComplete = (won) => {
    if (won) {
        const key = `${partKey}-${activeGame}`;
        if (!completedGames.has(key)) markDone(key);
        
        // PROGRESS TRIGGER: Only mark the stage as "started/progressed" if they won a game
        markStageStarted(partKey); 
    }
    setActiveGame(null);
    };

    const handleSelect = (idx) => { 
    setActiveGame(idx); 
    };

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(200,230,255,0.95)",
      display: "flex", flexDirection: "column",
      alignItems: "center",
      zIndex: 200, overflow: "auto",
      padding: "20px 16px 90px"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, margin: 15, width: "100%", maxWidth: 1000 }}>
        <button className="btn-pixel" onClick={onBack} style={{ padding: "8px 14px", background: "#eee", color: "#000", fontSize: 9 }}>← BACK</button>
        <div>
          <div className="press-start" style={{ fontSize: 14, color: part.color, textShadow: "2px 2px 0 #000" }}>{part.label}</div>
          <div className="vt323" style={{ fontSize: 20, color: "#555", marginTop: 3 }}>Tap a Mystery Card to reveal a game!</div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 60, justifyCenter: "center", maxWidth: 1200, marginTop: 180 }}>
        {cardOrder.map(i => (
          <MysteryCard
            key={i}
            gameIndex={i}
            partColor={part.color}
            done={completedGames.has(`${partKey}-${i}`)}
            onSelect={handleSelect}
          />
        ))}
      </div>
      {activeGame !== null && (
        <GameModal partKey={partKey} gameIndex={activeGame} onClose={() => setActiveGame(null)} onComplete={handleComplete} />
      )}
    </div>
  );
};

export default StageScreen;