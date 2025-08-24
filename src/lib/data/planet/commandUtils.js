
import { EventLog } from "@/lib/mech/eventLog";
import { Inventory } from "@/lib/mech/inventory";
import { Equipment } from "@/lib/mech/equipment";


export const commandUtils = () => {
    const cooldown = {}

    const doCommands = (commands, config) => {
        commands.forEach((a) => {
            // if(!useCost(config.cost)){
            //     return
            // }
            if(typeof a === 'string') EventLog.addEvent(a)
            if(typeof a === 'function') a()
        })
    }

    return { doCommands, EventLog, Inventory }
}