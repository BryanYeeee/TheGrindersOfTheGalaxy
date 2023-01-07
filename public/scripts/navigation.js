var Navigation = {
	planetList: [
		{
			Name: "Earth",
			Size: "16",
            Background: "linear-gradient(217deg, #4e6447, #0000ff40),linear-gradient(127deg, #5878e9, #4e644740),linear-gradient(336deg, #ffffff, #ffffff);"
		},
        {
			Name: "Venus",
			Size: "16", //rem,
            Color1: "#fcb103",
            Color2: "#fc2c03",
            Color3: "#8f4500",
		},
		{
			Name: "Mercury",
			Size: "16",
            Color1: "#000000",
            Color2: "#000000", 
            Color3: "#000000",//rem,
		},
		{
			Name: "Venus",
			Size: "16",
            Color1: "#000000",
            Color2: "#000000", 
            Color3: "#000000",//rem,
		}
	],

    init: function () {
        this.nav = $('<div>').attr({
            id: 'navigation'
        });

        sm.set('planets.curPlanet', -1);
        sm.set('planets.unlocked', -1);
        sm.unlockPlanet(true);
        sm.unlockPlanet(false);
        sm.unlockPlanet(false);

        $('#planet').prepend(this.nav)
    },

    addNav: async function(goto) { 
        let planedIndex =  sm.get('planets.unlocked')
        let nextPlanet = this.planetList[planedIndex];   
        let navBtn = await $('<button>').addClass('navBtn')
            .attr({
                id: 'nav'+nextPlanet.Name,
                index: planedIndex
            })
            .text(nextPlanet.Name)
            .css('opacity', 0)
            .click(this.changePlanet)
		navBtn.animate({opacity: 1}, 1000, 'linear');
        this.nav.append(navBtn)

		if(goto) Navigation.changePlanet(planedIndex)
    },

    changePlanet: function(e) {
        let newPlanetIndex = typeof e == "number" ? e : e.currentTarget.getAttribute('index');
        if(newPlanetIndex == sm.get('planets.curPlanet')) return;

        if(sm.get('planets.curPlanet') != -1)
        $('#nav' + Navigation.planetList[sm.get('planets.curPlanet')].Name)[0].classList.remove('selectedPlanet')

        sm.set('planets.curPlanet', newPlanetIndex);
        $('#nav' + Navigation.planetList[sm.get('planets.curPlanet')].Name).addClass('selectedPlanet')

        Planet.createPlanet(0)
        // Planet.changePlanet
    }
}
