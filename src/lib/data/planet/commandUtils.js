
import { EventLog, Inventory, Equipment, Command } from "@/lib/mech/mechExport";


export const commandUtils = () => {

    const useCost = (cost) => {
        let costTxt = "";
        if (!cost || Object.keys(cost).length === 0) return costTxt;
        
        for (let item in cost) {
            const value = cost[item];
            if (typeof value === "number") {
                let curInvAmount = Inventory.getItem(item) ?? 0;
                if (curInvAmount < value) costTxt += `${item}: ${value}, `;
            } else if (typeof value === "boolean") {
                if (!Equipment.hasEquipment(item)) costTxt += `${item}, `;
            }
        }
        //sub thigns
        if(costTxt != "") return costTxt;
        for (let item in cost) {
            const value = cost[item];
            if (typeof value === "number") {
                Inventory.addItem(item, value * -1)
            }
        }

        return "";
    };

    const doActions = (actions, data = {}) => {
        //  const commandConfig = config.commands[commandKey]
        // console.log(commandConfig)
        let costTxt = useCost(data.cost)
        console.log(data)
        if(costTxt != ""){
            EventLog.addEvent("Not enough: " + costTxt)
            return false;
        }

        actions.forEach((a) => {
            // if(!useCost(config.cost)){
            //     return
            // }
            if (typeof a === 'boolean') Inventory.addItem("brh", 1) // for now
            if (typeof a === 'string') EventLog.addEvent(a)
            if (typeof a === 'function') a()
        })

        return true
    }


    return { doActions, EventLog, Inventory }
}