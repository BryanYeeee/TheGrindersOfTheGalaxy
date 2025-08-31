import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

import { EventLog, Inventory } from '@/lib/mech/mechExport'
const { doActions } = commandUtils(earthConfig)

export const earthCommands = {
  takeStep: function (data) {
    return doActions(
      [
        'hello',
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
          ]
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
  pickupStone: function (data) {
    return doActions(
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
