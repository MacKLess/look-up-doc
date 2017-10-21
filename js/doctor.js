export class Doctor {
  constructor(data) {
    this.data = data;

  }
  findDoctor() {
    //loops through each doctor entry
    this.data.data.forEach(function(item) {
      let practice = item.practices[0];
      // collects first and last name;
      let firstName = item.profile.first_name;
      let lastName = item.profile.last_name;
      //collects address information;
      let street1 = practice.visit_address.street;
      let street2 = practice.visit_address.street2 || "";
      let city = practice.visit_address.city;
      let state = practice.visit_address.state;
      let zip = practice.visit_address.zip;
      // collects first phone number;
      let phone = practice.phones[0].number;
      // collects website if available
      let website = practice.website || "";
      // collects whether doctor accepts new patients
      let newPatient = "";
      if (practice.accepts_new_patients === false) {
        newPatient = "not";
      };
      $('#output').append(`<p>` +
        `${firstName} ${lastName}<br>` +
        `${street1}, ${street2}<br>` +
        `${city}, ${state} ${zip}<br>` +
        `${phone}  ${website}<br>` +
        `This doctor is ${newPatient} accepting new clients.</p><br><br>`
      );
    });
  };

}
