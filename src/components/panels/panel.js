import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
const Panel = ({ children, clip, bgCol }) => {
  return (
    <div
      className={`h-full border-1 glow-border clip-${clip} bg-foreground${bgCol}`}
    >
      {children}
    </div>
  )
}
export default Panel

const slideVariants = {
  enter: direction => ({
    y: direction>0?'100%': '-100%',
    opacity: 0
  }),
  center: {
    y: 0,
    opacity: 1
  },
  exit: direction => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0
  })
}
export function PanelSwitcher ({ children, activeIndex }) {
  const prevIndex = useRef(activeIndex)

  useEffect(() => {
    prevIndex.current = activeIndex
  }, [activeIndex])

  return (
    <div className='relative h-full'>
      <AnimatePresence  mode="popLayout"custom={activeIndex-prevIndex.current}>
        <motion.div
          key={activeIndex}
            custom={activeIndex-prevIndex.current}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='absolute size-full'
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
