const store = { drivers: [], passengers: [] };
class Driver {
  constructor(name) {
    this.name = name;
    store.drivers.push(this);
  };
};
