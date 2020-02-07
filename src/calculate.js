export class Person {
  constructor() {
    this.age = 0;
  }
  setAge(ageInput) {
    this.age = ageInput;
  }

  mercury(){
    var mercuryAge = 0;
    console.log(this.age);
    mercuryAge = parseFloat((this.age / 0.24).toFixed(2));
    console.log(mercuryAge);
    return mercuryAge;
  }

  venus(){
    var venusAge = 0;
    venusAge = parseFloat((this.age / 0.62).toFixed(2));
    return venusAge;
  }
}