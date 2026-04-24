import React, { useState, useEffect } from "react";

const ChainedTogetherGame = ({ data, onWin }) => {
  const [input, setInput] = useState("");
  const [chains, setChains] = useState([]);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [won, setWon] = useState(false);

  const answers = data.answers.map((a) => a.toLowerCase().trim());

  useEffect(() => {
    if (chains.length > 0 && chains.length >= answers.length) {
      setWon(true);
    }
  }, [chains, answers.length]);

  const submit = () => {
    if (won) return;
    const val = input.trim();
    if (!val) return;
    
    const vl = val.toLowerCase();
    
    const idx = answers.findIndex(
      (a, i) => !chains.some((c) => c.key === i) && a === vl
    );

    if (idx !== -1) {
      setChains((p) => [...p, { text: data.answers[idx], key: idx }]);
      setError("");
    } else {
      setError(`"${val}" is incorrect or already used!`);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setInput("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 16, alignItems: "center" }}>
      <div className="vt323" style={{ fontSize: 22, color: "#222", textAlign: "center", maxWidth: 460 }}>
        {data.question}
      </div>

      <div className="press-start" style={{ fontSize: 7, color: "#aaa" }}>
        {chains.length}/{data.answers.length} chained
      </div>

      {/* The Chain Display */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center",
        minHeight: 64, width: "100%", maxWidth: 500,
        padding: 12, background: "#fffbe6", border: "4px solid #FFD700", boxShadow: "4px 4px 0 #000"
      }}>
        {chains.length === 0 && (
          <div className="vt323" style={{ fontSize: 20, color: "#bbb", alignSelf: "center" }}>
            Chain is empty... ⛓
          </div>
        )}
        {chains.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, animation: "chain-in 0.4s ease" }}>
            {i > 0 && <div style={{ fontSize: 18, color: "#FFD700" }}>⛓</div>}
            <div className="vt323" style={{ padding: "6px 12px", fontSize: 18, background: "#32CD32", color: "#fff", border: "3px solid #000" }}>
              {c.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      {!won ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: "100%" }}>
          <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 480, animation: shake ? "shake 0.5s ease" : "" }}>
            <input
              className="vt323"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Type exact answer..."
              style={{
                flex: 1, padding: "10px 14px", fontSize: 20,
                background: "#fff", color: "#333",
                border: `4px solid ${error ? "#e03333" : "#FFD700"}`, outline: "none"
              }}
            />
            <button className="btn-pixel" onClick={submit} style={{ padding: "10px 18px", background: "#FFD700", color: "#000", fontSize: 12 }}>
              ADD ⛓
            </button>
          </div>
          {error && <div className="vt323" style={{ fontSize: 18, color: "#e03333" }}>{error}</div>}
        </div>
      ) : (
        /* Manual Results / Continue UI */
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, animation: "pop-in 0.5s ease" }}>
          <div className="press-start" style={{ fontSize: 10, color: "#32CD32", animation: "victory-bounce 0.6s ease-in-out infinite" }}>
            ⛓ CHAIN COMPLETE!
          </div>
          <button
            className="btn-pixel"
            onClick={() => onWin?.()}
            style={{ padding: "12px 24px", background: "#32CD32", color: "#fff", fontSize: 10 }}
          >
            CONTINUE →
          </button>
        </div>
      )}
    </div>
  );
};

export default ChainedTogetherGame;