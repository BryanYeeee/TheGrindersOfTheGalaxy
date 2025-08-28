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

const Test = () => {
  // const [sidePanel, setSidePanel] = useState('inventory')
  const [sidePanelIndex, setSidePanelIndex] = useState(0)

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[1fr_1fr] gap-12 py-8'>

      <Switcher activeIndex={sidePanelIndex}>
        {[
          <Panel clip='r' bgCol={1}>
            A
          </Panel>,
          <Panel clip='l' bgCol={1}>
            B
          </Panel>
        ]}
      </Switcher>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <Panel clip={'b'} bgCol={1}>
          ABCABCABC
        </Panel>
        <Panel clip={'t'} bgCol={2}>

          
            <button className='border-1 w-10'onClick={() => setSidePanelIndex(0)}>
              +1
            </button>
            <button className='border-1 w-10'onClick={() => setSidePanelIndex(1)}>
              -1
            </button>
        </Panel>
      </div>

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

export default Test
