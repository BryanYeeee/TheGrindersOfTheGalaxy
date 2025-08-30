'use client'
import { useGameContext } from '@/context/gameContext'
import * as Mech from '@/lib/mech/mechExport'

const PlanetNavBar = () => {
    const { curPlanets, curPlanetKey } = useGameContext()

    return (
        <div className="flex h-12 gap-x-4 p-2">
            {Array.from(curPlanets).map((planetName, i) => (
                <button
                    key={`${planetName}-${i}`}
                    onClick={() => Mech.Planet.setCurPlanet(planetName)}
                    className={`p-2 rounded 
                        ${planetName === curPlanetKey?'bg-slate-600':'bg-gray-700 hover:bg-slate-600'}`}
                >
                    {planetName}
                </button>
            ))}
        </div>
    )
}

export default PlanetNavBar