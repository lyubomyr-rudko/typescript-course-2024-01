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
      private title: string,
      public description: string,
    ) {}

    getTitle() {
      return this.title;
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
        console.log(`${todo.getTitle()}: ${todo.getDescription()}`);
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
      return this.state.slice();
    }
  }

  class TodoHistory {
    private snapshots: SnapShot[] = [];
    constructor(private todoList: TodoList) {}

    backUp() {
      this.snapshots.push(this.todoList.createSnapshot());
    }

    undo() {
      if (!this.snapshots.length) {
        return;
      }

      const snapShot = this.snapshots.pop() as SnapShot;

      this.todoList.restore(snapShot);
    }
  }

  const app = new TodoList();
  const appHistory = new TodoHistory(app);

  app.addTodo(new Todo('1: ', 'First todo'));

  appHistory.backUp(); // First backup

  app.addTodo(new Todo('2: ', 'Second todo'));
  app.addTodo(new Todo('3: ', 'Third todo'));

  appHistory.backUp(); // Second backup
  const snapShot = app.createSnapshot();

  app.addTodo(new Todo('4: ', 'Fourth todo'));
  app.showTodo();
  console.log(`===============`);

  app.restore(snapShot); // Restore by concrete snapShot
  app.showTodo();
  console.log(`===============`);

  app.addTodo(new Todo('5: ', 'Fifth todo'));
  app.showTodo();
  console.log(`===============`);

  appHistory.undo(); // Restore to second backup
  app.showTodo();
  console.log(`===============`);

  appHistory.undo(); // Restore to first backup
  app.showTodo();
  console.log(`===============`);

  app.restore(snapShot); // Restore by concrete snapShot again
  app.showTodo();
  console.log(`===============`);

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
