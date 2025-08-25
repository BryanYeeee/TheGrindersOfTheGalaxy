import { useGameContext } from '@/context/gameContext'
import { useRef, useEffect } from 'react'

const EventLogPanel = () => {
  const { eventLog } = useGameContext()
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const panelBottom = panel.offsetTop + panel.offsetHeight

    Array.from(panel.children).forEach(child => {
      const childBottom = child.offsetTop + child.offsetHeight
      if (childBottom > panelBottom) child.remove()
    })
  }, [eventLog])

  return (
    <div
      ref={panelRef}
      className='h-full w-full bg-foreground1 px-10 py-8 space-y-4'
    >
      {eventLog.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
    </div>
  )
}

export default EventLogPanel
