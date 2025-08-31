'use client'
import { useGameContext } from '@/context/gameContext'
import { planetCommands, planetConfigs } from '@/lib/data/planet/planetExport'
import { AnimatePresence } from 'motion/react'
import { Command } from '@/lib/mech/mechExport'
import CommandButton from '@/components/menu/commandButton'

const CommandPanel = ({ type = '' }) => {
  const { curPlanetKey, cooldowns } = useGameContext()
  const config = planetConfigs[curPlanetKey]
  const commands = planetCommands[curPlanetKey]

  return (
    <div className='h-full p-8'>
      <div className='space-y-3 grid'>
        <AnimatePresence>
          {Object.entries(config.commands)
            .filter(([cmd]) => Command.isUnlocked(curPlanetKey, cmd))
            .filter(([cmd, cmdData]) => (cmdData.type ?? '') === type)

            .map(([cmd, cmdData]) => (
              <CommandButton
                key={cmd}
                cmd={cmd}
                cmdData={cmdData}
                onCooldown={Command.isOnCooldown(cmd)}
                runCommand={() => commands[cmdData.click]({ cmd, cmdData })}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CommandPanel
