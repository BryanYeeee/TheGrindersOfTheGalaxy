import { venusConfig } from '@/lib/data/planet/planetConfig/venusConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

const { doActions, EventLog, Inventory } = commandUtils(venusConfig);

export const venusCommands = {
    config: venusConfig, 
    commands: {
        takeStep: function (data) {
            return doActions([
                "died",
                false,
                ()=>{
                EventLog.addEvent("aaaaa")
                Inventory.addItem('steps', 5)
            }], data)
        },
        extractCarbon: function (data) {
            return doActions([
                "carbonated",
                ()=>{
                Inventory.addItem('carbon', 1)
            }], data)
        }
    }
}
