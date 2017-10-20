# Look Up Doc

#### _Epicodus Coding Project in JavaScript Using APIs_

#### By L. Devin MacKrell

## Description

_An app that allows the user to search for a doctor based on medical condition (example: sore throat) or by name._

## Setup/Installation Requirements

_Clone the repository from: [https://github.com/MacKLess/look-up-doc.git](https://github.com/MacKLess/look-up-doc.git).
_Install gulp & bower._
_Sign up for a free API key at: [https://developer.betterdoctor.com/](https://developer.betterdoctor.com/)_
_Create a .env file in your top level with the following code format: exports.apiKey = "YOUR-API-KEY"_
_Run in preferred browser._

## Specifications

* _User will search the database by entering a medical condition in textbox and get a list of doctors in the Seattle area._
* _User will search the database by entering a name in the textbox and get a list of doctors in the Seattle area._
* _If the query returns any doctors, the following info should be included: first name, last name, address, phone number, website, and whether the doctor is accepting new patients._
* _Non 200 OK responses (errors) should return with error message and information about type of error._
* _If no doctors meet the search criteria, a error message should be returned: "Sorry, there aren't any doctors who fit what you are seeking."_

## Known Bugs

*   The API at BetterDoctor.com will include search results for "last_name" that do not actually include a specific doctor. It is assumed that the search term is included in the name of the practice.

## Support and contact details

_Please contact [ldmackrell@gmail.com](mailto:ldmackrell@gmail.com) with questions, comments, or issues, or to contribute to the code._

## Technologies Used

* JavaScript
* jQuery
* Postman
* API
* Node
* SCSS

### License

Copyright (c) 2017 **L. Devin MacKrell**

*This software is licensed under the MIT license.*
