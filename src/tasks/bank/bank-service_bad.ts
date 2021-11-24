/* eslint-disable max-params */
/* eslint-disable max-depth */
export const TRANSACTION_TYPES = ['DEPOSIT', 'WITHDRAW', 'CANCEL', 'TRANSFER'];

// ❌ this is not an optimal solution
export const TRANSACTION_CALCULATOR = {
  DEPOSIT: (transaction: Transaction, account: Account): number =>
    account.balance.amount + transaction.value.amount,
  WITHDRAW: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
  CANCEL: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
  TRANSFER: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
};

export const BALANCE_MESSAGES = [
  {
    topValue: 0,
    message: `💸 Bad luck you have no enough `,
  },
  {
    topValue: 100,
    message: `💰 Be careful with your spends of `,
  },
  {
    topValue: Number.MAX_SAFE_INTEGER,
    message: `🤑 Good! you have a lot of `,
  },
];

const DEAFULT_CURRENCY = 'EUR';

export type Money = { amount: number; currency?: string };

export class Transaction {
  public readonly transactionId: string;
  constructor(
    public readonly accountdId: string,
    public readonly transactionType: string,
    public readonly value: Money,
    public readonly targetAccountdId?: string
  ) {
    this.guardInvalidTransaction();
    this.value.currency = this.value.currency || DEAFULT_CURRENCY;
    this.transactionId = new Date().getUTCDate().toLocaleString();
  }
  private guardInvalidTransaction(): void {
    if (TRANSACTION_TYPES.includes(this.transactionType)) {
      const MINIMAL_AMOUNT = 0;
      if (this.value.amount >= MINIMAL_AMOUNT) {
        // ❌ transaction types involved in validations and calculations
        if (this.transactionType === 'TRANSFER') {
          if (this.targetAccountdId != undefined) {
            return;
          }
        } else {
          return;
        }
      }
    }
    throw '💥Invalid transaction';
  }
}

export class Account {
  constructor(
    public readonly accountId: string,
    public readonly countryId: string = 'ES',
    public readonly balance: Money = { amount: 0, currency: DEAFULT_CURRENCY }
  ) {
    this.guardInvalidAccount();
  }
  private guardInvalidAccount(): void {
    // ❌ validation logic can be way too complex
    switch (this.countryId) {
      case 'ES':
        if (this.accountId.startsWith('ES') && this.accountId.length === 28) return;
        break;
      case 'PT':
        if (this.accountId.startsWith('PT') && this.accountId.length === 29) return;
        break;
    }
    throw '💥Invalid account';
  }
}

export class Accounts {
  private readonly accounts: Account[] = [];
  add(account: Account): void {
    this.accounts.push(account);
  }
  getById(accountId: string): Account {
    const account = this.accounts.find(a => a.accountId === accountId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    return account;
  }
}

// ❌ manage accounts, transactions and balance is too much responsibility

export class BankService {
  private readonly accounts: Accounts = new Accounts();
  private readonly transactions: Transaction[] = [];
  constructor() {}

  createAccount(accountId = 'ES99 8888 7777 66 5555555555'): string {
    const defaultAccount = new Account(accountId);
    this.accounts.add(defaultAccount);
    return accountId;
  }

  addTransaction(transaction: Transaction): string {
    const account = this.accounts.getById(transaction.accountdId);
    account.balance.amount = this.executeTransaction(transaction, account);
    this.transactions.push(transaction);
    return transaction.transactionId;
  }

  // ❌ flags in methods is a bad smell
  getAccountBalance(accountId: string, friendlyBalance = true): string {
    const account = this.accounts.getById(accountId);
    if (friendlyBalance) {
      return this.getUserFriendlyBalanceMessage(account.balance);
    } else {
      return this.getFinancialBalanceMessage(account.balance);
    }
  }

  private executeTransaction(transaction: Transaction, account: Account): number {
    return TRANSACTION_CALCULATOR[transaction.transactionType](transaction, account);
  }

  private getUserFriendlyBalanceMessage(balance: Money): string {
    const userFriendly = BALANCE_MESSAGES.find(m => m.topValue >= balance.amount);
    return userFriendly.message + balance.currency;
  }
  private getFinancialBalanceMessage(balance: Money): string {
    const finantial = `${balance.amount} ${balance.currency}`;
    return finantial;
  }
}
