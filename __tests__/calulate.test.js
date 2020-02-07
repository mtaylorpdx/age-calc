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

  test('should input and store current age in Person object through setAge proto', ()=> {
    let ageInput = 37;
    person.setAge(ageInput);;
    expect(person.age).toEqual(37);
  });

  test('should return age in Mercury years rounded to 2 decimals, where 1 year equals 0.24 Earth years', ()=> {
    expect(person.mercury()).toEqual(154.16);
  });
});