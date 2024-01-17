/* eslint-disable @typescript-eslint/no-unused-vars */
// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  // TODO: assign values to the variables (1,1) and (4,5)
  const p1: [number, number] = [1, 1];
  const p2: [number, number] = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = 1; // TODO: replace with the first element of p1
    const y1 = 1; // TODO: replace with the second element of p1
    const x2 = 4; // TODO: replace with the first element of p2
    const y2 = 5; // TODO: replace with the second element of p2
    const a = x2 - x1;
    const b = y2 - y1;
    // TODO: calculate the distance
    return Math.sqrt(a * a + b * b);
  }
  // TODO: call the function and print the result to console
  const result = distance(p1, p2);
  console.log(result);
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = { x: number; y: number };
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  const p1: TPoint = { x: 1, y: 1 };
  const p2: TPoint = { x: 4, y: 5 };
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    // const x1 = 1; // TODO: replace with the first element of p1
    // const y1 = 1; // TODO: replace with the second element of p1
    // const x2 = 4; // TODO: replace with the first element of p2
    // const y2 = 5; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
  // TODO: call the function and print the result to console
  const resultDistr = distance(p1, p2);
  console.log(resultDistr);
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  let radius: number = 1;
  radius = 5;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function circleArea(radius: number): number {
    return PI * radius ** 2;
  }
  // TODO: call the function and print the result to console
  const resultRadius = circleArea(5);
  console.log(resultRadius);
  // TODO: check the type of PI variable
  // TODO: declare a const variable that is an object with two properties - name and age
  const user = { name: 'Jhon', age: 25 };
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function userAgeIncrement(user: { age: number }) {
    const { age } = user;
    user.age = age + 1;
    return user;
  }
  // TODO: call the function and print the person object to console
  const resultUser = userAgeIncrement(user);
  console.log(resultUser);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  const arr: number[] = [1, 2, 3];
  function fn(num: number): number {
    return num * 2;
  }
  function map(fn: (arg0: number) => number, arr: number[]) {
    // TODO: add logic here
    // TODO: use regular for loop
    const result = [];
    let res;
    for (let i = 0; i < arr.length; i++) {
      res = fn(arr[i]);
      result.push(res);
    }
    return result;
  }
  console.log(map(fn, arr));
  // TODO: create an array of numbers
  // TODO: create a function which doubles a number
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TUser = { name: string };
  const user: TUser = { name: 'Jhon' };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function userPrintGreeting(user: TUser) {
    const { name } = user;
    console.log(`HELLO  ${name}`);
  }
  userPrintGreeting(user);
  // TODO: create a type for product, with name property and price property
  type TProduct = { name: string; price: number };
  // TODO: create a product object, asign it some object literal
  let someProduct: TProduct = { name: 'fanta', price: 20 };
  // TODO: call the function with product as a parameter
  function showProduct(someProduct: TProduct) {
    const { name, price } = someProduct;
    console.log(`you product ${name} his price ${price}`);
  }
  showProduct(someProduct);
  // TODO: call the function with object literal as a parameter
  showProduct({ name: 'fanta', price: 20 });

  // TODO: try adding extra property to the object literal - observe the error
  // TODO: fix the error with type assertion
  type TProductBonus = { name: string; price: number; bonus: number };
  const someProductBonus: TProductBonus = {
    name: 'fanta',
    price: 20,
    bonus: 25,
  };
  someProduct = someProductBonus;
  showProduct(someProductBonus);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // TODO: constructor should take three parameters - title and year of publication
  // TODO: method `getInfo` should return the book title and year as a string
  class Book {
    title: string;
    yearPublication: number;
    constructor(title: string, yearPublication: number) {
      this.title = title;
      this.yearPublication = yearPublication;
      return this;
    }
    getInfo() {
      console.log(
        `This book ${this.title} publication ${this.yearPublication}`,
      );
    }
    getAge() {
      const age = 2024 - this.yearPublication;
      console.log(`Age book ${this.title} is ${age} year(s) `);
    }
    revise(year: number) {
      if (year <= 2024 && year >= 2022) {
        this.yearPublication = year;
        console.log(`year revise ${year}`);
      } else {
        console.log(
          `year can not be in the future, year can not be less than prev year`,
        );
      }
    }
  }
  // TODO: create a book object and call the method `getInfo`, print the result to console
  const Book2 = new Book('StarWars', 1989);
  console.log(Book2);
  Book2.getInfo();
  // TODO: assign a new value to the year property
  Book2.yearPublication = 2000;
  // TODO: call the method `getInfo` again
  Book2.getInfo();
  // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // TODO: call the method `getAge` and print the result to console
  Book2.getAge();
  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // TODO: call the method `revise` and pass a new year as a parameter
  Book2.revise(2024);
  // TODO: add private modifier to the year property
  // TODO: try to access the year property from outside of the class - observe the error
  // TODO: change protected modifier to the year property, remove private modifier
  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  class Magazine extends Book {
    month: number;
    day: number;
    constructor(
      title: string,
      yearPublication: number,
      month: number,
      day: number,
    ) {
      super(title, yearPublication);
      this.month = month;
      this.day = day;
    }
    getInfo() {
      super.getInfo();
      console.log(
        `This book ${this.title} publication ${this.yearPublication} day ${this.day} month ${this.month}`,
      );
    }
  }
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const Magazin2 = new Magazine('HarryPotter', 2001, 9, 21);
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log(Magazin2);
  Magazin2.getInfo();
  Magazin2.getAge();
}
// TODO: compile and run the code
excercise9();

// Additional tasks -
// TODO: create a function which takes any string and returns the string reversed
function excerciseA() {
  function reverseString(str: string) {
    let newstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newstr += str[i];
    }
    return newstr;
  }
  console.log(reverseString('typescript'));
}
excerciseA();

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {
  function summArr(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  const arr = [1, 2, 3];
  console.log(summArr(arr));
}
excerciseB();

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {
  function summArr(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] / arr.length;
    }
    return sum;
  }
  const arr = [1, 2, 3];
  console.log(summArr(arr));
}
excerciseC();

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD() {}

// Пытался под тесты сделать не получилось

// type TPoint = { x: number; y: number };
// export function distanceTest1(p1: TPoint, p2: TPoint) {
//   const { x: x1, y: y1 } = p1;
//   const { x: x2, y: y2 } = p2;
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// export function distanceTest2(
//   point1: [number, number],
//   point2: [number, number],
// ): number {
//   const x1 = 1;
//   const y1 = 1;
//   const x2 = 4;
//   const y2 = 5;
//   const a = x2 - x1;
//   const b = y2 - y1;
//   return Math.sqrt(a * a + b * b);
// }
