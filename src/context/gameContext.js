// GameContext.jsx
import React, { createContext, useContext, useState } from "react";
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [eventLog, setEventLog] = useState([]);
  const [inventory, setInventory] = useState({});
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });

  EventLog.setLogFunction((msg) => setEventLog((prev) => [...prev, msg]))
  Inventory.setInvFn(inventory, (type, amount) => setInventory(prev => ({ ...prev, [type]: amount })))

  return (
    <GameContext.Provider
      value={{
        eventLog,
        // setGameLog,
        inventory,
        // setInventory,
        // playerStats,
        // setPlayerStats
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
