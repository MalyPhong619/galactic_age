import { GalacticAge } from './galacticage.js';

describe('GalacticAge', function() {
  let userAge;

  beforeEach(function() {
    let userAge = new GalacticAge(15, 4, 2002);
  });

  it('should show how beforeEach() works', function() {
    expect(userAge.day).toEqual("15");
  });
});
