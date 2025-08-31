export const earthConfig = {
    name: "Earth",
    key: "earth",
    description: "you are here",
    src: "alien.glb",
    stats: {
        hunger: 5,
        naturalheat: 0,
        heat: 5,
        oxygen: -100,
    },
    commands: {
        'walk': {
            text: "take a step",
            hover: "",
            click: "takeStep",
            cooldown: 750,
            cost: {
            }
        },
        'earth.stone': {
            text: "pickup stone",
            hover: "Cost 2 Steps",
            click: "pickupStone",
            cooldown: 2000,
            cost: {
                'steps': 2,
                // 'pickaxe': true
            }
        }
    }

}