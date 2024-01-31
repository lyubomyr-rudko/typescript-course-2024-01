// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4(): void {
  console.log('Function in the bottom');
}
excercise4();
//excercise4();
function excercise5(): void {
  console.log('Function in the bottom');
}
excercise5();
// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;

  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calculateCircleArea(radius: number): number {
    // TODO: call the function and print the result to console
    return 3.14 * radius;
  }
  const radius = 2;
  let result = calculateCircleArea(radius);
  console.log('Task6:', result);

  // TODO: check the type of PI variable
  console.log(typeof PI);

  // TODO: declare a const variable that is an object with two properties - name and age
  type TPerson = { name: string; age: number };
  const person: TPerson = { name: 'Nikita', age: 21 };

  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function incrementAge({ age: age }: TPerson): number {
    return (age += 1);
  }

  // TODO: call the function and print the person object to console
  result = incrementAge(person);
  console.log(result);
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
  function map(arr: number[], fn: (num: number) => number): number[] {
    const resultArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      resultArr.push(fn(arr[i]));
    }
    return resultArr;
  }

  // TODO: create an array of numbers
  const numbers: number[] = [1, 2, 3, 4, 5];

  // TODO: create a function which doubles a number
  const doubleFunction = (num: number) => num * 2;

  // TODO: call map function (created earlier) with the array and the function
  const result = map(numbers, doubleFunction);

  // TODO: print the result to console
  console.log('Task7', result);
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TPerson = string;
  const person: TPerson = 'Nikita';

  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(person: TPerson): string {
    return `Hello ${person}`;
  }
  const result = printGreeting(person);
  console.log('Task8: ', result);

  // TODO: create a type for product, with name property and price property
  type TProduct = { name: string; price: number };

  // TODO: create a product object, asign it some object literal

  const product: TProduct = { name: 'Beer', price: 99 };
  // TODO: call the function with product as a parameter
  function getProductParam(product: TProduct): TProduct {
    return product;
  }

  // TODO: call the function with object literal as a parameter
  const result2 = getProductParam(product);
  console.log(result2);

  // TODO: try adding extra property to the object literal - observe the error
  //product.marka = "Berdichevske"//Error

  // TODO: fix the error with type assertion
  const extendedProduct = { ...product, marka: 'Berdichevske' } as TProduct;
  console.log(extendedProduct);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  class Book {
    // TODO: constructor should take three parameters - title and year of publication
    title: string;
    // TODO: add private modifier to the year property
    // TODO: change protected modifier to the year property, remove private modifier
    protected yearOfPublication: number;

    constructor(title: string, yearOfPublication: number) {
      this.title = title;
      this.yearOfPublication = yearOfPublication;
    }
    // TODO: method `getInfo` should return the book title and year as a string
    getInfo(): void {
      console.log(`${this.title}-${this.yearOfPublication}`);
    }
    // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
    getAge(): number {
      return new Date().getFullYear() - this.yearOfPublication;
    }
    // TODO: add a new method `revise` which takes a new year as a parameter and updat	es the year property, add validation to the method - year can not be in the future, year can not be less than prev year
    revise(newYear: number): void {
      const isValidYear =
        newYear >= this.yearOfPublication &&
        newYear <= new Date().getFullYear();
      console.log(isValidYear ? 'Is valid' : 'Not valid');
    }
  }
  // TODO: create a book object and call the method `getInfo`, print the result to console
  console.log('task 9 -----------------------');
  const myBook = new Book('Churchill Factor', 2015);
  myBook.getInfo();

  // TODO: assign a new value to the year property
  // TODO: call the method `getInfo` again
  // TODO: try to access the year property from outside of the class - observe the error
  //myBook.yearOfPublication = 2022;//Error

  // TODO: call the method `getAge` and print the result to console
  const bookAge = myBook.getAge();
  console.log(`This book is ${bookAge} years old`);

  // TODO: call the method `revise` and pass a new year as a parameter
  myBook.revise(2024);

  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  class Magazine extends Book {
    month: number;
    day: number;
    constructor(
      title: string,
      yearOfPublication: number,
      month: number,
      day: number,
    ) {
      super(title, yearOfPublication);
      this.month = month;
      this.day = day;
    }
    getInfo(): void {
      const bookInfo = super.getInfo();
      console.log(`${bookInfo}, Published on ${this.month}/${this.day}`);
    }
  }
  const myBookInfo = new Magazine('A Brief History Of Time', 2022, 12, 15);
  // TODO: compile and run the code
  console.log(myBookInfo);
}
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
function excerciseA() {
  function reverseStr(str: string): string {
    //first variant
    //return str.split('').reverse().join('');
    //second variant
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  const result = reverseStr('ABC');
  console.log('excerciseA', result);
}
excerciseA();

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {
  function sumNumbers(arr: number[]): number {
    //First variant
    return arr.reduce((acc, num) => acc + num, 0);
    //Second varint
    // let sum: number = 0;
    // for (let i of arr) {
    //   sum += i;
    // }
    // return sum;
    //Third variant
    // let sum: number = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    // return sum;
  }
  const result = sumNumbers([12, 23]);
  console.log('excerciseB', result);
}
excerciseB();

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {
  function getAverageNum(arr: number[]): number {
    //first variant
    return arr.reduce((acc, num) => num + acc, 0) / arr.length;
    //second varint
    // let sum: number = 0;
    // arr.forEach((num) => {
    //   sum += num;
    // });
    // return arr.length ? sum / arr.length : 0;
    //return arr.length ? num / arr.length: 0;
    //third variant
    //     let averageNum: number = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //       averageNum += arr[i] / arr.length;
    //     }
    //     return averageNum;
    //   }
    //   const result = getAverageNum([1, 2, 3, 4, 5]);
    //   console.log('excerciseC', result);
  }
  const result = getAverageNum([1, 2, 3, 4, 5]);
  console.log('excerciseC', result);
}
excerciseC();

function excerciseD() {
  function getLongestStr(arr: string[]): string {
    if (arr.length === 0) {
      return '';
    }
    let longestStr: string = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestStr.length) {
        longestStr = arr[i];
      }
    }
    return longestStr;
  }

  const result = getLongestStr(['abbs', 'Aaa', 'aaaaa']);
  console.log('excerciseD', result);
}

