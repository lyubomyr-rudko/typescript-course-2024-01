// add readonly modifier to prevent props reassignment
function exercise18() {
  // TODO: define class Student with properties name, age, studentId
  // TODO: add constructor to initialize the properties
  // TODO: add method printStudent to print the student info to console
  type TStudent = {
    name: string;
    age: number;
    studentId: number;
  };
  class Student {
    name: string;
    age: number;
    readonly studentId: number;

    constructor(props: TStudent) {
      this.name = props.name;
      this.age = props.age;
      this.studentId = props.studentId;
    }

    printStudent(): string {
      return `Student 
  name: ${this.name}
  age: ${this.age}
  id: ${this.studentId}
`;
    }
  }
  // TODO: create an instance of the class Student
  const stAlex = new Student({
    name: 'Alex',
    age: 19,
    studentId: +(+Date.now() + '' + Math.random()),
  });
  // TODO: print the student info to console
  console.log(stAlex.printStudent());
  // TODO: try to change the studentId property
  // stAlex.studentId = 123456789; // error TS2540: Cannot assign to 'studentId' because it is a read-only property.
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
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
  console.log('widgetWithSize: ', widgetWithSize);
  console.log('desktopWidget: ', desktopWidget);
}
// TODO: compile and run the code
exercise19();

// use uniton types to replace unknown type for compile time type checking
function exercise20() {
  function padLeft(value: string, n: string | number) {
    // TODO: if n is a number, pad the string with spaces (append `n` spaces to the left of the `value` string)
    if (typeof n === 'number') n = ''.padStart(n);
    // TODO: if n is a string, pad the string with the given string (append `n` to the left of the `value` string)
    else if (typeof n !== 'string')
      throw 'second params should be type "number" or "string"';

    //return console.error('second params should be type "number" or "string"');

    return (n as string) + value; // TODO: return the padded string
  }

  console.log(padLeft('hello', 4)); // '    hello'
  console.log(padLeft('hello', 'abc')); // 'abchello'
  // console.log(padLeft('hello', true)); // TODO: add compile time error // Added & get error

  //
  return padLeft;
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
export const exercise20Test = exercise20();

// use literal types for type checking
export type TMove = 'rock' | 'paper' | 'scissors';
function exercise21() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  const checkInput: TMove[] = ['rock', 'paper', 'scissors'];
  // TODO: add type check to the function below
  function rockPaperSizorsVins(me: TMove, other: TMove): boolean {
    // TODO: add checks for rock, paper, scissors
    if (!checkInput.includes(me) || !checkInput.includes(other))
      throw new Error('Invalid input: Arguments must be of type TMove');
    // TODO: return false if me is rock and other is paper
    if (me === 'rock' && other === 'paper') return false;
    // TODO: return false if me is paper and other is scissors
    if (me === 'paper' && other === 'scissors') return false;
    // TODO: return false if me is scissors and other is rock
    if (me === 'scissors' && other === 'rock') return false;
    // console.log(me, other); // TODO: remove this line
    return true;
  }
  console.log(rockPaperSizorsVins('rock', 'paper')); // false
  console.log(rockPaperSizorsVins('paper', 'scissors')); // false
  console.log(rockPaperSizorsVins('scissors', 'rock')); // false
  console.log(rockPaperSizorsVins('rock', 'scissors')); // true
  // TODO: make sure that the following calls are not allowed
  // console.log(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check // compile error

  //
  return { rockPaperSizorsVins };
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
export const exercise21Test = exercise21();

// use intersection types to avoid code duplication
function exercise22() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

  type TWidget = {
    name: string;
  };

  type TWidgetWithSize = {
    // name: string;
    width: number;
    height: number;
    color: string;
  };

  type TDesktopWidget = {
    // name: string;
    // width: number;
    // height: number;
    // color: string;
    os: string;
  };

  type TMobileWidget = {
    // name: string;
    // width: number;
    // height: number;
    // color: string;
    space: number;
  };

  const widget: TWidget = {
    name: 'widget',
  };
  const widgetWithSize: TWidget & TWidgetWithSize = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
  };
  const desktopWidget: TWidget & TWidgetWithSize & TDesktopWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
  };
  const mobileWidget: TWidget & TWidgetWithSize & TMobileWidget = {
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

  async function printMessagesWithTimeout() {
    async function fetchData(data: string) {
      return new Promise((res) => {
        setTimeout(() => res(data), 1000);
      });
    }
    console.log(await fetchData('1'));
    console.log(await fetchData('2'));
    console.log(await fetchData('3'));
  }
  printMessagesWithTimeout();

  return printMessagesWithTimeout;
}
// TODO: compile and run the code
// TODO: write unit-tests for this code. Mock setTimeout function
/**
 *
 *  WTF - AS IT CREATE? : Mock setTimeout function in JEST
 */
export const exerciseATest = exerciseA();

// TODO: write a function that for a given number n generates an array of numbers or strings
// TODO: make sure you specify the return type of the function
// TODO: if the number is divisible by 3, the array should contain 'Fizz' instead of the number
// TODO: if the number is divisible by 5, the array should contain 'Buzz' instead of the number
// TODO: if the number is divisible by 3 and 5, the array should contain 'FizzBuzz' instead of the number
// Example: fizzBuzz(5) => [1, 2, 'Fizz', 4, 'Buzz']
// Example: fizzBuzz(15) => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// TODO: write unit-tests for this function
// let TGen: number | string;
export function excerciseB(n: number) {
  const resArray = [];
  for (let i: number = 1; i < n + 1; i++) {
    let element: number | string = i;
    if (i % 3 === 0) element = 'Fizz';
    if (i % 5 === 0) element = 'Buzz';
    if (i % 3 === 0 && i % 5 === 0) element = 'FizzBuzz';

    resArray.push(element);
  }
  console.log('array for ', n, ' elements:\n', resArray);

  return resArray; // fix/update the code here
}
excerciseB(15);

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
  // sse branch less-5-react-vite-ts
}
excerciseZ();
