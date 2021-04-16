export default class User {
    constructor(name, currentAge, residentPlanet) {
        this.name = name;
        this.currentAge = currentAge;
        this.residentPlanet = "Earth";
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.earthLifeExpectancy = 73;
        this.mercuryLifeExpectancy = 0;
        this.venusLifeExpectancy = 0;
        this.marsLifeExpectancy = 0;
        this.jupiterLifeExpectancy = 0;
    };
    convertAge() {
        let mercuryCurrentAge = parseInt(this.currentAge / 0.24);
        this.mercuryAge = mercuryCurrentAge;
        let mercuryCurrentExpectancy = parseInt(this.earthLifeExpectancy / 0.24);
        this.mercuryLifeExpectancy = mercuryCurrentExpectancy;
        let venusCurrentAge = parseInt(this.currentAge / .62);
        this.venusAge = venusCurrentAge;
        let marsCurrentAge = parseInt(this.currentAge / 1.88);
        this.marsAge = marsCurrentAge;
        let jupiterCurrentAge = parseInt(this.currentAge / 11.86);
        this.jupiterAge = jupiterCurrentAge;
    };
};