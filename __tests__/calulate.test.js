import { Person } from './../src/calculate.js';

describe ('Person', () => {
  let person;

  beforeEach( ()=> {
    person = new Person();
  });

  test('should input and store current age in Person object', ()=> {
    let ageInput = 37;
    person.age = ageInput;
    expect(person.age).toEqual(37);
  });
});