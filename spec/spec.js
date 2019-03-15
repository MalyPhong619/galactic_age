import { GalacticAge } from './galacticage.js';

describe('GalacticAge', function() {
  let userAge;

  beforeEach(function() {
    let userAge = new GalacticAge(15, 04, 2002);
  });

  it('should show how beforeEach() works', function() {
    console.log((userAge.day).toEqual("15"));
  });
