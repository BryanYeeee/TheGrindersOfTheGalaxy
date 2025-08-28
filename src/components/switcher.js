import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const slideVariants = {
  enter: direction => ({
    y: direction > 0 ? '100%' : '-100%',
    top: direction > 0 ? '-3rem' : '3rem',
    opacity: 0
  }),
  center: {
    y: 0,
    top: 0,
    opacity: 1
  },
  exit: direction => ({
    y: direction > 0 ? '-100%' : '100%',
    top: direction > 0 ? '3rem' : '-3rem',
    opacity: 0
  })
}
export default function Switcher ({ children, activeIndex }) {
  const prevIndex = useRef(activeIndex)
  const isFirstMount = useRef(true)

  useEffect(() => {
    prevIndex.current = activeIndex
    isFirstMount.current = false
  }, [activeIndex])

  return (
    <div className='relative h-full'>
      <AnimatePresence
        mode='popLayout'
        custom={activeIndex - prevIndex.current}
      >
        <motion.div
          key={activeIndex}
          custom={activeIndex - prevIndex.current}
          variants={slideVariants}
          initial={isFirstMount.current ? false : 'enter'}
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
