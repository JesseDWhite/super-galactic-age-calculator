import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/age-calculator.js'
$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        const nameEntry = $('#name').val();
        const ageEntry = $('#age').val();

        const newEntry = new User(nameEntry, ageEntry);
        newEntry.convertAllAges();
        newEntry.checkAgeDifference();
        console.log(newEntry);

        $('#planet-numbers').show();
        $('#mercury').html(`<li>Age on Mercury: ${newEntry.mercuryAge}</li> <li>Average Life Expectancy: ${newEntry.mercuryLifeExpectancy}</li> <li>Years Left to Live: ${newEntry.mercuryLeftToLive}</li>`);

        $('#venus').html(`<li>Age on Venus: ${newEntry.venusAge}</li> <li>Average Life Expectancy: ${newEntry.venusLifeExpectancy}</li> <li>Years Left to Live: ${newEntry.venusLeftToLive}</li>`);

        $('#mars').html(`<li>Age on Mars: ${newEntry.marsAge}</li> <li>Average Life Expectancy: ${newEntry.marsLifeExpectancy}</li> <li>Years Left to Live: ${newEntry.marsLeftToLive}</li>`);

        $('#jupiter').html(`<li>Age on Jupiter: ${newEntry.jupiterAge}</li> <li>Average Life Expectancy: ${newEntry.jupiterLifeExpectancy}</li> <li>Years Left to Live: ${newEntry.jupiterLeftToLive}</li>`);
    })

});