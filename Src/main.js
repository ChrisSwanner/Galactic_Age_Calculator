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
})
