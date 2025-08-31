import { venusConfig } from '@/lib/data/planet/planetConfig/venusConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

import { EventLog, Inventory } from '@/lib/mech/mechExport'
const { doActions } = commandUtils(venusConfig)

export const venusCommands = {
  takeStep: function (data) {
    return doActions(
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
  extractCarbon: function (data) {
    return doActions(
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
