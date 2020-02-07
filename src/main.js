import { Person } from './calculate';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  person = new Person();
  $("#compute").click(function(event) { 
    event.preventDefault();

    console.log(person);

  });


});