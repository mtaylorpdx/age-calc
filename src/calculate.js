export class Person {
  constructor(age) {
    this.age = age;
  }

  planetAges(age){
    const planetYears = [0.24, 0.62, 1.88, 11.86];
    let ages = planetYears.map(function(ratio) {
      return parseFloat((age / ratio).toFixed(2));
    })
    console.log (ages);
    return (ages);
  }
}