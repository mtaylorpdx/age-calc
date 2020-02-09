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
    person.planetAge(age);
    let ageList = `<p>Earth: ${person.age}</p><p>Mercury: ${person.mercuryAge}</p><p>Venus: ${person.venusAge}</p><p>Mars: ${person.marsAge}</p><p>Jupiter: ${person.jupiterAge}</p>`;
    $("#age-list").html(ageList);

    let death = parseInt($("#lifetimeInput").val());
    if (age < death) {
      person.mortality(death);
      let remainingList = `<h5>Days remaining to you:</h5><hr><p>Earth: ${person.remaining}</p><p>Mercury: ${person.mercuryAgeRemaining}</p><p>Venus: ${person.venusAgeRemaining}</p><p>Mars: ${person.marsAgeRemaining}</p><p>Jupiter: ${person.jupiterAgeRemaining}</p>`;
      $("#remaining-list").html(remainingList);
    } else {
      person.longevity(death);
      let exceededList = `<h5>Days overdue:</h5><hr><p>Earth: ${person.exceeded}</p><p>Mercury: ${person.mercuryAgeExceeded}</p><p>Venus: ${person.venusAgeExceeded}</p><p>Mars: ${person.marsAgeExceeded}</p><p>Jupiter: ${person.jupiterAgeExceeded}</p>`;
      $("#exceeded-list").html(exceededList);
    }

  });
});