import { describe, expect, it, jest } from '@jest/globals';

import { mockUsers, fetchUsers, getUserNames, getCompanyName, companyNameCatch, getUserWithOrgWebSite } from './lesson6-homework'; // Replace 'yourFile' with the correct path to your file


describe('getUserNames', () => {
  it('returns an array of user first names and last names', () => {
    const expectedUserNames = [
      { firstName: 'Mrs.', lastName: 'Dennis' },
      { firstName: 'Nicholas', lastName: 'Runolfsdottir' },
    ];

    expect(getUserNames(mockUsers)).toEqual(expectedUserNames);
  });
});

describe('getCompanyName', () => {
  it('returns an array of company names', () => {
    const expectedCompanyNames = ['Considine-Lockman', 'Abernathy Group'];

    expect(getCompanyName(mockUsers)).toEqual(expectedCompanyNames);
  });
});

describe('companyNameCatch', () => {
  it('returns the company name with the longest catch phrase', () => {
    expect(companyNameCatch(mockUsers)).toBe('Considine-Lockman');
  });
});

describe('getUserWithOrgWebSite', () => {
  it('returns users with websites ending with ".org"', () => {
    const usersWithOrgWebsites = getUserWithOrgWebSite(mockUsers);
    expect(usersWithOrgWebsites.length).toBe(1);
    expect(usersWithOrgWebsites[0].website).toMatch(/\.org$/);
  });
});
