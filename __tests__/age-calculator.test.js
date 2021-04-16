import User from './../src/js/age-calculator.js'

describe('User', () => {
    test('it should show the users name, age, and current planet after construction.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        expect(newUser.name).toEqual("Jesse");
        expect(newUser.currentAge).toEqual(27);
        expect(newUser.residentPlanet).toEqual("Earth");
    });
});