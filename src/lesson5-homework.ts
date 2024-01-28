// add readonly modifier to prevent props reassignment

function exercise18() {
  class Student {
    // TODO: define class Student with properties name, age, studentId
    constructor(
      public readonly name: string,
      public readonly age: number,
      public readonly studentId: string,
    ) {
      // TODO: add constructor to initialize the properties
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }

    // TODO: add method printStudent to print the student info to console
    printStudent(): void {
      console.log(
        `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`,
      );
    }
  }

  // TODO: create an instance of the class Student
  const student = new Student('John Doe', 20, '7777777');

  // TODO: print the student info to console
  student.printStudent();

  // TODO: try to change the studentId property
  // compilation error: student.studentId = "6666666";

  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
  // Attempting to change the studentId property will result in a compilation error
  // because the property is marked as readonly.

  console.log(`Student ID: ${student.studentId}`);
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
    space?: number;
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
  function padLeft(value: string, n: number | string) {
    // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
    // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
    if (typeof n === 'number') {
      return ' '.repeat(n) + value;
    } else {
      return n + value;
    }
  }

  console.log(padLeft('hello', 4));
  console.log(padLeft('hello', 'abc'));
  // TODO: add compile time error
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  console.log(padLeft('hello', true));
}

// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise20();

// use literal types for type checking
// function exercise21() {
//   // TODO: define rock, paper, scissors literal type and assign it to TMove type
//   // TODO: add type check to the function below
//   function rockPaperSizorsVins(me: unknown, other: unknown) {
//     // TODO: add checks for rock, paper, scissors
//     // TODO: return false if me is rock and other is paper
//     // TODO: return false if me is paper and other is scissors
//     // TODO: return false if me is scissors and other is rock
//
//     console.log(me, other); // TODO: remove this line
//
//     return true;
//   }
//
//   console.log(rockPaperSizorsVins('rock', 'paper')); // false
//   console.log(rockPaperSizorsVins('paper', 'scissors')); // false
//   console.log(rockPaperSizorsVins('scissors', 'rock')); // false
//   console.log(rockPaperSizorsVins('rock', 'scissors')); // true
//   // TODO: make sure that the following calls are not allowed
//   console.log(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check
// }
//
// // TODO: compile and run the code
// // TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
// exercise21();

// use literal types for type checking
function exercise21() {
  type TMove = 'rock' | 'paper' | 'scissors';

  function rockPaperSizorsVins(me: TMove, other: TMove) {
    if (me === 'rock' && other === 'paper') {
      return false;
    } else if (me === 'paper' && other === 'scissors') {
      return false;
    } else if (me === 'scissors' && other === 'rock') {
      return false;
    }

    return true;
  }

  console.log(rockPaperSizorsVins('rock', 'paper'));
  console.log(rockPaperSizorsVins('paper', 'scissors'));
  console.log(rockPaperSizorsVins('scissors', 'rock'));
  console.log(rockPaperSizorsVins('rock', 'scissors'));
  // console.log(rockPaperSizorsVins('papapaper', 'scissors'));
}

exercise21();

// // use intersection types to avoid code duplication
// function exercise22() {
//   // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types
//
//   type TWidget = {
//     name: string;
//   };
//
//   type TWidgetWithSize = {
//     name: string;
//     width: number;
//     height: number;
//     color: string;
//   };
//
//   type TDesktopWidget = {
//     name: string;
//     width: number;
//     height: number;
//     color: string;
//     os: string;
//   };
//
//   type TMobileWidget = {
//     name: string;
//     width: number;
//     height: number;
//     color: string;
//     space: number;
//   };
//
//   const widget: TWidget = {
//     name: 'widget',
//   };
//   const widgetWithSize: TWidgetWithSize = {
//     name: 'widget',
//     width: 10,
//     height: 20,
//     color: 'red',
//   };
//   const desktopWidget: TDesktopWidget = {
//     name: 'widget',
//     width: 10,
//     height: 20,
//     color: 'red',
//     os: 'windows',
//   };
//   const mobileWidget: TMobileWidget = {
//     name: 'widget',
//     width: 10,
//     height: 20,
//     color: 'red',
//     space: 100,
//   };
//   console.log(widget.name);
//   console.log(
//     widgetWithSize.name +
//       ' ' +
//       widgetWithSize.width +
//       ' ' +
//       widgetWithSize.height +
//       ' ' +
//       widgetWithSize.color,
//   );
//   console.log(
//     desktopWidget.name +
//       ' ' +
//       desktopWidget.width +
//       ' ' +
//       desktopWidget.height +
//       ' ' +
//       desktopWidget.color +
//       ' ' +
//       desktopWidget.os,
//   );
//   console.log(
//     mobileWidget.name +
//       ' ' +
//       mobileWidget.width +
//       ' ' +
//       mobileWidget.height +
//       ' ' +
//       mobileWidget.color +
//       ' ' +
//       mobileWidget.space,
//   );
//   // TODO: print the result to console
// }
//
// // TODO: compile and run the code
// exercise22();

function exercise22() {
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
    `${widgetWithSize.name} ${widgetWithSize.width} ${widgetWithSize.height} ${widgetWithSize.color}`,
  );
  console.log(
    `${desktopWidget.name} ${desktopWidget.width} ${desktopWidget.height} ${desktopWidget.color} ${desktopWidget.os}`,
  );
  console.log(
    `${mobileWidget.name} ${mobileWidget.width} ${mobileWidget.height} ${mobileWidget.color} ${mobileWidget.space}`,
  );
}

exercise22();

// rewrite the code using async await
// function exerciseA() {
//   function printMessagesWithTimeout() {
//     setTimeout(() => {
//       console.log('1');
//
//       setTimeout(() => {
//         console.log('2');
//
//         setTimeout(() => {
//           console.log('3');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }
//
//   printMessagesWithTimeout();
// }
//
// // TODO: compile and run the code
// // TODO: write unit-tests for this code. Mock setTimeout function
// exerciseA();

function exerciseA() {
  function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
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

exerciseA();

// TODO: write a function that for a given number n generates an array of numbers or strings
// TODO: make sure you specify the return type of the function
// TODO: if the number is divisible by 3, the array should contain 'Fizz' instead of the number
// TODO: if the number is divisible by 5, the array should contain 'Buzz' instead of the number
// TODO: if the number is divisible by 3 and 5, the array should contain 'FizzBuzz' instead of the number
// Example: fizzBuzz(5) => [1, 2, 'Fizz', 4, 'Buzz']
// Example: fizzBuzz(15) => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// TODO: write unit-tests for this function
// function excerciseB(n: number) {
//   return n; // fix/update the code here
// }
//
excerciseB(5);
function excerciseB(n: number): Array<number | string> {
  const result: Array<number | string> = [];
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
  console.log('Result:', result);
  return result;
}
excerciseB(5);

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
  // https://github.com/MadMachineGun/ts-react-app.git
}

excerciseZ();
