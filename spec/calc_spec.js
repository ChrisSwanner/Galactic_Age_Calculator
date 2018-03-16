import { AgeCalc } from './../src/AgeCalc.js';

describe("EarthYearsToSeconds", function(){
  it("should take an earth year and convert it into seconds", function(){
    let ageCalc = new AgeCalc();



    expect(ageCalc.ageInSeconds(20)).toEqual(630720000)
  })
})
