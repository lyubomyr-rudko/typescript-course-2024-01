function exercise18() {
  class Student {
    name: string;
    age: number;
    readonly studentId: string;

    constructor(name: string, age: number, studentId: string) {
      this.name = name;
      this.age = age;
      this.studentId = studentId;
    }

    // constructor(
    //   public readonly name: string,
    //   public readonly age: number,
    //   public readonly studentId: string,
    // ) {}

    printStudent(): void {
      console.log(
        `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`,
      );
    }
  }

  const student = new Student('John Doe', 20, '7777777');
  student.printStudent();

  console.log(`Student ID: ${student.studentId}`);
}
exercise18();

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

  console.log(widgetWithSize);
  console.log(desktopWidget);
}
exercise19();

export function padLeft(value: string, n: number | string) {
  if (typeof n === 'number') {
    return ' '.repeat(n) + value;
  } else {
    return n + value;
  }
}
function exercise20() {
  console.log(padLeft('hello', 4));
  console.log(padLeft('hello', 'abc'));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  console.log(padLeft('hello', true));
}
exercise20();

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
}
exercise21();

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

export function exerciseA() {
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

  return printMessagesWithTimeout();
}

exerciseA();

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

function excerciseZ() {
  // https://github.com/your-repository-name/ts-react-app.git
}
excerciseZ();

const test = 'test';
export default test;
