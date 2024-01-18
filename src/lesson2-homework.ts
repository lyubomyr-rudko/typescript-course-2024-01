// + TODO: remove this comment and the next line, make sure the code compiles
// /* eslint-disable @typescript-eslint/no-unused-vars */

// + exercise4
// Create a function which uses tuple type to calculate the distance between two points in 2D space
// TODO: declare two variables of type tuple, each with two numbers
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: create a function which calculates the distance between two points in 2D space
// function distance(p1: [number, number], p2: [number, number]): number {
//   const x1 = 0; // TODO: replace with the first element of p1
//   const y1 = 0; // TODO: replace with the second element of p1
//   const x2 = 0; // TODO: replace with the first element of p2
//   const y2 = 0; // TODO: replace with the second element of p2
// TODO: calculate the distance
// TODO: call the function and print the result to console
// TODO: compile and run the code

function exercise4() {
  type TPoint = [number, number];
  const point1: TPoint = [1, 2];
  const point2: TPoint = [4, 5];
  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
  const calculateDistance: DistanceFunction = (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));
  };
  const result = calculateDistance(point1, point2);
  console.log(`Distance between (${point1}) and (${point2}): ${result}`);
}

exercise4();

// + exercise5
// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
// TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
// TODO: declare two variables of type TPoint
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: create a function which calculates the distance between two points in 2D space
//   type TPoint = { /* replace  with your code */ x: '' };
//   function distance(p1: TPoint, p2: TPoint): number {
//     const x1 = 0; // TODO: replace with the first element of p1
//     const y1 = 0; // TODO: replace with the second element of p1
//     const x2 = 0; // TODO: replace with the first element of p2
//     const y2 = 0; // TODO: replace with the second element of p2
// TODO: use distructuring to get x and y from p1 and p2
// TODO: calculate the distance
// TODO: call the function and print the result to console
// TODO: compile and run the code

