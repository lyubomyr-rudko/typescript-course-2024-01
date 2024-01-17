// + Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4(): void {
  //+ TODO: declare two variables of type tuple, each with two numbers
  const pointOne: [number, number] = [1, 1];
  const pointTwo: [number, number] = [4, 5];
  //+ TODO: assign values to the variables (1,1) and (4,5)

  //+ TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    const calculateDistance = Math.round(
      Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)),
    ); //+ TODO: calculate the distance
    return calculateDistance;
  }
  //+ TODO: call the function and print the result to console
  console.log(distance(pointOne, pointTwo));
}
// +TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  //+ TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = {
    x: number;
    y: number;
  };
  // +TODO: declare two variables of type TPoint
  // +TODO: assign values to the variables (1,1) and (4,5)
  const point1: TPoint = { x: 1, y: 1 };
  const point2: TPoint = { x: 4, y: 5 };
  // +TODO: create a function which calculates the distance between two points in 2D space
  function distance2(p1: TPoint, p2: TPoint): number {
    // const x1 = p1.x; // ?TODO: replace with the first element of p1
    // const y1 = p1.y; // ?TODO: replace with the second element of p1
    // const x2 = p2.x; // ?TODO: replace with the first element of p2
    // const y2 = p2.y; // ?TODO: replace with the second element of p2
    // +TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // +TODO: calculate the distance
    const calculateDistanceBeetwenTwoPoints = Math.round(
      Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)),
    );
    return calculateDistanceBeetwenTwoPoints;
  }
  // +TODO: call the function and print the result to console
  console.log(distance2(point1, point2));
}
// +TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // +TODO: declare a const PI and assign value 3.14
  const PI = 3.14;
  // +TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calculateCircleArea(radius: number): number {
    return PI * Math.pow(radius, 2);
  }
  // +TODO: call the function and print the result to console
  console.log(calculateCircleArea(2));
  // +TODO: check the type of PI variable
  console.log(typeof PI);
  // +TODO: declare a const variable that is an object with two properties - name and age
  type TPerson = {
    name: string;
    age: number;
  };
  const user: TPerson = { name: 'Yulia', age: 29 };
  // +TODO: declare a function which takes a person object as a parameter and increments age by 1
  function userOlder(objectAge: TPerson): number {
    return ++objectAge.age;
  }
  // +TODO: call the function and print the person object to console
  console.log(userOlder(user));
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  type TFirstParametr = number[];
  type TSecondParametr = (a: number) => number;
  function map(arr: TFirstParametr, fn: TSecondParametr) {
    // TODO: add logic here
    const res: number[] = [];
    // TODO: use regular for loop
    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i]));
    }
    return res;
  }
  // TODO: create an array of numbers
  const arrNumber: number[] = [1, 2, 3, 4, 5];
  // TODO: create a function which doubles a number
  function doublNum(num: number): number {
    return num * 2;
  }
  // TODO: call map function (created earlier) with the array and the function
  console.log(map(arrNumber, doublNum));
  // TODO: print the result to console
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TUser = { name: string };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: TUser) {
    console.log(`Hello, ${user.name}`);
  }
  // TODO: create a type for product, with name property and price property
  type TProduct = { name: string; price: number };
  // TODO: create a product object, asign it some object literal
  const product: TProduct = {
    name: 'tea',
    price: 65,
  };
  // TODO: call the function with product as a parameter
  printGreeting(product);
  // TODO: call the function with object literal as a parameter
  printGreeting({ name: 'tea' });
  // TODO: try adding extra property to the object literal - observe the error
  // printGreeting({name: 'tea', price: 65}) //Object literal may only specify known properties, and 'price' does not exist in type 'TUser'
  // TODO: fix the error with type assertion
  printGreeting({ name: 'tea', price: 65 } as TUser);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  class Book {
    title: string;
    yearOfPublication: number;
    //+ TODO: constructor should take three parameters - title and year of publication
    constructor(title: string, yearOfPublication: number) {
      this.title = title;
      this.yearOfPublication = yearOfPublication;
    }

    // +TODO: method `getInfo` should return the book title and year as a string
    getInfo(): string {
      return `${this.title} published in the ${this.yearOfPublication}`;
    }
    getAge(): number {
      return 2024 - this.yearOfPublication;
    }
    revise(newYearPublication: number) {
      if (newYearPublication > 2024) {
        console.log('year can not be in the future');
      }
      if (newYearPublication <= this.yearOfPublication) {
        console.log('year can not be less than prev year');
      } else {
        this.yearOfPublication = newYearPublication;
      }
    }
  }

  // +TODO: create a book object and call the method `getInfo`, print the result to console
  const book = new Book('TypeScript fot dummies', 2005);
  console.log(book.getInfo());
  // TODO: assign a new value to the year property
  book.yearOfPublication = 2010;
  // TODO: call the method `getInfo` again
  console.log(book.getInfo());
  // +TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // TODO: call the method `getAge` and print the result to console
  console.log(book.getAge());
  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // TODO: call the method `revise` and pass a new year as a parameter
  console.log(book.revise(2035));
  // +TODO: add private modifier to the year property
  // +TODO: try to access the year property from outside of the class - observe the error
  // Property 'yearOfPublication' is private and only accessible within class 'Book'.
  //  book.yearOfPublication = 2010;

  // +TODO: change protected modifier to the year property, remove private modifier
  //  Property 'yearOfPublication' is protected and only accessible within class 'Book' and its subclasses.
  // book.yearOfPublication = 2010;
  // TODO: create a subclass `Magazine` which extends `Book` class
  class Magazine extends Book {
    //+ TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
    month: string;
    day: number;
    // +TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
    constructor(
      title: string,
      yearOfPublication: number,
      month: string,
      day: number,
    ) {
      // +TODO: use super keyword to call the `Book` class constructor with title and year parameters
      super(title, yearOfPublication);
      this.month = month;
      this.day = day;
    }
    // +TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
    // +TODO: use super keyword to call the `getInfo` method of the `Book` class
    getInfo(): string {
      const bookInfo = super.getInfo();
      return `${bookInfo},${this.month},${this.day}`;
    }
  }

  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const magazine = new Magazine('CandyBar', 2005, 'May', 12);
  console.log(magazine.getInfo());
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  console.log(magazine.getAge());
}
// TODO: compile and run the code
excercise9();

// +TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// +1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// +2. import functions from lesson2-homework.js
// +3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// +4. run the tests with `npm run test`
export function distanceTest(
  p1: [number, number],
  p2: [number, number],
): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];
  const calculateDistance = Math.round(
    Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)),
  );
  return calculateDistance;
}

type TPoint = {
  x: number;
  y: number;
};
export function distanceTest2(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  const calculateDistanceBeetwenTwoPoints = Math.round(
    Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)),
  );
  return calculateDistanceBeetwenTwoPoints;
}

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
// function excerciseA() {}

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
// function excerciseB() {}

// TODO: create a function which takes an array of numbers and returns the average of all numbers
// function excerciseC() {}

// TODO: create a function which takes an array of strings and returns the longest string
// function excerciseD() {}
