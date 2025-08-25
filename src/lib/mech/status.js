export const Status = {
  status: null,
  statusFn: null,

  setStatusFunction (status, statusFn) {
    [this.status, this.statusFn] = [
      status,
      (stat, amount) => statusFn(prev => ({ ...prev, [stat]: amount }))
    ]
  },

  setStatus (stat, amount) {
    if ((!this.status || !this.status[stat]) && this.status[stat] != 0) return
    this.statusFn(stat, amount)
  },

  getStatus (stat) {
    if ((!this.status || !this.status[stat]) && this.status[stat] != 0) return
    return this.status[stat]
  },

  addStatus (stat, amount) {
    if (!this.status[stat] && this.status[stat] != 0) return
    this.setStatus(stat, this.getStatus(stat) + amount)
  }
}
