// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

// }
// const car1 = new Car("Audi");
// console.log(car1.name);


// Class Inheritance
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return this.carname;
//   }
// }
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + this.model;
//   }
// }
// const car1 = new Model("Ford", "Mustang");
// console.log(car1.show());



// you are creating a website for your college. Create a class User with 2 properties, name and email. iit also has a method call viewData() that allows user to view website data.

// let DATA = "Secret Information";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("data=", DATA);
//   }
// }
// const student1 = new User("Omkar", "Om@gmail.com");
// const student2 = new User("Daksh", "Daksh@gmail.com");

// console.log(student1.viewData());



// let DATA = "Secret Information";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("data=", DATA);
//   }
// }
// class Admin extends User {
//   constructor(name, email) {

//     super(name, email);
//   }
//   editData() {
//     DATA = "New Value";
//   }
// }
// const student1 = new User("Omkar", "Om@gmail.com");
// const student2 = new User("Daksh", "Daksh@gmail.com");

// const admin1 = new Admin("Akash", "Akash@gmail.com");

// console.log(student1.viewData());
// console.log(admin1.editData());
// console.log(admin1.viewData());

