import React, { useState } from "react";
import { GAME_DATA, GAMES, GAME_LABELS } from "../../data/GameData";
import TimebombGame from "./types/TimebombGame";
import MixMatchGame from "./types/MixMatchGame";
import TermTranslationGame from "./types/TermTranslationGame";
import ChainedTogetherGame from "./types/ChainedTogetherGame";
import GuessImposterGame from "./types/GuessImposterGame";

const GameModal = ({ partKey, gameIndex, onClose, onComplete }) => {
  const part     = GAME_DATA[partKey];
  const gameType = GAMES[gameIndex];
  const [result, setResult] = useState(null);

  const handleWin  = () => { setResult("win");  onComplete?.(true); };
  const handleLose = () => { setResult("lose"); onComplete?.(false); };

  const renderGame = () => {
    switch(gameType){
      case "timebomb":           return <TimebombGame data={part.timebomb} onWin={handleWin} onLose={handleLose}/>;
      case "mix_and_match":      return <MixMatchGame data={part.mix_and_match} onWin={handleWin} onLose={handleLose}/>;
      case "term_translation":   return <TermTranslationGame term={part.term_translation} onWin={handleWin}/>;
      case "chained_together":   return <ChainedTogetherGame data={part.chained_together} onWin={handleWin}/>;
      case "guess_the_imposter": return <GuessImposterGame data={part.guess_the_imposter} onWin={handleWin}/>;
      default: return null;
    }
  };

  return (
    <div style={{
      position:"fixed",inset:0,
      background:"rgba(160,200,240,0.88)",
      display:"flex",alignItems:"center",justifyContent:"center",
      zIndex:500,padding:12
    }}>
      <div style={{
        background:"#fff",
        border:`4px solid ${part.color}`,
        boxShadow:"8px 8px 0 #000",
        width:"100%",maxWidth:600,
        maxHeight:"90vh",
        display:"flex",flexDirection:"column",
        overflow:"hidden",
        animation:"pop-in 0.3s ease"
      }}>
        {/* Header */}
        <div style={{
          background:`linear-gradient(90deg,${part.color}33,#fff)`,
          borderBottom:`4px solid ${part.color}`,
          padding:"10px 14px",
          display:"flex",alignItems:"center",justifyContent:"space-between"
        }}>
          <div>
            <div className="press-start" style={{fontSize:15,color:part.color}}>{GAME_LABELS[gameIndex]}</div>
            <div className="vt323" style={{fontSize:20,color:"#666",marginTop:3}}>{part.label}</div>
          </div>
          <button className="btn-pixel" onClick={onClose} style={{padding:"6px 12px",background:"#e03333",color:"#fff",fontSize:12}}>✕</button>
        </div>
        {/* Body */}
        <div style={{flex:1,overflowY:"auto"}}>
          {result ? (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,padding:40,minHeight:220}}>
              <div style={{fontSize:58}}>{result==="win"?"🏆":"💀"}</div>
              <div className="press-start" style={{fontSize:13,color:result==="win"?"#32CD32":"#e03333",animation:"victory-bounce 0.6s ease-in-out infinite"}}>
                {result==="win"?"YOU WIN!":"GAME OVER"}
              </div>
              <button className="btn-pixel" onClick={onClose} style={{padding:"12px 24px",background:result==="win"?"#32CD32":"#FF69B4",color:"#fff",fontSize:10}}>
                CONTINUE →
              </button>
            </div>
          ) : renderGame()}
        </div>
      </div>
    </div>
  );
};

export default GameModal;