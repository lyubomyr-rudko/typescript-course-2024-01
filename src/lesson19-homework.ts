export {};

// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns

// select excerciseA or excerciseB task as a homework

export function excerciseA() {
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

    setTitle(title: string) {
      this.title = title;
    }

    getDescription(): string {
      return this.description;
    }
  }
  // - TodoList
  class TodoList {
    private todos: Todo[] = [];

    public addTodo(todo: Todo): void {
      this.todos.push(todo);
    }

    public createSnapshot(): Todo[] {
      return this.todos.map(
        (todo) => new Todo(todo.getTitle(), todo.description),
      );
    }

    public restore(snapshot: Todo[]) {
      this.todos = snapshot;
    }

    getTodos(): Todo[] {
      return this.todos;
    }
  }
  // - TodoHistory
  class TodoHistory {
    private history: Todo[][] = [];

    public push(snapshot: Todo[]): void {
      this.history.push(snapshot);
    }

    public pop(): Todo[] | undefined {
      return this.history.pop();
    }
  }
  // 2. Write unit-tests for the classes
  const app = new TodoList();
  app.addTodo(new Todo('1', 'first todo'));
  app.addTodo(new Todo('2', 'second todo'));
  app.addTodo(new Todo('3', 'third todo'));
  // expect(app.todos.length).toBe(3)
  const momentSnapshot = app.createSnapshot();
  const history = new TodoHistory();
  history.push(momentSnapshot);
  app.addTodo(new Todo('4', 'fourth todo'));
  // expect(app.todos.length).toBe(4)
  app.restore(history.pop() || ([] as Todo[]));
  // expect(app.todos.length).toBe(3)
  // write more unit-tests to cover all the methods
  return {
    Todo,
    TodoList,
    TodoHistory,
  };
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
