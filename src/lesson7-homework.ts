// Create and use a type guard
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
    return typeof (arg as TWidget).name === 'string';
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
  function assignWidgetCost(obj: TWidget): TWidget;
  function assignWidgetCost(obj: TGadget): TGadget;
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

// Create call signatures
function exercise31() {
  // TODO: implement handleSaveUserSubmit function with function overrides
  function handleSaveUserSubmit(firstName: string, lastName: string): void;
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email: string,
  ): void;
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    if (email) {
      console.log(firstName, lastName, email);
    } else {
      console.log(firstName, lastName);
    }
  }
  handleSaveUserSubmit('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  };

  // TODO: implement handleSaveUserSubmit function with this type
  const handleSaveUserSubmit2: TSaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    if (email) {
      console.log(firstName, lastName, email);
    } else {
      console.log(firstName, lastName);
    }
  };
  handleSaveUserSubmit2('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  }
  // TODO: implement handleSaveUserSubmit function with this type and interface
  const handleSaveUserSubmit3: ISaveUserCallback = function (
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    if (email) {
      console.log(firstName, lastName, email);
    } else {
      console.log(firstName, lastName);
    }
  };
  handleSaveUserSubmit3('John', 'Smith');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    // TODO: delete the following line
    // TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  // TODO: remove type assertion, fix the error
  createForm(handleSaveUserSubmit2);

  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';

    // TODO: delete the following line
    // TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }
  // TODO: remove type assertion, fix the error
  createForm2(handleSaveUserSubmit3);

  // *** add constructor signatures here ***
  type TUserConstructor = new (name: string) => { name: string };

  function createAndPrintUser(ctor: TUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
    // TODO: delete the following line
  }
  // TODO: create instance of TUserConstructor type
  // TODO: update the following line, call createAndPrintUser, pass the constructor
  const instanceCtor: TUserConstructor = class Ctor {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  };
  createAndPrintUser(instanceCtor);
}
exercise31();

// Create an abstract class and concrete classes
function exercise32() {
  // TODO: make this class abstract
  abstract class Animal {
    constructor(public name: string) {
      this.name = name;
    }
    // TODO: add abstract method named makeSound
    abstract makeSound(): void;
    eat(): void {
      console.log('eating');
    }
  }
  // TODO: observe the error and comment out next 2 lines
  // const animal = new Animal('Rex');
  // console.log(animal.name);

  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} is barking!`);
    }
  }

  // TODO: uncomment the following lines, fix the errors
  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}
exercise32();

// Create a type for a dictionary with string keys and number values
function exercise33() {
  // TODO: create a type TDictionary, key is a string, value is a number
  type TDictionary = {
    [key: string]: number;
  };

  // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
  const dictionary: TDictionary = {
    a: 1,
    b: 2,
    c: 3,
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 3;
  // dictionary['d'] = '3'; // should cause an error error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
}
type TDictionary = {
  [key: string]: number;
};
const arrSigns = [',', '.', ' ', '!', '?', ';'];

function compare(str: string): boolean {
  return !arrSigns.some((el) => el === str);
}
export function getMostFrequentCharacter(str: string): string {
  const arrAllCharacters = str.toLowerCase().split('');
  const arrAlphabetCharacters = arrAllCharacters.filter((char) =>
    compare(char),
  );

  const dictionary: TDictionary = {};

  for (const char of arrAlphabetCharacters) {
    if (char in dictionary) {
      dictionary[char]++;
    } else {
      dictionary[char] = 1;
    }
  }
  const arrKeys = Object.keys(dictionary);
  const arrValues = Object.values(dictionary);
  const largestChar = Math.max(...arrValues);
  const index = arrValues.indexOf(largestChar);

  return arrKeys[index] || '';
}
console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
exercise33();
// TODO: exporrt getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
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
  type TDictionaryStudentGrades = {
    [key: string]: number[];
  };
  const dictionaryStudentGrades: TDictionaryStudentGrades = {};

  for (const student of studentGrades) {
    dictionaryStudentGrades[student.name] = student.grades;
  }

  // TODO: Define a dictionary of cached results, add type definition using index signature
  type TCachedResults = {
    [key: string]: number;
  };
  const cachedResults: TCachedResults = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // TODO: check if chached result exists, return it if it does

    if (cachedResults[studentName]) {
      return cachedResults[studentName];
    } else {
      // TODO: calculate average grade
      // TODO: set cached result
      // TODO: return average grade
      const avarageGrades = dictionaryStudentGrades[studentName].reduce(
        (acc, grade) => acc + grade,
        0,
      );
      cachedResults[studentName] = avarageGrades;

      return avarageGrades;
    }
  }

  studentGrades.forEach((student) => {
    console.log(calculateAverageGrade(student.name));
  });

  // TODO: find the student with the highest average grade
  const keys = Object.keys(cachedResults);
  const values = Object.values(cachedResults);
  const highestGrade = Math.max(...values);
  const index = values.indexOf(highestGrade);
  const studentName = keys[index];
  const student = studentGrades.find((student) => student.name === studentName);
  console.log(student);
}
exercise34();

export const test = 'test';
