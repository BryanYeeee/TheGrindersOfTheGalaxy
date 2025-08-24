export const Equipment = {
  equip: null,
  equipFn: null,

  setEquipFunction (equip, equipFn) {
    [this.equip, this.equipFn] = [
      equip,
      (type, stats) =>
        equipFn(prev => ({ ...prev, [type]: [stats, ...(prev[type] || [])] }))
    ]
  },

  addEquipment (type, stats) {
    if (!this.equipFn) return
    this.equipFn(type, stats)
  },

  hasEquipment (type) {
    if (!this.equip) return
    return type in this.equip
  },

  getEquipment (type) {
    if (!this.equip && !this.hasEquipment(type)) return
    return this.equip[type][0]
  }
}
