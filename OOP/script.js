"use strict";

// Coding Challenge #1

/*
1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/

//1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

//3
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

//Coding Challenge #2
/*
1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
by 1.6)
3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Createanewcarandexperimentwiththe'accelerate'and'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/
console.log("------Coding Challenge #2-----");

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake = function () {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  };
}

const ford = new CarCl("Ford", 120);
ford.accelerate();
ford.brake();
ford.speedUS = 120;
console.log(ford);
ford.accelerate();
ford.brake();

console.log("-----Coding Challenge #3-----");
//Coding Challenge #3
/*
1. UseaconstructorfunctiontoimplementanElectricCar(called'EV')asachild "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implementa'chargeBattery'methodwhichtakesanargument 'chargeTo' and sets the battery charge to 'chargeTo'
3. Implementan'accelerate'methodthatwillincreasethecar'sspeedby20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Createanelectriccarobjectandexperimentwithcalling'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

//1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();

console.log("-----Coding Challenge #4----");
//Coding Challenge #4

/*
1. Re-createChallenge#3,butthistimeusingES6classes:createan'EVCl' child class of the 'CarCl' class
2. Makethe'charge'propertyprivate
3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
rivian.chargeBattery(90);
rivian.accelerate();
rivian.accelerate().brake();
rivian.brake();

console.log(rivian.speedUS);
