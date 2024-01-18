// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // +TODO: declare two variables of type tuple, each with two numbers
  // +TODO: assign values to the variables (1,1) and (4,5)

  const p1: [number, number] = [1, 1];
  const p2: [number, number] = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // +TODO: replace with the first element of p1
    const y1 = p1[1]; // +TODO: replace with the second element of p1
    const x2 = p2[0]; // +TODO: replace with the first element of p2
    const y2 = p2[1]; // +TODO: replace with the second element of p2
    // +TODO: calculate the distance
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  // +TODO: call the function and print the result to console
  distance(p1, p2);
  console.log(distance(p1, p2));
}
// +TODO: compile and run the code
excercise4();

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // +TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint = { x: number; y: number };
  // +TODO: declare two variables of type TPoint
  // +TODO: assign values to the variables (1,1) and (4,5)
  const p1: TPoint = { x: 1, y: 1 };
  const p2: TPoint = { x: 4, y: 5 };
  // +TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: TPoint, p2: TPoint): number {
    // +TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // +TODO: calculate the distance
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }
  // +TODO: call the function and print the result to console
  distance(p1, p2);
  console.log(distance(p1, p2));
}
// +TODO: compile and run the code
excercise5();

// Create functions that use const declarations
function excercise6() {
  // +TODO: declare a const PI and assign value 3.14
  const PI = 3.14;

  // +TODO: declare a function which calculates a circle area, takes radius as a parameter
  const calculateCircleArea = (radius: number): number => {
    return PI * radius * radius;
  };
  // +TODO: call the function and print the result to console
  const radius: number = 2;
  const circleArea: number = calculateCircleArea(radius);
  console.log(`The area of the circle with radius ${radius} is: ${circleArea}`);
  // +TODO: check the type of PI variable
  console.log(`Type of PI: ${typeof PI}`);

  // +TODO: declare a const variable that is an object with two properties - name and age
  const person: { name: string; age: number } = { name: 'John', age: 30 };
  // +TODO: declare a function which takes a person object as a parameter and increments age by 1
  const incrementAge = (personObj: {
    name: string;
    age: number;
  }): {
    name: string;
    age: number;
  } => {
    const updatedPerson = { ...personObj, age: personObj.age + 1 };
    return updatedPerson;
  };
  // +TODO: call the function and print the person object to console
  const updatedPerson: { name: string; age: number } = incrementAge(person);
  console.log(`Original Person: ${JSON.stringify(person)}`);
  console.log(`Updated Person: ${JSON.stringify(updatedPerson)}`);
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // +TODO: add type annotations
  function map(arr: number[], fn: (num: number) => number): number[] {
    // +TODO: add logic here
    const result: number[] = [];
    // +TODO: use regular for loop
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }
  // +TODO: create an array of numbers
  const numbers: number[] = [1, 2, 3, 4, 5];
  // +TODO: create a function which doubles a number
  const double = (num: number): number => {
    return num * 2;
  };
  // +TODO: call map function (created earlier) with the array and the function
  const doubledNumbers: number[] = map(numbers, double);
  // +TODO: print the result to console
  console.log(`Original Array: ${numbers}`);
  console.log(`Doubled Array: ${doubledNumbers}`);
}
// +TODO: compile and run the code
excercise7();

// declare a function which takes a user and prits greeting to console
function excercise8() {
  // +TODO: create a type for user, with name property
  type User = {
    name: string;
  };
  // +TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: User): void {
    console.log(`Hello, ${user.name}!`);
  }
  // +TODO: create a type for product, with name property and price property
  type Product = {
    name: string;
    price: number;
  };
  // +TODO: create a product object, asign it some object literal
  const myProduct: Product = {
    name: 'Laptop',
    price: 999.99,
  };
  // +TODO: call the function with product as a parameter
  printGreeting(myProduct);
  // +TODO: call the function with object literal as a parameter
  printGreeting({ name: 'John' }); // Prints: Hello, John!
  // +TODO: try adding extra property to the object literal - observe the error
  // printGreeting({ name: 'Jane', age: 25 }); // Error: Object literal may only specify known properties, and 'age' does not exist in type 'User'.

  // +TODO: fix the error with type assertion
  printGreeting({ name: 'Jane', age: 25 } as User); // Prints: Hello, Jane!
}
// +TODO: compile and run the code
excercise8();

