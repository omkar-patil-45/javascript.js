// let school = {
//   name: 'New college',
//   location: 'Kolhapur',
//   established: 1971,
//   displayInfo: function () {
//     console.log(`${school.name} was established in ${school.established} at ${school.location}`);
//   }
// }
// school.displayInfo();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
  name: "Omkar",
  age: 25,
  countary: "India"
}
// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"
function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in Kolhapur " + person.countary);
}
// Call the logData() function to verify that it works
logData();
