// ❌ avoid inheritance temptation
export const customer: Customer = {
  name: 'Road Runner',
  addressCity: 'The Dessert',
  addressState: 'Arizona',
  taxIdNumber: 654654654,
};

export const suplier: Suplier = {
  name: 'ACME Comp.',
  addressCity: 'New Jersey',
  addressState: 'Fairfield',
  taxIdNumber: 123456789,
  accountNumber: '123456789',
  accountBank: 'ACME Bank',
};

export const employee: Employee = {
  name: 'Bugs Bunny',
  addressCity: 'Los Angeles',
  addressState: 'California',
  accountNumber: '987654321',
  accountBank: 'Rabbits Bank',
};

class BasicData {
  name: string;
  addressCity: string;
  addressState: string;
}

export class Customer extends BasicData {
  taxIdNumber: number;
}

export class Suplier extends BasicData {
  taxIdNumber: number;
  accountNumber: string;
  accountBank: string;
}

export class Employee extends BasicData {
  accountNumber: string;
  accountBank: string;
}
