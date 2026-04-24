import React, { useState, useEffect, useRef, useMemo } from "react";
import { shuffle } from "../../../data/GameData";

const TimebombGame = ({ data, onWin, onLose }) => {
  const questions = useMemo(() => shuffle(data), [data]);
  const [qi, setQi] = useState(0);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [exploded, setExploded] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [shake, setShake] = useState(false);
  const [done, setDone] = useState(false);
  const pendingScore = useRef(0);

  const q = questions[qi];
  const total = questions.length;
  const isLast = qi >= total - 1;

  useEffect(() => {
    if (done || exploded || selected !== null) return;
    if (time <= 0) {
      boom();
      return;
    }
    const t = setTimeout(() => setTime((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [time, done, exploded, selected]);

  const advance = (correct) => {
    const ns = correct ? pendingScore.current + 1 : pendingScore.current;
    pendingScore.current = ns;
    
    if (isLast) {
      setScore(ns);
      setDone(true); // Switches to the results view
    } else {
      setQi((p) => p + 1);
      setSelected(null);
      setFeedback(null);
      setExploded(false);
      setTime(10);
    }
  };

  const boom = () => {
    setExploded(true);
    setFeedback(`⏰ TIME'S UP! Answer: ${q.correct}`);
    setTimeout(() => advance(false), 1800);
  };

  const pick = (opt) => {
    if (selected !== null || done || exploded) return;
    setSelected(opt);
    const correct = opt === q.correct;
    if (correct) {
      setFeedback("✅ CORRECT!");
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setFeedback(`❌ Wrong! Answer: ${q.correct}`);
    }
    setTimeout(() => advance(correct), 1500);
  };

  const urgColor = time <= 5 ? "#e03333" : time <= 10 ? "#FF9900" : "#1ea831";

  if (done) {
    const pct = Math.round((score / total) * 100);
    const grade = pct === 100 ? "S" : pct >= 80 ? "A" : pct >= 60 ? "B" : pct >= 40 ? "C" : "D";
    const gCol = pct === 100 ? "#FFD700" : pct >= 80 ? "#32CD32" : pct >= 60 ? "#00BFFF" : pct >= 40 ? "#FF9900" : "#e03333";
    
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 28 }}>
        <div className="press-start" style={{ fontSize: 9, color: "#333", textAlign: "center" }}>⏣ TIMEBOMB RESULTS</div>
        <div style={{ background: "#fff", border: "4px solid #000", padding: "24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, boxShadow: "6px 6px 0 #000", animation: "score-pop 0.5s ease" }}>
          
          {/* Header Stats */}
          <div className="vt323" style={{ fontSize: 32, color: "#000", fontWeight: "bold" }}>TOTAL SCORE: {score} / {total}</div>
          <div className="vt323" style={{ fontSize: 22, color: "#666", marginBottom: 8 }}>{pct}% accuracy</div>
          
          {/* Visual Feedback */}
          <div style={{ fontSize: 60, animation: "float 2s ease-in-out infinite" }}>{pct >= 60 ? "🌸" : "💀"}</div>
          <div className="press-start" style={{ fontSize: 26, color: gCol, textShadow: "3px 3px 0 #000" }}>GRADE: {grade}</div>
          
          {/* Progress Bar */}
          <div style={{ width: "100%", height: 16, background: "#eee", border: "3px solid #000", overflow: "hidden", position: "relative", marginTop: 8 }}>
            <div style={{ height: "100%", width: `${pct}%`, background: gCol, transition: "width 1.2s ease" }} />
          </div>

          {/* Manual Exit Button */}
          <button 
            className="btn-pixel" 
            onClick={() => score > 0 ? onWin?.() : onLose?.()} 
            style={{ 
              marginTop: 24, 
              padding: "12px 24px", 
              background: gCol, 
              color: "#fff", 
              fontSize: 10 
            }}
          >
            CONTINUE →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: 16 }}>
      {/* Question Tracker */}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        {questions.map((_, i) => (
          <div key={i} style={{ width: 14, height: 14, border: "3px solid #000", background: i < qi ? "#32CD32" : i === qi ? "#FFD700" : "#eee" }} />
        ))}
        <div className="vt323" style={{ fontSize: 18, color: "#666", marginLeft: 8 }}>{qi + 1}/{total}</div>
      </div>

      {/* Bomb Animation */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ fontSize: 58, animation: exploded ? `explode 0.5s ease forwards` : `bomb-tick ${time <= 5 ? 0.22 : 0.7}s ease-in-out infinite` }}>{exploded ? "💥" : "💣"}</div>
        {!exploded && (
          <div className="press-start" style={{ fontSize: 20, color: urgColor, animation: `countdown-pulse ${time <= 5 ? 0.3 : 0.85}s ease-in-out infinite`, textShadow: `0 0 6px ${urgColor}` }}>{time}s</div>
        )}
      </div>

      {/* Answer Feedback */}
      {feedback && (
        <div className="vt323" style={{ fontSize: 22, textAlign: "center", color: feedback.startsWith("✅") ? "#1ea831" : "#e03333", animation: "pop-in 0.3s ease" }}>{feedback}</div>
      )}

      {/* Question Text */}
      <div className="vt323" style={{ fontSize: 22, color: "#222", textAlign: "center", background: "#fff", border: "4px solid #000", padding: "12px 18px", boxShadow: "4px 4px 0 #000", animation: shake ? "shake 0.5s ease" : "", maxWidth: 480, lineHeight: 1.4 }}>{q.question}</div>

      {/* Answer Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", maxWidth: 480 }}>
        {q.options.map((opt, i) => (
          <button 
            key={i} 
            className="btn-pixel vt323" 
            onClick={() => pick(opt)} 
            style={{ 
              padding: "12px 10px", 
              fontSize: 18, 
              background: selected === opt ? (opt === q.correct ? "#32CD32" : "#e03333") : (selected ? "#f5f5f5" : "#fff"), 
              color: selected === opt ? "#fff" : "#222", 
              pointerEvents: selected ? "none" : "auto" 
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimebombGame;