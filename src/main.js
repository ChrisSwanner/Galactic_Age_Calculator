import $ from 'jquery';
import { AgeCalc } from './../src/ageCalc.js';
import './styles.css';

$(document).ready(function(){
  let ageCalc = new AgeCalc();

  let selectedPlanet = $('#planet').val();
  let userAge = parseInt($('#age').val());
  console.log(userAge);
  $('#ageInSecondsForm').submit(function(event){
    event.preventDefault();
    let ageCalc = new AgeCalc();
    let date = new Date($('#birthday').val());
    let day, month, year;
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    let fullDate = [year, month, day].join('/');
    let currentDate = new Date();
    $('#secondsDisplay').text("Seconds between now and then: " + ageCalc.secondsBetweenDates(ageCalc.getCurrentDate(), fullDate));
    console.log(ageCalc.getCurrentDate());
    console.log(fullDate);
  })
  $('#planetForm').submit(function(event){
    event.preventDefault();
    let ageCalc = new AgeCalc();

    let selectedPlanet = $('#planet').val();
    let userAge = $('#age').val();
    if (selectedPlanet === "Mercury") {
      $('#ageOnSelectedPlanet').text("Your age on " + selectedPlanet + " is " + ageCalc.ageOnMercury(userAge));
      $('#planetLifeExpectancy').text("Your expected life expectancy on " + selectedPlanet + " is " + ageCalc.lifeExpectancy(userAge, selectedPlanet));
    } else if (selectedPlanet === "Venus") {
      $('#ageOnSelectedPlanet').text("Your age on " + selectedPlanet + " is " + ageCalc.ageOnVenus(userAge));
        $('#planetLifeExpectancy').text("Your expected life expectancy on " + selectedPlanet + " is " + ageCalc.lifeExpectancy(userAge, selectedPlanet));

    } else if (selectedPlanet === "Mars") {
      $('#ageOnSelectedPlanet').text("Your age on " + selectedPlanet + " is " + ageCalc.ageOnMars(userAge));
        $('#planetLifeExpectancy').text("Your expected life expectancy on " + selectedPlanet + " is " + ageCalc.lifeExpectancy(userAge, selectedPlanet));
    } else if (selectedPlanet === "Jupiter") {
      $('#ageOnSelectedPlanet').text("Your age on " + selectedPlanet + " is " + ageCalc.ageOnJupiter(userAge));
        $('#planetLifeExpectancy').text("Your expected life expectancy on " + selectedPlanet + " is " + ageCalc.lifeExpectancy(userAge, selectedPlanet));
    }
  })
})
