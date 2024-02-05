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
  // type THandleSaveUser = (
  //   firstName: string,
  //   lastName: string,
  //   email?: string,
  // ) => void;
  // const handleSaveUserSubmit: THandleSaveUser = (
  //   firstName,
  //   lastName,
  //   email,
  // ) => {
  //   if (email !== undefined) {
  //     console.log(firstName, lastName, email);
  //   } else {
  //     console.log(firstName, lastName);
  //   }
  // };

  const handleSaveUserSubmit: ISaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => {
    if (email !== undefined) {
      console.log(firstName, lastName, email);
    } else {
      console.log(firstName, lastName);
    }
  };
  handleSaveUserSubmit('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  };
  // TODO: implement handleSaveUserSubmit function with this type
  handleSaveUserSubmit('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  }
  // TODO: implement handleSaveUserSubmit function with this type and interface
  handleSaveUserSubmit('John', 'Smith');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    // TODO: delete the following line
    console.log(firstName, lastName, onSubmit);

    // TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  // TODO: remove type assertion, fix the error
  createForm(handleSaveUserSubmit);

  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';

    // TODO: delete the following line
    // console.log(firstName, lastName, email, onSubmit);

    // TOOD: uncomment the following line
    onSubmit(firstName, lastName, email);
  }
  // TODO: remove type assertion, fix the error
  createForm2(handleSaveUserSubmit);

  // *** add constructor signatures here ***
  type TUserConstructor = new (fullName: string) => { fullName: string };

  function createAndPrintUser(ctor: TUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
    // TODO: delete the following line
    // console.log(ctor);
  }
  // TODO: create instance of TUserConstructor type
  const CPerson: TUserConstructor = class User {
    constructor(public fullName: string) {}
  };
  const c = new CPerson('alex');
  console.log(c);

  // TODO: update the following line, call createAndPrintUser, pass the constructor
  createAndPrintUser(CPerson);
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
    makeSound() {
      console.log('woof');
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
    one: 1,
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 3;
  // dictionary['d'] = '3'; // should cause an error error

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    const charCount: TDictionary = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    let mostFrequentChar: string = '';
    let maxCount: number = 0;

    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        mostFrequentChar = char;
        maxCount = charCount[char];
      }
    }

    return mostFrequentChar;
  }
  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
}
exercise33();
// TODO: exporrt getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts
type TDictionary = {
  [key: string]: number;
};
export function getMostFrequentCharacter(str: string): string {
  const charCount: TDictionary = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let mostFrequentChar: string = '';
  let maxCount: number = 0;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      mostFrequentChar = char;
      maxCount = charCount[char];
    }
  }

  return mostFrequentChar;
}

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  type TGrades = {
    [key: string]: number[];
  };
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

  // TODO: Define a dictionary of cached results, add type definition using index signature
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cachedResults: TGrades = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // TODO: check if chached result exists, return it if it does

    if (cachedResults[studentName]) {
      // TODO: return cached result
      return 0;
    } else {
      // TODO: calculate average grade
      // TODO: set cached result
      // TODO: return average grade
      return 0;
    }
  }

  studentGrades.forEach((student) => {
    console.log(calculateAverageGrade(student.name));
  });

  // TODO: find the student with the highest average grade
}
exercise34();

const test = 'test';
export default test;
