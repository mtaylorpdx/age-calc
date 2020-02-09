export class Person {
  constructor() {
    this.planetYears = [0.24, 0.62, 1.88, 11.86];
    this.planetAges = [];
    this.agesRemaining = [];
    this.agesExceeded = [];
  }

  planetAge(age) {
    this.age = age;
    let planetAges = this.planetYears.map(function(ratio) {
      return parseFloat((age / ratio).toFixed(2));
    });
    this.planetAges = planetAges;
  }

  // If life expectancy is greater than current age
  mortality(deathAge) {
    let remaining = deathAge - this.age;
    this.remaining = remaining;
    let agesRemaining = this.planetYears.map(function(ratio) {
      return parseFloat((remaining / ratio).toFixed(2));
    });
    this.agesRemaining = agesRemaining;
  }

  // If life expectancy is less than current age
  longevity(deathAge) {
    let exceeded = this.age - deathAge;
    this.exceeded = exceeded;
    let agesExceeded = this.planetYears.map(function(ratio) {
      return parseFloat((exceeded / ratio).toFixed(2));
    });
    this.agesExceeded = agesExceeded;
  }
}