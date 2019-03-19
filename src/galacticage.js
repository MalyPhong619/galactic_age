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
    return this.age * .24;
  }
}
