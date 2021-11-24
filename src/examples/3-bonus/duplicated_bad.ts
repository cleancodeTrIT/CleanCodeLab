// ❌ duplicated data today...
// ... may be duplicated logic tomorrow

export class Customer {
  name: string;
  addressCity: string;
  addressState: string;
  taxIdNumber: number;
}

export class Supplier {
  name: string;
  addressCity: string;
  addressState: string;
  taxIdNumber: number;
  accountNumber: string;
  accountBank: string;
}

export class Employee {
  name: string;
  addressCity: string;
  addressState: string;
  accountNumber: string;
  accountBank: string;
}

export const customer: Customer = {
  name: 'Road Runner',
  addressCity: 'The Dessert',
  addressState: 'Arizona',
  taxIdNumber: 654654654,
};

export const supplier: Supplier = {
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
