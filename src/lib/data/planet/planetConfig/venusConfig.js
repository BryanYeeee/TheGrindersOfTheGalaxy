export const venusConfig = {
    name: "venus",
    key: "venus",
    description: "you are NOT here",
    src: "alien.glb",
    stats: {
        hunger: 25,
        naturalheat: 10,
        heat: 15,
        oxygen: 0,
    },
    commands: {
        'walk': {
            text: "take a step",
            hover: "take the step but you might die tho",
            click: "takeStep",
            cooldown: 2500,
            cost: {
                
            }
        },
        'venus.carbon': {
            text: "extract carbon",
            hover: "Cost 2 Steps",
            click: "extractCarbon",
            cooldown: 2000,
            cost: {
                'steps': 2
            }
        }
    }

}