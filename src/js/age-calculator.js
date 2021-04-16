export default class User {
    constructor(name, currentAge, residentPlanet) {
        this.name = name;
        this.currentAge = currentAge;
        this.residentPlanet = "Earth";
        this.convertedAge = 0;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
    }
    convertAge() {
    }
}