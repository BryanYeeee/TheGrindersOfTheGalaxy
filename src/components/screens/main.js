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
import Panel from '../panels/panel'

const Main = () => {
  const [sidePanel, setSidePanel] = useState('inventory')

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[3fr_1fr] gap-12 py-8'>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <Panel clip={'b'} bgCol={2}>
          <CommandPanel />
        </Panel>
        <Panel clip={'t'} bgCol={2}></Panel>
      </div>
      <div className='relative h-full'>
        <AnimatePresence>
          {sidePanel === 'inventory' ? (
            <motion.div
              key={sidePanel}
              className='size-full absolute top-0'
              initial={{ y: '-100%', top: '-3rem', opacity: 0 }}
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
      </div>
    </div>
  )
}

export default Main
