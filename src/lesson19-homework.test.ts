import { describe, expect, it } from '@jest/globals';
import { excerciseA } from './lesson19-homework';

const { Todo, TodoHistory, TodoList } = excerciseA();

describe('TodoList', () => {
  it('adds todos to the list', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo('Todo 1', 'Description 1'));
    todoList.addTodo(new Todo('Todo 2', 'Description 2'));

    expect(todoList.getState().length).toBe(2);
  });

  it('creates a snapshot of the todo list', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo('Todo 1', 'Description 1'));

    const snapshot = todoList.createSnapshot();

    expect(snapshot.getState().length).toBe(1);
  });

  it('restores the todo list from a snapshot', () => {
    const todoList = new TodoList();

    todoList.addTodo(new Todo('Todo 1', 'Description 1'));
    todoList.addTodo(new Todo('Todo 2', 'Description 2'));

    const snapshot = todoList.createSnapshot();

    todoList.addTodo(new Todo('Todo 3', 'Description 3'));

    expect(todoList.getState().length).toBe(3);

    todoList.restore(snapshot);

    expect(todoList.getState().length).toBe(2);
  });
});

describe('TodoHistory', () => {
  it('undos the last change using a snapshot', () => {
    const todoList = new TodoList();
    const history = new TodoHistory(todoList);

    todoList.addTodo(new Todo('Todo 1', 'Description 1'));

    history.backUp();

    todoList.addTodo(new Todo('Todo 2', 'Description 2'));

    history.backUp();

    todoList.addTodo(new Todo('Todo 3', 'Description 3'));

    expect(todoList.getState().length).toBe(3);

    history.undo();

    expect(todoList.getState().length).toBe(2);

    history.undo();

    expect(todoList.getState().length).toBe(1);
  });
});
