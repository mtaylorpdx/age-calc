import { Person } from './../src/calculate.js';

describe ('Person', () => {
  let person;

  beforeEach( ()=> {
    person = new Person();
    person.setAge(37);
  });

  test('should input and store current age in Person object', ()=> {
    let ageInput = 37;
    person.age = ageInput;
    expect(person.age).toEqual(37);
  });

  test('should input and store current age in Person object through setAge proto', ()=> {
    let ageInput = 37;
    person.setAge(ageInput);
    expect(person.age).toEqual(37);
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

  // test('should return age in Jupiter years rounded to 2 decimals, where 1 year equals 11.86 Earth years', ()=> {
  //   expect(person.jupiter()).toEqual(3.12);
  // });
});