export class Person {
  constructor(age) {
    this.age = age;
    this.ages = [];
    this.agesRemaining = [];
    this.agesExceeded = [];
  }

  planetAges(age) {
    const planetYears = [0.24, 0.62, 1.88, 11.86];
    let ages = planetYears.map(function(ratio) {
      return parseFloat((age / ratio).toFixed(2));
    });
    this.ages = ages;
  }

  mortality(deathAge) {
    if (this.age > deathAge) {
      let remaining = this.age - deathAge;
      let agesExceeded = this.planetAges(remaining);
      return agesExceeded;
    } else {
      let remaining = deathAge - this.age;
      let agesRemaining = this.planetAges(remaining);
      return agesRemaining;
    }
  }
}