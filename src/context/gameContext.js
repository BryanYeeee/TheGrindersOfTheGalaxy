import React, { createContext, useContext, useState } from 'react'
import { EventLog } from '@/lib/mech/eventLog'
import { Inventory } from '@/lib/mech/inventory'
import { Equipment } from '@/lib/mech/equipment'
import { Status } from '@/lib/mech/status'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [eventLog, setEventLog] = useState([])
  EventLog.setLogFunction(setEventLog)

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

  //   const [playerStats, setPlayerStats] = useState({ health: 100 });

  return (
    <GameContext.Provider
      value={{
        eventLog,
        inventory,
        equipment,
        status
        // playerStats
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
