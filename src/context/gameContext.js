import { createContext, useContext, useState } from "react";
import * as Mech from '@/lib/mech/mechExport';

const GameContext = createContext()

export const GameProvider = ({ children }) => {
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });
  const [eventLog, setEventLog] = useState([])
  Mech.EventLog.setLogFunction(setEventLog)

  const [curPlanetKey, setCurPlanetKey] = useState("earth");
  Mech.Planet.setPlanetFunction(["earth", "venus", "sun", "moon", "asteroid belt", "black hole", "comet"], curPlanetKey, setCurPlanetKey);


  const [cooldowns, setCooldowns] = useState({});
  Mech.Cooldown.setCooldownFunction(cooldowns, setCooldowns);

  const [inventory, setInventory] = useState({})
  Mech.Inventory.setInvFunction(inventory, setInventory)

  const [equipment, setEquipment] = useState({})
  Mech.Equipment.setEquipFunction(equipment, setEquipment)

  const [status, setStatus] = useState({
    hunger: 0,
    oxygen: 10,
    heat: 0
  })
  Mech.Status.setStatusFunction(status, setStatus)

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
