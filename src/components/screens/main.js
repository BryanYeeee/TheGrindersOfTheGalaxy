// Panels
import InventoryPanel from '@/components/panels/inventoryPanel'
import EventLogPanel from '@/components/panels/eventLogPanel'
import EquipmentPanel from '@/components/panels/equipmentPanel'
import CommandPanel from '@/components/panels/commandPanel'

// Mechs
import { EventLog } from '@/lib/mech/eventLog'
import { Inventory } from '@/lib/mech/inventory'
import { Equipment } from '@/lib/mech/equipment'
import { Planet } from '@/lib/mech/planet'

const Main = () => {
  return (
    <div className='w-screen h-screen flex justify-around'>
      <div>
        <EventLogPanel />
        <div
          className='border-1 w-20 m-8'
          onClick={() => EventLog.addEvent('abc')}
        >
          add abc
        </div>
      </div>
      <div>
        <EquipmentPanel />
        <div className='flex gap-4'>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Equipment.addEquipment('pickaxe', { name: 'aaa', speed: 1 })}
          >
            add speed 1pick
          </div>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Equipment.addEquipment('pickaxe', { name: 'bbb', speed: 2 })}
          >
            add speed 2pick
          </div>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Equipment.addEquipment('sword', { name: 'ccc', dmg: 20 })}
          >
            add sword
          </div>
        </div>
      </div>
      <div>
        <CommandPanel/>
        <div className='flex gap-4'>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Planet.setCurPlanet("venus")}
          >
            send to VENus
          </div>
        </div>
      </div>
      <div>
        <InventoryPanel />
        <div className='flex gap-4'>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Inventory.addItem('w', 1)}
          >
            w add 1
          </div>
          <div
            className='border-1 w-20 m-8'
            onClick={() => {
              Inventory.setItem('w', 10)
              Inventory.setItem('q', 10)
            }}
          >
            w q set 0
          </div>
          <div
            className='border-1 w-20 m-8'
            onClick={() => Inventory.addItem('q', 1)}
          >
            q add 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
