import { exercise33Test } from './lesson7-homework';

describe('exercise33Test:', () => {
  const getMostFrequentCharacter = exercise33Test;

  it('getMostFrequentCharacter is load:', () => {
    expect(getMostFrequentCharacter).toBeDefined();
  });

  it('getMostFrequentCharacter test for clear string:', () => {
    const phraseTest = '';
    expect(getMostFrequentCharacter(phraseTest)).toBe('');
  });

  it('getMostFrequentCharacter test other input string:', () => {
    const phraseTest = 'abbcccdddd';
    expect(getMostFrequentCharacter(phraseTest)).toBe('d');
  });

  it('getMostFrequentCharacter test not only character in string:', () => {
    const phraseTest = '@122333-4444-55555_!:';
    expect(getMostFrequentCharacter(phraseTest)).toBe('5');
  });
});
