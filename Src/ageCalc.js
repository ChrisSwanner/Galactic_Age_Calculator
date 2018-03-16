let moment = require('moment');

export class AgeCalc {
  constructor () {
}

 ageInSeconds(age) {
  let secondsYear = (age * 31536000);
  return secondsYear;
}
}
