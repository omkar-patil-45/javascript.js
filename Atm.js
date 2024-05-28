function ATM() {
  this.balance = 0;

  this.deposite = function (value) {
    this.balance += value;
    console.log(`Rs.${value} deposited.`)

  }


  this.withdraw = function (value) {
    if (value > this.balance) {
      console.log("insufficiant balance.");
      return false;
    }
    this.balance -= value;
    console.log(`Rs.${value} withdrawn.`);
  }
  this.checkBalance = function () {
    console.log(`Availble balance is Rs.${this.balance}`)
  }


}
const axis = new ATM();
axis.checkBalance();
axis.deposite(200);
axis.checkBalance();
axis.withdraw(100);
axis.checkBalance();
axis.withdraw(10);
axis.checkBalance();

axis.withdraw(100);
axis.checkBalance();

