// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// + excercise4
// Create a function which uses tuple type to calculate the distance between two points in 2D space
// TODO: declare two variables of type tuple, each with two numbers
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: create a function which calculates the distance between two points in 2D space
// function distance(p1: [number, number], p2: [number, number]): number {
//   const x1 = 0; // TODO: replace with the first element of p1
//   const y1 = 0; // TODO: replace with the second element of p1
//   const x2 = 0; // TODO: replace with the first element of p2
//   const y2 = 0; // TODO: replace with the second element of p2
//   // TODO: calculate the distance
//   return 0;
// }
// TODO: call the function and print the result to console
// }
// TODO: compile and run the code

type TPoint = [number, number];
function excercise4() {
  const point1: TPoint = [1, 2];
  const point2: TPoint = [4, 5];
  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
  const calculateDistance: DistanceFunction = (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));
  };
  const result = calculateDistance(point1, point2);
  console.log(`Distance between ${point1} and ${point2}: ${result}`);
}
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  type TPoint = { /* replace  with your code */ x: '' };
  function distance(p1: TPoint, p2: TPoint): number {
    const x1 = 0; // TODO: replace with the first element of p1
    const y1 = 0; // TODO: replace with the second element of p1
    const x2 = 0; // TODO: replace with the first element of p2
    const y2 = 0; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    // TODO: calculate the distance
    return 0;
  }
  // TODO: call the function and print the result to console
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  // TODO: call the function and print the result to console
  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  // TODO: call the function and print the person object to console
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  // function map(arr, fn) {
  // TODO: add logic here
  // TODO: use regular for loop
  // return [];
  // }
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  // TODO: create a type for product, with name property and price property
  // TODO: create a product object, asign it some object literal
  // TODO: call the function with product as a parameter
  // TODO: call the function with object literal as a parameter
  // TODO: try adding extra property to the object literal - observe the error
  // TODO: fix the error with type assertion
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
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

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function excerciseA() {}

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {}

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {}

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD() {}
