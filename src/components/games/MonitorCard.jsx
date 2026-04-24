import React from "react";
import { GAME_DATA } from "../../data/GameData";

const MonitorCard = ({ partKey, onClick, hasStarted }) => {
  const part   = GAME_DATA[partKey];
  const emojis = { 
    solicitation_planning:"📋", 
    solicitation:"📢", 
    source_selection:"🔍", 
    contract_administration:"📁", 
    contract_close_out:"🏁" 
  };
  return (
    <button onClick={onClick} className="btn-pixel" style={{
      width:220,
      background:`linear-gradient(160deg,${part.color}18,#fff)`,
      border:`4px solid ${hasStarted?part.color:"#ccc"}`,
      padding:"18px 10px",
      display:"flex",flexDirection:"column",alignItems:"center",gap:8,
      boxShadow:hasStarted?`4px 4px 0 #000,0 0 14px ${part.color}55`:"4px 4px 0 #000",
      animation:"float 3s ease-in-out infinite",color:"inherit"
    }}>
      <div style={{
        width:"100%",
        background:hasStarted?`${part.color}22`:"#f7f7f7",
        border:`3px solid ${hasStarted?part.color:"#ddd"}`,
        padding:"12px 8px",
        display:"flex",flexDirection:"column",alignItems:"center",gap:8
      }}>
        <div style={{fontSize:30}}>{emojis[partKey]}</div>
        <div className="press-start" style={{fontSize:10,color:part.color,textAlign:"center",lineHeight:1.9}}>
          {part.label.toUpperCase()}
        </div>
        <div style={{width:"100%",height:2,background:`repeating-linear-gradient(90deg,${part.color},transparent 4px,${part.color} 8px)`}}/>
        <div className="vt323" style={{fontSize:20,color:"#999"}}>{hasStarted?"ACCOMPLISHED ★":"START"}</div>
      </div>
      <div style={{width:36,height:8,background:hasStarted?`${part.color}66`:"#ddd",border:"3px solid #000",borderTop:"none"}}/>
      <div style={{width:62,height:7,background:hasStarted?`${part.color}44`:"#eee",border:"3px solid #000"}}/>
    </button>
  );
};

export default MonitorCard;