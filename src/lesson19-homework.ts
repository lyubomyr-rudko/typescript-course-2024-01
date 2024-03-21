// Read the articles from https://refactoring.guru/uk/design-patterns/behavioral-patterns

// select exerciseA or exerciseB task as a homework

export function exerciseA() {
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
  class Todo {
    constructor(
      private id: number,
      public description: string,
    ) {}

    getId() {
      return this.id;
    }

    getDescription() {
      return this.description;
    }
  }

  class TodoList {
    private state: Todo[] = [];

    addTodo(todo: Todo) {
      this.state.push(todo);
    }

    showTodo() {
      this.state.forEach((todo) => {
        console.log(`${todo.getId()} ${todo.getDescription()}`);
      });
    }

    getState() {
      return this.state;
    }

    createSnapshot() {
      return new SnapShot(this.state.slice());
    }

    restore(snapShot: SnapShot) {
      this.state = snapShot.getState();
    }
  }

  class SnapShot {
    constructor(private state: Todo[]) {}

    getState() {
      return this.state.sort();
    }
  }

  class TodoHistory {
    private snapshots: SnapShot[] = [];
    constructor(private todoList: TodoList) {}

    backUp() {
      this.snapshots.push(this.todoList.createSnapshot());
    }
  }

  const app = new TodoList();
  const appHistory = new TodoHistory(app);

  app.addTodo(new Todo(1, 'First'));

  appHistory.backUp();

  app.addTodo(new Todo(2, 'Second'));
  app.addTodo(new Todo(3, 'Third'));

  appHistory.backUp();
  const snapShot = app.createSnapshot();

  app.addTodo(new Todo(4, 'Fourth'));
  app.showTodo();

  app.restore(snapShot);
  app.showTodo();

  return {
    Todo,
    TodoList,
  };
}

exerciseA();
