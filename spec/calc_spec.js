import { AgeCalc } from './../src/AgeCalc.js';

describe("EarthYearsToSeconds", function(){
  it("should take an earth year and convert it into seconds", function(){
    let ageCalc = new AgeCalc();



    expect(ageCalc.ageInSeconds(20)).toEqual(630720000)
  })
})

describe ("difference between two dates", function(){
  it("should calculate the difference in seconds",function() {
    let ageCalc = new AgeCalc();
    let date1 = [2015, 0, 10];
    let date2 = [2015, 0, 11];
    expect(ageCalc.secondsBetweenDates(date1,date2)).toEqual(-86400);
  })
})

describe ("age on mercury",function(){
  it("should return the corret age if the user was living on mercury", function(){
    let ageCalc = new AgeCalc();

    expect(ageCalc.ageOnMercury(20)).toEqual(83);
  })
})
describe ("age on venus",function(){
  it("should return the corret age if the user was living on venus", function(){
    let ageCalc = new AgeCalc();

    expect(ageCalc.ageOnVenus(20)).toEqual(32);
  })
})

describe ("age on mars",function(){
  it("should return the corret age if the user was living on mars", function(){
    let ageCalc = new AgeCalc();

    expect(ageCalc.ageOnMars(20)).toEqual(37);
  })
})

describe ("age on jupiter",function(){
  it("should return the corret age if the user was living on jupiter", function(){
    let ageCalc = new AgeCalc();

    expect(ageCalc.ageOnJupiter(20)).toEqual(237);
  })
})

describe ("life expectancy on mercury",function(){
  it("should calculate how long a user has left to live on mercury", function(){
    let ageCalc = new AgeCalc();
    let age = 20;
    let planet = "Mercury";
    expect(ageCalc.lifeExpectancy(age, planet)).toEqual(237 + "more years to go on" + planet);
  })
})
