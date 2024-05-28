function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return `${this.firstName + this.lastName}`;
  }
  this.greet = function () {
    console.log(`Hello ${this.fullName()}and my age is${this.age}years old`);
  }
}
const person1 = new Person("Omkar", "Patil", 25);
console.log(person1.fullName());
person1.greet();


// function person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   this.greet = function () {
//     return (`Hi ${this.name}`);
//   }
// }
// const person1 = new person("Omkar", 25, "male");
// const person2 = new person("Shruti", 25, "Female");

// console.log(person1.name);


// function ATM(bankName) {
//   this.bankName = bankName;
//   this.accountBlance = 0;
//   this.deposit = function (amount) {
//     const currentBlance = this.accountBlance + amount;
//     this.accountBlance = currentBlance;
//     console.log(`Rs.${amount} deposited in your ${this.bankName} Bank Account.`);
//   }
//   this.withdraw = function (amount) {
//     if (amount > this.accountBlance) {
//       console.log(`Insufficient balance in your Account.`);
//       return false;
//     }
//     const currentBlance = this.accountBlance - amount;
//     this.accountBlance = currentBlance;
//     console.log(`Rs.${amount} withdraw from your ${this.bankName} Bank account.Remaning Account balance is Rs.`);
//   }
//   this.balance = function () {
//     console.log(`Available balance in ${this.bankName} bank is Rs.${this.accountBlance}.`);
//   }
// }
// const atm1 = new ATM();
// atm1.balance();
// atm1.deposit(200);
// atm1.balance();
// atm1.withdraw(100);
// atm1.balance();
// atm1.withdraw(10);
// atm1.balance();

// atm1.withdraw(100);
// atm1.balance();



