/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export class CustomPromise {
  _state: 'pending' | 'fulfilled' | 'rejected';
  _value: any;
  _reason: any;
  _onFulfilled: Function[];
  _onRejected: Function[];
  _promiseChain: CustomPromise[];

  constructor(executor: Function) {
    this._state = 'pending';
    this._value = undefined;
    this._reason = undefined;
    this._onFulfilled = [];
    this._onRejected = [];
    this._promiseChain = [];

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(value: any) {
    if (this._state === 'pending') {
      this._state = 'fulfilled';
      this._value = value;
      this._onFulfilled.forEach((onFulfilled, index) => {
        const value = onFulfilled(this._value);
        this._promiseChain[index]._resolve(value);
      });
    }
  }

  _reject(reason: any) {
    if (this._state === 'pending') {
      this._state = 'rejected';
      this._reason = reason;
      this._onRejected.forEach((onRejected, index) => {
        onRejected(this._reason);
        this._promiseChain[index]._reject(this._reason);
      });
    }
  }

  then(onFulfilled: Function, onRejected: Function) {
    const returnPromise = new CustomPromise(() => {});

    if (this._state === 'fulfilled') {
      onFulfilled(this._value);
      returnPromise._resolve(this._value);
    } else if (this._state === 'rejected') {
      onRejected(this._reason);
      returnPromise._reject(this._reason);
    } else {
      this._onFulfilled.push(onFulfilled);
      this._onRejected.push(onRejected);
      this._promiseChain.push(returnPromise);
    }

    return returnPromise;
  }
}

const promise = new CustomPromise((resolve: Function) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise.then(
  (value: any) => {
    console.log(1, value);
    return value + 1;
  },
  (reason: any) => {
    console.log(1, reason);
  },
);

promise
  .then(
    (value: any) => {
      console.log(2, value);
      return value + 1;
    },
    (reason: any) => {
      console.log(2, reason);
    },
  )
  .then(
    (value: any) => {
      console.log(3, value);
      return value + 1;
    },
    (reason: any) => {
      console.log(3, reason);
    },
  );
