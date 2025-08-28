import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
// Panels
import InventoryPanel from '@/components/panels/inventoryPanel'
import EquipmentPanel from '@/components/panels/equipmentPanel'
import CommandPanel from '@/components/panels/commandPanel'

// Mechs
import { Inventory } from '@/lib/mech/inventory'
import { Equipment } from '@/lib/mech/equipment'
import { Planet } from '@/lib/mech/planet'
import Panel from '@/components/panels/panel'
import Switcher from '@/components/switcher'
import PlanetPanel from '../panels/planetPanel'

const Main = () => {
  // const [sidePanel, setSidePanel] = useState('inventory')
  const [sidePanelIndex, setSidePanelIndex] = useState(0)

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[3fr_1fr] gap-12 py-8'>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <Panel clip={'b'} bgCol={2}>
          <PlanetPanel />
        </Panel>
        <Panel clip={'t'} bgCol={2}>
          <CommandPanel />
          
            <button className='border-1 w-10'onClick={() => setSidePanelIndex((sidePanelIndex+1)%3)}>
              +1
            </button>
            <button className='border-1 w-10'onClick={() => setSidePanelIndex(Math.abs(sidePanelIndex-1) %3)}>
              -1
            </button>
        </Panel>
      </div>

      <Switcher activeIndex={sidePanelIndex}>
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

      {/* <div className='relative h-full'>
        <AnimatePresence>
          {sidePanel === 'inventory' ? (
            <motion.div
              key={sidePanel}
              className='size-full absolute'
              initial={{ y: '-100%', top: '-3rem', opacity: 0,
                transition: { duration: 1 } }}
              animate={{
                y: 0,
                top: 0,
                opacity: 1,
                transition: { duration: 1 }
              }}
              exit={{
                y: '-100%',
                top: '-3rem',
                opacity: 0,
                transition: { duration: 1 }
              }}
            >
              <Panel clip={'l'} bgCol={1}>
                <InventoryPanel />
                <div
                  className='border-1'
                  onClick={() =>
                    setSidePanel(
                      sidePanel === 'inventory' ? 'equipment' : 'inventory'
                    )
                  }
                >
                  change panel
                </div>
              </Panel>
            </motion.div>
          ) : (
            <motion.div
              key={sidePanel}
              className='size-full absolute '
              initial={{ y: '100%', top: '3rem', opacity: 0 }}
              animate={{
                y: 0,
                top: 0,
                opacity: 1,
                transition: { duration: 1 }
              }}
              exit={{
                y: '100%',
                top: '3rem',
                opacity: 0,
                transition: { duration: 1 }
              }}
            >
              <Panel clip={'l'} bgCol={1}>
                <EquipmentPanel />
                <div
                  className='border-1'
                  onClick={() =>
                    setSidePanel(
                      sidePanel === 'inventory' ? 'equipment' : 'inventory'
                    )
                  }
                >
                  change panel
                </div>
              </Panel>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
  )
}

export default Main
