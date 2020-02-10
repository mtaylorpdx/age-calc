import { Person } from './calculate';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let person = new Person();

  $("#form").submit(function(event) { 
    event.preventDefault();
    let age = parseInt($("#ageInput").val());
    let death = parseInt($("#lifetimeInput").val());

    // Calculate age in years for other planets and output results
    person.planetAge(age);
    let ageList = `<p>Earth: ${person.age}</p><p>Mercury: ${person.planetAges[0]}</p><p>Venus: ${person.planetAges[1]}</p><p>Mars: ${person.planetAges[2]}</p><p>Jupiter: ${person.planetAges[3]}</p>`;
    $("#age-list").html(ageList);

    // Check age relationship to life expectancy and output results
    if (age < death) {
      person.mortality(death);
      let balance = `<h5>Years remaining to you:</h5><hr><p>Earth: ${person.remaining}</p><p>Mercury: ${person.agesRemaining[0]}</p><p>Venus: ${person.agesRemaining[1]}</p><p>Mars: ${person.agesRemaining[2]}</p><p>Jupiter: ${person.agesRemaining[3]}</p>`;
      this.balance = balance;
      $("#balance").html(this.balance);
    } else {
      person.longevity(death);
      let balance = `<h5>Years overdue:</h5><hr><p>Earth: ${person.exceeded}</p><p>Mercury: ${person.agesExceeded[0]}</p><p>Venus: ${person.agesExceeded[1]}</p><p>Mars: ${person.agesExceeded[2]}</p><p>Jupiter: ${person.agesExceeded[3]}</p>`;
      $("#balance").html(balance);
    }
  });

  $("#close-button").click(function() {
    document.location.reload(true);
  });
});