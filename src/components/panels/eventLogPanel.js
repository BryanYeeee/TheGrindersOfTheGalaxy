import { useGameContext } from '@/context/gameContext'
import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

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
      className='h-full w-full px-10 py-8 space-y-4'
    >
      <AnimatePresence>
        {eventLog.map((msg, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            key={eventLog.length - i}
          >
            {msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default EventLogPanel
