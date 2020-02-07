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