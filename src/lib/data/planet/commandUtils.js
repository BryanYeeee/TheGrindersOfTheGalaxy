import { EventLog, Inventory, Equipment, Count } from '@/lib/mech/mechExport'

const useCost = cost => {
  let costTxt = ''
  if (!cost || Object.keys(cost).length === 0) return costTxt

  for (let item in cost) {
    const value = cost[item]
    if (typeof value === 'number') {
      let curInvAmount = Inventory.getItem(item) ?? 0
      if (curInvAmount < value) costTxt += `${item}: ${value}, `
    } else if (typeof value === 'boolean') {
      if (!Equipment.hasEquipment(item)) costTxt += `${item}, `
    }
  }
  //sub thigns
  if (costTxt != '') return costTxt
  for (let item in cost) {
    const value = cost[item]
    if (typeof value === 'number') {
      Inventory.addItem(item, value * -1)
    }
  }

  return ''
}

const actionHandlers = {
  boolean: (a, ctx) => Inventory.addItem('brh', 1), //for now
  string: (txt, ctx) => EventLog.addEvent(txt),
  function: async (fn, ctx) => fn(),
  object: async (countActions, ctx) => {
    let cmdCount = Count.getCount(ctx.config.key, ctx.data.cmd)

    for (let a of countActions[cmdCount] ?? countActions.default ?? []) {
      let handler = actionHandlers[typeof a]
      if (handler) await handler(a, ctx)
    }
  }
}

export const commandUtils = config => {
  const doActions = async (actions, data = {}) => {
    let costTxt = useCost(data.cmdData.cost)
    console.log(data)
    if (costTxt != '') {
      EventLog.addEvent('Not enough: ' + costTxt)
      return false
    }

    for (let a of actions) {
      let handler = actionHandlers[typeof a]
      if (handler) await handler(a, { config, data })
    }

    Count.addCount(config.key, data.cmd)
    return true
  }

  return { doActions }
}
