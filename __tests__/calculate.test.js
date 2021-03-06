import { Person } from './../src/calculate.js';

describe ('Person, if age < life expectancy', () => {
  let person;

  beforeEach( ()=> {
    person = new Person();
    person.planetAge(37);
    person.mortality(72);
  });

  test('should return age in Mercury years rounded to 2 decimals, where 1 year equals 0.24 Earth years', ()=> {
    expect(person.planetAges[0]).toEqual(154.17);
  });

  test('should return age in Venus years rounded to 2 decimals, where 1 year equals 0.62 Earth years', ()=> {
    expect(person.planetAges[1]).toEqual(59.68);
  });

  test('should return age in Mars years rounded to 2 decimals, where 1 year equals 1.88 Earth years', ()=> {
    expect(person.planetAges[2]).toEqual(19.68);
  });

  test('should return age in Jupiter years rounded to 2 decimals, where 1 year equals 11.86 Earth years', ()=> {
    expect(person.planetAges[3]).toEqual(3.12);
  });

  test('should return remaining life expectancy in Mercury years', ()=> {
    expect(person.agesRemaining[0]).toEqual(145.83);
  });

  test('should return remaining life expectancy in Venus years', ()=> {
    expect(person.agesRemaining[1]).toEqual(56.45);
  });

  test('should return remaining life expectancy in Mars years', ()=> {
    expect(person.agesRemaining[2]).toEqual(18.62);
  });

  test('should return remaining life expectancy in Jupiter years', ()=> {
    expect(person.agesRemaining[3]).toEqual(2.95);
  });
});

describe ('Person, if age >= life expectancy', () => {
  let person;

  beforeEach( ()=> {
    person = new Person();
    person.planetAge(37);
    person.longevity(35);
  });

  test('should return life expectancy exceeded in Mercury years', ()=> {
    expect(person.agesExceeded[0]).toEqual(8.33);
  });

  test('should return life expectancy exceeded in Venus years', ()=> {
    expect(person.agesExceeded[1]).toEqual(3.23);
  });

  test('should return life expectancy exceeded in Mars years', ()=> {
    expect(person.agesExceeded[2]).toEqual(1.06);
  });

  test('should return life expectancy exceeded in Jupiter years', ()=> {
    expect(person.agesExceeded[3]).toEqual(0.17);
  });
});