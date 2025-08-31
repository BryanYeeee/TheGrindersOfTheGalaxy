'use client'
import { useGameContext } from '@/context/gameContext'
import { planets } from '@/lib/data/planet/planetExport'
import { AnimatePresence } from 'motion/react'
import { Command } from '@/lib/mech/mechExport'
import CommandButton from '@/components/menu/commandButton'

const CommandPanel = () => {
  const { curPlanetKey, cooldowns } = useGameContext()
  const planetInfo = planets[curPlanetKey]
  const { config, commands } = planetInfo

  return (
    <div className='h-full p-8'>
      <div className='space-y-3 grid'>
        <AnimatePresence mode='wait'>
          {Object.entries(config.commands)
            .filter(([cmd]) => Command.isUnlocked(curPlanetKey, cmd))
            .map(([cmd, cmdData]) => (
              <CommandButton
                key={cmd}
                cmd={cmd}
                cmdData={cmdData}
                onCooldown={Command.isOnCooldown(cmd)}
                runCommand={cmdData => commands[cmdData.click](cmdData)}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CommandPanel
