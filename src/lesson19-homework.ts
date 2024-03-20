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
  class Todo {
    private title: string;
    public description: string;

    constructor(title: string, description: string) {
      this.title = title;
      this.description = description;
    }

    getTitle(): string {
      return this.title;
    }
  }

  // - TodoList
  class TodoList {
    private todos: Todo[] = [];

    addTodo(todo: Todo): void {
      this.todos.push(todo);
    }

    getTodos(): Todo[] {
      return this.todos;
    }

    createSnapshot(): Todo[] {
      return [...this.todos];
    }

    restore(snapshot: Todo[]): void {
      this.todos = snapshot;
    }
  }

  // - TodoHistory
  class TodoHistory {
    private history: Todo[][] = [];

    push(snapshot: Todo[]): void {
      this.history.push(snapshot);
    }

    pop(): Todo[] | undefined {
      return this.history.pop();
    }
  }

  // 2. Write unit-tests for the classes
  const app = new TodoList();
  const history = new TodoHistory();

  const newToDo1 = new Todo('Task 1', 'Description 1');
  const newToDo2 = new Todo('Task 2', 'Description 2');
  const newToDo3 = new Todo('Task 3', 'Description 3');

  app.addTodo(newToDo1);
  app.addTodo(newToDo2);
  app.addTodo(newToDo3);

  console.log('Initial Todo List:');
  console.log(app.getTodos());

  const momentSnapshot = app.createSnapshot();
  history.push(momentSnapshot);

  app.addTodo(new Todo('Task 4', 'Description 4'));

  console.log('Todo List after adding Task 4:');
  console.log(app.getTodos());

  app.restore(history.pop() || []);

  console.log('Todo List after restoring previous state:');
  console.log(app.getTodos());
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
  // ---------
  // todo list
  // https://github.com/danilfomchik/test-npm-package
}

excerciseB();
