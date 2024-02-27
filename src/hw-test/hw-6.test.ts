import { describe, expect, it } from '@jest/globals';
import {
  getLongestCompanyPhrase,
  getCompanyNames,
  sortUserCities,
  getUsersWithDotOrgWebsites,
  mockUsers,
} from '../lesson6-homework';

describe('getCompanyNames', () => {
  it('should extract company names from user objects', () => {
    const expectedNames = ['Considine-Lockman', 'Abernathy Group'];
    expect(getCompanyNames(mockUsers)).toEqual(expectedNames);
  });
});

describe('getLongestCompanyPhrase', () => {
  it('should return the company with the longest catch phrase', () => {
    expect(getLongestCompanyPhrase(mockUsers)).toBe('Considine-Lockman');
  });

  it('should throw an error if the users array is empty', () => {
    expect(() => getLongestCompanyPhrase([])).toThrow(
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

describe('sortUserCities', () => {
  it('should return sorted city names of users', () => {
    const expectedCities = ['Aliyaview', 'South Christy'];
    expect(sortUserCities(mockUsers)).toEqual(expectedCities);
  });
});
