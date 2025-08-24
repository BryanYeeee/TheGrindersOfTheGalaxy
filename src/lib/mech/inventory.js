export const Inventory = {
  inv: null,
  invFn: null,

  setInvFunction (inv, invFn) {
    [this.inv, this.invFn] = [inv, (type, amount) => invFn(prev => ({ ...prev, [type]: amount }))]
  },

  setItem (type, amount) {
    if (!this.invFn) return
    this.invFn(type, amount)
  },

  getItem (type) {
    if (!this.inv) return
    return this.inv[type]
  },

  hasItem (type) {
    return type in this.inv
  },

  addItem (type, amount) {
    if (!this.hasItem(type)) {
      this.setItem(type, amount)
    } else {
      this.setItem(type, this.getItem(type) + amount)
    }
  }
}
