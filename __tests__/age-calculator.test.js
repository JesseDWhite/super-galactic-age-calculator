import User from './../src/js/age-calculator.js'

describe('User', () => {
    test('it should show the users name, age, and current planet after construction.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        expect(newUser.name).toEqual("Jesse");
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.residentPlanet).toEqual("Earth");
    });
    test('it should return the users current age if they reside on Mercury.', () => {
        let newUser = new User("Jesse", 27, "Mercury")
        newUser.convertAge(27);
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.mercuryAge).toEqual(112.5);
    });
});