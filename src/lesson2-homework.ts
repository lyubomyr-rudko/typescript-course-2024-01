// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // + TODO: declare two variables of type tuple, each with two numbers
  // let point1: [number, number];
  // let point2: [number, number];
  // + TODO: assign values to the variables (1,1) and (4,5)
  const point1: [number, number] = [1, 1];
  const point2: [number, number] = [4, 5];
  // + TODO: create a function which calculates the distance between two points in 2D space
  function calculateDistance(
    pointA: [number, number],
    pointB: [number, number],
  ): number {
    const deltaX = pointB[0] - pointA[0];
    const deltaY = pointB[1] - pointA[1];

    // Using the Pythagorean theorem to calculate distance
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
  // Test the function
  const distanceBetweenPoints = calculateDistance(point1, point2);
  console.log(`Distance between points: ${distanceBetweenPoints}`);

  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // + TODO: replace with the first element of p1
    const y1 = p1[1]; // + TODO: replace with the second element of p1
    const x2 = p2[0]; // + TODO: replace with the first element of p2
    const y2 = p2[1]; // + TODO: replace with the second element of p2
    // TODO: calculate the distance
    const deltaX = p2[0] - p1[0];
    const deltaY = p2[1] - p2[1];
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  // + TODO: call the function and print the result to console
  const result = distance(point1, point2);
  console.log(`Distance between points: ${result}`);
}
// + TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // + TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint1 = {
    x: number;
    y: number;
  };
  // + TODO: declare two variables of type TPoint
  // let point1: TPoint1;
  // let point2: TPoint1;
  // + TODO: assign values to the variables (1,1) and (4,5)
  const point1: TPoint1 = { x: 1, y: 1 };
  const point2: TPoint1 = { x: 4, y: 5 };
  // + TODO: create a function which calculates the distance between two points in 2D space
  function calculateDistance(pointA: TPoint1, pointB: TPoint1): number {
    const deltaX = pointB.x - pointA.x;
    const deltaY = pointB.y - pointA.y;

    // Используем теорему Пифагора
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
  type TPoint2 = {
    /* replace  with your code */
    x: number;
    y: number;
  };
  function distance(p1: TPoint2, p2: TPoint2): number {
    // const x1 = p1.x; // + TODO: replace with the first element of p1
    // const y1 = p1.y; // + TODO: replace with the second element of p1
    // const x2 = p2.x; // + TODO: replace with the first element of p2
    // const y2 = p2.y; // + TODO: replace with the second element of p2
    // + TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1; // Destructuring for p1
    const { x: x2, y: y2 } = p2; // Destructuring for p2
    // + TODO: calculate the distance
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
  // + TODO: call the function and print the result to console
  const result = distance(point1, point2);
  console.log(`Distance between points: ${result}`);
}
// + TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // + TODO: declare a const PI and assign value 3.14
  const PI: number = 3.14;
  // + TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calculateCircleArea(radius: number): number {
    return PI * Math.pow(radius, 2);
  }
  // TODO: call the function and print the result to console
  const result = calculateCircleArea(PI);
  console.log(result);
  // + TODO: check the type of PI variable
  console.log(typeof PI);
  // + TODO: declare a const variable that is an object with two properties - name and age
  type Person = {
    name: string;
    age: number;
  };
  const personFirst: Person = {
    name: 'Yurii',
    age: 31,
  };
  // + TODO: declare a function which takes a person object as a parameter and increments age by 1
  function updatePerson(person: Person): Person {
    return {
      ...person,
      age: person.age + 1,
    };
  }
  // TODO: call the function and print the person object to console
  const resultUpdatePerson = updatePerson(personFirst);
  console.log(resultUpdatePerson);
}
// + TODO: compile and run the code
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function processArray(
  numbers: number[],
  operation: (num: number) => number,
): number[] {
  // Apply the provided function to each element of the array
  return numbers.map(operation);
}
function exercise7() {
  // + TODO: add type annotations
  function map(arr: number[], fn: (num: number) => number): number[] {
    // + TODO: add logic here
    const resultArray: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      resultArray.push(fn(arr[i]));
    }
    return resultArray;
  }

  // + TODO: create an array of numbers
  const numbersArray: number[] = [1, 2, 3, 4, 5];

  // + TODO: create a function which doubles a number
  function doubleNumber(num: number): number {
    return num * 2;
  }

  // + TODO: call map function (created earlier) with the array and the function
  const doubledNumbers = map(numbersArray, doubleNumber);

  // + TODO: print the result to console
  console.log('Original Numbers:', numbersArray);
  console.log('Doubled Numbers:', doubledNumbers);
}

exercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // + TODO: create a type for user, with name property
  type User = {
    name: string;
  };
  // + TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: { price: number; name: string }): void {
    console.log(`Hello ${user}`);
  }
  // + TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // + TODO: create a product object, asign it some object literal
  const phone: Product = { name: 'GooglePixel', price: 350 };
  // + TODO: call the function with product as a parameter
  printGreeting(phone);
  // + TODO: call the function with object literal as a parameter
  printGreeting({ name: 'Iphone', price: 544 });
  // + TODO: try adding extra property to the object literal - observe the error
  // printGreeting({name: 'Samsung', price: 1000, category: 'Phone'})
  // + TODO: fix the error with type assertion
  const extraInfoProduct = {
    name: 'Book',
    price: 19.99,
    category: 'Educational',
  } as Product;
  printGreeting(extraInfoProduct);
}
// + TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
class Book {
  // TODO: add private modifier to the year property
  private year: number;

  constructor(
    public title: string,
    year: number,
  ) {
    // TODO: add validation to the constructor - year can not be in the future
    if (year > new Date().getFullYear()) {
      throw new Error('Year cannot be in the future');
    }

    this.year = year;
  }

  // TODO: change protected modifier to the year property, remove private modifier
  // protected year: number;

  // TODO: add a method `getInfo` which returns the book info as a string
  getInfo(): string {
    return `Title: ${this.title}, Year: ${this.year}`;
  }

  // TODO: add a new method `getAge` which returns the age of the book
  getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property
  // TODO: add validation to the method - year can not be in the future, year can not be less than prev year
  revise(newYear: number): void {
    if (newYear > new Date().getFullYear()) {
      throw new Error('Year cannot be in the future');
    }

    if (newYear < this.year) {
      throw new Error('Year cannot be less than the previous year');
    }

    this.year = newYear;
  }
}

// TODO: create a subclass `Magazine` which extends `Book` class
class Magazine extends Book {
  // TODO: add a new properties `month` and `day` to the `Magazine` class
  constructor(
    title: string,
    year: number,
    public month: number,
    public day: number,
  ) {
    // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
    // TODO: use super keyword to call the `Book` class constructor with title and year parameters
    super(title, year);
  }

  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  getInfo(): string {
    // TODO: use super keyword to call the `getInfo` method of the `Book` class
    return `${super.getInfo()}, Month: ${this.month}, Day: ${this.day}`;
  }
}

function exercise9() {
  // TODO: create a book object and call the method `getInfo`, print the result to console
  const myBook = new Book('The Great Gatsby', 1925);
  console.log('Book Info:', myBook.getInfo());

  // TODO: assign a new value to the year property
  // TODO: call the method `getInfo` again
  myBook.revise(1930);
  console.log('Updated Book Info:', myBook.getInfo());

  // TODO: call the method `getAge` and print the result to console
  console.log('Book Age:', myBook.getAge());

  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const myMagazine = new Magazine('National Geographic', 2022, 1, 15);
  console.log('Magazine Info:', myMagazine.getInfo());

  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log('Magazine Age:', myMagazine.getAge());
}
// + TODO: compile and run the code
exercise9();

// Additional tasks -
// TODO: create a function which takes any string and returns the string reversed through a for loop
function excerciseA(inputString: string): string {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

// + TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB(arr: number[]): number {
  return arr.reduce((num, acc) => num + acc, 0);
}

// + TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0; // Avoid division by zero
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// + TODO: create a function which takes an array of strings and returns the longest string
function excerciseD(strings: string[]): string {
  if (strings.length === 0) {
    return ''; // Return an empty string for an empty array
  }

  let longestString = strings[0]; // Assume the first string is the longest

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }

  return longestString;
}

// TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.js use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,1) should be 0
// 4. run the tests with `npm run test`
type TPoint2 = {
  /* replace  with your code */ x: number;
  y: number;
};
export function distance5(p1: TPoint2, p2: TPoint2): number {
  // const x1 = p1.x; // + TODO: replace with the first element of p1
  // const y1 = p1.y; // + TODO: replace with the second element of p1
  // const x2 = p2.x; // + TODO: replace with the first element of p2
  // const y2 = p2.y; // + TODO: replace with the second element of p2
  // + TODO: use distructuring to get x and y from p1 and p2
  const { x: x1, y: y1 } = p1; // Destructuring for p1
  const { x: x2, y: y2 } = p2; // Destructuring for p2
  // + TODO: calculate the distance
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

export function distance4(p1: [number, number], p2: [number, number]): number {
  const x1 = p1[0]; // + TODO: replace with the first element of p1
  const y1 = p1[1]; // + TODO: replace with the second element of p1
  const x2 = p2[0]; // + TODO: replace with the first element of p2
  const y2 = p2[1]; // + TODO: replace with the second element of p2
  // TODO: calculate the distance
  const deltaX = p2[0] - p1[0];
  const deltaY = p2[1] - p2[1];
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
