import { describe, expect, it } from '@jest/globals';
import { excerciseA } from './lesson19-homework';

const { TodoList, Todo, TodoHistory } = excerciseA();
describe('excerciseA', () => {
  it('should be defined', () => {
    expect(excerciseA).toBeDefined();
  });

  it('app todos length should be 3', () => {
    const app = new TodoList();
    app.addTodo(new Todo('1', 'first todo'));
    app.addTodo(new Todo('2', 'second todo'));
    app.addTodo(new Todo('3', 'third todo'));
    expect(app.getTodos().length).toBe(3);
  });
  it('create a snapshot of the todolist', () => {
    const app2 = new TodoList();

    app2.addTodo(new Todo('1', 'first todo'));
    app2.addTodo(new Todo('2', 'second todo'));
    app2.addTodo(new Todo('3', 'third todo'));

    const snapshot = app2.createSnapshot();

    app2.addTodo(new Todo('4', 'fourth todo'));

    expect(app2.getTodos().length).toBe(4);

    app2.restore(snapshot);

    expect(app2.getTodos().length).toBe(3);
  });
  it('check todoHistory', () => {
    const app3 = new TodoList();
    const history = new TodoHistory();

    app3.addTodo(new Todo('1', 'first todo'));

    history.push(app3.createSnapshot());

    app3.addTodo(new Todo('2', 'second todo'));

    history.push(app3.createSnapshot());

    app3.addTodo(new Todo('3', 'third todo'));

    expect(app3.getTodos().length).toBe(3);

    app3.restore(history.pop() || []);

    expect(app3.getTodos().length).toBe(2);

    app3.restore(history.pop() || []);

    expect(app3.getTodos().length).toBe(1);
  });
});
