import { useGameContext } from '@/context/gameContext'
import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Switcher from '@/components/switcher'

const EquipmentPanel = () => {
  const { equipment } = useGameContext()
  const [equipType, setEquipType] = useState(false)
  const [equipPanelIndex, setEquipPanelIndex] = useState(0)

  console.log(equipment)

  return (
    <div className='size-full overflow-hidden'>


      <Switcher activeIndex={equipPanelIndex} axis='x'>
        {[
          <>
            <div
              className='px-2 py-1 border-1 border-[#ffac2230] font-bold'
            >
              {`Equipment`}
            </div>
            <div className='h-full p-8 overflow-y-scroll'>
              {Object.entries(equipment).map(([type]) => (
                <EquipmentType key={type} type={type}
                  onClick={() => {
                    console.log("a")
                    setEquipType(type)
                    setEquipPanelIndex(1)
                  }} />
              ))}
            </div>
          </>,
          <>
            {(equipType && <div
              className='px-2 py-1 border-1 border-[#ffac2230]'
              onClick={() => {
                setEquipPanelIndex(0)
                setEquipType(null)
              }}
            >
              {`<  ${equipType}`}
            </div>)}
            <div className='h-full p-8 overflow-y-scroll'>

              {equipType && (
                Array.from(equipment[equipType]).map((equip, i) => (
                  <EquipmentEntry key={i} equip={equip} />
                ))
              )}
            </div>
          </>

        ]}
      </Switcher>


    </div>
  )
}
const EquipmentType = memo(({ type, onClick }) => {
  console.log(`Rendering ${type}`)
  const animateVariantConfig = {
    button: {
      hover: {
        opacity: [0.7, 1, 0.7, 1, 1],
        transition: { duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }
      }
    },
    flashBorder: {
      initial: { opacity: 0 },
      active: { width: '100%' },
      hover: {
        opacity: [0, 1, 0, 1, 1],
        transition: { duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }
      }
    }
  }
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      animate="initial"
      whileHover="hover"

      variants={animateVariantConfig.button}
      className="relative overflow-hidden w-full p-[2px] mb-2 bg-foreground1"
    >
      <motion.div
        whileTap={{
          backgroundColor: "var(--accent)",
          color: "var(--background)"
        }}
        className='flex justify-between px-2 border-1 border-accent z-10'
        onClick={onClick}
      >
        {type}(s)

      </motion.div>
      {['tl', 'tr', 'bl', 'br'].map(corner => (
        <motion.div
          key={corner}
          variants={animateVariantConfig.flashBorder}
          className="absolute w-3 h-3 border-accent rounded-sm"
          style={{
            top: corner.includes('t') ? -1 : 'auto',
            bottom: corner.includes('b') ? -1 : 'auto',
            left: corner.includes('l') ? -1 : 'auto',
            right: corner.includes('r') ? -1 : 'auto',
            borderTopWidth: corner.includes('t') ? 2 : 0,
            borderBottomWidth: corner.includes('b') ? 2 : 0,
            borderLeftWidth: corner.includes('l') ? 2 : 0,
            borderRightWidth: corner.includes('r') ? 2 : 0
          }}
        />
      ))}
    </motion.button>

  )
})

const EquipmentEntry = memo(({ equip }) => {
  console.log(`Rendering ${equip.name}`)

  return (
    <div className='p-2 mb-1 border-1 border-[#ffac2230]'>
      <div className='mb-1 border-b-1 border-[#ffac2230]'>{equip.name}</div>
      {Object.entries(equip).map(([key, value]) => {
        if (key === 'name') return null
        return (
          <div key={key} className='text-sm text-gray-300'>
            {key}: {value.toString()}
          </div>
        )
      })}
    </div>
  )
})

export default EquipmentPanel
