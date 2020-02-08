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

  mortality(death) {
    this.life = death - this.age;
    console.log(this.life);
    this.mercuryAgeRemaining = parseFloat((this.life / 0.24).toFixed(2));
    this.venusAgeRemaining = parseFloat((this.life / 0.62).toFixed(2));
    this.marsAgeRemaining = parseFloat((this.life / 1.88).toFixed(2));
    this.jupiterAgeRemaining = parseFloat((this.life / 11.86).toFixed(2));
  }
}


// export class Person {
//   constructor(age) {
//     this.age = age;
//     this.ages = [];
//     this.agesExceeded = [];
//     this.agesRemaining = [];
//   }

//   planetAges(age) {
//     const planetYears = [0.24, 0.62, 1.88, 11.86];
//     let ages = planetYears.map(function(ratio) {
//       return parseFloat((age / ratio).toFixed(2));
//     });
//     this.ages = ages;
//   }

//   mortality(deathAge, age) {
//     if (age > deathAge) {
//       let remaining = age - deathAge;
//       let agesExceeded = age.planetAges(remaining);
//       this.agesExceeded = agesExceeded;
//     } else {
//       let remaining = deathAge - this.age;
//       let agesRemaining = age.planetAges(remaining);
//       this.agesRemaining = agesRemaining;
//     }
//   }
// }