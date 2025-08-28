import { useState } from 'react'

import InventoryPanel from '@/components/panels/inventoryPanel'
import EquipmentPanel from '@/components/panels/equipmentPanel'
import CommandPanel from '@/components/panels/commandPanel'

// Mechs
import Panel from '@/components/panels/panel'
import Switcher from '@/components/switcher'
import PlanetPanel from '@/components/panels/planetPanel'

const Main = () => {
  const [sidePanelIndex, setSidePanelIndex] = useState(0)
  const [bottomPanelIndex, setBottomPanel] = useState(0)

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[3fr_1fr] gap-12 py-8'>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <Panel clip={'b'} bgCol={2}>
          <PlanetPanel />
        </Panel>
        <Panel clip={'t'} bgCol={2}>
          <div className='size-full overflow-x-hidden'>
          <Switcher activeIndex={bottomPanelIndex} axis='x'>
            {[<CommandPanel />, <EquipmentPanel />]}
          </Switcher>
          </div>
          <button
            className='border-1 w-10'
            onClick={() => setSidePanelIndex((sidePanelIndex + 1) % 3)}
          >
            +1
          </button>
          <button
            className='border-1 w-10'
            onClick={() => setSidePanelIndex(Math.abs(sidePanelIndex - 1) % 3)}
          >
            -1
          </button>
          <button
            className='border-1 w-10'
            onClick={() => setBottomPanel((bottomPanelIndex + 1) % 2)}
          >
            +1
          </button>
          <button
            className='border-1 w-10'
            onClick={() => setBottomPanel(Math.abs(bottomPanelIndex - 1) % 2)}
          >
            -1
          </button>
        </Panel>
      </div>

      <Switcher activeIndex={sidePanelIndex} axis='y'>
        {[
          <Panel clip='l' bgCol={1}>
            <InventoryPanel />
          </Panel>,
          <Panel clip='l' bgCol={1}>
            <EquipmentPanel />
          </Panel>,
          <Panel clip='l' bgCol={1}>
            YOOOOOOOOOO
          </Panel>
        ]}
      </Switcher>
    </div>
  )
}

export default Main
