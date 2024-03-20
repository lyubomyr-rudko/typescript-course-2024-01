import { exerciseA } from './lesson19-homework';

const { Todo, TodoList } = exerciseA();

describe('TodoList', () => {
  it('adds todos to the list', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo(1, 'Description'));
    todoList.addTodo(new Todo(2, 'Description'));
    todoList.addTodo(new Todo(3, 'Description'));

    expect(todoList.getState().length).toBe(3);
  });

  it('creates a snapshot of the todo list', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo(3, 'Description'));

    const snapshot = todoList.createSnapshot();

    expect(snapshot.getState().length).toBe(1);
  });

  it('restores the todo list from a snapshot', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo(1, 'Description'));
    todoList.addTodo(new Todo(1, 'Description'));

    const snapshot = todoList.createSnapshot();

    todoList.addTodo(new Todo(3, 'Description'));

    expect(todoList.getState().length).toBe(3);

    todoList.restore(snapshot);

    expect(todoList.getState().length).toBe(2);
  });
});
