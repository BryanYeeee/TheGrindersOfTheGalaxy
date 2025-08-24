import { useGameContext } from "@/context/gameContext";
import { planets } from "@/lib/data/planet/planetExport";

const CommandPanel = () => {
    const { curPlanetKey } = useGameContext()
    const planetInfo = planets[curPlanetKey];
    const { config, commands } = planetInfo;

    console.log("AAAAA")
    console.log(planetInfo)

    return (
        <div className="h-4/5 w-30 bg-amber-300 p-2">
            {/* <h2>{config.name}</h2> */}
            
            <div className="stats mb-2">
                {Object.entries(config.stats).map(([stat, value]) => (
                    <div key={stat}>{stat}: {value}</div>
                ))}
            </div>

            <div>
                {Object.entries(config.commands).map(([cmd, cmdData]) => (
                    <button
                        key={cmd}
                        title={cmdData.hover}
                        onClick={commands[cmdData.click]}
                    >
                        {cmdData.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CommandPanel;