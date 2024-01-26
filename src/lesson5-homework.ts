// add readonly modifier to prevent props reassignment
function exercise18() {
  // TODO: define class Student with properties name, age, studentId
  class Student {
    name: string;
    age: number;
    readonly studentId: number;
    // TODO: add constructor to initialize the properties
    constructor(name: string, age: number, studentId: number) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }
    // TODO: add method printStudent to print the student info to console
    printStudent() {
      console.log(this);
    }
  }

  // TODO: create an instance of the class Student
  const student: Student = new Student('Liza', 26, 1);
  // TODO: print the student info to console
  student.printStudent();
  // TODO: try to change the studentId property
  //   student.studentId = 17; //Cannot assign to 'studentId' because it is a read-only property.

  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
  //Cannot assign to 'studentId' because it is a read-only property.
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
  console.log(widgetWithSize);
  console.log(desktopWidget);
}
// TODO: compile and run the code
exercise19();

// use union types to replace unknown type for compile time type checking
function exercise20() {
  function padLeft(value: string, n: number | string): string {
    // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
    let res: string = '';
    if (typeof n === 'number') {
      res = value.padStart(value.length + n, ' ');
    }
    // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
    if (typeof n === 'string') {
      res = value.padStart(value.length + n.length, n);
      //   res = n + value;
    }
    return res; // TODO: return the padded string
  }

  console.log(padLeft('hello', 4)); // '    hello'
  console.log(padLeft('hello', 'abc')); // 'abchello'

  // console.log(padLeft('hello', true)); // TODO: add compile time error
  //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
}
// TODO: compile and run the code
// +TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise20();

// use literal types for type checking
function exercise21() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  type TMove = 'rock' | 'paper' | 'scissors';
  // TODO: add type check to the function below
  function rockPaperScissorsVins(me: TMove, other: TMove) {
    // TODO: add checks for rock, paper, scissors
    // TODO: return false if me is rock and other is paper
    if (me === 'rock' && other === 'paper') {
      return false;
    }
    // TODO: return false if me is paper and other is scissors
    if (me === 'paper' && other === 'scissors') {
      return false;
    }
    // TODO: return false if me is scissors and other is rock
    if (me === 'scissors' && other === 'rock') {
      return false;
    }

    return true;
  }
  console.log(rockPaperScissorsVins('rock', 'paper')); // false
  console.log(rockPaperScissorsVins('paper', 'scissors')); // false
  console.log(rockPaperScissorsVins('scissors', 'rock')); // false
  console.log(rockPaperScissorsVins('rock', 'scissors')); // true
  // TODO: make sure that the following calls are not allowed
  // console.log(rockPaperScissorsVins('papapaper', 'scissors')); // true - no type check
  // Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'
}
// TODO: compile and run the code
// +TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise21();

// use intersection types to avoid code duplication
function exercise22() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

  type TWidget = {
    name: string;
  };

  type TWidgetWithSize = TWidget & {
    width: number;
    height: number;
    color: string;
  };

  type TDesktopWidget = TWidgetWithSize & {
    os: string;
  };

  type TMobileWidget = TWidgetWithSize & {
    space: number;
  };

  const widget: TWidget = {
    name: 'widget',
  };
  const widgetWithSize: TWidgetWithSize = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
  };
  const desktopWidget: TDesktopWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
  };
  const mobileWidget: TMobileWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  };
  console.log(widget.name); //widget
  console.log(
    widgetWithSize.name +
      ' ' +
      widgetWithSize.width +
      ' ' +
      widgetWithSize.height +
      ' ' +
      widgetWithSize.color,
  ); //widget 10 20 red
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
  ); //widget 10 20 red windows
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
  ); //widget 10 20 red 100
  // TODO: print the result to console
}
// TODO: compile and run the code
exercise22();

// rewrite the code using async await
export function exerciseA() {
  function later(n: number) {
    return new Promise((resolve) => setTimeout(resolve, n));
  }

  async function printMessagesWithTimeout() {
    await later(1000);
    console.log('1');
    await later(1000);
    console.log('2');
    await later(1000);
    console.log('3');
  }
  printMessagesWithTimeout();
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
export function generateArrOfNumAndStr(n: number): (number | string)[] {
  const arr: number[] = [];
  for (let i: number = 1; i <= n; i++) {
    arr.push(i);
  }

  const res: (number | string)[] = [];

  for (let i: number = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      res[i] = 'FizzBuzz';
    } else if (arr[i] % 3 === 0) {
      res[i] = 'Fizz';
    } else if (arr[i] % 5 === 0) {
      res[i] = 'Buzz';
    } else {
      res[i] = arr[i];
    }
  }
  return res;
}
generateArrOfNumAndStr(5);

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
  //   https://github.com/elzbthbrst/vite-react-ts__hillel
}
excerciseZ();

export function padLeft(value: string, n: number | string): string {
  let res: string = '';
  if (typeof n === 'number') {
    res = value.padStart(value.length + n, ' ');
  }
  if (typeof n === 'string') {
    res = value.padStart(value.length + n.length, n);
  }
  return res;
}

type TMove = 'rock' | 'paper' | 'scissors';
export function rockPaperScissorsVins(me: TMove, other: TMove) {
  if (me === 'rock' && other == 'paper') {
    return false;
  }
  if (me === 'paper' && other == 'scissors') {
    return false;
  }
  if (me === 'scissors' && other == 'rock') {
    return false;
  }
  return true;
}
