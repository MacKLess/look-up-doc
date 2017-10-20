import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#doc-search').click(function(event) {
    event.preventDefault;
    let doc = $('#doc').val();
    $('#doc').val("");

    let request = new XMLHttpRequest();
    // this url has a name paramater "mary" for
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=mary&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&fields=profile(first_name%2Clast_name)%2Cpractices(visit_address%2Cphones%2Cwebsite%2Caccepts_new_patients)&skip=0&limit=10&user_key=d63cf5a06be51254d9f4e0e7deff7b36`;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      getELements = function(response) {
        console.log(JSON.stringify(response));
      }

  });
});
