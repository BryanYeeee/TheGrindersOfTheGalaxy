import { useGameContext } from "@/context/gameContext";
import { planets } from "@/lib/data/planet/planetExport";
import { Cooldown } from "@/lib/mech/cooldown"; 

const CommandPanel = () => {
    const { curPlanetKey, cooldowns } = useGameContext()
    const planetInfo = planets[curPlanetKey];
    const { config, commands } = planetInfo;

    console.log(curPlanetKey)

    const startCooldown = (cmd, cmdData) => {
        if (Cooldown.isOnCooldown(cmd)) return;

        if(!commands[cmdData.click](cmdData)) return; //if command no run, mean no money, mean no cooldown

        if (cmdData.cooldown) {
            Cooldown.startCooldown(cmd, cmdData.cooldown);
        }
    }
    return (
        <div className="h-4/5 w-30 bg-amber-300 p-2">
            {/* <h2>{config.name}</h2> */}
            {config.name}
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
                        onClick={() => startCooldown(cmd, cmdData)}
                        disabled={cooldowns[cmd] === true}
                        className={cooldowns[cmd] === true ? "opacity-50" : ""}
                    >
                        {cmdData.text}
                        {Object.entries(cmdData.cost).map(([name, value]) => (
                            <div key={name}>{name}: {value}</div>
                        ))}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CommandPanel;