'use client'
import { useGameContext } from '@/context/gameContext'
import { planets } from '@/lib/data/planet/planetExport'

import { PlanetRender } from '@/lib/scene'

const PlanetPanel = () => {
    const { curPlanetKey } = useGameContext()
    const planetInfo = planets[curPlanetKey]
    const { config } = planetInfo


    return (
        <>
            <div className='flex h-full w-full p-2'>
                <div className='mb-2'>
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
        </>
    )


}

export default PlanetPanel