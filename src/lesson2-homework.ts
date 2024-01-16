// Create a function which uses tuple type to calculate the distance between two points in 2D space
type NumberTuple = [number, number];
type TPoint = { x: number; y: number };

type CalculateDistanceCommonFn = (
  x1: number,
  x2: number,
  y1: number,
  y2: number,
) => number;

const calculateDistanceCommonFn: CalculateDistanceCommonFn = (
  x1,
  x2,
  y1,
  y2,
) => {
  const calculateSide = (c1: number, c2: number): number =>
    Math.abs(c1 - c2) ** 2;

  return Math.sqrt(calculateSide(x1, x2) + calculateSide(y1, y2));
};

function excercise4() {
  // +TODO: declare two variables of type tuple, each with two numbers
  // +TODO: assign values to the variables (1,1) and (4,5)
  const pointOne: NumberTuple = [1, 1];
  const pointTwo: NumberTuple = [4, 5];
  // +TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: NumberTuple, p2: NumberTuple): number {
    const x1 = p1[0]; // +TODO: replace with the first element of p1
    const y1 = p1[1]; // +TODO: replace with the second element of p1
    const x2 = p2[0]; // +TODO: replace with the first element of p2
    const y2 = p2[1]; // +TODO: replace with the second element of p2
    // +TODO: calculate the distance
    const result = calculateDistanceCommonFn(x1, x2, y1, y2);
    console.log('excercise 4 =', result);
    return result;
  }
  // +TODO: call the function and print the result to console
  distance(pointOne, pointTwo);
}
// +TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // +TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = { x: number; y: number };
  // +TODO: declare two variables of type TPoint
  // +TODO: assign values to the variables (1,1) and (4,5)
  const pointOne: TPoint = { x: 1, y: 1 };
  const pointTwo: TPoint = { x: 4, y: 5 };
  // +TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    // +TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // +TODO: calculate the distance
    const result = calculateDistanceCommonFn(x1, x2, y1, y2);
    console.log('excercise 5 =', result);
    return result;
  }
  // +TODO: call the function and print the result to console
  distance(pointOne, pointTwo);
}
// +TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // +TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  const circleArea = (radius: number): number => PI * radius ** 2;
  // +TODO: call the function and print the result to console
  const radius = 2;
  console.log(`Circle area with radius ${radius} =`, circleArea(radius));
  // +TODO: check the type of PI variable
  console.log('Type of PI is', typeof PI);
  // TODO: +declare a const variable that is an object with two properties - name and age
  type Person = {
    name: string;
    age: number;
  };
  const person: Person = {
    name: 'John Doe',
    age: 33,
  };
  // +TODO: declare a function which takes a person object as a parameter and increments age by 1
  const incrementAge = (person: Person): void => {
    person.age += 1;
  };
  // +TODO: call the function and print the person object to console
  incrementAge(person);
  console.log(person);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // +TODO: add type annotations
  type Callback = (index: number) => number;
  function map(arr: number[], fn: Callback): number[] {
    // +TODO: add logic here
    const result = [];
    // +TODO: use regular for loop
    for (let i = 1; i <= arr.length; i++) {
      result.push(fn(i));
    }
    return result;
  }
  // +TODO: create an array of numbers
  const numberArr = [1, 2, 3];
  // +TODO: create a function which doubles a number
  const doubleNumber: Callback = (number) => number * 2;
  // +TODO: call map function (created earlier) with the array and the function
  const mappedArray = map(numberArr, doubleNumber);
  // +TODO: print the result to console
  console.log('Doubled array:', mappedArray);
}
// +TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // +TODO: create a type for user, with name property
  type User = { name: string };
  // +TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  const printGreeting = (user: User) => {
    console.log(`Hello ${user.name}!`);
  };
  // +TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // +TODO: create a product object, asign it some object literal
  const product: Product = {
    name: 'Laptop',
    price: 750,
  };
  // +TODO: call the function with product as a parameter
  printGreeting(product);
  // +TODO: call the function with object literal as a parameter
  printGreeting({ name: 'Stranger' });
  // +TODO: try adding extra property to the object literal - observe the error
  // printGreeting({ name: 'Stranger', price: 750 });
  // Causes error: Object literal may only specify known properties, and 'price' does not exist in type 'User'
  // +TODO: fix the error with type assertion
  printGreeting({ name: 'Stranger' });
}
// +TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // +TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // +TODO: constructor should take three parameters - title and year of publication
  // +TODO: method `getInfo` should return the book title and year as a string
  class Book {
    title: string;
    protected year: number;

    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }

    getInfo() {
      return `There is a ${this.title} book was published at ${this.year}`;
    }

    getAge() {
      return new Date().getFullYear() - this.year;
    }

    revise(year: number) {
      const currentYear = new Date().getFullYear();
      const wrongCondition = year > currentYear || year < currentYear - 1;

      if (wrongCondition) {
        console.log('Wrong year for revise');

        return;
      }

      this.year = year;
    }
  }
  // +TODO: create a book object and call the method `getInfo`, print the result to console
  const book = new Book('Sovereign', 1513);
  console.log(book.getInfo());
  // +TODO: assign a new value to the year property
  // +TODO: call the method `getInfo` again
  console.log(book.getInfo());
  // +TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // +TODO: call the method `getAge` and print the result to console
  console.log(book.getAge());
  // +TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // +TODO: call the method `revise` and pass a new year as a parameter
  book.revise(2023);
  // +TODO: add private modifier to the year property
  // +TODO: try to access the year property from outside of the class - observe the error
  // +TODO: change protected modifier to the year property, remove private modifier
  // +TODO: create a subclass `Magazine` which extends `Book` class
  // +TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // +TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // +TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // +TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // +TODO: use super keyword to call the `getInfo` method of the `Book` class
  class Magazine extends Book {
    month: number;
    day: number;

    constructor(title: string, year: number, month: number, day: number) {
      super(title, year);
      this.month = month;
      this.day = day;
    }

    getInfo() {
      console.log(
        `There is a ${
          this.title
        } magazine was published at ${`${this.day}-${this.month}-${this.year}`}`,
      );

      return super.getInfo();
    }
  }
  // +TODO: create a magazine object and call the method `getInfo`, print the result to console
  const magazine = new Magazine('Forbes', 2022, 1, 16);
  console.log(magazine.getInfo());
  // +TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log(magazine.getAge());
}
// TODO: compile and run the code
excercise9();

// +TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

// Additional tasks - optional
// +TODO: create a function which takes any string and returns the string reversed
function excerciseA(str: string): string {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}
console.log('reversed string:', excerciseA('abc'));

// +TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num);
}
console.log('sum of array:', excerciseB([1, 2, 3, 4]));
// +TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC(arr: number[]): number {
  return excerciseB(arr) / arr.length;
}
console.log('average of array:', excerciseC([1, 2, 3]));
// +TODO: create a function which takes an array of strings and returns the longest string
function excerciseD(str: string[]): string {
  let longestStr = '';

  str.forEach(
    (string) =>
      (longestStr = string.length > longestStr.length ? string : longestStr),
  );

  return longestStr;
}
console.log('longest string:', excerciseD(['abc', 'abcde', 'abcd']));

export function distance4(p1: NumberTuple, p2: NumberTuple): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];

  return calculateDistanceCommonFn(x1, x2, y1, y2);
}

export function distance5(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  return calculateDistanceCommonFn(x1, x2, y1, y2);
}
