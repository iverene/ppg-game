import React, { useEffect, useRef } from "react";

const PPGVictory = ({ onDone }) => {
  const audioRef = useRef(new Audio("/assets/audio/victory-bgm.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; 
    audio.volume = 0.6; 
    
    audio.play().catch(err => console.log("Audio play blocked:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const girls = [
    { name: "BLOSSOM", color: "#FF69B4", img: "/assets/girls/blossom.png", delay: "0s" },
    { name: "BUBBLES", color: "#00BFFF", img: "/assets/girls/bubbles.png", delay: "1.5s" },
    { name: "BUTTERCUP", color: "#32CD32", img: "/assets/girls/buttercup.png", delay: "3.0s" }, // Adjusted timing
  ];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(240,250,255,0.96)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
      <div className="press-start" style={{ fontSize: 20, color: "#FF69B4", textShadow: "3px 3px 0 #000", textAlign: "center", animation: "victory-bounce 0.7s ease-in-out infinite" }}>
        🏆 TOWNSVILLE SAVED! 🏆
      </div>

      {/* Increased height to 250 to accommodate the 200px character size */}
      <div style={{ position: "relative", width: "100%", height: 250, overflow: "hidden" }}>
        {girls.map(g => (
          <div key={g.name} style={{
            position: "absolute", 
            top: "50%", 
            transform: "translateY(-50%)",
            display: "flex", 
            alignItems: "center", 
            gap: 0,
            /* Changed to 'infinite backwards' to ensure smooth start-up after delay */
            animation: `ppg-fly 6s ease-in-out ${g.delay} infinite backwards` 
          }}>
            {/* Gradient Trail */}
            <div style={{
              width: 140, 
              height: 35,
              background: `linear-gradient(90deg, transparent, ${g.color}66, ${g.color})`,
              clipPath: "polygon(100% 0%, 100% 100%, 0% 60%, 0% 40%)",
              marginRight: -50, 
              marginTop: "20px", 
              opacity: 0.8
            }} />

            {/* Character PNG */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ 
                width: 180, 
                height: 180, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
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
          window.location.reload(); 
        }} 
        style={{ 
          padding: "12px 28px", 
          background: "#FF69B4", 
          color: "#fff", 
          fontSize: 10, 
          marginTop: 10 
        }}
      >
        AMAZE AMAZE AMAZE!
      </button>
    </div>
  );
};

export default PPGVictory;