import { useGameContext } from '@/context/gameContext'
import { memo } from 'react'

const InventoryPanel = () => {
  const { inventory } = useGameContext()

  return (
    <>
      <div
        className='px-2 py-1 border-1 border-[#ffac2230] font-bold'
      >
        {`Items`}
      </div>
      <div className='h-full p-8 overflow-y-scroll'>
        {Object.entries(inventory).map(([name, count]) => (
          <InventoryItem key={name} name={name} count={count} />
        ))}
      </div>
    </>
  )
}
const InventoryItem = memo(({ name, count }) => {
  // console.log(`Rendering ${name}`)
  return (
    <div className='flex justify-between px-2 mb-1 border-1 border-[#ffac2230]'>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  )
})

export default InventoryPanel
