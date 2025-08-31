export const Command = {
  cooldown: null,
  cooldownFn: null,
  unlock: null,
  unlockFn: null,

  setCooldownFunction (cooldown, cooldownFn) {
    ;[this.cooldown, this.cooldownFn] = [
      cooldown,
      (cmd, value) => cooldownFn(prev => ({ ...prev, [cmd]: value }))
    ]
  },

  setUnlockFunction (unlock, unlockFn) {
    ;[this.unlock, this.unlockFn] = [
      unlock,
      (cmd, value) => unlockFn(prev => ({ ...prev, [cmd]: value }))
    ]
  },

  startCooldown (cmd, duration) {
    if (!this.cooldownFn || this.isOnCooldown(cmd)) return

    const startTime = Date.now()
    const endTime = startTime + duration

    this.cooldownFn(cmd, { active: true, startTime, endTime })

    setTimeout(() => {
      this.cooldownFn(cmd, { active: false, startTime: null, endTime: null })
    }, duration)
  },

  getCooldownInfo (cmd) {
    if (!this.cooldown) return null
    return this.cooldown[cmd] ?? null
  },

  isOnCooldown (cmd) {
    if (!this.cooldown) return false
    return !!this.cooldown[cmd]?.active
  },

  lockCommand (planetKey, cmd) {
    if (this.unlockFn) {
      this.unlockFn(planetKey + '.' + cmd, false)
    }
  },

  unlockCommand (planetKey, cmd) {
    if (this.unlockFn) {
      this.unlockFn(planetKey + '.' + cmd, true)
    }
  },

  isUnlocked (planetKey, cmd) {
    if (!this.unlock) return false
    return !!this.unlock[planetKey + '.' + cmd]
  }
}
