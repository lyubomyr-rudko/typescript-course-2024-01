import { describe, expect, it } from '@jest/globals';
import { excerciseA } from './lesson19-homework';

const { Todo, TodoList, TodoHistory } = excerciseA();

describe('Todo', () => {
  it('should create a new Todo object with correct properties', () => {
    const todo = new Todo('Task 1', 'Description 1');
    expect(todo.getTitle()).toBe('Task 1');
    expect(todo.description).toBe('Description 1');
  });
});

describe('TodoList', () => {
  it('should add a todo to the list', () => {
    const todoList = new TodoList();
    todoList.addTodo(new Todo('Task 1', 'Description 1'));
    todoList.addTodo(new Todo('Task 2', 'Description 2'));
    todoList.addTodo(new Todo('Task 3', 'Description 3'));
    expect(todoList.getTodos().length).toBe(3);
  });

  it('should create a snapshot of the todos', () => {
    const todoList = new TodoList();
    const todo1 = new Todo('Task 1', 'Description 1');
    const todo2 = new Todo('Task 2', 'Description 2');
    todoList.addTodo(todo1);
    todoList.addTodo(todo2);

    const snapshot = todoList.createSnapshot();
    expect(snapshot.length).toBe(2);
    expect(snapshot[0].getTitle()).toBe('Task 1');
    expect(snapshot[1].description).toBe('Description 2');
  });

  it('should restore todos from a snapshot', () => {
    const todoList = new TodoList();
    const todo1 = new Todo('Task 1', 'Description 1');
    const todo2 = new Todo('Task 2', 'Description 2');
    todoList.addTodo(todo1);
    todoList.addTodo(todo2);

    const snapshot = todoList.createSnapshot();
    todoList.addTodo(new Todo('Task 3', 'Description 3'));

    todoList.restore(snapshot);
    expect(todoList.getTodos().length).toBe(2);
    expect(todoList.getTodos()[1].description).toBe('Description 2');
  });
});

describe('TodoHistory', () => {
  it('should push a snapshot to history', () => {
    const todoHistory = new TodoHistory();
    const todo1 = new Todo('Task 1', 'Description 1');
    const todo2 = new Todo('Task 2', 'Description 2');
    const snapshot = [todo1, todo2];
    todoHistory.push(snapshot);
    expect(todoHistory.pop()).toEqual(snapshot);
  });

  it('should return undefined when popping from empty history', () => {
    const todoHistory = new TodoHistory();
    expect(todoHistory.pop()).toBeUndefined();
  });
});
