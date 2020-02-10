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
    let balance = `<h5>Years remaining to you:</h5><hr><p>Earth: ${this.remaining}</p><p>Mercury: ${this.agesRemaining[0]}</p><p>Venus: ${this.agesRemaining[1]}</p><p>Mars: ${this.agesRemaining[2]}</p><p>Jupiter: ${this.agesRemaining[3]}</p>`;
    this.balance = balance;
  }

  // If life expectancy is less than current age
  longevity(deathAge) {
    let exceeded = this.age - deathAge;
    this.exceeded = exceeded;
    let agesExceeded = this.planetYears.map(function(ratio) {
      return parseFloat((exceeded / ratio).toFixed(2));
    });
    this.agesExceeded = agesExceeded;
    let balance = `<h5>Years overdue:</h5><hr><p>Earth: ${this.exceeded}</p><p>Mercury: ${this.agesExceeded[0]}</p><p>Venus: ${this.agesExceeded[1]}</p><p>Mars: ${this.agesExceeded[2]}</p><p>Jupiter: ${this.agesExceeded[3]}</p>`;
    this.balance = balance;
  }
}