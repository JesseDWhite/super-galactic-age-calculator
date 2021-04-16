import User from './../src/js/age-calculator.js'

describe('User', () => {
    test('it should create a new User object with empty fields', () => {
        let newUser = new User("Jesse");
        expect(newUser.name).toEqual("Jesse");
    });
});