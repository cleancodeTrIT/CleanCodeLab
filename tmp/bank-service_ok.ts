// ✔️ Typed in typescript
// * generates a union type from a string array
type Money = { amount: number; currency?: string };
type TransactionType = 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER' | 'CANCEL';

// ✔️ Funcional mapper for calculators
type Calculator = (transactionValue: Money, accountBalance: Money) => number;
type TransactionProcessor = {
  type: TransactionType;
  calculator: Calculator;
  icon: string;
  logMessage: string;
};
export const TRANSACTION_PROCESSORS: TransactionProcessor[] = [
  {
    type: 'DEPOSIT',
    calculator: (transactionValue: Money, accountBalance: Money) =>
      accountBalance.amount + transactionValue.amount,
    icon: '📥',
    logMessage: 'are added and gets ',
  },
  {
    type: 'WITHDRAW',
    calculator: (transactionValue: Money, accountBalance: Money) =>
      accountBalance.amount - transactionValue.amount,
    icon: '📤',
    logMessage: 'are substracted and left',
  },
  {
    type: 'TRANSFER',
    calculator: (transactionValue: Money, accountBalance: Money) =>
      accountBalance.amount - transactionValue.amount,
    icon: '📨',
    logMessage: 'are transferred and left',
  },
  {
    type: 'CANCEL',
    calculator: (transactionValue: Money, accountBalance: Money) =>
      accountBalance.amount - transactionValue.amount,
    icon: '⚠',
    logMessage: ' is cancelled',
  },
];

// ✔️ Simple mapper
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

type Account = { accountId: string; balance: Money };

// Simple data structure
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

type TransactionData = { type: TransactionType; accountId: string; value: Money };

// Starting with objects
export class Transaction {
  public readonly accountId: string;
  public readonly type: TransactionType;
  public readonly value: Money;

  public readonly processor: TransactionProcessor;

  constructor(transactionData: TransactionData) {
    this.accountId = transactionData.accountId;
    this.type = transactionData.type;
    this.value = transactionData.value;
    this.processor = this.getTransactionProcessor();
    this.value.currency = this.value.currency || DEAFULT_CURRENCY;
  }

  private getTransactionProcessor(): TransactionProcessor {
    const transactionProcessor = TRANSACTION_PROCESSORS.find(
      transaction => transaction.type === this.type
    );
    if (!transactionProcessor) {
      throw '💥 Transaction invalid type';
    }
    const MINIMAL_AMOUNT = 0;
    if (this.value.amount < MINIMAL_AMOUNT) {
      throw '💥 Transaction invalid data';
    }
    return transactionProcessor;
  }
}

export class BankService {
  private readonly accounts: Accounts = new Accounts();
  constructor() {}

  addAccount(accountId: string, currency: string) {
    const account = { accountId: accountId, balance: { amount: 0, currency: currency } };
    this.accounts.add(account);
  }

  addTransaction(transaction: Transaction): string {
    const account = this.accounts.getById(transaction.accountId);
    account.balance.amount = this.executeTransaction(transaction, account);
    const logEntry = this.logTransaction(transaction, account);
    console.log(logEntry);
    return logEntry;
  }

  getReport(accountdId: string, currency?: 'EURO') {
    const account = this.accounts.getById(accountdId);
    const balanceReport = this.getUserFriendlyBalanceMessage(account.balance);
    return `   ${accountdId} reported: ${balanceReport}`;
  }

  private executeTransaction(transaction: Transaction, account: Account): number {
    return transaction.processor.calculator(transaction.value, account.balance);
  }
  private logTransaction(transaction: Transaction, account: Account): string {
    const logEntry = `${transaction.processor.icon} ${transaction.value.amount} ${transaction.value.currency} ${transaction.processor.logMessage} ${account.balance.amount} ${account.balance.currency}`;
    return logEntry;
  }

  private getUserFriendlyBalanceMessage(balance: Money): string {
    const userFriendly = BALANCE_MESSAGES.find(m => m.topValue >= balance.amount);
    return userFriendly.message + balance.currency;
  }
}

// TESTING PROGRAM

const accountId = 'ES99 8888 7777 66 5555555555';
const myBank = new BankService();
myBank.addAccount(accountId, DEAFULT_CURRENCY);

myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'DEPOSIT',
    value: { amount: 89, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'DEPOSIT',
    value: { amount: 11, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'DEPOSIT',
    value: { amount: 26, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'WITHDRAW',
    value: { amount: 98, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'TRANSFER',
    value: { amount: 1, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({
    accountId: accountId,
    type: 'WITHDRAW',
    value: { amount: 314, currency: 'EURO' },
  })
);
console.log(myBank.getReport(accountId, 'EURO'));
myBank.addTransaction(
  new Transaction({ accountId: accountId, type: 'CANCEL', value: { amount: 0 } })
);
console.log(myBank.getReport(accountId, 'EURO'));
