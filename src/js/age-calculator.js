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
        let mercury = parseInt(this.currentAge / 0.24);
        this.mercuryAge = mercury;
        let venus = parseInt(this.currentAge / .62);
        this.venusAge = venus;
        let mars = parseInt(this.currentAge / 1.88);
        this.marsAge = mars;
        let jupiter = parseInt(this.currentAge / 11.86);
        this.jupiterAge = jupiter;
    };
    calculateLifeExpectancy() {

    }
};