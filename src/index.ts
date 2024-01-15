const sum = (a: number, b: number): number => a + b;

export { sum };

const max = (...nums: number[]): number => {
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > result) {
      result = nums[i];
    }
  }

  return result;
};

export { max };
