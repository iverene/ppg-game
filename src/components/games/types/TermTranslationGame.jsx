import React, { useState } from "react";

const TermTranslationGame = ({ term, onWin }) => {
  const [acked, setAcked] = useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:22,padding:28}}>
      <div style={{width:"100%",maxWidth:460,background:"#fff0f8",border:"4px solid #000",padding:18,position:"relative",boxShadow:"6px 6px 0 #000"}}>
        <div style={{position:"absolute",bottom:-17,left:28,width:0,height:0,borderLeft:"12px solid transparent",borderRight:"12px solid transparent",borderTop:"17px solid #000"}}/>
        <div style={{position:"absolute",bottom:-11,left:31,width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"13px solid #fff0f8"}}/>
        <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
          <div style={{fontSize:34,flexShrink:0}}>🌸</div>
          <div>
            <div className="press-start" style={{fontSize:7,color:"#FF69B4",marginBottom:8}}>BLOSSOM SAYS:</div>
            <div className="vt323" style={{fontSize:20,color:"#444",lineHeight:1.5}}>Can you translate this term… in the language of your own heart? 📚</div>
          </div>
        </div>
      </div>
      <div style={{background:"#fff",border:"4px solid #000",padding:"22px 44px",boxShadow:"6px 6px 0 #000",textAlign:"center",animation:"pop-in 0.5s ease"}}>
        <div className="press-start" style={{fontSize:7,color:"#bbb",marginBottom:12,letterSpacing:3}}>TERM OF THE DAY</div>
        <div className="press-start" style={{fontSize:15,color:"#FF69B4",textShadow:"2px 2px 0 #000",lineHeight:1.9}}>{term}</div>
      </div>
      {!acked ? (
        <button className="btn-pixel" onClick={()=>{setAcked(true);onWin?.();}} style={{padding:"14px 28px",background:"#32CD32",color:"#fff",fontSize:10}}>✅ ANSWERED VERBALLY!</button>
      ) : (
        <div className="press-start" style={{fontSize:9,color:"#32CD32",animation:"victory-bounce 0.6s ease-in-out infinite"}}>🌸 GREAT JOB! +20 XP AWARDED</div>
      )}
    </div>
  );
};

export default TermTranslationGame;