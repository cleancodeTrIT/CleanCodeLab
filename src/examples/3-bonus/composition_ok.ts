// ✅ Prefer Composition over inheritance
export const customer: Customer = {
  basicData: {
    name: 'Road Runner',
    address: { city: 'The Dessert', state: 'Arizona' },
  },
  tax: { idNumber: 654654654 },
};

export const suplier: Suplier = {
  basicData: { name: 'ACME Comp.', address: { city: 'New Jersey', state: 'Fairfield' } },
  tax: { idNumber: 123456789 },
  account: { number: '123456789', bank: 'ACME Bank' },
};

export const employee: Employee = {
  basicData: { name: 'Bugs Bunny', address: { city: 'Los Angeles', state: 'California' } },
  account: { number: '987654321', bank: 'Rabbits Bank' },
};

class Address {
  city: string;
  state: string;
}

class BasicData {
  name: string;
  address: Address;
}

class Tax {
  idNumber: number;
}

class Account {
  number: string;
  bank: string;
}

export class Customer {
  basicData: BasicData;
  tax: Tax;
}

export class Suplier {
  basicData: BasicData;
  tax: Tax;
  account: Account;
}

export class Employee {
  basicData: BasicData;
  account: Account;
}
