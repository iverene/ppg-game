import React, { useEffect, useRef } from "react";

const PPGVictory = ({ onDone }) => {
  const audioRef = useRef(new Audio("/assets/audio/victory-bgm.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Loops the background music
    audio.volume = 0.6; // Sets volume to 60%
    
    audio.play().catch(err => console.log("Audio play blocked:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  const girls = [
    { name: "BLOSSOM", color: "#FF69B4", img: "/assets/girls/blossom.png", delay: "0s" },
    { name: "BUBBLES", color: "#00BFFF", img: "/assets/girls/bubbles.png", delay: "1.2s" },
    { name: "BUTTERCUP", color: "#32CD32", img: "/assets/girls/buttercup.png", delay: "2.4s" },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(240,250,255,0.96)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
      <div className="press-start" style={{ fontSize: 20, color: "#FF69B4", textShadow: "3px 3px 0 #000", textAlign: "center", animation: "victory-bounce 0.7s ease-in-out infinite" }}>
        🏆 TOWNSVILLE SAVED! 🏆
      </div>

      <div style={{ position: "relative", width: "100%", height: 180, overflow: "hidden" }}>
        {girls.map(g => (
          <div key={g.name} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            display: "flex", alignItems: "center", gap: 0,
            animation: `ppg-fly 5s ease-in-out ${g.delay} infinite` 
          }}>
            {/* Gradient Trail */}
            <div style={{
              width: 140, height: 40,
              background: `linear-gradient(90deg, transparent, ${g.color}66, ${g.color})`,
              clipPath: "polygon(100% 0%, 100% 100%, 0% 60%, 0% 40%)",
              marginRight: -50, marginTop:"18px", opacity: 0.8
            }} />

            {/* Character PNG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ 
                width: 200, height: 200, 
                display: "flex", alignItems: "center", justifyContent: "center", 
                overflow: "hidden" 
              }}>
                <img src={g.img} alt={g.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="vt323" style={{ fontSize: 26, color: "#333", textAlign: "center" }}>
        Chapter 11: Project Procurement Management<br />
        <span style={{ color: "#FF69B4", fontFamily: "'Press Start 2P'", fontSize: 13 }}>COMPLETE!</span>
      </div>
      <div className="vt323" style={{ fontSize: 24, color: "#666", textAlign: "center" }}>
        And so once again, the day is saved…<br />
        <span style={{ color: "#FF69B4" }}>Thanks to the Powerpuff Girls! ✨</span>
      </div>

      <button 
        className="btn-pixel font-bold press-start" 
        onClick={() => {
          onDone(); 
          window.location.reload(); // Restarts the browser/game logic
        }} 
        style={{ 
          padding: "10px 24px", 
          background: "#FF69B4", 
          color: "#fff", 
          fontSize: 10, 
          marginTop: 6 
        }}
      >
        AMAZE AMAZE AMAZE!
      </button>
    </div>
  );
};

export default PPGVictory;