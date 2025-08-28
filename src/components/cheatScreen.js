import { useState } from 'react'

// Mechs
import { Inventory } from '@/lib/mech/inventory'
import { Equipment } from '@/lib/mech/equipment'
import { Planet } from '@/lib/mech/planet'

const CheatScreen = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-60 z-10 rounded border-1 m-2'>
      <div className='w-full opacity-80 bg-[#00000035] flex justify-between py-1 px-8 font-white'>
        CHEAT MENU
        <div
          className='w-10 border-1 flex justify-center'
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'on' : 'off'}
        </div>
      </div>
      {toggle && (
        <div className='opacity-90 w-full h-60 bg-black border-amber-300 border-1 space-y-2 p-2'>
          <div className='flex'>
            <div
              className='border-1'
              onClick={() => Planet.setCurPlanet('venus')}
            >
              send to VENus
            </div>
          </div>
          <div
            className='border-1'
            onClick={() =>
              Equipment.addEquipment('pickaxe', { name: 'aaa', speed: 1 })
            }
          >
            add speed 1pick
          </div>
          <div
            className='border-1'
            onClick={() =>
              Equipment.addEquipment('pickaxe', { name: 'bbb', speed: 2 })
            }
          >
            add speed 2pick
          </div>
          <div
            className='border-1'
            onClick={() =>
              Equipment.addEquipment('sword', { name: 'ccc', dmg: 20 })
            }
          >
            add sword
          </div>
          <div className='flex flex-col'>
            <div
              className='border-1'
              onClick={() => Inventory.addItem('steps', 1)}
            >
              steps add 1
            </div>
            <div
              className='border-1'
              onClick={() => {
                Inventory.setItem('steps', 10)
                Inventory.setItem('stones', 10)
              }}
            >
              both set 10
            </div>
            <div
              className='border-1'
              onClick={() => Inventory.addItem(Math.random(), 1)}
            >
              stones add 1
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheatScreen
