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
        newUser.convertAllAges();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.mercuryAge).toEqual(112);
    });
    test('it should return the users age for all planets.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAllAges();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.mercuryAge).toEqual(112);
        expect(newUser.venusAge).toEqual(43);
        expect(newUser.marsAge).toEqual(14);
        expect(newUser.jupiterAge).toEqual(2);
    });
    test('it should determine the users average life expectancy for Mercury based on their current age.', () => {
        let newUser = new User("Jesse", 27, "Earth", 73)
        newUser.convertAllAges();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.earthLifeExpectancy).toEqual(73);
        expect(newUser.mercuryLifeExpectancy).toEqual(304);
    });
    test('it should determine the average life expectancy for all planets.', () => {
        let newUser = new User("Jesse", 27, "Earth", 73)
        newUser.convertAllAges();
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.earthLifeExpectancy).toEqual(73);
        expect(newUser.mercuryLifeExpectancy).toEqual(304);
        expect(newUser.venusLifeExpectancy).toEqual(117);
        expect(newUser.marsLifeExpectancy).toEqual(38);
        expect(newUser.jupiterLifeExpectancy).toEqual(6);
    });
    test('it should return the difference of life expectancy compared to current age on Mercury.', () => {
        let newUser = new User("Jesse", 27, "Earth", 73)
        newUser.convertAllAges();
        newUser.checkAgeDifference();
        expect(newUser.mercuryLifeExpectancy).toEqual(304);
        expect(newUser.mercuryLeftToLive).toEqual(192);
    });
    test('it should return the difference of life expectancy for all planets', () => {
        let newUser = new User("Jesse", 27, "Earth", 73)
        newUser.convertAllAges();
        newUser.checkAgeDifference();
        expect(newUser.mercuryLeftToLive).toEqual(192);
        expect(newUser.venusLeftToLive).toEqual(74);
        expect(newUser.marsLeftToLive).toEqual(24);
        expect(newUser.jupiterLeftToLive).toEqual(4);
    });
    test('it should return how many years the user has passed the average life expectancy if they are older than the average.', () => {
        let newUser = new User("Jesse", 90, "Earth", 73)
        newUser.convertAllAges();
        newUser.checkAgeDifference();
        expect(newUser.mercuryLeftToLive).toEqual(71);
        expect(newUser.venusLeftToLive).toEqual(28);
        expect(newUser.marsLeftToLive).toEqual(9);
        expect(newUser.jupiterLeftToLive).toEqual(1);
        console.log(newUser)
    });
    test('it should skip the first branch and go to the else statement if the age is under the average life expectancy', () => {
        let newUser = new User("Jesse", 27, "Earth", 73)
        newUser.convertAllAges();
        newUser.checkAgeDifference();
        expect(newUser.mercuryLeftToLive).toEqual(192);
        expect(newUser.venusLeftToLive).toEqual(74);
        expect(newUser.marsLeftToLive).toEqual(24);
        expect(newUser.jupiterLeftToLive).toEqual(4);
        console.log(newUser);
    });
});