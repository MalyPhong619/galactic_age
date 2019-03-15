import { GalacticAge } from './../src/galacticage.js';

describe('GalacticAge', function() {
  let inputAge;

  beforeEach(function() {
    let userAge = [15, 4, 2002];
    inputAge = new GalacticAge(userAge[0], userAge[1], userAge[2]);
  });
  it('should show user age', function() {
    expect(inputAge.day).toEqual(15);
  });
  it('should show user month', function() {
    expect(inputAge.month).toEqual(4);
  });
  it('should show user year', function() {
    expect(inputAge.year).toEqual(2002);
  });
});
