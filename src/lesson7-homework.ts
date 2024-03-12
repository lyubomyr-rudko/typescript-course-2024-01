// Create and use a type guard
console.log('exercise29');
function exercise29() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  // TODO: implement isWidget function to be a type guard
  function isWidget(arg: TThing): arg is TWidget {
    return (arg as TWidget).name !== undefined;
  }
  console.log(isWidget({ name: 'widget' }));

  function printThingDescription(arg: TThing) {
    console.log(arg);
    // TODO: uncomment the following code
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

console.log('exercise30');
// Create an overloaded function definitions
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

  // TODO: add function overloading here to ensure that function return type matches the input value type
  function assignWidgetCost(obj: TWidget): TThing;
  function assignWidgetCost(obj: TGadget): TThing;
  function assignWidgetCost(obj: TThing) {
    obj.cost = 100;

    return obj;
  }

  // TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: 'widget' });
  // TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: 'android' });

  console.log(a, b);
}
exercise30();

console.log('exercise31');
// Create call signatures
function exercise31() {
  // TODO: implement handleSaveUserSubmit function with function overrides
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email || '');
  }
  handleSaveUserSubmit('John', 'Smith');
  handleSaveUserSubmit('Nikita', 'Drz', 'nikita@gmail.com');

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  };
  const handleSaveUserSubmitV2: TSaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email || '');
  };
  handleSaveUserSubmitV2('John', 'Smith');
  handleSaveUserSubmitV2('Nikita', 'Drz', 'nikita@gmail.com');

  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email?: string): void;
  }
  // TODO: implement handleSaveUserSubmit function with this type and interface
  const handleSaveUserSubmitV3: ISaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email || '');
  };
  handleSaveUserSubmitV3('Petro', 'Petrovich');
  handleSaveUserSubmitV2('Nikita', 'Drz', 'nikita@gmail.com');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'Nikita';
    const lastName = 'Drz';
    // TODO: delete the following line

    // TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  // TODO: remove type assertion, fix the error
  createForm(handleSaveUserSubmit);
  createForm(handleSaveUserSubmitV2);
  createForm(handleSaveUserSubmitV3);

  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';

    // TODO: delete the following line

    // TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }
  // TODO: remove type assertion, fix the error
  createForm2(handleSaveUserSubmit);
  createForm2(handleSaveUserSubmitV2);
  createForm2(handleSaveUserSubmitV3);

  // *** add constructor signatures here ***
  type TUserConstructor = {
    new (name: string): { name: string };
    new (firstName: string, lastName: string): { name: string };
  };

  function createAndPrintUser(ctor: TUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
    // TODO: delete the following line
    console.log(ctor);
  }
  // TODO: create instance of TUserConstructor type
  // TODO: update the following line, call createAndPrintUser, pass the constructor
  const User: TUserConstructor = class {
    constructor(public name: string) {
      this.name = name;
    }
  };

  createAndPrintUser(User);
}
exercise31();

console.log('Homework 32');
// Create an abstract class and concrete classes
function exercise32() {
  // TODO: make this class abstract
  abstract class Animal {
    constructor(public name: string) {}
    // TODO: add abstract method named makeSound
    // makeSound ...
    abstract makeSound(): void;

    eat(): void {
      console.log('eating');
    }
  }
  // TODO: observe the error and comment out next 2 lines
  //   const animal = new Animal('Rex');
  //   console.log(animal.name);

  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    makeSound(): void {
      console.log('гав');
    }
  }

  // TODO: uncomment the following lines, fix the errors
  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}
exercise32();

console.log('exercise 33');
// Create a type for a dictionary with string keys and number values
function exercise33() {}
exercise33();

// TODO: create a type TDictionary, key is a string, value is a number
type TDictionary = {
  [key: string]: number;
};
// TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
const dictionary: TDictionary = {
  x: 1,
  y: 2,
  z: 3,
};
// TODO: uncomment the following lines, fix the errors
dictionary['c'] = 3;
//dictionary['d'] = '3'; // should cause an error error
console.log(dictionary);
// TODO: implement a function that calculates number of characters
// in a string using the dictionary type, and returns a most frequent character

export function getMostFrequentCharacter(str: string): string {
  const charCount: TDictionary = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let mostFrequentChar = '';
  let maxCount = 0;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      mostFrequentChar = char;
      maxCount = charCount[char];
    }
  }

  return mostFrequentChar;
}
console.log(
  getMostFrequentCharacter('aaaabbbbaaadccccaaaccccccccccccaaaaaaffff'),
);
// TODO: exporrt getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts

console.log('exercise34');
// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  const studentGrades: { [key: string]: number[] } = {
    John: [100, 90, 80, 70, 90],
    Jane: [90, 80, 70, 60, 50],
    Jack: [80, 70, 60, 50, 40],
  };
  // TODO: Define a dictionary of cached results, add type definition using index signature
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cachedResults: { [key: string]: number } = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // TODO: check if chached result exists, return it if it does

    if (cachedResults[studentName]) {
      // TODO: return cached result
      return cachedResults[studentName];
    } else {
      // TODO: calculate average grade
      const grades = studentGrades[studentName];
      if (!grades) return 'Student not found(';
      const averageGrade =
        grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
      // TODO: set cached result
      cachedResults[studentName] = averageGrade;
      // TODO: return average grade
      return averageGrade;
    }
  }

  for (const studentName in studentGrades) {
    console.log(`${studentName}: ${calculateAverageGrade(studentName)}`);
  }

  // TODO: find the student with the highest average grade
  let highestAverage = 0;
  let studentWithHighestAverage = '';
  for (const studentName in studentGrades) {
    const averageGrade = calculateAverageGrade(studentName);
    if (typeof averageGrade === 'number' && averageGrade > highestAverage) {
      highestAverage = averageGrade;
      studentWithHighestAverage = studentName;
    }
  }
  console.log(`Student with the highest grade : ${studentWithHighestAverage}`);
}
exercise34();

// const test = 'test';
// export default test;
