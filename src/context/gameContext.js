// GameContext.jsx
import React, { createContext, useContext, useState } from "react";
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";
import { Equipment } from "@/lib/mech/equipment";
import { Command } from "@/lib/mech/command";
import { Planet } from "@/lib/mech/planet";
import { Status } from '@/lib/mech/status'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [eventLog, setEventLog] = useState([])
  const [curPlanetKey, setCurPlanetKey] = useState("earth");
  const [cooldowns, setCooldowns] = useState({});
  const [unlocks, setUnlocks] = useState({}); 
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });

  EventLog.setLogFunction(setEventLog)

  const [inventory, setInventory] = useState({})
  Inventory.setInvFunction(inventory, setInventory)

  const [equipment, setEquipment] = useState({})
  Equipment.setEquipFunction(equipment, setEquipment)


  Command.setCooldownFunction(cooldowns, setCooldowns);
  Command.setUnlockFunction(unlocks, setUnlocks);
  Planet.setPlanetFunction(["earth", "venus", "sun", "moon", "asteroid belt", "black hole", "comet"], curPlanetKey, setCurPlanetKey);

  //   const [playerStats, setPlayerStats] = useState({ health: 100 });

  const [status, setStatus] = useState({
    hunger: 0,
    oxygen: 10,
    heat: 0
  })
  Status.setStatusFunction(status, setStatus)

  //   const [playerStats, setPlayerStats] = useState({ health: 100 });

  return (
    <GameContext.Provider
      value={{
        eventLog,
        inventory,
        equipment,
        curPlanetKey,
        cooldowns,
        unlocks,
        // setInventory,
        // playerStats,
        // setPlayerStats
        status
        // playerStats
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
