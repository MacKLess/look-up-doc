import { Doctor } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#doc-search').submit(function(event) {
    event.preventDefault();
    let issue = $('#issue').val();
    let doc = $('#name').val();
    $('#issue').val("");
    $('#name').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${doc}&location=47.608%2C-122.335%2C100&user_location=47.608%2C-122.335&sort=full-name-asc&fields=profile(first_name%2Clast_name)%2Cpractices(visit_address%2Cphones%2Cwebsite%2Caccepts_new_patients)&skip=0&limit=10&user_key=d63cf5a06be51254d9f4e0e7deff7b36`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
    });

    promise.then(function(response) {
      let data = JSON.parse(response);
      let doctor = new Doctor(data);
      $('#output').text("");
      if (data.data.length === 0) {
        $('#output').append(`<p>Sorry. There are no entries that match your criteria.</p>`);
      } else {
        doctor.findDoctor();
      }
      // console.log(JSON.stringify(data, null, '\t'));
    });


  });
});
