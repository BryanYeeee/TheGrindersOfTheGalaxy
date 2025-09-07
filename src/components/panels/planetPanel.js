'use client'
import { useGameContext } from '@/context/gameContext'
import { planetConfigs } from '@/lib/data/planet/planetExport'

import { PlanetRender } from '@/lib/scene'
import PlanetNavBar from '@/components/menu/planetNavBar'

const PlanetPanel = () => {
  const { curPlanetKey } = useGameContext()
  const config = planetConfigs[curPlanetKey]


  const EveDiamond = () => {
    //<>
    //|- <> -
    return (
      <div className="size-full inline-grid grid-cols-3 grid-rows-2 gap-0">

        <div className="aspect-square flex justify-center items-center row-start-1 col-start-1">
          <div className="w-[calc(100%/1.414213562)] h-[calc(100%/1.414213562)] border-1 rotate-45" />
        </div>


        <div className="aspect-square flex justify-end row-start-2 col-start-1">
          <div className="w-1/2 h-1/2 border-l border-b border-white" />
        </div>

        <div className="aspect-square flex justify-center items-center row-start-2 col-start-2">
          <div className="w-[calc(100%/1.414213562)] h-[calc(100%/1.414213562)] border-1 rotate-45" />
        </div>

        <div className="aspect-square flex justify-start items-center row-start-2 col-start-3">
          <div className="w-full h-px bg-white" />
        </div>


      </div>
    )
  }

  return (

    <>
      <div className='h-full w-full p-2 bg-[#1B0022] flex flex-col'>
        <PlanetNavBar />

        <div className='flex h-full w-full justify-center'>
          <div className='aspect-square w-1/3'>
            <PlanetRender fileName={config.src} />
          </div>

          <div className="absolute left-3/5 top-1/4 flex">
            <div className="mt-15 w-12 h-8 flex-shrink-0">
              <EveDiamond />
            </div>
            <div className="border-1 p-2">
              <div>/{config.name}</div>
              <div >
                {Object.entries(config.stats).map(([stat, value]) => (
                  <div className="border-1 mb-1 p-1" key={stat}>
                    {stat}: {value}
                  </div>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )


}

export default PlanetPanel
