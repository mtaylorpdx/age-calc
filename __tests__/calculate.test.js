import { Person } from './../src/calculate.js';

describe ('Person', () => {
  let person;

  beforeEach( ()=> {
    person = new Person(37);
  });

  test('should return ages for all planets', ()=> {
    expect(person.planetAges(37)).toEqual([154.17, 59.68, 19.68, 3.12]);
  });
});