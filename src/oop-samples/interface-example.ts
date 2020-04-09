// interface is like a contract
// interfaces are only used in development time. No runtime script generated for them.
// can be used as types 

export interface Vehicle {
    brand: string;
    model: string;
    fuelConsumption: number;
    start(): void;
    stop(): void;
}

// inheritance
export interface SuperCar extends Vehicle {
    topSpeed: number;
}

// implements, Truck has its own start and stop mechanism (polymorphism)
export class Truck implements Vehicle {
    fuelConsumption: number;
    brand: string;
    model: string;
    capacity: number;

    start(): void {
        // start Truck
    }

    stop(): void {
        // stop Truck
    }
}

// implements, PassengerCar has its own start and stop mechanism (polymorphism)
export class PassengerCar implements Vehicle {
    fuelConsumption: number;
    passengerCapacity: number;
    brand: string;
    model: string;

    start(): void {
        // start car
    }

    stop(): void {
        // stop car
    }
}