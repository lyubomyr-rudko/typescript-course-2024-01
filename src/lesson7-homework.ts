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
  function assignWidgetCost(obj: TWidget): TThing;
  function assignWidgetCost(obj: TGadget): TThing;
  function assignWidgetCost(obj: TThing): TThing {
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
    if (!email) {
      console.log(firstName, lastName);
    } else {
      console.log(firstName, lastName, email);
    }
  }
  handleSaveUserSubmit('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email?: string): void;
  };
  // TODO: implement handleSaveUserSubmit function with this type
  // TODO: add call signatures here. Add overrides for optional email param
  const handleSaveUserSubmit2: TSaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => {
    if (!email) {
      console.log(firstName, lastName);
    } else {
      console.log(firstName, lastName, email);
    }
  };

  handleSaveUserSubmit2('Oleg', 'Vinnik');
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email?: string): void;
  }
  // TODO: implement handleSaveUserSubmit function with this type and interface
  const handleSaveUserSubmit3: ISaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => {
    if (!email) {
      console.log(firstName, lastName);
    } else {
      console.log(firstName, lastName, email);
    }
  };
  handleSaveUserSubmit3('Oleg', 'Vinnik', 'oleg007@opt.com');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    // TODO: delete the following line
    // console.log(firstName, lastName, onSubmit);

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

  // *** add constructor signature here ***
  type TUserConstructor = new (name: string) => { name: string };

  function createAndPrintUser(ctor: TUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('John Smith');
    console.log(user);
    // TODO: delete the following line
    // console.log(ctor);
  }
  // TODO: create instance of TUserConstructor type
  const Ctor: TUserConstructor = class User {
    constructor(public name: string) {}
  };
  // TODO: update the following line, call createAndPrintUser, pass the constructor
  createAndPrintUser(Ctor);
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
  //   const animal = new Animal('Rex'); //Невозможно создать экземпляр абстрактного класса
  //   console.log(animal.name);

  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    constructor(public name: string) {
      super(name);
      //   this.name = name;
    }
    makeSound(): void {
      console.log(`${this.name} say gav gav`);
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
  //dictionary['d'] = '3'; // should cause an error error
  //Type 'string' is not assignable to type 'number'.

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character

  function getMostFrequentCharacter(str: string): string {
    const dictionary: TDictionary = {};
    const str1 = str.replace(/[\s.]/g, '').toLowerCase();
    for (let i: number = 0; i <= str1.length - 1; i++) {
      dictionary[str1[i]] = (dictionary[str1[i]] || 0) + 1;
    }
    let dictionaryMaxVal: number = 0;
    let frequentChar: string = '';
    for (const key in dictionary) {
      if (dictionary[key] > dictionaryMaxVal) {
        dictionaryMaxVal = dictionary[key];
        frequentChar = key;
      }
    }
    return frequentChar;
  }
  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
}
exercise33();
// TODO: exporrt getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  // key is a student name, value is an array of grades (numbers)
  type TDictionaryStudents = {
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
  const studentsDictionary: TDictionaryStudents = {};
  for (const student of studentGrades) {
    studentsDictionary[student.name] = student.grades;
  }
  console.log(studentsDictionary);
  // TODO: Define a dictionary of cached results, add type definition using index signature
  type TDictionaryResults = {
    [key: string]: number;
  };

  const cachedResults: TDictionaryResults = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // TODO: check if chached result exists, return it if it does

    if (cachedResults[studentName]) {
      // TODO: return cached result
      return cachedResults[studentName];
    } else {
      // TODO: calculate average grade
      const res =
        studentsDictionary[studentName].reduce(
          (acc, curr) => (acc += curr),
          0,
        ) / studentsDictionary[studentName].length;
      // TODO: set cached result
      cachedResults[studentName] = res;
      // TODO: return average grade
      return res;
    }
  }

  studentGrades.forEach((student) => {
    console.log(calculateAverageGrade(student.name));
  });
  console.log(cachedResults);

  // TODO: find the student with the highest average grade
  type TStudent = {
    name: string;
    grades: number[];
  };
  function getBestStudent(results: TDictionaryResults): TStudent {
    let maxGrade: number = 0;
    let studentName: string = '';
    for (const el in results) {
      if (results[el] > maxGrade) {
        maxGrade = results[el];
        studentName = el;
      }
    }
    const student: TStudent = studentGrades.find(
      (student) => student.name === studentName,
    )!;
    return student;
  }
  console.log(getBestStudent(cachedResults));
}
exercise34();

const test = 'test';
export default test;
type TDictionary = {
  [key: string]: number;
};
export function getMostFrequentCharacter(str: string): string {
  const dictionary: TDictionary = {};
  const str1 = str.replace(/[\s.]/g, '').toLowerCase();
  for (let i: number = 0; i <= str1.length - 1; i++) {
    dictionary[str1[i]] = (dictionary[str1[i]] || 0) + 1;
  }
  let dictionaryMaxVal: number = 0;
  let frequentChar: string = '';
  for (const key in dictionary) {
    if (dictionary[key] > dictionaryMaxVal) {
      dictionaryMaxVal = dictionary[key];
      frequentChar = key;
    }
  }
  return frequentChar;
}
