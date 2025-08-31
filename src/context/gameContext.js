// GameContext.jsx
import React, { createContext, useContext, useState } from "react";
import * as Mech from '@/lib/mech/mechExport';

const GameContext = createContext()

export const GameProvider = ({ children }) => {
//   const [playerStats, setPlayerStats] = useState({ steps: 0, health: 100 });
  const [eventLog, setEventLog] = useState([])
  Mech.EventLog.setLogFunction(setEventLog)

  const [curPlanetKey, setCurPlanetKey] = useState("earth"); //this might be garbage, maybe some other way to store list of planets
  const [curPlanets, setCurPlanets] = useState([]);
  const [allPlanets, setAllPlanets] = useState(["earth", "venus", "mars"]) 
  Mech.Planet.setPlanetFunction(curPlanetKey, setCurPlanetKey);
  Mech.Planet.setAvailPlanets(curPlanets, setCurPlanets)
  Mech.Planet.setAllPlanets(allPlanets, setAllPlanets)


  const [cooldowns, setCooldowns] = useState({});
  Mech.Command.setCooldownFunction(cooldowns, setCooldowns);

  const [unlocks, setUnlocks] = useState({}); 
  Mech.Command.setUnlockFunction(unlocks, setUnlocks);

  const [inventory, setInventory] = useState({})
  Mech.Inventory.setInvFunction(inventory, setInventory)

  const [equipment, setEquipment] = useState({})
  Mech.Equipment.setEquipFunction(equipment, setEquipment)

  const [count, setCount] = useState({});
  Mech.Count.setCountFunction(count, setCount)

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
        curPlanets,
        cooldowns,
        unlocks,
        count,
        // setInventory,
        // playerStats,
        // setPlayerStats
        status
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
