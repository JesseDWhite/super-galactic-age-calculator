import User from './../src/js/age-calculator.js'

describe('User', () => {
    test('it should show the users name, age, and current planet after construction.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        expect(newUser.name).toEqual("Jesse");
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.residentPlanet).toEqual("Earth");
    });
    test('it should return the users current age if they reside on Mercury.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAge();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.mercuryAge).toEqual(112);
    });
    test('it should return the users age for all planets.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAge();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.mercuryAge).toEqual(112);
        expect(newUser.venusAge).toEqual(43);
        expect(newUser.marsAge).toEqual(14);
        expect(newUser.jupiterAge).toEqual(2);
    });
    test('it should determine the users average life expectancy for Mercury based on their current age.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAge();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.earthLifeExpectancy).toEqual(73);
        expect(newUser.mercuryLifeExpectancy).toEqual(304);
    });
    test('it should determine the average life expectancy for all planets.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAge();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.earthLifeExpectancy).toEqual(73);
        expect(newUser.mercuryLifeExpectancy).toEqual(304);
        expect(newUser.venusLifeExpectancy).toEqual(117);
        expect(newUser.marsLifeExpectancy).toEqual(38);
        expect(newUser.jupiterLifeExpectancy).toEqual(6);
        console.log(newUser);
    })
});