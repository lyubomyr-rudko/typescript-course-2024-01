function lesson3() {
  // JS OOP recap

  // target compiler options
  class Book {
    title: string;
    year: number;

    constructor(title: string, year: number) {
      this.title = title;
      this.year = year;
    }

    getInfo() {
      return `${this.title} was published in ${this.year}`;
    }

    getAge() {
      return new Date().getFullYear() - this.year;
    }
  }

  const book = new Book('The Hobbit', 1937);
  console.log(book.getInfo());
  //   book.title; // error

  class Magazine extends Book {
    issue: number;

    constructor(title: string, year: number, issue: number) {
      super(title, year);
      this.issue = issue;
    }

    getInfo() {
      return `${super.getInfo()} and it is issue #${this.issue}`;
    }
  }

  const magazine = new Magazine('The Economist', 1843, 1);
  console.log(magazine.getInfo());

  // any and unknown

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const x: any = 0;
  console.log(x.test.test.test().test().test().test().test().test().test());
  const y: unknown = 0;

  if (typeof y === 'number') {
    console.log(y.toExponential());
  }

  function fetchData(url: string): Promise<unknown> {
    return fetch(url).then((response) => response.json());
  }

  async function printUser() {
    const data = await fetchData('https://example.com/users/1');
    // { name: string, age: number }
    if (
      typeof data === 'object' &&
      data !== null &&
      'name' in data &&
      typeof data.name === 'string'
    ) {
      console.log(data.name);
    }
  }
  printUser();

  // generic classes

  // que - first in first out
  class Queue {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected data: any[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    push(item: any) {
      this.data.push(item);
    }

    pop() {
      return this.data.shift();
    }
  }
  class NumberQueue extends Queue {
    push(item: number) {
      this.data.push(item);
    }

    pop(): number {
      return this.data.shift() as number;
    }
  }
  const q = new Queue();
  q.push(0);
  q.push('1');
  const x1 = q.pop();
  console.log(x1);

  const q2 = new NumberQueue();
  q2.push(0);
  //   q2.push('1'); // error
  class StringQueue extends Queue {
    push(item: string) {
      this.data.push(item);
    }

    pop(): string {
      return this.data.shift() as string;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const z: any = undefined;

  if (Array.isArray(z)) {
    z.push(1);
  }
  console.log(z);

  const sq = new StringQueue();
  sq.push('0');
  //   sq.push(1); // error

  console.log('Lesson 3: Typescript');

  class GenericQueue<T> {
    protected data: T[] = [];

    constructor(...items: T[]) {
      this.data.push(...items);
    }

    push(item: T) {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.shift();
    }
  }
  const q3 = new GenericQueue<number>(1, 2, 3, 4, 5);

  q3.push(10);
  const x2 = q3.pop();
  const x3 = q3.pop();

  if (typeof x3 === 'number') {
    console.log(x3.toExponential());
  }
  console.log(x2);
  //   q3.push('1'); // error
}

export default lesson3;
