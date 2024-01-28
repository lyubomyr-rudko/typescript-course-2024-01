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
    readonly studentId: string;

    constructor(name: string, age: number, studentId: string) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }

    printStudent() {
      console.log(`
        Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`);
    }
  }
  const student = new Student('John', 20, 'S12');

  // Printing the student info to console
  student.printStudent();

  // Trying to change the studentId property (which should not be allowed)
  // This line will cause a TypeScript compile-time error
  // student.studentId = "S25";
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

// use uniton types to replace unknown type for compile time type checking
function exercise20() {
  function padLeft(value: string, n: number | string) {
    // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
    if (typeof n === 'number') {
      return ' '.repeat(n) + value;
    }
    // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
    if (typeof n === 'string') {
      return n + value;
    }
    throw new TypeError('Invalid type for padding');
  }

  console.log(padLeft('hello', 4)); // '    hello'
  console.log(padLeft('hello', 'abc')); // 'abchello'
  // console.log(padLeft('hello', true)); // TODO: add compile time error
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
export function padLeft(value: string, n: number | string) {
  if (typeof n === 'number') {
    return ' '.repeat(n) + value;
  }
  if (typeof n === 'string') {
    return n + value;
  }
  throw new TypeError('Invalid type for padding');
}
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
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
type TMove = 'rock' | 'paper' | 'scissors';

export function rockPaperScissorsVins(me: TMove, other: TMove) {
  if (me === 'rock' && other === 'paper') {
    return false;
  }
  if (me === 'paper' && other === 'scissors') {
    return false;
  }
  if (me === 'scissors' && other === 'rock') {
    return false;
  }

  return true;
}
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
export function exerciseA() {
  function delay(n: number) {
    return new Promise((resolve) => setTimeout(resolve, n));
  }

  async function printMessagesWithTimeout() {
    await delay(1000);
    console.log('1');

    await delay(1000);
    console.log('2');

    await delay(1000);
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
export function exerciseB(n: number): (number | string)[] {
  const result: (number | string)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}
exerciseB(5);

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
  //https://github.com/Victoria060187/test-react-ts
}
excerciseZ();
