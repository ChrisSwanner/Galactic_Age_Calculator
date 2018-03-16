let setDate = require('moment');

export class AgeCalc {
  constructor () {
}

ageInSeconds(age) {
  let secondsYear = (age * 31536000);
  return secondsYear;
}

secondsBetweenDates(firstDate, secondDate) {
  let date1 = setDate(firstDate);
  let date2 = setDate(secondDate);
  let resultInSeconds = date1.diff(date2, 'seconds');

  return resultInSeconds;
}

getCurrentDate() {
  let d = new Date();

  let month = d.getMonth()+1;
  let day = d.getDate();

  let output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

    return output;
}

ageOnMercury(age) {
  let ageOnMercury = (Math.floor(age / .24));

  return ageOnMercury;

}

ageOnVenus(age) {
  let ageOnVenus = (Math.floor(age / .62));

  return ageOnVenus;
}

ageOnMars(age) {
  let ageOnMars = (Math.floor(age * 1.88));

  return ageOnMars;
}

ageOnJupiter(age) {
  let ageOnJupiter = (Math.floor(age * 11.86));

  return ageOnJupiter;
}


lifeExpectancy(age, planet) {
  if (planet === "Mercury") {
    const lifeExpectancy = 77;

    if(age <= lifeExpectancy) {
      let earthExpectancy = lifeExpectancy - age;
      return (Math.floor(earthExpectancy / .24) + " more years");
    } else {
      return "You should be dead";
    }

  } else if (planet === "Venus") {
    const lifeExpectancy = 77;
    if(age <= lifeExpectancy) {
      let earthExpectancy = (lifeExpectancy - age);
      return (Math.floor(earthExpectancy / .62) + " more years");
    } else {
      return "You should be dead";
    }

  } else if (planet === "Mars") {
    const lifeExpectancy = 77;
    if (age <= lifeExpectancy) {
      let earthExpectancy = (lifeExpectancy - age);
      return (Math.floor(earthExpectancy / 1.88) + " more years");
    } else {
      return "You should be dead";
    }

  } else if (planet === "Jupiter") {
    const lifeExpectancy = 77;
    if (age <= lifeExpectancy) {
      let earthExpectancy = (lifeExpectancy - age);
      return (Math.floor(earthExpectancy / 11.86) + " more years");
    } else {
      return "You should be dead";
    }
  }
}
}
