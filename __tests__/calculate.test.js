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