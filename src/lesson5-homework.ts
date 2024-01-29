// add readonly modifier to prevent props reassignment
function exercise18() {
  // TODO: define class Student with properties name, age, studentId
  class Student {
    name: string;
    age: number;
    readonly studentId: number | string;

    // TODO: add constructor to initialize the properties
    constructor(name: string, age: number, studentId: number | string) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }

    // TODO: add method printStudent to print the student info to console
    printStudent(): void {
      console.log(
        `Student ${this.name} with age ${this.age} has ID - ${this.studentId}`,
      );
    }
  }

  // TODO: create an instance of the class Student
  const firstStudent = new Student('Sam', 25, 1);

  // TODO: print the student info to console
  firstStudent.printStudent();

  // TODO: try to change the studentId property
  // firstStudent.studentId = 'new id';
  // firstStudent.printStudent();

  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
  // line 31 ---> Cannot assign to 'studentId' because it is a read-only property.ts(2540)
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
export function exercise20() {
  function padLeft(value: string, n: number | string): string {
    let paddedString: string = '';

    // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
    // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
    if (typeof n === 'number' && n >= 0) {
      paddedString = ' '.repeat(n) + value;
    } else if (typeof n === 'string') {
      paddedString = n + value;
    } else {
      throw new Error('Need n of type number or string.');
    }

    return paddedString;
  }

  console.log(padLeft('hello', 4)); // '    hello'
  console.log(padLeft('hello', 'abc')); // 'abchello'
  // console.log(padLeft('hello', true)); // TODO: add compile time error --> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

  return { padLeft };
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise20();

// use literal types for type checking
export function exercise21() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  type TMove = 'rock' | 'paper' | 'scissors';

  // TODO: add type check to the function below
  function rockPaperSizorsVins(me: TMove, other: TMove): boolean {
    // TODO: add checks for rock, paper, scissors
    // TODO: return false if me is rock and other is paper
    // TODO: return false if me is paper and other is scissors
    // TODO: return false if me is scissors and other is rock
    if (
      (me === 'rock' && other === 'paper') ||
      (me === 'paper' && other === 'scissors') ||
      (me === 'scissors' && other === 'rock')
    ) {
      return false;
    }

    return true;
  }
  console.log(rockPaperSizorsVins('rock', 'paper')); // false
  console.log(rockPaperSizorsVins('paper', 'scissors')); // false
  console.log(rockPaperSizorsVins('scissors', 'rock')); // false
  console.log(rockPaperSizorsVins('rock', 'scissors')); // true

  // ++TODO: make sure that the following calls are not allowed
  // console.log(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check
  // Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'.
  return { rockPaperSizorsVins };
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
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
  function delay(delay: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  async function printMessagesWithTimeout(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      await delay(1000);
      console.log(`${i + 1}`);
    }
  }

  // async function printMessagesWithTimeout(count: number): Promise<void> {
  //   for (let i = 0; i < count; i++) {
  //     await new Promise((resolve) => {
  //       setTimeout(() => {
  //         console.log(`${i + 1}`);
  //         resolve(true);
  //       }, 1000);
  //     });
  //   }
  // }
  printMessagesWithTimeout(3);

  return { printMessagesWithTimeout };
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
export function excerciseB() {
  function fizzBuzz(n: number): (string | number)[] {
    let result: (string | number)[] = [];

    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else {
        result.push(i);
      }
    }

    return result;
  }

  console.log(fizzBuzz(0));

  return {
    fizzBuzz,
  };
}
excerciseB();

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
  // https://github.com/danilfomchik/Video-player-vite.git
}
excerciseZ();
