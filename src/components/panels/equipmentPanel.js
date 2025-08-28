import { useGameContext } from '@/context/gameContext'
// import { memo } from 'react'

const EquipmentPanel = () => {
  const { equipment } = useGameContext()

  return (
    <div
      className='h-full bg-foreground1 p-8'
    >
      {/* {Object.entries(inventory).map(([name, count]) => (
        <InventoryItem key={name} name={name} count={count} />
      ))} */}
      {JSON.stringify(equipment)}
    </div>
  )
}
// const EquipmentItem = memo(({ name, count }) => {
//   console.log(`Rendering ${name}`)
//   return (
//     <div>
//       {name}: {count}
//     </div>
//   )
// })

export default EquipmentPanel