excerciseD();

type TPoint = [number, number];
// TODO: assign values to the variables (1,1) and (4,5)
// TODO: declare two variables of type tuple, each with two numbers
const p1: TPoint = [1, 1];
const p2: TPoint = [4, 5];
// TODO: create a function which calculates the distance between two points in 2D space
// I used destructurization to get points
function distance([x1, y1]: TPoint, [x2, y2]: TPoint): number {
  // const x1 = p1[0]; // TODO: replace with the first element of p1
  // const y1 = p1[1]; // TODO: replace with the second element of p1
  // const x2 = p2[0]; // TODO: replace with the first element of p2
  // const y2 = p2[1]; // TODO: replace with the second element of p2
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
// TODO: call the function and print the result to console
const result4 = distance(p1, p2);
console.log('Task 4: ', result4);
export { distance };

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
// TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
type TPoint2D = { x: number; y: number };
// TODO: declare two variables of type TPoint
// TODO: assign values to the variables (1,1) and (4,5)
const point1: TPoint2D = { x: 1, y: 1 };
const point2: TPoint2D = { x: 4, y: 5 };
// TODO: create a function which calculates the distance between two points in 2D space
//type TPoint = { /* replace  with your code */ x: '' };
// In this task i also used destructurization when I get paramtrs
function distanceObject(
  { x: x1, y: y1 }: TPoint2D,
  { x: x2, y: y2 }: TPoint2D,
): number {
  // const x1 = p1.x; // TODO: replace with the first element of p1
  // const y1 = p1.y; // TODO: replace with the second element of p1
  // const x2 = p2.x; // TODO: replace with the first element of p2
  // const y2 = p2.y; // TODO: replace with the second element of p2
  // TODO: calculate the distance
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
// TODO: call the function and print the result to console
// TODO: compile and run the code
const result5 = distanceObject(point1, point2);
console.log('Task 5: ', result5);
export { distanceObject };
