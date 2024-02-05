// Create and use a type guard
// function exercise29() {
//   type TWidget = {
//     name: string;
//   };
//   type TGadget = {
//     os: string;
//   };
//   type TThing = TWidget | TGadget;
//
//   // TODO: implement isWidget function to be a type guard
//   function isWidget(arg: TThing) {
//     return !!arg;
//   }
//   console.log(isWidget({ name: 'widget' }));
//
//   function printThingDescription(arg: TThing) {
//     console.log(arg);
//     // TODO: uncomment the following code
//     // if (isWidget(arg)) {
//     //   console.log(arg.name);
//     // } else {
//     //   console.log(arg.os);
//     // }
//   }
//   printThingDescription({ name: 'widget' });
//   printThingDescription({ os: 'android' });
// }
// exercise29();

// import { number, string } from 'prop-types';

function exercise29() {
  type TWidget = {
    name: string;
  };
  type TGadget = {
    os: string;
  };
  type TThing = TWidget | TGadget;

  function isWidget(arg: TThing): arg is TWidget {
    return `name` in arg;
  }

  console.log(isWidget({ name: `widget` }));

  function printThingDescription(arg: TThing) {
    console.log(arg);
    if (isWidget(arg)) {
      console.log(arg.name);
    } else {
      console.log(arg.os);
    }
  }

  printThingDescription({ name: `widget` });
  printThingDescription({ os: `android` });
}

exercise29();

// Create an overloaded function definitions
// function exercise30() {
//   type TWidget = {
//     name: string;
//     cost?: number;
//   };
//   type TGadget = {
//     os: string;
//     cost?: number;
//   };
//   type TThing = TWidget | TGadget;
//
//   // TODO: add function overloading here to ensure that function return type matches the input value type
//   function assignWidgetCost(obj: TThing): TThing {
//     obj.cost = 100;
//
//     return obj;
//   }
//
//   // TODO: fix problem - typeof a: TThing, not TWidget
//   const a = assignWidgetCost({ name: 'widget' } as TWidget);
//   // TODO: fix same here - typeof b: TThing, not TGadget
//   const b = assignWidgetCost({ os: 'android' } as TGadget);
//
//   console.log(a, b);
// }
//
// exercise30();

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

  const a: TWidget = assignWidgetCost({ name: `widget` });
  const b: TGadget = assignWidgetCost({ os: `android` });

  console.log(a, b);
}

exercise30();

// // Create call signatures
// function exercise31() {
//   // TODO: implement handleSaveUserSubmit function with function overrides
//   function handleSaveUserSubmit(
//     firstName: string,
//     lastName: string,
//     email?: string,
//   ) {
//     console.log(firstName, lastName, email);
//   }
//
//   handleSaveUserSubmit('John', 'Smith');
//
//   // TODO: add call signatures here. Add overrides for optional email param
//   type TSaveUserCallback = { /* replace  with your code */ x: '' };
//   // TODO: implement handleSaveUserSubmit function with this type
//
//   // TODO: add call signatures here. Add overrides for optional email param
//   interface ISaveUserCallback {}
//
//   // TODO: implement handleSaveUserSubmit function with this type and interface
//
//   function createForm(onSubmit: TSaveUserCallback) {
//     const firstName = 'John';
//     const lastName = 'Smith';
//
//     // TODO: delete the following line
//     console.log(firstName, lastName, onSubmit);
//
//     // TODO: uncomment the following line
//     // onSubmit(firstName, lastName);
//   }
//
//   // TODO: remove type assertion, fix the error
//   createForm(handleSaveUserSubmit as unknown as TSaveUserCallback);
//
//   function createForm2(onSubmit: ISaveUserCallback) {
//     const firstName = 'John';
//     const lastName = 'Smith';
//     const email = 'jsmith@somemail.some.com';
//
//     // TODO: delete the following line
//     console.log(firstName, lastName, email, onSubmit);
//
//     // TOOD: uncomment the following line
//     // onSubmit(firstName, lastName, email);
//   }
//
//   // TODO: remove type assertion, fix the error
//   createForm2(handleSaveUserSubmit as unknown as TSaveUserCallback);
//
//   // *** add constructor signatures here ***
//   type TUserConstructor = { /* replace  with your code */ x: '' };
//
//   function createAndPrintUser(ctor: TUserConstructor) {
//     // TOOD: uncomment the following lines
//     // const user = new ctor('John Smith');
//     // console.log(user);
//     // TODO: delete the following line
//     console.log(ctor);
//   }
//
//   // TODO: create instance of TUserConstructor type
//   // TODO: update the following line, call createAndPrintUser, pass the constructor
//   createAndPrintUser({} as unknown as TUserConstructor);
// }
//
// exercise31();

function exercise31() {
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string,
  ) {
    console.log(firstName, lastName, email);
  }

  handleSaveUserSubmit('John', 'Smith');

  type TSaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => void;

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    console.log(firstName, lastName);
    onSubmit(firstName, lastName);
  }

  createForm(handleSaveUserSubmit);

  interface ISaveUserCallback {
    (firstName: string, lastName: string, email?: string): void;
  }

  function createForm2(onSubmit: ISaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';
    const email = 'jsmith@somemail.some.com';
    console.log(firstName, lastName, email);
    onSubmit(firstName, lastName, email);
  }

  createForm2(handleSaveUserSubmit);

  type TUserConstructor = { new (fullName: string): { fullName: string } };

  function createAndPrintUser(ctor: TUserConstructor) {
    const user = new ctor('John Smith');
    console.log(user);
  }

  createAndPrintUser(
    class {
      constructor(public fullName: string) {}
    } as TUserConstructor,
  );
}

