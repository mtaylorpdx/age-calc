export class Person {
  constructor(age) {
    this.age = age;
  }

  planetAge() {
    this.mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
    this.venusAge = parseFloat((this.age / 0.62).toFixed(2));
    this.marsAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
  }

  mortality(deathAge) {
    this.remaining = deathAge - this.age;
    this.mercuryAgeRemaining = parseFloat((this.remaining / 0.24).toFixed(2));
    this.venusAgeRemaining = parseFloat((this.remaining / 0.62).toFixed(2));
    this.marsAgeRemaining = parseFloat((this.remaining / 1.88).toFixed(2));
    this.jupiterAgeRemaining = parseFloat((this.remaining / 11.86).toFixed(2));
  }

  longevity(deathAge) {
    this.exceeded = this.age - deathAge;
    this.mercuryAgeExceeded = parseFloat((this.exceeded / 0.24).toFixed(2));
    this.venusAgeExceeded = parseFloat((this.exceeded / 0.62).toFixed(2));
  }
}