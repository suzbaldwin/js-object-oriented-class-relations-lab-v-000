let store = {drivers:[], trips:[], passengers:[]};
let driverId = 0;
let passengerId = 0;
let tripId  = 0;

class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId
      }
    )

  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }

}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId
      }
    )

}
drivers() {
  return this.trips().map(trip => {
    return trip.driver();
  });
}


}

class Trip {
  constructor(driver){
    this.id = ++tripId
    this.passengerId = passengerId
    this.driverId = driverId
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }
}
