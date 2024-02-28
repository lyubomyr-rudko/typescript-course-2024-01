// TODO: add unit tests for excerciseA, excerciseB, excerciseC tasks
// TODO: read excerciseD and plan in advance which SOLID principle you will use for your homework

function exerciseA() {
  // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
  // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  // Mind the input validation.
  // Example
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  // Input validation
  // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
  return function getSum(arr: unknown): number {
    if (
      !Array.isArray(arr) ||
      arr.length <= 1 ||
      arr.filter((el) => typeof el !== 'number').length
    ) {
      return 0;
    }
    let lowestEl: number = arr.reduce((acc, el) => {
      if (el < acc) {
        acc = el;
      }
      return acc;
    }, Infinity);

    let highestEl: number = arr.reduce((acc, el) => {
      if (el > acc) {
        acc = el;
      }
      return acc;
    }, -Infinity);

    for (const el of arr) {
      if (el === lowestEl) {
        arr.splice(arr.indexOf(el), 1);
        lowestEl = NaN;
      }
      if (el === highestEl) {
        arr.splice(arr.indexOf(el), 1);
        highestEl = NaN;
      }
    }

    return arr.reduce((acc, el) => {
      return (acc += el);
    }, 0);
  };
}
exerciseA();

function exerciseB() {
  // Given an array of integers.
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  // If the input is an empty array or is null, return an empty array.
  // Example
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  return function getSumArr(arr: unknown): number[] {
    if (
      !Array.isArray(arr) ||
      !arr.length ||
      arr.filter((el) => typeof el !== 'number').length
    ) {
      return [];
    }
    const positiveCount = arr.filter((el) => el > 0).length;
    const negativeSum = arr
      .filter((el) => el < 0)
      .reduce((acc, el) => (acc += el), 0);
    return [positiveCount, negativeSum];
  };
}
exerciseB();

function exerciseC() {
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
  return function getProductArr(arr: number[]): number[] {
    const multiRes: number = arr.reduce((acc, el) => (acc *= el), 1);
    const res: number[] = arr.map((el) => multiRes / el);
    return res;
  };
}
exerciseC();

function exerciseD() {
  // Describe one of the SOLID principles. Provide an example of before and after the principle was applied.
  // Select the principle by the day of the week you send your homework:
  //
  // Tuesday - Single responsibility principle
  // Wednesday - Open-Closed Principle

  // before

  class Tractor {
    distance: number;
    time: number;
    constructor(distance: number, time: number) {
      this.distance = distance;
      this.time = time;
    }
    getSpeed() {
      if (this instanceof Plane && this.isCloudy) {
        //for getSpeed() for class Plane I added check if it`s cloudy today because planes can`t fly when it`s cloudy
        return 'Today is cloudy, plane can`t fly';
      }
      return `Speed = ${this.distance / this.time}`;
    }
  }
  class Plane extends Tractor {
    isCloudy: boolean;
    constructor(distance: number, time: number, isCloudy: boolean) {
      super(distance, time);
      this.isCloudy = isCloudy;
    }
  }
  const tractor = new Tractor(100, 10);
  const plane = new Plane(10, 0, true);
  console.log(tractor.getSpeed());
  console.log(plane.getSpeed());

  //after
  class Tractor2 {
    distance: number;
    time: number;
    constructor(distance: number, time: number) {
      this.distance = distance;
      this.time = time;
    }
    getSpeed(): string {
      return `Speed = ${this.distance / this.time}`;
    }
  }

  class Plane2 extends Tractor {
    isCloudy: boolean;
    constructor(distance: number, time: number, isCloudy: boolean) {
      super(distance, time);
      this.isCloudy = isCloudy;
    }
    getSpeed(): string {
      if (this.isCloudy) {
        return 'Today is cloudy, plane can`t fly';
      }
      return `Speed = ${this.distance / this.time}`;
    }
  }

  const tractor2 = new Tractor2(200, 19);
  const plane2 = new Plane2(1023, 6, false);
  console.log(tractor2.getSpeed());
  console.log(plane2.getSpeed());

  // Thursday - Liskov Substitution Principle
  // Friday - Interface Segregation Principle
  // Saturday - Dependency Inversion Principle
  //
  // Plan in advance, so your homework day matches the principle you want to use as an example.
}
exerciseD();

export { exerciseA, exerciseB, exerciseC };
