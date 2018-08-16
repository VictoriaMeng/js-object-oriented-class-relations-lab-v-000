const store = { drivers: [], passengers: [] };
let driverId = 0;
let passengerId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    store.drivers.push(this);
    this.id = ++driverId;
  };
};

class Passenger {
  constructor(name) {
    this.name = name;
    store.passengers.push(this);
    this.id = ++passengerId;
  };
};

class Trip {

}
