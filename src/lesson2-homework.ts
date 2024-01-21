// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  const variableOne: [number, number] = [1, 1];
  const variableTwo: [number, number] = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
  // TODO: call the function and print the result to console
  console.log(distance(variableOne, variableTwo));
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = {
    x: number;
    y: number;
  };
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  const TPointOne: TPoint = { x: 1, y: 1 };
  const TPointTwo: TPoint = { x: 4, y: 5 };
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    // const x1 = p1.x; // TODO: replace with the first element of p1
    // const y1 = p1.y; // TODO: replace with the second element of p1
    // const x2 = p2.x; // TODO: replace with the first element of p2
    // const y2 = p2.y; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // TODO: calculate the distance
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
  // TODO: call the function and print the result to console
  console.log(distance(TPointOne, TPointTwo));
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function circleArea(radius: number): number {
    return PI * radius * radius;
  }

  // TODO: call the function and print the result to console
  console.log(circleArea(3));
  // TODO: check the type of PI variable
  console.log(typeof PI);
  // TODO: declare a const variable that is an object with two properties - name and age
  const person = { name: 'god', age: 33 };
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function aging(p: { name: string; age: number }) {
    return (p.age += 1);
  }
  // TODO: call the function and print the person object to console
  console.log(aging(person));
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  function map(arr: number[], fn: (num: number) => number) {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }
  // TODO: create an array of numbers
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  // TODO: create a function which doubles a number
  function doubleNumber(num: number): number {
    return num * 2;
  }

  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
  console.log(map(arrayOfNumbers, doubleNumber));
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type User = {
    name: string;
  };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: User) {
    console.log(`Hello, ${user.name}!`);
  }
  // TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // TODO: create a product object, asign it some object literal
  const laptop: Product = {
    name: `MacBook`,
    price: 0.99,
  };
  // TODO: call the function with product as a parameter
  printGreeting(laptop);
  // TODO: call the function with object literal as a parameter
  printGreeting({ name: `Alex` });
  // TODO: try adding extra property to the object literal - observe the error
  // printGreeting({ name: `Alex`, age: 33 });
  // TODO: fix the error with type assertion
  printGreeting({ name: `Alex`, age: 33 } as User);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
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
  class Book {
    public title: string;
    public year: number;

    constructor(title: string, year: number) {
      this.title = title;
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
      if (newYear <= this.year || newYear > new Date().getFullYear()) {
        console.error('Invalid year for revision');
      } else {
        this.year = newYear;
        console.log('Year revised to', newYear);
      }
    }
  }
  class Magazine extends Book {
    constructor(
      title: string,
      year: number,
      public month: number,
      public day: number,
    ) {
      super(title, year);
    }

    getInfo(): string {
      const bookInfo = super.getInfo();
      return `${bookInfo}, Month: ${this.month}, Day: ${this.day}`;
    }
  }

  const book = new Book("Harry Potter and the Philosopher's Stone", 2001);
  console.log(book);

  book.revise(2007);
  console.log('Revise Info:', book.getInfo());

  console.log('Book Age:', book.getAge());

  const magazine = new Magazine('play boy', 1953, 5, 27);
  console.log('Magazine Info:', magazine.getInfo());

  console.log('Magazine Age:', magazine.getAge());
}
// TODO: compile and run the code
excercise9();

// TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

export function distance1(p1: [number, number], p2: [number, number]): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return distance;
}

export function excercise4t(input: string): string {
  return input.split('').reverse().join('');
}

// ex5
type TPoint = {
  x: number;
  y: number;
};
const point: TPoint = { x: 1, y: 1 };
const point3: TPoint = { x: 4, y: 5 };
export function distance2(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export function excercise5t(input: string): string {
  return input.split('').reverse().join('');
}

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function excerciseA() {}

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {}

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {}

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD() {}
