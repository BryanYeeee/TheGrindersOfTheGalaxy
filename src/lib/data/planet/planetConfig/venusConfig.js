export const venusConfig = {
    name: "venus",
    description: "you are NOT here",
    src: "venus.jpeg",
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
            cooldown: 750,
            cost: {
                
            }
        },
        'stone': {
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