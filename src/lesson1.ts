/* eslint-disable */
// TODO: send js basics youtube video
// TODO: send github basics youtube video
function lesson1() {
  function example1() {
    // primitive types
    let name = '10';
    let a = Number(name);

    // name = 10;
    console.log('Helo ' + name);

    let age: number = 30;

    console.log('You are ' + age + ' years old');

    let isAdult: boolean = true;
    if (isAdult) {
      console.log('You are adult');
    } else {
      console.log('You are not adult');
    }

    let nothing: null = null;
    let notAThing: undefined = undefined;

    let test: string;
    test = 'test test';

    console.log(test);

    let id1: symbol = Symbol('id');
    let id2: symbol = Symbol('id');

    console.log(id1 === id2); // false

    let x = 10;
    let name2 = x.toString(2);

    // let bigInt: bigint = 1234567890123456789012345678901234567890n;
  }

  example1();

  function example2() {
    // complex types
    let userAge: number[] = [1, 2, 3];
    userAge.push(4);
    // userAge.push('5'); //  error
    let userAge2: Array<string> = ['John', 'Bob', 'Alice'];
    let d: Date = new Date();
    let r: RegExp = /test/g;
  }
  example2();

  // - Course Project ideas:
  //   - Wourkout tracker
  // - mussle groups (chest, back, legs, arms, shoulders)
  // - excrcise (bench press, deadlift, squat, pull up, push up, dips, shoulder press, bicep curl, tricep extension)
  // - workout (date, mussle group, excrcise , weight, reps, sets)
  //   - Chat application
  // - user (name, email, password, avatar)
  // - friends (user, user)
  // - messages (user, user, message, date)
  // - groups (user, user, user, user)
  //   - Task manager
  // - user (name, email, password, avatar)
  // - task (user, title, description, date)
  // - projects (user, title, description, date)
  //   - Interview app
  // - technology (title, description)
  // - areas (title, description)
  // - subjects (title, description)
  // - questions (technology, area, title, description)
  //   - Expense tracker
  // - user (name, email, password, avatar)
  // - aeas (user, title, description)
  // - categories (user, title, description)
  // - expense (user, title, description, date, amount)
}
lesson1();
