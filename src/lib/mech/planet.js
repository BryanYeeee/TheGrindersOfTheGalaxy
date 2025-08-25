export const Planet = {
    availPlanets: [], 
    curPlanet: null,
    planetFn: null,

    setPlanetFunction(availPlanets, curPlanet, planetFn) {
        [this.availPlanets, this.curPlanet, this. planetFn ] = [ availPlanets, curPlanet, planetFn ]
    },

    setCurPlanet(curPlanetKey) {
        if (!this.planetFn) return;
        this.planetFn(curPlanetKey);
        this.curPlanet = curPlanetKey;
    },

    getCurPlanet() {
        return this.curPlanet
    },

    getAvailPlanets() {
        return this.availPlanets
    }
}
