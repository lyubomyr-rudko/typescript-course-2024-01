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
    return !!arg;
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
  function assignWidgetCost(obj: TThing): TThing {
    obj.cost = 100;

    return obj;
  }

  // TODO: fix problem - typeof a: TThing, not TWidget
  const a = assignWidgetCost({ name: 'widget' } as TWidget);
  const a2 = assignWidgetCost({ name: 'widget' }); // also good work with type
  // TODO: fix same here - typeof b: TThing, not TGadget
  const b = assignWidgetCost({ os: 'android' } as TGadget);

  console.log(a, a2, b);
}
exercise30();

// Create call signatures
function exercise31() {
  // TODO: implement handleSaveUserSubmit function with function overrides
  function handleSaveUserSubmit(firstName: string, lastName: string): void;
  function handleSaveUserSubmit(
    firstName: string,
    lastName: string,
    email?: string,
  ): void {
    if (email) console.log(firstName, lastName, email);
    else console.log(firstName, lastName);
  }
  handleSaveUserSubmit('John', 'Smith');

  // TODO: add call signatures here. Add overrides for optional email param
  type TSaveUserCallback = {
    /* replace  with your code */
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
    // x: ''
  };
  // TODO: implement handleSaveUserSubmit function with this type
  const handleSaveUserSubmit2: TSaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => {
    let log = '';
    if (email) log = `${firstName} ${lastName} 📧:${email}`;
    else log = `${firstName} ${lastName}`;
    console.log(`>>>\t${log}`);
  };
  handleSaveUserSubmit2('Andry', 'Smith');
  handleSaveUserSubmit2('John', 'Smith', 'john.smith@server.com');

  // TODO: add call signatures here. Add overrides for optional email param
  interface ISaveUserCallback {
    (firstName: string, lastName: string): void;
    (firstName: string, lastName: string, email: string): void;
  }
  // TODO: implement handleSaveUserSubmit function with this type and interface
  const handleSaveUserSubmit3: ISaveUserCallback = (
    firstName: string,
    lastName: string,
    email?: string,
  ) => {
    let log = '';
    if (email) log = `${firstName} ${lastName} 📧:${email}`;
    else log = `${firstName} ${lastName}`;
    console.log(`>>>\t${log}`);
  };
  handleSaveUserSubmit3('IAndry', 'Wesson');
  handleSaveUserSubmit3('IJohn', 'Wesson', 'ijohn.wesson@server.com');

  function createForm(onSubmit: TSaveUserCallback) {
    const firstName = 'John';
    const lastName = 'Smith';

    // TODO: delete the following line
    // console.log(firstName, lastName, onSubmit);

    // TODO: uncomment the following line
    onSubmit(firstName, lastName);
  }
  // TODO: remove type assertion, fix the error
  createForm(handleSaveUserSubmit); // no any err

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
  createForm2(handleSaveUserSubmit); // no any err

  // *** add constructor signatures here ***
  // type TUserConstructor = {
  //   /* replace  with your code */
  //   // x: ''
  // };
  type TUser = { name: string };
  type TUserConstructor = new (name: string) => TUser;

  function createAndPrintUser(ctor: TUserConstructor) {
    // TOOD: uncomment the following lines
    const user = new ctor('Arni ShwartzBigHand');
    console.log(user);
    // TODO: delete the following line
    // console.log(ctor);
  }
  // TODO: create instance of TUserConstructor type
  const userConstructor: TUserConstructor = class User {
    constructor(public name: string) {}
  };

  // TODO: update the following line, call createAndPrintUser, pass the constructor
  createAndPrintUser(userConstructor); //  as unknown as TUserConstructor
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
    // makeSound ...
    abstract makeSound(): void;

    eat(): void {
      console.log('eating');
    }
  }
  // TODO: observe the error and comment out next 2 lines
  // const animal = new Animal('Rex'); // Cannot create an instance of an abstract class.
  // console.log(animal.name); // BUT despite prev error - log is work -> 'Rex'

  // TODO: inherit from Animal and implement makeSound method
  class Dog extends Animal {
    makeSound(): void {
      console.log('Wow! Wow! Wow!');
      console.log('Wow not bad, BUT Warhammer more good! :)');
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
    '1': 1,
    '2': 2,
    '3': 3,
  };

  // TODO: uncomment the following lines, fix the errors
  dictionary['c'] = 3; // all correct
  dictionary['d'] = +'3'; // should cause an error error
  console.log(dictionary); //  { '1': 1, '2': 2, '3': 3, c: 3, d: '3' }

  // TODO: implement a function that calculates number of characters
  // in a string using the dictionary type, and returns a most frequent character
  function getMostFrequentCharacter(str: string): string {
    const characters: TDictionary = {};
    const max: {
      character: string;
      count: number;
    } = { character: '', count: 0 };
    const isSingle = true;

    // for ALL characters - lower $ CAPITAL cases...
    // TODO if several similar values (a: 7, e:7)
    for (let i = 0; i < str.length; i++) {
      const key = str[i].toLowerCase();
      const prev = characters[key] || 0;
      characters[key] = prev + 1;
      if (characters[key] > max.count) {
        max.character = key;
        max.count = characters[key];
      }
    }
    console.log(`From ${str}:
length: ${str.length}
Most used character${isSingle ? '' : 's'} "${max.character}" : ${max.count}`);

    return max.character; //str[0] || '';
  }
  console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));

  return getMostFrequentCharacter;
}
export const exercise33Test = exercise33();
// TODO: exporrt getMostFrequentCharacter function, and add a test for it in lesson7-homework.test.ts

// Use index signature and caching
function exercise34() {
  // TODO: Define a dictionary of student grades, add type definition using index signature
  type TStudentAverageGrade = {
    [key: string]: number;
  };

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
  // TODO: Define a dictionary of cached results, add type definition using index signature
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cachedResults: TStudentAverageGrade = {};

  // TODO: Implement function to calculate the average grade for a student
  function calculateAverageGrade(studentName: string): number | string {
    // TODO: check if chached result exists, return it if it does

    if (cachedResults[studentName]) {
      // TODO: return cached result
      return cachedResults[studentName];
    } else {
      // TODO: calculate average grade
      // find currect student data:
      const currentStudentGrades = studentGrades.filter(
        (student) => student.name === studentName,
      )[0].grades;

      const averageGrade = currentStudentGrades.reduce(
        (sum: number, curr: number) => sum + curr,
        0,
      );
      // TODO: set cached result
      cachedResults[studentName] = averageGrade;
      // TODO: return average grade
      return averageGrade;
    }
  }

  // TODO: find the student with the highest average grade
  type TStudent = {
    name: string;
    averageGrade: number;
  };
  const highest: TStudent = {
    name: '',
    averageGrade: 0,
  };
  studentGrades.forEach((student) => {
    // we can send also student grades for more link behaviour BUT
    // if will ned other solution without change this function
    const grade = calculateAverageGrade(student.name);
    console.log(grade);
    if (+grade > highest.averageGrade) {
      highest.averageGrade = +grade;
      highest.name = student.name;
    }
  });
  console.log(`Student thith highest average grade:
>\t${highest.name} : ${highest.averageGrade}
  `);
}
exercise34();

const test = 'test';
export default test;
