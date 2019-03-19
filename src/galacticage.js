export class GalacticAge {
  constructor(day, month, year) {
    this.day = day,
    this.month = month,
    this.year = year,
    this.today = new Date()
  }

  userAge() {
    return (this.today.getFullYear() - this.year);
  }
}
