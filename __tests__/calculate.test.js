import { Person } from './../src/calculate.js';

describe ('Person', () => {
  let person;

  beforeEach( ()=> {
    person = new Person(37);
  });

  test('should return ages for all planets', ()=> {
    person.planetAges(37);
    expect(person.ages).toEqual([154.17, 59.68, 19.68, 3.12]);
  });

  // test('should calculate remaining life expectancy on each planet based on user input', ()=> {
  //   expect(person.mortality(72)).toEqual([145.83, 56.45, 18.62, 2.95]);
  // });

  // test('should determine how long past life expectancy if applicable', ()=> {
  //   expect(person.mortality(35)).toEqual([8.33, 3.23, 1.06, 0.17]);
  // });
});