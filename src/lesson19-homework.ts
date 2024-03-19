export {};

// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns

// select excerciseA or excerciseB task as a homework

function excerciseA() {
  // Imagine you are writing an application that stores list of todos
  // each todo has private title and public description and methods to get and set the title and description
  // imagine you need to provide undo button to revert/undo the last change
  // Use one of the Behavioral patterns to implement this requirement.
  // Note - implement it with classical approach, read https://refactoring.guru/uk/design-patterns/behavioral-patterns for more details
  // 1. Declare the class for
  // - Todo
  // - TodoList
  // - TodoHistory
  // 2. Write unit-tests for the classes
  // app = new TodoList
  // history = new TodoHistory()
  // app.addTodo(new Todo(...)
  // app.addTodo(new Todo(...)
  // app.addTodo(new Todo(...)
  // expect(app.todos.length).toBe(3)
  // momentSnapshot = app.createSnapshot()
  // history.push(momentSnapshot)
  // app.addTodo(new Todo(...)
  // expect(app.todos.length).toBe(4)
  // app.restore(history.pop())
  // expect(app.todos.length).toBe(3)
  // write more unit-tests to cover all the methods
}

excerciseA();

function excerciseB() {
  // implement react typescript application that will have todo list application
  // the application should have the following components
  // - TodoList
  // - TodoItem
  // - TodoAddForm
  // Use any of this videos if you get stuck (or any other video you find useful)
  // https://www.youtube.com/watch?v=Rh3tobg7hEo&t=26s
  // https://www.youtube.com/watch?v=4uuKQyeYfqI
  // https://www.youtube.com/watch?v=v8i-cv9NUV0
}

excerciseB();
