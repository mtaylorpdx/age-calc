export class Person {
  constructor() {
    this.planetYears = [0.24, 0.62, 1.88, 11.86];
    this.planetAges = [];
  }

  planetAge(age) {
    this.age = age;
    let planetAges = this.planetYears.map(function(ratio) {
      return parseFloat((age / ratio).toFixed(2));
    });
    return this.planetAges = planetAges;
  }

  // If life expectancy is greater than current age
  mortality(deathAge) {
    this.remaining = deathAge - this.age;
    this.mercuryAgeRemaining = parseFloat((this.remaining / 0.24).toFixed(2));
    this.venusAgeRemaining = parseFloat((this.remaining / 0.62).toFixed(2));
    this.marsAgeRemaining = parseFloat((this.remaining / 1.88).toFixed(2));
    this.jupiterAgeRemaining = parseFloat((this.remaining / 11.86).toFixed(2));
  }

  // If life expectancy is less than current age
  longevity(deathAge) {
    this.exceeded = this.age - deathAge;
    this.mercuryAgeExceeded = parseFloat((this.exceeded / 0.24).toFixed(2));
    this.venusAgeExceeded = parseFloat((this.exceeded / 0.62).toFixed(2));
    this.marsAgeExceeded = parseFloat((this.exceeded / 1.88).toFixed(2));
    this.jupiterAgeExceeded = parseFloat((this.exceeded / 11.86).toFixed(2));
  }
}