exercise31();

// Create an abstract class and concrete classes
// function exercise32() {
//   // TODO: make this class abstract
//   class Animal {
//     constructor(public name: string) {
//       this.name = name;
//     }
//
//     // TODO: add abstract method named makeSound
//     // makeSound ...
//     eat(): void {
//       console.log('eating');
//     }
//   }
//
//   // TODO: observe the error and comment out next 2 lines
//   const animal = new Animal('Rex');
//   console.log(animal.name);
//
//   // TODO: inherit from Animal and implement makeSound method
//   //   class Dog {}
//
//   // TODO: uncomment the following lines, fix the errors
//   // const myDog = new Dog('Buddy');
//   // myDog.eat();
//   // myDog.makeSound();
// }
//
// exercise32();

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

  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }

    makeSound(): void {
      console.log('Woof!');
    }
  }

  const myDog = new Dog('Buddy');
  myDog.eat();
  myDog.makeSound();
}

exercise32();

// function exercise33() {
//   // TODO: create a type TDictionary, key is a string, value is a number
//   // type TDictionary = {};
//
//   // TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
//   //   const dictionary = {};
//
//   // TODO: uncomment the following lines, fix the errors
//   // dictionary['c'] = 3;
//   // dictionary['d'] = '3'; // should cause an error error
//
//   // TODO: implement a function that calculates number of characters
//   // in a string using the dictionary type, and returns a most frequent character
//   function getMostFrequentCharacter(str: string): string {
//     return str[0] || '';
//   }
//
//   console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
// }
//
// exercise33();
function exercise33() {
  type TDictionary = { [key: string]: number };

  const dictionary: TDictionary = {
    a: 1,
    b: 2,
    c: 3,
  };

  dictionary['c'] = 3;

  function getMostFrequentCharacter(str: string): string {
    const charCount: TDictionary = {};

    for (const char of str.toLowerCase()) {
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

  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
}

exercise33();
// TODO: export getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts

// // Use index signature and caching
// function exercise34() {
//   // TODO: Define a dictionary of student grades, add type definition using index signature
//   // key is a student name, value is an array of grades (numbers)
//   const studentGrades = [
//     {
//       name: 'John',
//       grades: [100, 90, 80, 70, 90],
//     },
//     {
//       name: 'Jane',
//       grades: [90, 80, 70, 60, 50],
//     },
//     {
//       name: 'Jack',
//       grades: [80, 70, 60, 50, 40],
//     },
//   ];
//   // TODO: Define a dictionary of cached results, add type definition using index signature
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const cachedResults: any = {};
//
//   // TODO: Implement function to calculate the average grade for a student
//   function calculateAverageGrade(studentName: string): number | string {
//     // TODO: check if chached result exists, return it if it does
//
//     if (cachedResults[studentName]) {
//       // TODO: return cached result
//       return 0;
//     } else {
//       // TODO: calculate average grade
//       // TODO: set cached result
//       // TODO: return average grade
//       return 0;
//     }
//   }
//
//   studentGrades.forEach((student) => {
//     console.log(calculateAverageGrade(student.name));
//   });
//
//   // TODO: find the student with the highest average grade
// }
//
// exercise34();
function exercise34() {
  type TStudentGrades = { [studentName: string]: number[] };
  type TCachedResults = { [studentName: string]: number };

  // Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  const studentGrades: TStudentGrades = {
    John: [100, 90, 80, 70, 90],
    Jane: [90, 80, 70, 60, 50],
    Jack: [80, 70, 60, 50, 40],
  };

  // Define a dictionary of cached results, add type definition using index signature
  const cachedResults: TCachedResults = {};

  // Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // Check if cached result exists, return it if it does
    if (cachedResults[studentName]) {
      return cachedResults[studentName];
    } else {
      // Calculate average grade
      const grades = studentGrades[studentName];
      if (grades) {
        const averageGrade =
          grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        // Set cached result
        cachedResults[studentName] = averageGrade;
        // Return average grade
        return averageGrade;
      } else {
        // Return an error message if student name is not found
        return `Student '${studentName}' not found.`;
      }
    }
  }

  // Iterate over student names and calculate average grade
  Object.keys(studentGrades).forEach((studentName) => {
    console.log(calculateAverageGrade(studentName));
  });

  // Find the student with the highest average grade
  const highestAverageStudent = Object.keys(studentGrades).reduce(
    (highestStudent, currentStudent) => {
      const currentAverage = calculateAverageGrade(currentStudent);
      const highestAverage = calculateAverageGrade(highestStudent);
      return currentAverage > highestAverage ? currentStudent : highestStudent;
    },
  );

  console.log(
    `Student with the highest average grade: ${highestAverageStudent}`,
  );
}

exercise34();

const test = 'test';
export default test;
