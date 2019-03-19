import $ from 'jquery';
// import { GalacticAge } from './../src/galacticage.js';






$(document).ready(function() {
  const userDay = 4;
  const userMonth = 7;
  const userYear = 1990;

  let today = new Date();

  console.log(today.getFullYear() - userYear);
});
