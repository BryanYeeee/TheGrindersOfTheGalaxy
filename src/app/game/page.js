'use client'
import Main from '@/components/screens/main'
import { GameProvider } from '@/context/gameContext'

import EventLogPanel from '@/components/panels/eventLogPanel'
import { EventLog } from '@/lib/mech/eventLog'
import StatusPanel from '@/components/panels/statusPanel'
import { Status } from '@/lib/mech/status'

const Game = () => {
  const currentScreen = <Main />
  return (
    <GameProvider>
      <div className='min-h-150 h-screen w-full grid grid-cols-[1fr_4fr_25%] grid-rows-1 gap-12 p-12'>
        <div className='border-1'>
          <StatusPanel />
          <div
            className='border-1 w-full'
            onClick={() => Status.addStatus('hunger', 10)}
          >
            add hunger
          </div>
          <div
            className='border-1 w-full'
            onClick={() => Status.addStatus('oxygen', 10)}
          >
            add oxygen
          </div>
          <div
            className='border-1 w-full'
            onClick={() => Status.addStatus('heat', 10)}
          >
            add heat
          </div>
        </div>

        <div className=''>{currentScreen}</div>

        <div className='border-1'>
          <EventLogPanel />
          <div
            className='border-1 w-full'
            onClick={() => EventLog.addEvent('abc')}
          >
            add abc
          </div>
        </div>
      </div>
    </GameProvider>
  )
}

export default Game
