import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

import { EventLog, Inventory } from '@/lib/mech/mechExport'
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
          2: [
            'damn 2nd'
          ],
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
        () => {
          console.log('bones')
          Inventory.addItem('stone', 1)
        }
      ],
      data
    )
  }
}
