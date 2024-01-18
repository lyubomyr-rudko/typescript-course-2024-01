type TPointsList = [number, number];
type TPoint = {
  x: number;
  y: number;
};

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers

  // TODO: assign values to the variables (1,1) and (4,5)
  const point1: TPointsList = [1, 1];
  const point2: TPointsList = [4, 5];

  // TODO: create a function which calculates the distance between two points in 2D space

  // TODO: call the function and print the result to console
  console.log(distance4(point1, point2));
}
// TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  // TODO: declare two variables of type TPoint
  // TODO: assign values to the variables (1,1) and (4,5)
  // TODO: create a function which calculates the distance between two points in 2D space
  // TODO: call the function and print the result to console
  const point1: TPoint = {
    x: 1,
    y: 1,
  };
  const point2: TPoint = {
    x: 4,
    y: 5,
  };

  console.log(distance5(point1, point2));
}
// TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  type TPi = 3.14;
  const PI: TPi = 3.14;
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function calcCircleArea(r: number): number {
    return PI * r ** 2;
  }
  // TODO: call the function and print the result to console
  console.log(calcCircleArea(3));
  // TODO: check the type of PI variable
  console.log(typeof PI === 'number');
  // TODO: declare a const variable that is an object with two properties - name and age
  type TPerson = {
    name: string;
    age: number;
  };
  const person: TPerson = {
    name: 'Valerii',
    age: 26,
  };
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function incrementAge(person: TPerson): void {
    person.age++;
  }
  // TODO: call the function and print the person object to console
  incrementAge(person);
  console.log(person);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  type TListOfNum = number[];
  type TFn = (num: number) => number;

  function map(arr: TListOfNum, fn: TFn): number[] {
    // TODO: add logic here
    // TODO: use regular for loop
    const res: TListOfNum = [];

    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i]));
    }
    return res;
  }
  // TODO: create an array of numbers
  const numList = [4, 5, 7, 8];

  // TODO: create a function which doubles a number
  function fn(num: number): number {
    return num * 2;
  }
  // TODO: call map function (created earlier) with the array and the function
  // TODO: print the result to console
  console.log(map(numList, fn));
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

  type TUser = {
    name: string;
  };
  type TProduct = {
    name: string;
    price: number;
  };

  const product: TProduct = {
    name: 'Skoda',
    price: 44000,
  };

  printGreeting(product);
  // printGreeting({ name: 'Skoda', price: 44000 });

  function printGreeting(user: TUser) {
    console.log(`Hello, ${user.name}`);
  }
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // +TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // +TODO: constructor should take three parameters - title and year of publication
  // +TODO: method `getInfo` should return the book title and year as a string
  // +TODO: create a book object and call the method `getInfo`, print the result to console
  // TODO: assign a new value to the year property
  // TODO: call the method `getInfo` again
  // +TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // +TODO: call the method `getAge` and print the result to console
  // +TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year
  // +TODO: call the method `revise` and pass a new year as a parameter
  // +TODO: add private modifier to the year property
  // +TODO: try to access the year property from outside of the class - observe the error
  // +TODO: change protected modifier to the year property, remove private modifier
  // +TODO: create a subclass `Magazine` which extends `Book` class
  // +TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // +TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // +TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // +TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // +TODO: use super keyword to call the `getInfo` method of the `Book` class
  // +TODO: create a magazine object and call the method `getInfo`, print the result to console
  // +TODO: call the inherited method `getAge` of the magazine object and print the result to console

  class Book {
    static date = new Date();

    protected year: number;
    title: string;

    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }

    getInfo(): string {
      return `Book "${this.title}" was published at ${this.year} year`;
    }
    getAge(): number {
      return Book.date.getFullYear() - this.year;
    }
    revise(newYear: number): void {
      if (newYear > this.year && newYear <= Book.date.getFullYear()) {
        this.year = newYear;
      } else {
        console.log(`New Year doesn't correspond existing rage`);
      }
    }
  }
  class Magazine extends Book {
    month: string;
    day: number;

    constructor(title: string, year: number, month: string, day: number) {
      super(title, year);
      this.month = month;
      this.day = day;
    }

    getInfo(): string {
      return `The book ${this.title} was published ${this.year} year was arrived to shop on ${this.day} ${this.month}`;
    }
  }
  const book = new Book('Harry Potter', 1997);
  console.log(book.getInfo());

  console.log(book.getAge());

  book.revise(2001);
  console.log(book.getInfo());

  // console.log(book.year); //Error: Property 'year' is private and only accessible within class 'Book'

  const shop = new Magazine('World History', 1980, 'April', 30);
  console.log(shop.getInfo());

  console.log(shop.getAge());
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

export function distance4(p1: TPointsList, p2: TPointsList): number {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  // TODO: calculate the distance
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
export function distance5(p1: TPoint, p2: TPoint): number {
  // TODO: use distructuring to get x and y from p1 and p2
  // TODO: calculate the distance

  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function excerciseA() {
  const someText = 'Hello, everybody!';

  console.log(reverseText(someText));

  function reverseText(str: string): string {
    const res: string[] = [];

    for (let i = str.length; i >= 0; i--) {
      res.push(str[i]);
    }
    return res.join('');
  }
}
excerciseA();

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB() {
  type TArrNum = number[];
  const arrNum: TArrNum = [12, 3, 55, 1, 7];

  console.log(sumNum(arrNum));

  function sumNum(arr: TArrNum): number {
    return arr.reduce((acc, num) => acc + num);
  }
}
excerciseB();

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC() {
  type TArrNum = number[];

  const arrNum: TArrNum = [10, 3, 12, 2, 5];

  console.log(averageNum(arrNum));

  function averageNum(arr: TArrNum): number {
    return arr.reduce((acc, num) => acc + num) / arr.length;
  }
}
excerciseC();

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD() {
  type TArrStr = string[];
  const arrStr: TArrStr = ['Kyiv', 'Odessa', 'Lviv', 'Zaporozhye', 'Dnepr'];

  console.log(longestStr(arrStr));

  function longestStr(arr: TArrStr): string {
    let res: string = arr[0];

    for (const str of arr) {
      if (str.length > res.length) {
        res = str;
      }
    }
    return res;
  }
}
excerciseD();
