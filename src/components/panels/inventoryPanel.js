import { useGameContext } from '@/context/gameContext'
import { memo } from 'react'

const InventoryPanel = () => {
  const { inventory } = useGameContext()

  return (
    <div className='h-full bg-foreground1'>
      {Object.entries(inventory).map(([name, count]) => (
        <InventoryItem key={name} name={name} count={count} />
      ))}
    </div>
  )
}
const InventoryItem = memo(({ name, count }) => {
  console.log(`Rendering ${name}`)
  return (
    <div>
      {name}: {count}
    </div>
  )
})

export default InventoryPanel
