export const Planet = {
    availPlanets: [],
    availPlanetsFn: null,
    curPlanet: null,
    planetFn: null,
    allPlanets: [],
    allPlanetsFn: null,

    setPlanetFunction(curPlanet, planetFn) {
        [this.curPlanet, this.planetFn] = [curPlanet, planetFn]
    },

    setAvailPlanets(availPlanets, availPlanetsFn) {
        [this.availPlanets, this.availPlanetsFn] = [availPlanets, availPlanetsFn]
    },

    setAllPlanets(allPlanets, allPlanetsFn) {
        [this.allPlanets, this.allPlanetsFn] = [allPlanets, allPlanetsFn]
    },

    setCurPlanet(curPlanetKey) {
        if (!this.planetFn) return;
        this.planetFn(curPlanetKey);
        this.curPlanet = curPlanetKey;
    },


    unlockPlanet(planetKey) {
        if (!this.availPlanetsFn) return
        this.availPlanetsFn(prev => [...prev, planetKey])
    },

    getCurPlanet() {
        return this.curPlanet
    },

    getAvailPlanets() {
        return this.availPlanets
    },

    unlockNextPlanet() {

        console.log(this.allPlanets)
        console.log(this.availPlanets)

        if (!this.availPlanetsFn) return
        if (!this.allPlanets.length) return

        let nextPlanet = null

        this.allPlanetsFn(before => {
            if (!before.length) return before;
            [nextPlanet, ...before] = before
            return before
        });

        if (nextPlanet) {
            this.availPlanetsFn(before => [...before, nextPlanet])
        }
    }
}
