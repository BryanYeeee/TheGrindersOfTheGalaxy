'use client'
import Main from '@/components/screens/main'
import { GameProvider } from '@/context/gameContext'

import EventLogPanel from '@/components/panels/eventLogPanel'
import { EventLog } from '@/lib/mech/eventLog'
import StatusPanel from '@/components/panels/statusPanel'
import { Status } from '@/lib/mech/status'
import CheatScreen from '@/components/cheatScreen'
import Panel from '@/components/panels/panel'

const Game = () => {
  const currentScreen = <Main />
  return (
    <GameProvider className='relative'>
      <div className='absolute w-screen h-screen bg -z-10' />
      <div className='min-h-150 h-screen w-full grid grid-cols-[1fr_5fr_20%] grid-rows-1 gap-12 p-12'>
        <Panel clip={'corner2'} bgCol={1}>
          <StatusPanel />
        </Panel>

        <div className=''>{currentScreen}</div>
        
        <Panel clip={'corner1'} bgCol={1}>
          <EventLogPanel />
          <div
            className='border-1'
            onClick={() =>
              EventLog.addEvent(Math.floor(Math.random() * (100 + 1)))
            }
          >
            add something to log
          </div>
        </Panel>
      </div>

      <CheatScreen />
    </GameProvider>
  )
}

export default Game
