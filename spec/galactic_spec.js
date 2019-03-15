import { GalacticAge } from './galacticage.js';

describe('GalacticAge', function() {
  var userAge;

  beforeEach(function() {
    var userAge = new GalacticAge(15, 04, 2002);
  });

  it('should show how beforeEach() works', function() {
    console.log((userAge.day).toEqual("15"));
  });
