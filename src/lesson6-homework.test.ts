import { describe, expect, it } from '@jest/globals';
import {
  getCompanyNameWithLongestCatchPhrase,
  getCompanyNames,
  getSortedUsersCityNames,
  getUsersWithDotOrgWebsites,
  mockUsers,
} from './lesson6-homework';

it('should extract company names from user objects', () => {
  const expectedNames = ['Considine-Lockman', 'Abernathy Group'];
  expect(getCompanyNames(mockUsers)).toEqual(expectedNames);
});

describe('getCompanyNameWithLongestCatchPhrase', () => {
  it('should return the company with the longest catch phrase', () => {
    expect(getCompanyNameWithLongestCatchPhrase(mockUsers)).toBe(
      'Considine-Lockman',
    );
  });

  it('should throw an error if the users array is empty', () => {
    expect(() => getCompanyNameWithLongestCatchPhrase([])).toThrow(
      'Array of users should not be empty',
    );
  });
});

describe('getUsersWithDotOrgWebsites', () => {
  it('should filter users with .org websites', () => {
    const expectedUsers = [mockUsers[0]];
    expect(getUsersWithDotOrgWebsites(mockUsers)).toEqual(expectedUsers);
  });
});

describe('getSortedUsersCityNames', () => {
  it('should return sorted city names of users', () => {
    const expectedCities = ['Aliyaview', 'South Christy'];
    expect(getSortedUsersCityNames(mockUsers)).toEqual(expectedCities);
  });
});
