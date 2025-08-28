import { createContext, useContext, useState } from "react";
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";
import { Equipment } from "@/lib/mech/equipment";
import { Cooldown } from "@/lib/mech/cooldown";
import { Planet } from "@/lib/mech/planet";
import { Status } from '@/lib/mech/status'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });
  const [eventLog, setEventLog] = useState([])
  EventLog.setLogFunction(setEventLog)

  const [curPlanetKey, setCurPlanetKey] = useState("earth");
  Planet.setPlanetFunction(["earth", "venus", "sun", "moon", "asteroid belt", "black hole", "comet"], curPlanetKey, setCurPlanetKey);


  const [cooldowns, setCooldowns] = useState({});
  Cooldown.setCooldownFunction(cooldowns, setCooldowns);

  const [inventory, setInventory] = useState({})
  Inventory.setInvFunction(inventory, setInventory)

  const [equipment, setEquipment] = useState({})
  Equipment.setEquipFunction(equipment, setEquipment)

  const [status, setStatus] = useState({
    hunger: 0,
    oxygen: 10,
    heat: 0
  })
  Status.setStatusFunction(status, setStatus)

  return (
    <GameContext.Provider
      value={{
        eventLog,
        inventory,
        equipment,
        curPlanetKey,
        cooldowns,
        status
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
