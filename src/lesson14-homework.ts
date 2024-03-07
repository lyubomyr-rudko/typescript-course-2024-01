// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

function excerciseA(arr: number[] | null | undefined): number {
  if (!arr || arr.length <= 1) return 0;

  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.

  if (!arr || arr.length <= 1) return 0;
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const sum = sortedArr.slice(1, -1).reduce((acc, curr) => acc + curr, 0);
  return sum;

  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
}
console.log(excerciseA([6, 2, 1, 8, 10]));
console.log(excerciseA([1, 1, 11, 2, 3]));
console.log(excerciseA(undefined));

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function excerciseB(arr: number[] | null | undefined): number[] {
  if (!arr || arr.length === 0) return [];

  let positiveCount = 0;
  let negativeSum = 0;

  for (const num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return [positiveCount, negativeSum];
}

// Example usage:
const result = excerciseB([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result); // [10, -65]

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

function excerciseC(arr: number[]): number[] {
  const productArr: number[] = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    productArr[i] = product;
    product *= arr[i];
  }

  product = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    productArr[i] *= product;
    product *= arr[i];
  }

  return productArr;
}

const result2 = excerciseC([10, 3, 5, 6, 2]);
console.log(result2);

function excerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.

  // class Car {
  //   start(): void {
  //     console.log('Автомобиль заведен');
  //   }
  // }

  // class Driver {
  //   drive(): void {
  //     const car = new Car();
  //     car.start();
  //   }
  // }

  // const driver = new Driver();
  // driver.drive();

  interface Vehicle {
    start(): void;
  }

  class Car implements Vehicle {
    start(): void {
      console.log('Автомобиль заведен');
    }
  }

  class Driver {
    private vehicle: Vehicle;

    constructor(vehicle: Vehicle) {
      this.vehicle = vehicle;
    }

    drive(): void {
      this.vehicle.start();
    }
  }

  const car = new Car();
  const driver = new Driver(car);
  driver.drive();
}
excerciseD();

export { excerciseA, excerciseB, excerciseC };
