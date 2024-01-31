import { describe, expect, it } from '@jest/globals';
import {
  mockedData,
  fetchUsers,
  getUserNames,
  getCompanyNames,
  getLongestCompany,
  getWebsiteOrg,
  getSortedCities,
} from './lesson6-homework';

describe('fetchUsers', () => {
  it('should be defined', () => {
    expect(fetchUsers).toBeDefined();
  });
  it('fetches successfully data from an API', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockedData) }),
        ) as jest.Mock,
      );
    const data = await fetchUsers();
    expect(data).toStrictEqual(mockedData);
  });
});
describe('getUserNames', () => {
  it('should be defined', () => {
    expect(getUserNames).toBeDefined();
  });

  it('should return array of first and last names', () => {
    expect(getUserNames(mockedData)).toStrictEqual([
      { firstName: 'Leanne', lastName: 'Graham' },
      { firstName: 'Ervin', lastName: 'Howell' },
      { firstName: 'Clementine', lastName: 'Bauch' },
      { firstName: 'Patricia', lastName: 'Lebsack' },
      { firstName: 'Chelsey', lastName: 'Dietrich' },
      { firstName: 'Mrs.', lastName: 'Dennis' },
    ]);
  });
  it('should return empty array when set []', () => {
    expect(getUserNames([])).toStrictEqual([]);
  });
});

describe('getCompanyNames', () => {
  it('should be defined', () => {
    expect(getCompanyNames).toBeDefined();
  });

  it('should return array of company names', () => {
    expect(getCompanyNames(mockedData)).toStrictEqual([
      'Romaguera-Crona',
      'Deckow-Crist',
      'Romaguera-Jacobson',
      'Robel-Corkery',
      'Keebler LLC',
      'Considine-Lockman',
    ]);
  });
  it('should return empty array when set []', () => {
    expect(getCompanyNames([])).toStrictEqual([]);
  });
});

describe('getLongestCompany', () => {
  it('should be defined', () => {
    expect(getLongestCompany).toBeDefined();
  });

  it('should return the longest company name', () => {
    expect(getLongestCompany(mockedData)).toStrictEqual('Romaguera-Jacobson');
  });
  it('should return empty string when set []', () => {
    expect(getLongestCompany([])).toStrictEqual('');
  });
});

describe('getWebsiteOrg', () => {
  it('should be defined', () => {
    expect(getWebsiteOrg).toBeDefined();
  });

  it('should return array of websites that ends .org', () => {
    expect(getWebsiteOrg(mockedData)).toStrictEqual([
      'hildegard.org',
      'ola.org',
    ]);
  });
  it('should return empty array when set []', () => {
    expect(getWebsiteOrg([])).toStrictEqual([]);
  });
});

describe('getSortedCities', () => {
  it('should be defined', () => {
    expect(getSortedCities).toBeDefined();
  });

  it('should return array of sorted cities', () => {
    expect(getSortedCities(mockedData)).toStrictEqual([
      'Gwenborough',
      'McKenziehaven',
      'Roscoeview',
      'South Christy',
      'South Elvis',
      'Wisokyburgh',
    ]);
  });
  it('should return empty array when set []', () => {
    expect(getSortedCities([])).toStrictEqual([]);
  });
});
