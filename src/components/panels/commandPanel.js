'use client'
import { useGameContext } from '@/context/gameContext'
import { planets } from '@/lib/data/planet/planetExport'
import { AnimatePresence } from 'motion/react'
import CommandButton from '@/components/commandButton'

const CommandPanel = () => {
  const { curPlanetKey, cooldowns } = useGameContext()
  const planetInfo = planets[curPlanetKey]
  const { config, commands } = planetInfo
  
  return (
    <div className='h-full p-8'>
      {config.name}
      <div className='stats mb-2'>
        {Object.entries(config.stats).map(([stat, value]) => (
          <div key={stat}>
            {stat}: {value}
          </div>
        ))}
      </div>

      <div className='space-y-3 grid'>
        <AnimatePresence>
          {Object.entries(config.commands).map(([cmd, cmdData]) => (
            <CommandButton
              key={curPlanetKey + cmd}
              cmd={cmd}
              cmdData={cmdData}
              onCooldown={cooldowns[cmd]}
              runCommand={cmdData => commands[cmdData.click](cmdData)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CommandPanel
