import User from './../src/js/age-calculator.js'
import LifeExpectancy from './../src/js/life-expectancy.js'

describe('LifeExpectancy', () => {
    test('it should return an new object with inputs from the User constructor and convert them.', () => {
        let newUser = new User("Jesse", 27, "Earth")
        newUser.convertAge();

    })
})