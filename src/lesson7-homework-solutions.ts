// Create and use a type guard
function exercise29() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  function isWidget(arg: TThing): arg is TWidget {
    return !!arg;
  }
  console.log(isWidget({ name: 'widget' }));

  function printThingDescription(arg: TThing) {
    console.log(arg);

    if (isWidget(arg)) {
      console.log(arg.name);
    } else {
      console.log(arg.os);
    }
  }
  printThingDescription({ name: 'widget' });
  printThingDescription({ os: 'android' });
}
exercise29();

function exercise30() {
  type TWidget = {
    name: string;
    cost?: number;
  };
  type TGadget = {
    os: string;
    cost?: number;
  };
  type TThing = TWidget | TGadget;

  function assignWidgetCost(obj: TWidget): TWidget;
  function assignWidgetCost(obj: TGadget): TGadget;
  function assignWidgetCost(obj: TThing): TThing {
    obj.cost = 100;

    return obj;
  }

  const a = assignWidgetCost({ name: 'widget' });
  const b = assignWidgetCost({ os: 'android' });

  console.log(a, b);
}
exercise30();

// Create call signatures
function exercise31() {
  function handleSaveUserSubmit(firstName: string, lastName: string): void;
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email);
  }
  handleSaveUserSubmit('John', 'Smith');

  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  };

  const handleSaveUserSubmit2: TSaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email);
  };
  handleSaveUserSubmit2('John', 'Smith');

  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  }

  const handleSaveUserSubmit3: ISaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email);
  };
  handleSaveUserSubmit3('John', 'Smith');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    onSubmit(firstName, lastName);
  }

  createForm(handleSaveUserSubmit);
  createForm(handleSaveUserSubmit2);
  createForm(handleSaveUserSubmit3);

  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';

    onSubmit(firstName, lastName, email);
  }

  createForm2(handleSaveUserSubmit);
  createForm2(handleSaveUserSubmit2);
  createForm2(handleSaveUserSubmit3);

  type TUserConstructor = {
    new (name: string): { name: string };
    new (firstName: string, lastName: string): { name: string };
  };

  function createAndPrintUser(ctor: TUserConstructor) {
    const user = new ctor('John Smith');
    console.log(user);
  }

  const User: TUserConstructor = class {
    constructor(public name: string) {
      this.name = name;
    }
  };

  createAndPrintUser(User);
}
exercise31();

function exercise32() {
  abstract class Animal {
    constructor(public name: string) {
      this.name = name;
    }

    abstract makeSound(): void;

    eat(): void {
      console.log('eating');
    }
  }
  // const animal = new Animal('Rex');
  // console.log(animal.name);

  class Dog extends Animal {
    makeSound(): void {
      console.log('bark');
    }
  }

  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}
exercise32();

// Create a type for a dictionary with string keys and number values
function exercise33() {
  type TDictionary = {
    [key: string]: number;
  };

  const dictionary: TDictionary = {};

  dictionary['c'] = 3;
  // dictionary['d'] = '3'; // error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    const charCount: TDictionary = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }

    let maxCount = 0;
    let maxChar = '';
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }

    return maxChar;
  }
  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
}
exercise33();

export function getMostFrequentCharacter(str: string): string {
  type TDictionary = {
    [key: string]: number;
  };

  const charCount: TDictionary = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let maxCount = 0;
  let maxChar = '';
  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function exercise34() {
  const studentGrades = [
    {
      name: 'John',
      grades: [100, 90, 80, 70, 90],
    },
    {
      name: 'Jane',
      grades: [90, 80, 70, 60, 50],
    },
    {
      name: 'Jack',
      grades: [80, 70, 60, 50, 40],
    },
  ];

  type TStudentGradesMed = {
    [key: string]: number;
  };

  const cachedResults: TStudentGradesMed = {};

  function calculateAverageGrade(studentName: string): number | string {
    if (!cachedResults[studentName]) {
      const student = studentGrades.find((s) => s.name === studentName);
      if (!student) {
        throw 'Student not found';
      }
      const mediumGrade =
        student.grades.reduce((acc, grade) => acc + grade, 0) /
        student.grades.length;

      cachedResults[studentName] = mediumGrade;
    }

    return cachedResults[studentName];
  }

  studentGrades.forEach((student) => {
    console.log(calculateAverageGrade(student.name));
  });

  let maxGrade = 0;
  let bestStudent = '';
  for (const student in cachedResults) {
    if (cachedResults[student] > maxGrade) {
      maxGrade = cachedResults[student];
      bestStudent = student;
    }
  }

  console.log(bestStudent, maxGrade);
}
exercise34();

const test = 'test';
export default test;
