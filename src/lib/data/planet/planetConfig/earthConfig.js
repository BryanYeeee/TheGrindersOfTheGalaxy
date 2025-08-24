export const earthConfig = {
    name: "earth",
    description: "you are here",
    src: "earth.jpeg",
    stats: {
        hunger: 5,
        naturalheat: 0,
        heat: 5,
        oxygen: -100,
    },
    commands: {
        'walk': {
            text: "take a step",
            hover: "take the step please",
            click: "takeStep",
            cooldown: 750,
            cost: {

            }
        },
        'stone': {
            text: "pickup stone",
            hover: "Cost 2 Steps",
            click: "pickupStone",
            cooldown: 2000,
            cost: {
                'steps': 2
            }
        }
    }

}