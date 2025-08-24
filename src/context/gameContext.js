// GameContext.jsx
import React, { createContext, useContext, useState } from "react";
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";
import { Equipment } from "@/lib/mech/equipment";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [eventLog, setEventLog] = useState([])
  const [inventory, setInventory] = useState({})
  const [equipment, setEquipment] = useState({})
  const [curPlanetKey, setCurPlanetKey] = useState("earth");
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });

  EventLog.setLogFunction(setEventLog)
  Inventory.setInvFunction(inventory, setInventory)
  Equipment.setEquipFunction(equipment, setEquipment)

  return (
    <GameContext.Provider
      value={{
        eventLog,
        // setGameLog,
        inventory,
        equipment,
        curPlanetKey
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
