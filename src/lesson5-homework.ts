// add readonly modifier to prevent props reassignment
function exercise18() {
  // TODO: define class Student with properties name, age, studentId
  // TODO: add constructor to initialize the properties
  // TODO: add method printStudent to print the student info to console
  // TODO: create an instance of the class Student
  // TODO: print the student info to console
  // TODO: try to change the studentId property
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
  class Student {
    name: string;
    age: number;
    readonly studentId: number;
    constructor(name: string, age: number, studentId: number) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }
    printStudent(): void {
      console.log(
        `Student ${this.name} is ${this.age} years old. Student's id is '${this.studentId}'`,
      );
    }
  }

  const studentOfPolytechnik = new Student('John', 21, 345);
  // studentOfPolytechnik.studentId = 111;  // studentID is readonly property!
  studentOfPolytechnik.printStudent();
}
// TODO: compile and run the code
exercise18();

// use optional modifier to fix compile time error
function exercise19() {
  type TWidget = {
    name: string;
    width: number;
    height: number;
    color?: string;
    os?: string;
    space: number;
  };

  const widget: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
    space: 100,
  };
  console.log(widget.name);

  // TODO: uncomment the code below and update the type definition to fix compile time error

  const widgetWithSize: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  };

  const desktopWidget: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    os: 'windows',
    space: 100,
  };

  // TODO: print the result to console
  console.log(widgetWithSize, desktopWidget);
}
// TODO: compile and run the code
exercise19();

// use union types to replace unknown type for compile time type checking
type TPaddedProp = number | string;

export function padLeft(value: string, n: TPaddedProp): string {
  // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
  // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
  if (typeof n === 'number') {
    return ' '.repeat(n) + value;
  }
  if (typeof n === 'string') {
    return n + value;
  }

  return (n as string) + value; // TODO: return the padded string
}
function exercise20() {
  console.log(padLeft('hello', 4)); // '    hello'
  console.log(padLeft('hello', 'abc')); // 'abchello'
  // console.log(padLeft('hello', true)); // TODO: add compile time error
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise20();

// use literal types for type checking
type TMove = 'rock' | 'paper' | 'scissors';
type TCases = true | false | 'standoff';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const STANDOFF = 'standoff';

export function rockPaperSizorsVins(me: TMove, other: TMove): TCases {
  // TODO: add checks for rock, paper, scissors
  // TODO: return false if me is rock and other is paper
  // TODO: return false if me is paper and other is scissors
  // TODO: return false if me is scissors and other is rock
  if (me === other) return STANDOFF;
  if (me === ROCK && other === PAPER) return false;
  if (me === PAPER && other === SCISSORS) return false;
  if (me === SCISSORS && other === ROCK) return false;

  return true;
}
function exercise21() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  // TODO: add type check to the function below

  console.log(rockPaperSizorsVins('rock', 'paper')); // false
  console.log(rockPaperSizorsVins('paper', 'scissors')); // false
  console.log(rockPaperSizorsVins('scissors', 'rock')); // false
  console.log(rockPaperSizorsVins('rock', 'scissors')); // true
  // TODO: make sure that the following calls are not allowed
  // console.log(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise21();

// use intersection types to avoid code duplication
function exercise22() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

  type TName = {
    name: string;
  };

  type TSizeColor = {
    width: number;
    height: number;
    color: string;
  };

  type TDesktop = {
    os: string;
  };

  type TMobile = {
    space: number;
  };
  type TCollectNameSizeColor = TName & TSizeColor;
  type TCollectNameSizeColorDesktop = TCollectNameSizeColor & TDesktop;
  type TCollectNameSizeColorSpace = TCollectNameSizeColor & TMobile;

  const widget: TName = {
    name: 'widget',
  };
  const widgetWithSize: TCollectNameSizeColor = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
  };
  const desktopWidget: TCollectNameSizeColorDesktop = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
  };
  const mobileWidget: TCollectNameSizeColorSpace = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  };
  console.log(widget.name);
  console.log(
    widgetWithSize.name +
      ' ' +
      widgetWithSize.width +
      ' ' +
      widgetWithSize.height +
      ' ' +
      widgetWithSize.color,
  );
  console.log(
    desktopWidget.name +
      ' ' +
      desktopWidget.width +
      ' ' +
      desktopWidget.height +
      ' ' +
      desktopWidget.color +
      ' ' +
      desktopWidget.os,
  );
  console.log(
    mobileWidget.name +
      ' ' +
      mobileWidget.width +
      ' ' +
      mobileWidget.height +
      ' ' +
      mobileWidget.color +
      ' ' +
      mobileWidget.space,
  );
  // TODO: print the result to console
}
// TODO: compile and run the code
exercise22();

// rewrite the code using async await
function exerciseA() {
  // function printMessagesWithTimeout() {
  //   setTimeout(() => {
  //     console.log('1');

  //     setTimeout(() => {
  //       console.log('2');

  //       setTimeout(() => {
  //         console.log('3');
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }
  // printMessagesWithTimeout();
  printMessageWithAsync();
}
function timerPromise(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
export async function printMessageWithAsync() {
  await timerPromise();
  console.log('1');

  await timerPromise();
  console.log('2');

  await timerPromise();
  console.log('3');
}
// TODO: compile and run the code
// TODO: write unit-tests for this code. Mock setTimeout function
exerciseA();

// TODO: write a function that for a given number n generates an array of numbers or strings
// TODO: make sure you specify the return type of the function
// TODO: if the number is divisible by 3, the array should contain 'Fizz' instead of the number
// TODO: if the number is divisible by 5, the array should contain 'Buzz' instead of the number
// TODO: if the number is divisible by 3 and 5, the array should contain 'FizzBuzz' instead of the number
// Example: fizzBuzz(5) => [1, 2, 'Fizz', 4, 'Buzz']
// Example: fizzBuzz(15) => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// TODO: write unit-tests for this function
type TStringNumber = string | number;

export function excerciseB(n: number): TStringNumber[] {
  const arr: TStringNumber[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      arr.push('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      arr.push('Buzz');
      continue;
    }

    arr.push(i);
  }

  return arr; // fix/update the code here
}
console.log(excerciseB(5));

// create react app with typescript
function excerciseZ(): void {
  // TODO: push to github and share the link below
  console.log('https://github.com/valerii-shkliar/react-app');
}
excerciseZ();
