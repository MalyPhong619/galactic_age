import { GalacticAge } from './../src/galacticage.js';

describe('GalacticAge', function() {
  let inputAge;

  beforeEach(function() {
    inputAge = new GalacticAge(4, 7, 1990);

  });
  it('should show user age', function() {
    expect(inputAge.day).toEqual(4);
  });
  it('should show user month', function() {
    expect(inputAge.month).toEqual(7);
  });
  it('should show user year', function() {
    expect(inputAge.year).toEqual(1990);
  });
  it('will return the age of the user', function() {
    expect(inputAge.userAge()).toEqual(29);
  });
  it('will return the age of the user as part of constructor', function() {
    inputAge.userAge();
    expect(inputAge.age).toEqual(29);
  });
  it('will return the age of the user on Mercury', function() {
    inputAge.userAge();
    expect(inputAge.mercuryAge()).toEqual(6.96);
  });
  it('will return the age of the user on Venus', function() {
    inputAge.userAge();
    expect(inputAge.venusAge()).toEqual(17.98);
  });


});
