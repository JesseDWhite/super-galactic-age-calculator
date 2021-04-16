export default class User {
    constructor(name, currentAge, residentPlanet, earthLifeExpectancy) {
        this.name = name;
        this.currentAge = currentAge;
        this.residentPlanet = residentPlanet;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.earthLifeExpectancy = earthLifeExpectancy;
        this.mercuryLifeExpectancy = 0;
        this.mercuryLeftToLive = 0;
        this.venusLifeExpectancy = 0;
        this.venusLeftToLive = 0;
        this.marsLifeExpectancy = 0;
        this.marsLeftToLive = 0;
        this.jupiterLifeExpectancy = 0;
        this.jupiterLeftToLive = 0;

    };
    convertAllAges() {
        let mercuryCurrentAge = parseInt(this.currentAge / 0.24);
        this.mercuryAge = mercuryCurrentAge;
        let mercuryCurrentExpectancy = parseInt(this.earthLifeExpectancy / 0.24);
        this.mercuryLifeExpectancy = mercuryCurrentExpectancy;

        let venusCurrentAge = parseInt(this.currentAge / 0.62);
        this.venusAge = venusCurrentAge;
        let venusCurrentExpectancy = parseInt(this.earthLifeExpectancy / 0.62);
        this.venusLifeExpectancy = venusCurrentExpectancy;

        let marsCurrentAge = parseInt(this.currentAge / 1.88);
        this.marsAge = marsCurrentAge;
        let marsCurrentExpectancy = parseInt(this.earthLifeExpectancy / 1.88);
        this.marsLifeExpectancy = marsCurrentExpectancy;

        let jupiterCurrentAge = parseInt(this.currentAge / 11.86);
        this.jupiterAge = jupiterCurrentAge;
        let jupiterCurrentExpectancy = parseInt(this.earthLifeExpectancy / 11.86);
        this.jupiterLifeExpectancy = jupiterCurrentExpectancy;
    };
    checkAgeDifference() {
        let mercuryCompareAge = this.mercuryLifeExpectancy - this.mercuryAge;
        if (mercuryCompareAge < 0) {
            this.mercuryLeftToLive = Math.abs(mercuryCompareAge)
        } else {
            this.mercuryLeftToLive = mercuryCompareAge;
        }
        let venusCompareAge = this.venusLifeExpectancy - this.venusAge;
        if (venusCompareAge < 0) {
            this.venusLeftToLive = Math.abs(venusCompareAge)
        } else {
            this.venusLeftToLive = venusCompareAge;
        }

        let marsCompareAge = this.marsLifeExpectancy - this.marsAge;
        if (marsCompareAge < 0) {
            this.marsLeftToLive = Math.abs(marsCompareAge)
        } else {
            this.marsLeftToLive = marsCompareAge;
        }

        let jupiterCompareAge = this.jupiterLifeExpectancy - this.jupiterAge;
        if (jupiterCompareAge < 0) {
            this.jupiterLeftToLive = Math.abs(jupiterCompareAge)
        } else {
            this.jupiterLeftToLive = jupiterCompareAge;
        }
    }
};