import { describe, expect, it } from '@jest/globals';
import {
  getUserNames,
  getCompanyName,
  getCompanyLongestName,
  getUsersOrg,
  getNameCity,
  mockUsers,
  fetchUsers,
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
          Promise.resolve({ json: () => Promise.resolve(mockUsers) }),
        ) as jest.Mock,
      );
    const data = await fetchUsers();
    expect(data).toStrictEqual(mockUsers);
  });
});

describe('getUserNames', () => {
  it('should be defined', () => {
    expect(getUserNames).toBeDefined();
  });

  it('should return array of first and last names', () => {
    expect(getUserNames(mockUsers)).toEqual([
      { firstName: 'Leanne', lastName: 'Graham' },
      { firstName: 'Ervin', lastName: 'Howell' },
      { firstName: 'Clementine', lastName: 'Bauch' },
      { firstName: 'Patricia', lastName: 'Lebsack' },
      { firstName: 'Chelsey', lastName: 'Dietrich' },
      { firstName: 'Mrs.', lastName: 'Dennis Schulist' },
      { firstName: 'Kurtis', lastName: 'Weissnat' },
      { firstName: 'Nicholas', lastName: 'Runolfsdottir V' },
      { firstName: 'Glenna', lastName: 'Reichert' },
      { firstName: 'Clementina', lastName: 'DuBuque' },
    ]);
  });
});

describe('getCompanyName', () => {
  it('should be defined', () => {
    expect(getCompanyName).toBeDefined();
  });

  it('should return array of company names', () => {
    expect(getCompanyName(mockUsers)).toStrictEqual([
      'Romaguera-Crona',
      'Deckow-Crist',
      'Romaguera-Jacobson',
      'Robel-Corkery',
      'Keebler LLC',
      'Considine-Lockman',
      'Johns Group',
      'Abernathy Group',
      'Yost and Sons',
      'Hoeger LLC',
    ]);
  });
});

describe('getCompanyLongestName', () => {
  it('should be defined', () => {
    expect(getCompanyLongestName).toBeDefined();
  });

  it('should return the longest company name', () => {
    expect(getCompanyLongestName(mockUsers)).toStrictEqual(
      'Romaguera-Jacobson',
    );
  });
});

describe('getUsersOrg', () => {
  it('should be defined', () => {
    expect(getUsersOrg).toBeDefined();
  });

  it('should return an array of usernames of users whose site ends in .org.', () => {
    expect(getUsersOrg(mockUsers)).toStrictEqual([
      'Leanne Graham',
      'Mrs. Dennis Schulist',
    ]);
  });
});

describe('getNameCity', () => {
  it('should be defined', () => {
    expect(getNameCity).toBeDefined();
  });

  it('should return array of sorted cities', () => {
    expect(getNameCity(mockUsers)).toStrictEqual([
      'Aliyaview',
      'Bartholomebury',
      'Gwenborough',
      'Howemouth',
      'Lebsackbury',
      'McKenziehaven',
      'Roscoeview',
      'South Christy',
      'South Elvis',
      'Wisokyburgh',
    ]);
  });
  it('should return empty array when set []', () => {
    expect(getNameCity([])).toStrictEqual([]);
  });
});
