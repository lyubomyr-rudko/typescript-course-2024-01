export interface IUser {
  id: number;
  name: string;
  email: string;
  website: string;
  address?: IAddress;
  company?: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export function getUserNames(
  users: IUser[],
): { firstName: string; lastName: string }[] {
  return users.map((user) => {
    const nameParts = user.name.split(' ');
    return {
      firstName: nameParts[0],
      lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : '',
    };
  });
}

export function getCompanyNames(users: IUser[]): string[] {
  return users.map((user) => user.company?.name || '');
}

export function getCompanyWithLongestCatchPhrase(
  users: IUser[],
): string | undefined {
  const company = users.reduce<ICompany | undefined>((prev, current) => {
    const catchPhraseLength = current.company?.catchPhrase?.length ?? 0;
    return catchPhraseLength > (prev?.catchPhrase?.length || 0)
      ? current.company
      : prev;
  }, undefined);
  return company?.name;
}

export function getUsersWithOrgWebsite(users: IUser[]): IUser[] {
  return users.filter((user) => user.website.endsWith('.org'));
}

export function getSortedCities(users: IUser[]): string[] {
  const cities = users.map((user) => user.address?.city || '');
  return cities.sort();
}
