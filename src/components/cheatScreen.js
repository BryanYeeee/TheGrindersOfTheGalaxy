import { useState } from 'react'

// Mechs
import * as Mech from '@/lib/mech/mechExport.js';

const CheatScreen = () => {
  const [toggle, setToggle] = useState(true)
  const cheats = [
    [
      ['unlock planet', () => Mech.Planet.unlockNextPlanet()],
      ['send to VENus', () => Mech.Planet.setCurPlanet('venus')]],
    [
      ['unlock step', () => Mech.Command.unlockCommand('walk')],
      ['unlock stone', () => Mech.Command.unlockCommand('stone')]
    ],
    [['random log', () => Mech.EventLog.addEvent(Math.floor(Math.random() * 101))]],
    [
      [
        '+speed 1 pick',
        () => Mech.Equipment.addEquipment('pickaxe', { name: 'aaa', speed: 1 })
      ],
      [
        '+speed 2 pick',
        () => Mech.Equipment.addEquipment('pickaxe', { name: 'bbb', speed: 2 })
      ],
      [
        '+dmg 20 sword',
        () => Mech.Equipment.addEquipment('sword', { name: 'ccc', dmg: 20 })
      ]
    ],
    [
      ['+1 step', () => Mech.Inventory.addItem('steps', 1)],
      ['+1 random', () => Mech.Inventory.addItem(Math.random().toFixed(2), 1)]
    ],
    [
      ['add hunger', () => Mech.Status.addStatus('hunger', 10)],
      ['add heat', () => Mech.Status.addStatus('heat', 10)],
      ['add oxygen', () => Mech.Status.addStatus('oxygen', 10)]
    ]
  ]
  return (
    <DraggableDiv initialX={10} initialY={-600}>
      <div 
        className='w-60 z-10 rounded border-1 m-2'
        >
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
          <div className='opacity-90 w-full bg-black border-amber-300 border-1 space-y-4 p-2'>
            {cheats.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className='space-y-2 border-b border-gray-500 pb-2'
              >
                {section.map(([label, action], index) => (
                  <div
                    key={index}
                    className='border-1 cursor-pointer px-2 py-1 hover:bg-gray-700'
                    onClick={action}
                  >
                    {label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </DraggableDiv>
  )
}

export default CheatScreen

const DraggableDiv = ({ children, initialX, initialY }) => {
  const [pos, setPos] = useState({ x: initialX, y: initialY })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseDown = e => {
    setDragging(true)
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y
    })
  }

  const onMouseMove = e => {
    if (dragging) {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y })
    }
  }

  const onMouseUp = () => setDragging(false)

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{ width: '0', height: '0', position: 'relative' }}
      className='absolute top-0'
    >
      <div
        onMouseDown={onMouseDown}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          cursor: 'grab'
        }}
      >
        {children}
      </div>
    </div>
  )
}
