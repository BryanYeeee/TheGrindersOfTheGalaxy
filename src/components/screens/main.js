// Panels
import InventoryPanel from '@/components/panels/inventoryPanel'
import EquipmentPanel from '@/components/panels/equipmentPanel'

// Mechs
import { Inventory } from '@/lib/mech/inventory'
import { Equipment } from '@/lib/mech/equipment'

const Main = () => {
  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[3fr_1fr] gap-12 py-8'>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <div className='border-1 bg-foreground2 glow-border clip-b'>
          {/* <EquipmentPanel />
          <div className='flex gap-4'>
            <div
              className='border-1 w-20 m-8'
              onClick={() =>
                Equipment.addEquipment('pickaxe', { name: 'aaa', speed: 1 })
              }
            >
              add speed 1pick
            </div>
            <div
              className='border-1 w-20 m-8'
              onClick={() =>
                Equipment.addEquipment('pickaxe', { name: 'bbb', speed: 2 })
              }
            >
              add speed 2pick
            </div>
            <div
              className='border-1 w-20 m-8'
              onClick={() =>
                Equipment.addEquipment('sword', { name: 'ccc', dmg: 20 })
              }
            >
              add sword
            </div>
          </div> */}
        </div>
        <div className='border-1 bg-foreground2 glow-border clip-t'></div>
      </div>
      
      <div className='border-1 glow-border clip-l'>
        <InventoryPanel />
        <div className='flex flex-col gap-4'>
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
