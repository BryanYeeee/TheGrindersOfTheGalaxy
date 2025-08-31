import { earthCommands } from '@/lib/data/planet/planetCommands/earthCommands'
import { venusCommands } from '@/lib/data/planet/planetCommands/venusCommands'

import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { venusConfig } from '@/lib/data/planet/planetConfig/venusConfig'

export const planetCommands = {
  earth: earthCommands,
  venus: venusCommands,
}

export const planetConfigs = {
  earth: earthConfig,
  venus: venusConfig
}