function exercise5() {
  type TPoint = { x: number; y: number };
  const point1: TPoint = { x: 1, y: 1 };
  const point2: TPoint = { x: 4, y: 5 };

  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
  const distance: DistanceFunction = (p1, p2) => {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  const result = distance(point1, point2);
  console.log(
    `Distance between (${point1.x},${point1.y}) and (${point2.x},${point2.y}): ${result}`,
  );
}

exercise5();

// + exercise6
// Create functions that use const declarations
// TODO: declare a const PI and assign value 3.14
// TODO: declare a function which calculates a circle area, takes radius as a parameter
// TODO: call the function and print the result to console
// TODO: check the type of PI variable
// TODO: declare a const variable that is an object with two properties - name and age
// TODO: declare a function which takes a person object as a parameter and increments age by 1
// TODO: call the function and print the person object to console

function exercise6(): void {
  const PI: number = 3.14;
  const calcCircleArea = (radius: number): number => {
    return PI * radius * radius;
  };
  const radius = 8;
  const area = calcCircleArea(radius);
  console.log(`Circle area radius ${radius}: ${area}`);

  console.log(typeof PI);

  const person: { name: string; age: number } = { name: `John`, age: 25 };
  const incrementAge = (p: { name: string; age: number }) => {
    p.age += 1;
  };
  incrementAge(person);
  console.log(person);
}

exercise6();

// + exercise7
// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
// TODO: add type annotations
// TODO: add logic here
// TODO: use regular for loop
// TODO: create an array of numbers
// TODO: create a function which doubles a number
// TODO: call map function (created earlier) with the array and the function
// TODO: print the result to console
// TODO: compile and run the code
function exercise7() {
  function map(arr: number[], fn: (num: number) => number): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const double = (num: number): number => {
    return num * 2;
  };

  const doubleNumbers = map(numbers, double);

  console.log(`Original array:`, numbers);
  console.log(`Double array`, doubleNumbers);
}

exercise7();

// + exercise8
// declare a function which takes a user and prints greeting to console
// TODO: create a type for user, with name property
// TODO: create a function with name printGreeting, which takes a user and prits greeting to console
// TODO: create a type for product, with name property and price property
// TODO: create a product object, asign it some object literal
// TODO: call the function with product as a parameter
// TODO: call the function with object literal as a parameter
// TODO: try adding extra property to the object literal - observe the error
// TODO: fix the error with type assertion
// TODO: compile and run the code

function exercise8() {
  type User = {
    name: string;
  };

  function printGreetings(user: User): void {
    console.log(`Hello, ${user.name}!`);
  }

  type Product = {
    name: string;
    price: number;
  };
  const laptop: Product = {
    name: `Laptop`,
    price: 999.99,
  };

  printGreetings(laptop);
  printGreetings({ name: `John` });
  // printGreetings({ name: "John", age: 25 }); // Error: Object literal may only specify known properties
  printGreetings({ name: `John`, age: 25 } as User);
}

exercise8();

// + exercise9
// declare a `Book` class with a constructor and a method
// TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
// TODO: constructor should take three parameters - title and year of publication
// TODO: method `getInfo` should return the book title and year as a string
// TODO: create a book object and call the method `getInfo`, print the result to console
// TODO: assign a new value to the year property
// TODO: call the method `getInfo` again
// TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
// TODO: call the method `getAge` and print the result to console
// TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
// TODO: call the method `revise` and pass a new year as a parameter
// TODO: add private modifier to the year property
// TODO: try to access the year property from outside of the class - observe the error
// TODO: change protected modifier to the year property, remove private modifier
// TODO: create a subclass `Magazine` which extends `Book` class
// TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
// TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
// TODO: use super keyword to call the `Book` class constructor with title and year parameters
// TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
// TODO: use super keyword to call the `getInfo` method of the `Book` class
// TODO: create a magazine object and call the method `getInfo`, print the result to console
// TODO: call the inherited method `getAge` of the magazine object and print the result to console
// TODO: compile and run the code

function exercise9() {
  class Book {
    private year: number;

    constructor(
      private title: string,
      year: number,
    ) {
      this.year = year;
    }

    getInfo(): string {
      return `Title: ${this.title}, Year: ${this.year}`;
    }

    getAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }

    revise(newYear: number): void {
      if (newYear > this.year && newYear <= new Date().getFullYear()) {
        this.year = newYear;
      } else {
        console.error(`Invalid year for revision`);
      }
    }
  }

  class Magazine extends Book {
    constructor(
      title: string,
      year: number,
      private month: number,
      private day: number,
    ) {
      super(title, year);
    }

    getInfo(): string {
      const bookInfo = super.getInfo();
      return `${bookInfo}, Month: ${this.month}, Day: ${this.day}`;
    }
  }

  const book = new Book('The Great Gatsby', 1925);
  console.log(book.getInfo());
  console.log('Age of the book:', book.getAge());

  book.revise(1930);
  console.log('Revised book info:', book.getInfo());

  const magazine = new Magazine('National Geographic', 2022, 1, 15);
  console.log(magazine.getInfo());
  console.log('Age of the magazine:', magazine.getAge());
}

exercise9();

// + TODO: for exercise4 and exercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

// function dist1([x1, y1]: [number, number], [x2, y2]: [number, number]): number {
//   type TPoint = [number, number];
//
//   const point1: TPoint = [x1, y1];
//   const point2: TPoint = [x2, y2];
//
//   type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
//   const calculateDistance: DistanceFunction = ([x1, y1], [x2, y2]) =>
//     Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));
//
//   const result = calculateDistance(point1, point2);
//   console.log(`Distance between (${x1}, ${y1}) and (${x2}, ${y2}): ${result}`);
//   return result;
// }
//
// export { dist1 };
//
// function dist2(
//   p1: { x: number; y: number },
//   p2: { x: number; y: number },
// ): number {
//   type TPoint = { x: number; y: number };
//   type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
//
//   const distance: DistanceFunction = (p1, p2) => {
//     const { x: x1, y: y1 } = p1;
//     const { x: x2, y: y2 } = p2;
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   };
//
//   const result = distance(p1, p2);
//   console.log(
//     `Distance between (${p1.x},${p1.y}) and (${p2.x},${p2.y}): ${result}`,
//   );
//   return result;
// }
//
// export { dist2 };

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
// function exerciseA() {}
//
// // TODO: create a function which takes an array of numbers and returns the sum of all numbers
// function exerciseB() {}
//
// // TODO: create a function which takes an array of numbers and returns the average of all numbers
// function exerciseC() {}
//
// // TODO: create a function which takes an array of strings and returns the longest string
// function exerciseD() {}
