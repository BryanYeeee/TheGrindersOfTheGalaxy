import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

import { Equipment, EventLog, Inventory, Command } from '@/lib/mech/mechExport'
const { doActions } = commandUtils(earthConfig)

export const earthCommands = {
  takeStep: async function (data) {
    return await doActions(
      [
        {
          0: [
            'first',
            false,
            false,
            false,
            false,
            () => {
              EventLog.addEvent('yay')
            }
          ],
          2: ['damn 2nd'],
          default: ['walking']
        },
        false,
        () => {
          EventLog.addEvent('custom eventlog here')
          Inventory.addItem('steps', 1)
        }
      ],
      data
    )
  },
  pickupStone: async function (data) {
    return await doActions(
      [
        'stones',
        { 0: [() => Command.unlockCommand('earth', 'earth.craftPickaxe')] },
        () => {
          console.log('bones')
          Inventory.addItem('stone', 1)
        }
      ],
      data
    )
  },
  craftPickaxe: async function (data) {
    return await doActions(
      [
        'u got a pickaxe',
        () => {
          Equipment.addEquipment('pickaxe', { name: 'aaa', speed: 1 })
        }
      ],
      data
    )
  }
}
