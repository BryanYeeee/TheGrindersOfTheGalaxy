import { Planet } from '@/lib/mech/mechExport'

export const Count = {
  count: null,
  countFn: null,

  setCountFunction (count, countFn) {
    ;[this.count, this.countFn] = [
      count,
      (cmd, amount) => countFn(prev => ({ ...prev, [cmd]: amount }))
    ]
  },

  async addCount (planetKey, cmd) {
    if (!this.countFn || !this.count) return false
    this.countFn(planetKey + '.' + cmd, this.getCount(planetKey, cmd) + 1)
  },

  getCount (planetKey, cmd) {
    if (!this.count) return false
    return this.count[planetKey + '.' + cmd] ?? 0
  },

  getAllCount (cmd) {
    if (!this.count) return false
    let total = 0
    Planet.getAvailPlanets().forEach(planetKey => {
      total += this.getCount(planetKey, cmd)
    })
    return total
  }
}