class Book {
  protected year: number;

  // +TODO: constructor should take three parameters - title and year of publication
  constructor(
    public title: string,
    year: number,
  ) {
    this.year = year;
  }

  // +TODO: method `getInfo` should return the book title and year as a string
  getInfo(): string {
    return `Title: ${this.title}, Year: ${this.year}`;
  }

  // +TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }

  // +TODO: add a new method `revise` which takes a new year as a parameter and updates the year property
  // add validation to the method - year cannot be in the future, year cannot be less than the previous year
  revise(newYear: number): void {
    if (newYear <= this.year || newYear > new Date().getFullYear()) {
      console.error('Invalid year for revision.');
      return;
    }
    this.year = newYear;
    console.log('Book revised successfully.');
  }
}

// +TODO: add private modifier to the year property
// try to access the year property from outside of the class - observe the error
// change protected modifier to the year property, remove private modifier

class Magazine extends Book {
  // +TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  constructor(
    title: string,
    year: number,
    public month: number,
    public day: number,
  ) {
    // +TODO: add constructor override to the Magazine class which takes four parameters - title, year, month, and day
    super(title, year);
  }

  // +TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  getInfo(): string {
    const bookInfo = super.getInfo();
    return `${bookInfo}, Month: ${this.month}, Day: ${this.day}`;
  }
}

// Compile and run the code
function exercise9() {
  // Create a book object and call the method `getInfo`, print the result to console
  const myBook = new Book('Introduction to TypeScript', 2020);
  console.log(myBook.getInfo());

  // Assign a new value to the year property
  myBook.revise(2022);
  console.log(myBook.getInfo());

  // Call the method `getAge` and print the result to console
  console.log(`Book Age: ${myBook.getAge()} years`);

  // Create a magazine object and call the method `getInfo`, print the result to console
  const myMagazine = new Magazine('Tech Magazine', 2021, 5, 15);
  console.log(myMagazine.getInfo());

  // Call the inherited method `getAge` of the magazine object and print the result to console
  console.log(`Magazine Age: ${myMagazine.getAge()} years`);
}
// Run the code
exercise9();

// Additional tasks -
// +TODO: create a function which takes any string and returns the string reversed

// function exerciseA(inputString: string): string {
//   return inputString.split('').reverse().join('');
// }
function exerciseA(inputString: string): string {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

const reversedString = exerciseA('Hello, World!');
console.log('Reversed String:', reversedString);

// +TODO: create a function which takes an array of numbers and returns the sum of all numbers
function exerciseB(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const sumOfNumbers = exerciseB([1, 2, 3, 4, 5]);
console.log('Sum of Numbers:', sumOfNumbers);

// +TODO: create a function which takes an array of numbers and returns the average of all numbers
function exerciseC(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

const averageOfNumbers = exerciseC([1, 2, 3, 4, 5]);
console.log('Average of Numbers:', averageOfNumbers);

// +TODO: create a function which takes an array of strings and returns the longest string
function exerciseD(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }
  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    '',
  );
}

const longestString = exerciseD(['apple', 'banana', 'orange', 'grape']);
console.log('Longest String:', longestString);

// +TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

function distanceTest(p1: [number, number], p2: [number, number]): number {
  const x1 = p1[0];
  const y1 = p1[1];
  const x2 = p2[0];
  const y2 = p2[1];
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}

type TPoint = { x: number; y: number };

function distance2Test(p1: TPoint, p2: TPoint): number {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

export { distanceTest, distance2Test };
