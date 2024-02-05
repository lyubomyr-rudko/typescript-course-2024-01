type TDictionary = { [key: string]: number };

const dictionary: TDictionary = {
  a: 1,
  b: 2,
  c: 3,
};

dictionary['c'] = 3;

export function getMostFrequentCharacter(str: string): string {
  const charCount: TDictionary = {};

  for (const char of str.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let mostFrequentChar = '';
  let maxCount = 0;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      mostFrequentChar = char;
      maxCount = charCount[char];
    }
  }

  return mostFrequentChar;
}

console.log(getMostFrequentCharacter('She sells seashells by the seashore.'));
