import { earthConfig } from '@/lib/data/planet/planetConfig/earthConfig'
import { commandUtils } from '@/lib/data/planet/commandUtils'

const { doCommands, EventLog, Inventory } = commandUtils(earthConfig);

export const earthCommands = {
    config: earthConfig, 
    commands: {
        takeStep: function () {
            doCommands([
                "hello",
                ()=>{
                EventLog.addEvent("custom eventlog here")
            }])
        },
        pickupStone: function () {
            doCommands([
                "stones",
                ()=>{
                console.log("bones")
            }])
        }
    }
}
