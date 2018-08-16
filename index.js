const store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

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
  constructor(driver, passenger) {
    store.trips.push(this);
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
  };

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id = this.driverID;
    });
  )};
};
