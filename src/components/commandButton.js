import { motion } from 'motion/react'
import { Cooldown } from '@/lib/mech/cooldown'
import { useRef } from 'react'

const CommandButton = ({ cmd, cmdData, onCooldown, runCommand }) => {
  const barRef = useRef()
  const startCooldown = () => {
    if (Cooldown.isOnCooldown(cmd)) return
    if (!runCommand(cmdData)) return //if command no run, mean no money, mean no cooldown

    if (cmdData.cooldown) {
      Cooldown.startCooldown(cmd, cmdData.cooldown)
      barRef.current.animate([{ width: '0%' }, { width: '100%' }], {
        duration: cmdData.cooldown,
        easing: 'linear'
      })
    }
  }
  const animateVariantConfig = {
    cooldownBar: {
      hover: {
        scale: onCooldown ? 1 : 0,
        transition: { duration: onCooldown ? 0 : 0.4 }
      }
    },
    borderPulse: {
      initial: { scale: 1.5, opacity: 0, transition: { duration: 0.5 } },
      hover: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
      active: { scale: 1, opacity: 1 }
    },
    text: {
      initial: { rotateX: 0, transition: { duration: 0.3, ease: 'linear' } },
      hover: { rotateX: 90, transition: { duration: 0.3, ease: 'linear' } }
    },
    hoverText: {
      initial: { rotateX: -90, transition: { duration: 0.3, ease: 'linear' } },
      hover: { rotateX: 0, transition: { duration: 0.3, ease: 'linear' } }
    }
  }

  return (
    <motion.button
      onClick={startCooldown}
      disabled={onCooldown}
      initial='initial'
      whileHover='hover'
      animate={onCooldown ? 'active' : 'initial'}
      className='w-32 py-1 relative z-0'
    >
      <div className='relative'>
        {cmdData.hover ? (
          <>
            <motion.p
              variants={animateVariantConfig.text}
              className='origin-top'
            >
              {cmdData.text}
            </motion.p>
            <motion.p
              variants={animateVariantConfig.hoverText}
              className='absolute inset-0 origin-bottom'
            >
              {cmdData.hover}
            </motion.p>
          </>
        ) : (
          <>{cmdData.text}</>
        )}
      </div>

      <motion.span
        ref={barRef}
        variants={animateVariantConfig.cooldownBar}
        className='absolute inset-0 h-full -z-1 bg-foreground1'
      />
      <motion.span
        variants={animateVariantConfig.borderPulse}
        className='absolute inset-0 h-full w-full border-1 border-accent'
      />
    </motion.button>
  )
}

export default CommandButton
