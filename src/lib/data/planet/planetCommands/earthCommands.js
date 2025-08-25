import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

const { doActions, EventLog, Inventory } = commandUtils(earthConfig);

export const earthCommands = {
    config: earthConfig, 
    commands: {
        takeStep: function (data) {
            return doActions([
                "hello",
                false,
                ()=>{
                EventLog.addEvent("custom eventlog here")
                Inventory.addItem('steps', 1)
            }], data)
        },
        pickupStone: function (data) {
            return doActions([
                "stones",
                ()=>{
                console.log("bones")
                Inventory.addItem('stone', 1)
            }], data)
        }
    }
}
