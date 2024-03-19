export {};

// Read the articlas from https://refactoring.guru/uk/design-patterns/behavioral-patterns

// select excerciseA or excerciseB task as a homework

// function excerciseA() {
//   // Imagine you are writing an application that stores list of todos
//   // each todo has private title and public description and methods to get and set the title and description
//   // imagine you need to provide undo button to revert/undo the last change
//   // Use one of the Behavioral patterns to implement this requirement.
//   // Note - implement it with classical approach, read https://refactoring.guru/uk/design-patterns/behavioral-patterns for more details
//   // 1. Declare the class for
//   // - Todo
//   // - TodoList
//   // - TodoHistory
//   // 2. Write unit-tests for the classes
//   // app = new TodoList
//   // history = new TodoHistory()
//   // app.addTodo(new Todo(...)
//   // app.addTodo(new Todo(...)
//   // app.addTodo(new Todo(...)
//   // expect(app.todos.length).toBe(3)
//   // momentSnapshot = app.createSnapshot()
//   // history.push(momentSnapshot)
//   // app.addTodo(new Todo(...)
//   // expect(app.todos.length).toBe(4)
//   // app.restore(history.pop())
//   // expect(app.todos.length).toBe(3)
//   // write more unit-tests to cover all the methods
// }
//
// excerciseA();

function exerciseA() {
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

  class TodoHistory {
    private history: Todo[][] = [];

    push(snapshot: Todo[]): void {
      this.history.push(snapshot);
    }

    pop(): Todo[] | undefined {
      return this.history.pop();
    }
  }

  const todoList = new TodoList();
  const todoHistory = new TodoHistory();

  const todo1 = new Todo('Task 1', 'Description 1');
  const todo2 = new Todo('Task 2', 'Description 2');

  todoList.addTodo(todo1);
  todoList.addTodo(todo2);

  console.log('Initial Todo List:');
  console.log(todoList.getTodos());

  const momentSnapshot = todoList.createSnapshot();
  todoHistory.push(momentSnapshot);

  todoList.addTodo(new Todo('Task 3', 'Description 3'));

  console.log('Todo List after adding Task 3:');
  console.log(todoList.getTodos());

  todoList.restore(todoHistory.pop() || []);

  console.log('Todo List after restoring previous state:');
  console.log(todoList.getTodos());
}

exerciseA();

// function excerciseB() {
//   // implement react typescript application that will have todo list application
//   // the application should have the following components
//   // - TodoList
//   // - TodoItem
//   // - TodoAddForm
//   // Use any of this videos if you get stuck (or any other video you find useful)
//   // https://www.youtube.com/watch?v=Rh3tobg7hEo&t=26s
//   // https://www.youtube.com/watch?v=4uuKQyeYfqI
//   // https://www.youtube.com/watch?v=v8i-cv9NUV0
// }
//
// function excerciseB() {
//   import React, { useState } from 'react';
//
//   interface Todo {
//     id: number;
//     text: string;
//   }
//
//   const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
//     return (
//       <ul>
//         {todos.map(todo => (
//             <TodoItem key={todo.id} todo={todo} />
//   ))}
//     </ul>
//   );
//   };
//
//   const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
//     return <li>{todo.text}</li>;
//   };
//
//   const TodoAddForm: React.FC<{ onAdd: (text: string) => void }> = ({ onAdd }) => {
//     const [text, setText] = useState('');
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setText(event.target.value);
//     };
//
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
//       onAdd(text);
//       setText('');
//     };
//
//     return (
//       <form onSubmit={handleSubmit}>
//       <input type="text" value={text} onChange={handleChange} />
//     <button type="submit">Add Todo</button>
//     </form>
//   );
//   };
//
//   const App: React.FC = () => {
//     const [todos, setTodos] = useState<Todo[]>([]);
//
//     const handleAddTodo = (text: string) => {
//       const newTodo: Todo = {
//         id: Math.random(),
//         text: text,
//       };
//       setTodos(prevTodos => [...prevTodos, newTodo]);
//     };
//
//     return (
//       <div>
//         <h1>Todo List</h1>
//     <TodoList todos={todos} />
//     <TodoAddForm onAdd={handleAddTodo} />
//     </div>
//   );
//   };
//
//   export default App;
//
//   return (
//     <App />
//   );
// }
//
// excerciseB();
