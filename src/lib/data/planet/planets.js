import { useGameContext } from '@/context/gameContext'
import * as PlanetActions from '@/lib/data/planetActions/index'
import * as PlanetConfig from '@/lib/data/planetConfig/index'

export const Planets = () => {
    const { eventLog } = useGameContext()
    const { inventory } = useGameContext()
    const { equipment } = useGameContext()

    const doActions = (actions) => {
        actions.forEach((a) => {
            if(typeof a === 'string'){
                eventLog.addEvent(a)
            }

            if (typeof a === 'function') {
                a()
            }
        })
    }

}
