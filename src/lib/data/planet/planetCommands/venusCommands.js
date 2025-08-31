import { venusConfig } from '@/lib/data/planet/planetConfig/venusConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

import { EventLog, Inventory } from '@/lib/mech/mechExport'
const { doActions } = commandUtils(venusConfig)

export const venusCommands = {
  takeStep: async function (data) {
    return await doActions(
      [
        'died',
        false,
        () => {
          EventLog.addEvent('aaaaa')
          Inventory.addItem('steps', 5)
        }
      ],
      data
    )
  },
  extractCarbon: async function (data) {
    return await doActions(
      [
        'carbonated',
        () => {
          Inventory.addItem('carbon', 1)
        }
      ],
      data
    )
  }
}
