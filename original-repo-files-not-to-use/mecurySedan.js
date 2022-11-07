
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle{
    
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
    }


loadPassenger(num)
{
    if(this.maxPassengers > this.passenger){
        this.num = (this.maxPassengers - this.passenger);
    }
}

start()
{
    if(this.fuel > 0){
        return this.start = true;
    }
    else{
        return this.start = false;
    }
}

scheduleService(mileage)
{  
    if(this.mileage > 30000){
        return this.scheduleService = true;
    }
    else{
        return this.scheduleService = false;
    }
}
}
let c = new Car ("Mecury", "Sedan", "1965", "color", "mileage");
console.log (c)