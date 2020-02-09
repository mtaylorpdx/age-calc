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
    let death = parseInt($("#lifetimeInput").val());
    if (age < death) {
      person.mortality(death);
    } else {
      person.longevity(death);
    }
  });
});