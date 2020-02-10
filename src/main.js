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
      $("#balance").html(person.balance);
    } else {
      person.longevity(death);
      $("#balance").html(person.balance);
    }
  });

  $("#close-button").click(function() {
    document.location.reload(true);
  });
});