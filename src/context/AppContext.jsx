import { createContext, useContext, useState, useCallback } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [completedGames, setCompletedGames] = useState(new Set());
  const [stagesStarted, setStagesStarted] = useState(new Set());

  const markDone = useCallback((key) => 
    setCompletedGames((p) => new Set([...p, key])), []);

  const markStageStarted = useCallback((pk) => 
    setStagesStarted((p) => new Set([...p, pk])), []);

  return (
    <AppContext.Provider value={{ 
      completedGames, 
      markDone, 
      stagesStarted, 
      markStageStarted 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);