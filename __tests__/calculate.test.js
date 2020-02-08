export class Person {
  constructor(age) {
    this.age = age;
  }

  mercury(){
    let mercuryAge = 0;
    console.log(this.age);
    mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
    console.log(mercuryAge);
    return mercuryAge;
  }

  venus(){
    let venusAge = 0;
    venusAge = parseFloat((this.age / 0.62).toFixed(2));
    return venusAge;
  }

  mars(){
    let marsAge = 0;
    marsAge = parseFloat((this.age / 1.88).toFixed(2));
    return marsAge;
  }

  jupiter(){
    let jupiterAge = 0;
    jupiterAge = parseFloat((this.age / 11.86).toFixed(2));
    return jupiterAge;
  }
}

// import { Person } from './../src/calculate.js';

// describe ('Person', () => {
//   let person;

//   beforeEach( ()=> {
//     person = new Person(37);
//   });

//   test('should return ages for all planets', ()=> {
//     person.planetAges(37);
//     expect(person.ages).toEqual([154.17, 59.68, 19.68, 3.12]);
//   });

//   test('should calculate remaining life expectancy on each planet based on user input', ()=> {
//     person.planetAges(37);
//     person.mortality(72, 37);
//     expect(person.agesRemaining).toEqual([145.83, 56.45, 18.62, 2.95]);
//   });

//   test('should determine how long past life expectancy if applicable', ()=> {
//     person.planetAges(37);
//     person.mortality(35, 37);
//     expect(person.agesExceeded).toEqual([8.33, 3.23, 1.06, 0.17]);
//   });
// });