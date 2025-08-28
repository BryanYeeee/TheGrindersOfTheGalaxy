'use client'
import { useGameContext } from '@/context/gameContext'
import { planets } from '@/lib/data/planet/planetExport'
import { Cooldown } from '@/lib/mech/cooldown'
import { motion, AnimatePresence } from 'motion/react'

const CommandPanel = () => {
  const { curPlanetKey, cooldowns } = useGameContext()
  const planetInfo = planets[curPlanetKey]
  const { config, commands } = planetInfo

  console.log(curPlanetKey)

  const startCooldown = (e, cmd, cmdData) => {
    if (Cooldown.isOnCooldown(cmd)) return

    if (!commands[cmdData.click](cmdData)) return //if command no run, mean no money, mean no cooldown

    if (cmdData.cooldown) {
      Cooldown.startCooldown(cmd, cmdData.cooldown)
      let bar = e.currentTarget.querySelector('.cooldown-bar')
      if (bar) {
        bar.animate([{ width: '0%' }, { width: '100%' }], {
          duration: cmdData.cooldown || 2000,
          easing: 'linear'
        })
      }
    }
  }
  return (
    <div className='h-4/5 w-30 p-2'>
      {config.name}
      <div className='stats mb-2'>
        {Object.entries(config.stats).map(([stat, value]) => (
          <div key={stat}>
            {stat}: {value}
          </div>
        ))}
      </div>

      <div className='space-y-4'>
        <AnimatePresence>
          {Object.entries(config.commands).map(([cmd, cmdData]) => (
            <motion.button
              key={curPlanetKey+cmd}
              title={cmdData.hover}
              onClick={e => startCooldown(e, cmd, cmdData)}
              disabled={cooldowns[cmd] === true}
              initial='initial'
              whileHover='hover'
              animate={cooldowns[cmd] ? 'active' : ''}
              className='cmdBtn'
            >
              <div className='relative'>
                <motion.p
                  {...(cmdData.hover && {
                      initial: { rotateX: 0, transition: { duration: 0.3 } },
                      variants: {
                        hover: {
                          rotateX: 90,
                          transition: { duration: 0.3 }
                        }
                      },
                      className: 'origin-top'
                    })}
                >
                  {cmdData.text}
                </motion.p>

                {cmdData.hover && (
                  <motion.p
                    initial={{ rotateX: -90, transition: { duration: 0.3 } }}
                    variants={{
                      hover: {
                        rotateX: 0,
                        transition: { duration: 0.3 }
                      }
                    }}
                    className='cmdTxt inset-0 origin-bottom'
                  >
                    {cmdData.hover}
                  </motion.p>
                )}
              </div>

              <motion.span
                variants={{
                  hover: {
                    scale: cooldowns[cmd] ? 1 : 0,
                    transition: { duration: cooldowns[cmd] ? 0 : 0.4 }
                  }
                }}
                className='cooldown-bar'
              />
              <motion.span
                initial={{
                  scale: 1.5,
                  opacity: 0,
                  transition: { duration: 0.5 }
                }}
                variants={{
                  //   initial: { scale: 1.5, opacity: 0 },
                  hover: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.4 }
                  },
                  active: { scale: 1, opacity: 1 }
                }}
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CommandPanel
