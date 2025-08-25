// GameContext.jsx
import React, { createContext, useContext, useState } from "react";
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";
import { Equipment } from "@/lib/mech/equipment";
import { Cooldown } from "@/lib/mech/cooldown";
import { Planet } from "@/lib/mech/planet";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [eventLog, setEventLog] = useState([])
  const [inventory, setInventory] = useState({})
  const [equipment, setEquipment] = useState({})
  const [curPlanetKey, setCurPlanetKey] = useState("earth");
  const [cooldowns, setCooldowns] = useState({});
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });

  EventLog.setLogFunction(setEventLog)
  Inventory.setInvFunction(inventory, setInventory)
  Equipment.setEquipFunction(equipment, setEquipment)
  Cooldown.setCooldownFunction(cooldowns, setCooldowns);
  Planet.setPlanetFunction(["earth", "venus", "sun", "moon", "asteroid belt", "black hole", "comet"], curPlanetKey, setCurPlanetKey);

  return (
    <GameContext.Provider
      value={{
        eventLog,
        // setGameLog,
        inventory,
        equipment,
        curPlanetKey,
        cooldowns,
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
