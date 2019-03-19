export class GalacticAge {
  constructor(day, month, year) {
    this.day = day,
    this.month = month,
    this.year = year,
    this.age = 0,
    this.today = new Date()
  }

  userAge() {
    this.age = (this.today.getFullYear() - this.year);
    return this.age;
  }

  mercuryAge() {
    return Math.round(this.age * .24);
  }

  venusAge() {
    return Math.round(this.age * .62);
  }

  marsAge() {
    return Math.round(this.age * 1.88);
  }

  jupiterAge() {
    return Math.round(this.age * 11.86);
  }

}
