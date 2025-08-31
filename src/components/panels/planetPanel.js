'use client'
import { useGameContext } from '@/context/gameContext'
import { planetConfigs } from '@/lib/data/planet/planetExport'

import { PlanetRender } from '@/lib/scene'
import PlanetNavBar from '@/components/menu/planetNavBar'

const PlanetPanel = () => {
  const { curPlanetKey } = useGameContext()
  const config = planetConfigs[curPlanetKey]

  return (
    <>
      <div className='h-full w-full p-2'>
        <PlanetNavBar />
        <div className='flex h-2/3 w-full'>
          <div className='h-auto'>
            <div>{config.name}</div>
            {Object.entries(config.stats).map(([stat, value]) => (
              <div key={stat}>
                {stat}: {value}
              </div>
            ))}
          </div>
          <div className='w-2/3 h-full border'>
            <PlanetRender key={config.src} fileName={config.src} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlanetPanel
