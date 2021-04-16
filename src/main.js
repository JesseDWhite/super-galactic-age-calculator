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
        const lifeEntry = $('#life-expectancy').val();

        const newEntry = new User(nameEntry, ageEntry, lifeEntry);

        $('#result').text(newEntry.convertAllAges());
    })

});