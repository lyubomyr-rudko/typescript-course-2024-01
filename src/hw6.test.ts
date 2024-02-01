import {
    getUserNames,
    getCompanyNames,
    getCompanyWithLongestCatchPhrase,
    getUsersWithOrgWebsite,
  } from './lesson6-homework';
  
  describe('getUserNames', () => {
    it('should return an array of user names in format { firstName: string, lastName: string }', () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', website: 'example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', website: 'example.org' },
      ];
      const expected = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' },
      ];
      expect(getUserNames(users)).toEqual(expected);
    });
  });

  describe('getCompanyNames', () => {
    it('should return an array of company names', () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', website: 'example.com', company: { name: 'ABC Inc.' } },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', website: 'example.org', company: { name: 'XYZ Corp.' } },
      ];
      const expected = ['ABC Inc.', 'XYZ Corp.'];
      expect(getCompanyNames(users)).toEqual(expected);
    });
  });
  

  describe('getCompanyWithLongestCatchPhrase', () => {
    it('should return the company name with the longest catchPhrase', () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', website: 'example.com', company: { name: 'ABC Inc.', catchPhrase: 'Catch phrase' } },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', website: 'example.org', company: { name: 'XYZ Corp.', catchPhrase: 'Longest catch phrase' } },
      ];
      const expected = 'XYZ Corp.';
      expect(getCompanyWithLongestCatchPhrase(users)).toEqual(expected);
    });
  });
  
  describe('getUsersWithOrgWebsite', () => {
    it('should return a list of users with websites ending with ".org"', () => {
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', website: 'example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', website: 'example.org' },
      ];
      const expected = [{ id: 2, name: 'Jane Smith', email: 'jane@example.com', website: 'example.org' }];
      expect(getUsersWithOrgWebsite(users)).toEqual(expected);
    });
  });


