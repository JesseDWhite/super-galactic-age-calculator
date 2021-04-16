import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/age-calculator.js';
$(document).ready(function () {
    $('#submit').click(function (event) {
        event.preventDefault();
        $('#user-input').slideUp();

        const nameEntry = $('#name').val();
        const ageEntry = $('#age').val();

        const newEntry = new User(nameEntry, ageEntry);
        newEntry.convertAllAges();
        newEntry.checkAgeDifference();

        $('#planet-numbers').slideDown();
        $('#change-info').slideDown();
        $('#user-name').text(`Here are you numbers ${nameEntry}`);
        $('#mercury').html(`<p>Age on Mercury: ${newEntry.mercuryAge}</p> <p>Average Life Expectancy: ${newEntry.mercuryLifeExpectancy}</p> <p>Years Left to Live: ${newEntry.mercuryLeftToLive}</p>`);

        $('#venus').html(`<p>Age on Venus: ${newEntry.venusAge}</p> <p>Average Life Expectancy: ${newEntry.venusLifeExpectancy}</p> <p>Years Left to Live: ${newEntry.venusLeftToLive}</p>`);

        $('#mars').html(`<p>Age on Mars: ${newEntry.marsAge}</p> <p>Average Life Expectancy: ${newEntry.marsLifeExpectancy}</p> <p>Years Left to Live: ${newEntry.marsLeftToLive}</p>`);

        $('#jupiter').html(`<p>Age on Jupiter: ${newEntry.jupiterAge}</p> <p>Average Life Expectancy: ${newEntry.jupiterLifeExpectancy}</p> <p>Years Left to Live: ${newEntry.jupiterLeftToLive}</p>`);

        $('#change-info').click(function (event) {
            event.preventDefault();

            $('#user-input').slideDown();
            $('#planet-numbers').slideUp();
            $('#change-info').slideUp();
        });
    });

});