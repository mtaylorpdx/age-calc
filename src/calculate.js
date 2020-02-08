import { Person } from './../src/calculate.js';

describe ('Person', () => {
  let person;

  beforeEach( ()=> {
    person = new Person(37);
  });

  test('should return age in Mercury years rounded to 2 decimals, where 1 year equals 0.24 Earth years', ()=> {
    expect(person.mercury()).toEqual(154.17);
  });

  test('should return age in Venus years rounded to 2 decimals, where 1 year equals 0.62 Earth years', ()=> {
    expect(person.venus()).toEqual(59.68);
  });

  test('should return age in Mars years rounded to 2 decimals, where 1 year equals 1.88 Earth years', ()=> {
    expect(person.mars()).toEqual(19.68);
  });

  test('should return age in Jupiter years rounded to 2 decimals, where 1 year equals 11.86 Earth years', ()=> {
    expect(person.jupiter()).toEqual(3.12);
  });

  test('should return ages for all planets', ()=> {
    expect(person.planetAges()).toEqual([154.17, 59.68, 19.68, 3.12]);
  });
});

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