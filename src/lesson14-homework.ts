// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

export function excerciseA(arr: number[]): number {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  if (!arr || arr.length <= 1) return 0;

  const sortedArr = arr.slice().sort((a, b) => a - b);
  const sum = sortedArr.slice(1, -1).reduce((acc, curr) => acc + curr, 0);
  return sum;
}
console.log(excerciseA([6, 2, 1, 8, 10]));

export function excerciseB(arr: number[]): [number, number] {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  if (!arr || arr.length === 0) return [0, 0];

  let countPositive = 0;
  let sumNegative = 0;

  arr.forEach((num) => {
    if (num > 0) {
      countPositive++;
    } else if (num < 0) {
      sumNegative += num;
    }
  });

  return [countPositive, sumNegative];
}
console.log(
  excerciseB([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),
);

export function excerciseC(arr: number[]): number[] {
  const productArray: number[] = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    productArray[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    productArray[i] *= product;
    product *= arr[i];
  }

  return productArray;
}
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes
// Array/list size is at least 2 .
// Array/list's numbers Will be only Positives
// Repetition of numbers in the array/list could occur.
// [10,20] return ==> [20,10]
// [1,2,3,4] return ==> [24,12,8,6]
// [1,5,2] return ==> [10,2,5]
// [10,3,5,6,2] return ==> [180,600,360,300,900]
// implement the funciton avoiding nested loops, with O(N)
console.log(excerciseC([10, 20])); // [20, 10]
console.log(excerciseC([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(excerciseC([1, 5, 2])); // [10, 2, 5]
console.log(excerciseC([10, 3, 5, 6, 2])); // [180, 600, 360, 300, 900]

function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:
  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle
  // Thursday - Liskov Substitution Principle
  // Friday - Interface Segregation Principle
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
}
excerciseD();

// Single responsibility principle
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start() {
    console.log('Car started');
  }

  stop() {
    console.log('Car stopped');
  }
}

class Airplane implements Vehicle {
  start() {
    console.log('Airplane started');
  }

  stop() {
    console.log('Airplane stopped');
  }
}

// Open-Closed Principle
interface VehicleFactory {
  createVehicle(): Vehicle;
}

class CarFactory implements VehicleFactory {
  createVehicle() {
    return new Car();
  }
}

class AirplaneFactory implements VehicleFactory {
  createVehicle() {
    return new Airplane();
  }
}

// Liskov Substitution Principle
class VehicleManager {
  manage(vehicle: Vehicle) {
    vehicle.start();
    vehicle.stop();
  }
}

// Interface Segregation Principle
interface Engine {
  start(): void;
}

class CarEngine implements Engine {
  start() {
    console.log('Car engine started');
  }
}

class AirplaneEngine implements Engine {
  start() {
    console.log('Airplane engine started');
  }
}

// Dependency Inversion Principle
class CarWithEngine {
  constructor(private engine: Engine) {}

  start() {
    this.engine.start();
    console.log('Car started');
  }
}

class AirplaneWithEngine {
  constructor(private engine: Engine) {}

  start() {
    this.engine.start();
    console.log('Airplane started');
  }
}

// example
const carFactory = new CarFactory();
const car = carFactory.createVehicle();

const airplaneFactory = new AirplaneFactory();
const airplane = airplaneFactory.createVehicle();

const vehicleManager = new VehicleManager();
vehicleManager.manage(car);
vehicleManager.manage(airplane);

const carEngine = new CarEngine();
const carWithEngine = new CarWithEngine(carEngine);
carWithEngine.start();

const airplaneEngine = new AirplaneEngine();
const airplaneWithEngine = new AirplaneWithEngine(airplaneEngine);
airplaneWithEngine.start();

export {};
