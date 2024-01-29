import { describe, expect, it } from '@jest/globals';

function exerciseA() {
  function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function printMessagesWithTimeout() {
    await delay(1000);
    console.log('1');

    await delay(1000);
    console.log('2');

    await delay(1000);
    console.log('3');
  }

  return printMessagesWithTimeout();
}

describe('exerciseA', () => {
  it('should print 1, 2, 3!!!', async () => {
    const mock = jest.spyOn(console, 'log').mockImplementation();

    await exerciseA();

    expect(mock).toHaveBeenCalledWith('1');
    expect(mock).toHaveBeenCalledWith('2');
    expect(mock).toHaveBeenCalledWith('3');

    mock.mockRestore();
  });

  describe('with mock timers', () => {
    // const originalSetTimeout = global.setTimeout;
    // eslint-disable-next-line @typescript-eslint/ban-types
    // let queue: [Function, number][] = [];
    // const advanceTimersByTime = (msToRun: number) => {
    //   queue.forEach(([cb, interval]) => {
    //     if (interval <= msToRun) {
    //       cb();
    //     }
    //   });

    //   queue = queue.filter(([, interval]) => interval > msToRun);
    //   queue = queue.map(([cb, interval]) => [cb, interval - msToRun]);
    // };
    beforeAll(() => {
      jest.useFakeTimers();
      // type SetTimeout = typeof global.setTimeout;

      // global.setTimeout = jest.fn((cb, interval: number) =>
      //   queue.push([cb, interval]),
      // ) as unknown as SetTimeout;
    });

    afterAll(() => {
      jest.useRealTimers();
      // global.setTimeout = originalSetTimeout;
    });

    it('should print 1, 2, 3', async () => {
      const mock = jest.spyOn(console, 'log').mockImplementation();

      exerciseA();

      // console.log(queue);

      await jest.advanceTimersByTime(1000);
      // advanceTimersByTime(1000);
      expect(mock).toHaveBeenCalledWith('1');

      await jest.advanceTimersByTime(1000);
      // advanceTimersByTime(1000);
      expect(mock).toHaveBeenCalledWith('2');

      await jest.advanceTimersByTime(1000);
      // advanceTimersByTime(1000);
      expect(mock).toHaveBeenCalledWith('3');

      mock.mockRestore();
    });
  });
});
