export const TRANSACTION_TYPES = ['DEPOSIT', 'WITHDRAW', 'CANCEL'];

export const TRANSACTION_CALCULATOR = {
  DEPOSIT: (transaction: Transaction, account: Account): number =>
    account.balance.amount + transaction.value.amount,
  WITHDRAW: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
  CANCEL: (transaction: Transaction, account: Account): number =>
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
  // eslint-disable-next-line max-params
  constructor(
    public readonly accountdId: string,
    public readonly transactionType: string,
    public readonly value: Money
  ) {
    this.guardInvalidTransaction();
    this.value.currency = this.value.currency || DEAFULT_CURRENCY;
  }
  private guardInvalidTransaction(): void {
    if (TRANSACTION_TYPES.includes(this.transactionType)) {
      const MINIMAL_AMOUNT = 0;
      if (this.value.amount >= MINIMAL_AMOUNT) {
        return;
      }
    }
    throw '💥Invalid transaction';
  }
}

export class Account {
  constructor(
    public readonly accountID: string,
    public readonly balance: Money = { amount: 0, currency: DEAFULT_CURRENCY }
  ) {}
}

export class Accounts {
  private readonly accounts: Account[] = [];
  add(account: Account): void {
    this.accounts.push(account);
  }
  getById(accountID: string): Account {
    const account = this.accounts.find(a => a.accountID === accountID);
    if (account === undefined) {
      throw '💥Account not found';
    }
    return account;
  }
}

export class BankService {
  private readonly accounts: Accounts = new Accounts();
  constructor() {
    const defaultAccount = new Account('ES99 8888 7777 66 5555555555');
    this.accounts.add(defaultAccount);
  }

  addTransaction(transaction: Transaction): string {
    const account = this.accounts.getById(transaction.accountdId);
    account.balance.amount = this.executeTransaction(transaction, account);
    return this.getUserFriendlyBalanceMessage(account.balance);
  }
  private executeTransaction(transaction: Transaction, account: Account): number {
    return TRANSACTION_CALCULATOR[transaction.transactionType](transaction, account);
  }

  private getUserFriendlyBalanceMessage(balance: Money): string {
    const userFriendly = BALANCE_MESSAGES.find(m => m.topValue >= balance.amount);
    return userFriendly.message + balance.currency;
  }
}
