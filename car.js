
function Car(carName, wheel, fuelType, color, exRoomPrice, tax, drivingType, mileage, make) {
  this.carName = carName;
  this.wheel = wheel;
  this.fuelType = fuelType;
  this.color = color;
  this.exRoomPrice = exRoomPrice;
  this.tax = tax;
  this.drivingType = drivingType;
  this.mileage = mileage;
  this.make = make;

  this.nexongetDtails = function () {
    return `${this.carName} is produced by ${this.make} and provides ${this.mileage} km mileage on average.It costs ${this.exRoomPrice} rupees.`;
  }

  this.nexongetOnRoadPrice = function () {
    return `${this.carName}'s on road price is ${this.exRoomPrice + this.tax} rupees.`;

  }

}
const nexon = new Car("Nexon", 4, "petrol", "White", 100000, 20000, "Automatic", 18, "Tata");
// const baleno = new Car("");
// const xuv300 = new Car("");

console.log(nexon.nexongetDtails());
console.log(nexon.nexongetOnRoadPrice());


