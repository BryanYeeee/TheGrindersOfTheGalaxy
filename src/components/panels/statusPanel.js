import { useGameContext } from '@/context/gameContext'
import RadialBar from '../menu/radialBar'

const StatusPanel = () => {
  const { status } = useGameContext()

  return (
    <div className='h-full p-8 flex flex-col justify-around gap-4'>
      {['hunger', 'oxygen', 'heat'].map((stat, i) => (
        <div key={i} className='space-y-4'>
          <div>
            {stat}: {status[stat]}
          </div>
          <div className='text-accent'>
            <RadialBar percent={status[stat] / 100} color='currentColor' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatusPanel
