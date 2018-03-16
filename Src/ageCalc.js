let moment = require('moment');

export class AgeCalc {
  constructor () {
}

ageInSeconds(age) {
  let secondsYear = (age * 31536000);
  return secondsYear;
}

secondsBetweenDates(firstDate, secondDate) {
  let date1 = moment(firstDate);
  let date2 = moment(secondDate);
  let resultInSeconds = date1.diff(date2, 'seconds');

  return resultInSeconds;
}

ageOnMercury(age) {
  let ageOnMercury = (Math.floor(age / .24));

  return ageOnMercury;

}
