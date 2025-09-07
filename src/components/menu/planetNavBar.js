'use client'
import { useGameContext } from '@/context/gameContext'
import { Planet } from '@/lib/mech/mechExport'
import { AnimatePresence, easeIn, motion } from 'motion/react'

const PlanetNavBar = () => {
  const { curPlanets, curPlanetKey } = useGameContext()

  const animateVariantConfig = {
    button: {
      //   hover: {
      //     width: '6rem',
      //     marginInline: '1rem'
      //   }
    },
    spinBorder: {
      initial: { rotate: 0 },
      active: { width: '100%' },
      hover: {
        rotate: 360,
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 3
        }
      }
    }
  }
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4 p-2 '>
      <AnimatePresence>
        {Array.from(curPlanets).map((planetName, i) => (
          <motion.button
            key={`${planetName}-${i}`}
            onClick={() => Planet.setCurPlanet(planetName)}
            initial='initial'
            animate={curPlanetKey === planetName ? 'active' : 'initial'}
            whileHover='hover'
            variants={animateVariantConfig.button}
            className={`relative overflow-hidden w-32 p-[2px] bg-foreground1 grid`}
          >
            <motion.div className='z-1 bg-foreground1'>{planetName}</motion.div>

            <motion.div
              variants={animateVariantConfig.spinBorder}
              className='absolute h-[600%] bg-accent w-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
            />
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default PlanetNavBar
