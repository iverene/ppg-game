import { useState, useEffect } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { GAME_DATA, PARTS, GAME_LABELS } from "./data/GameData";

// Components (Imported after separation)
import CityBg from "./components/ui/CityBg";
import ChemicalXMeter from "./components/ui/ChemicalXMeter";
import PPGVictory from "./components/ui/PPGVictory";
import MonitorCard from "./components/games/MonitorCard";
import StageScreen from "./components/screens/StageScreen";

function CommandCenter() {
  const { stagesStarted } = useApp();
  const [currentStage, setCurrentStage] = useState(null);
  const [showVictory, setShowVictory] = useState(false);

  useEffect(() => {
    if (stagesStarted.size >= PARTS.length && !showVictory) {
      setShowVictory(true);
    }
  }, [stagesStarted, showVictory]);

  return (
    <div className="min-h-screen relative">
      <CityBg />

      <div className="relative z-10 flex flex-col items-center min-h-screen py-5 px-4 pb-24">
        {/* Title Section */}
        <div className="text-center mb-4 mt-2">
          <div className="inline-flex items-center gap-4 bg-white border-4 border-[#FF69B4] p-3 shadow-[6px_6px_0_#000] mt-5 mb-3">
            <div className="text-[28px]">🌸</div>
            <div>
              <div className="press-start text-md text-[#FF69B4] tracking-[2px]">CHAPTER 11</div>
              <div className="vt323 text-[25px] text-[#666] mt-1">Project Procurement Management</div>
            </div>
            <div className="text-[28px]">💙</div>
          </div>
        </div>

        <div className="press-start text-md text-[#bbb] mt-7 mb-1 animate-[blink_2s_step-end_infinite]">
          ▶ SELECT A STAGE TO BEGIN ◀
        </div>

        {/* Stage monitors */}
        <div className="flex flex-wrap gap-10 justify-center max-w-full items-center h-100">
          {PARTS.map((pk) => (
            <MonitorCard 
              key={pk} 
              partKey={pk} 
              hasStarted={stagesStarted.has(pk)} 
              onClick={() => setCurrentStage(pk)} 
            />
          ))}
        </div>

      </div>

      {currentStage && (
        <StageScreen partKey={currentStage} onBack={() => setCurrentStage(null)} />
      )}
      
      <ChemicalXMeter stagesStarted={stagesStarted} />
      {showVictory && <PPGVictory onDone={() => setShowVictory(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <CommandCenter />
    </AppProvider>
  );
}