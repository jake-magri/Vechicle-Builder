// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Declare Truck class that extends vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[] = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(25,'GoodYear'), new Wheel(25,'GoodYear'), new Wheel(25,'GoodYear'), new Wheel(25,'GoodYear')];
    } else {
      this.wheels = wheels;
    };
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    let make = vehicle.make || console.log(`This vehicle doesnt exist!`);
    let model = vehicle.model || console.log(`This vehicle doesnt exist!`);
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${make} ${model} is being towed.`);
    } else {
      console.log(`The vehicle is too heavy to be towed!`)
    }
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed

  }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed,
  // color, towing capacity, and wheels

  override printDetails(): void {
    super.printDetails();
    
    console.log(
      `VIN: ${this.vin}
       COLOR: ${this.color}
       MAKE: ${this.make}
       MODEL: ${this.model}
       YEAR: ${this.year}
       WEIGHT: ${this.weight} lbs
       TOP SPEED: ${this.topSpeed} mph
       TOWING CAPACITY: ${this.towingCapacity} torque
       Wheels: ${this.wheels.length}`
    );

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }

}

// Export the Truck class as the default export
export default Truck;
