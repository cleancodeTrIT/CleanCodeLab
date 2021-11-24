const DEAFULT_CURRENCY = 'EUR';
const DEAFULT_COUNTRY = 'ES';
const DEFAULT_BALANCE = { amount: 0, currency: DEAFULT_CURRENCY };

type Money = { amount: number; currency?: string };
type AccountData = { accountId: string; balance: Money; countryId?: string };
type TransactionType = 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER' | 'CANCEL';
type TransactionData = {
  type: TransactionType;
  accountId: string;
  value?: Money;
  targetId?: string;
};
interface ExecuteTransaction {
  execute(account: Account): void;
}
type TransactionConstrutor = new (transactinData: TransactionData) => Transaction;

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

const COUNTRIES_ACCOUNTS = [
  {
    countryId: 'ES',
    prefix: 'ES',
    ibanLength: 28,
  },
  {
    countryId: 'ES',
    prefix: 'POR',
    ibanLength: 29,
  },
];

export class Account {
  public readonly accountId: string;
  public readonly countryId: string;
  public readonly balance: Money;
  // ✅ 1 - SRP : store valid data
  constructor(accountData: AccountData) {
    this.guardInvalidAccount(accountData);
    this.accountId = accountData.accountId;
    this.balance = accountData.balance;
    this.countryId = accountData.countryId || DEAFULT_COUNTRY;
  }

  // ! 🔧 1 - SRP Further improvements: Account validator
  private guardInvalidAccount(accountData: AccountData): void {
    const countryConfig = COUNTRIES_ACCOUNTS.find(
      c => c.countryId === accountData.countryId || DEAFULT_COUNTRY
    );
    if (!countryConfig) {
      throw '💥Invalid country for account';
    }
    const accountId = accountData.accountId;
    if (
      !accountId.startsWith(countryConfig.prefix) ||
      accountId.length !== countryConfig.ibanLength
    ) {
      throw '💥Invalid accountID for account';
    }
  }
}

// ✅ 1 - SRP : store accounts
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

// ✅ 3 - LSP : abstract class can be substituted by any concrete one
export abstract class Transaction implements ExecuteTransaction {
  public readonly accountId: string;
  public readonly type: TransactionType;
  public readonly value?: Money;
  public readonly targetId: string | null;

  constructor(transactionData: TransactionData) {
    this.guardInvalidTransaction(transactionData);
    this.accountId = transactionData.accountId;
    this.type = transactionData.type;
    if (transactionData.value) {
      this.value = transactionData.value;
      this.value.currency = transactionData.value.currency || DEAFULT_CURRENCY;
    }
    if (transactionData.targetId) this.targetId = transactionData.targetId;
  }
  protected guardInvalidTransaction(transactionData: TransactionData): void {
    const MINIMAL_AMOUNT = 0;
    if (transactionData.value && transactionData.value.amount < MINIMAL_AMOUNT) {
      throw '💥Invalid amount for transaction';
    }
  }
  public abstract execute(account: Account);
}

export class Deposit extends Transaction {
  public execute(account: Account): void {
    if (this.value) account.balance.amount += this.value.amount;
  }
}

export class Withdraw extends Transaction {
  public execute(account: Account): void {
    if (this.value) account.balance.amount -= this.value.amount;
  }
}

export class Cancel extends Transaction {
  public execute(account: Account): void {
    account.balance.amount = 0;
  }
}
export class Transfer extends Transaction {
  protected guardInvalidTransaction(transactionData: TransactionData): void {
    super.guardInvalidTransaction(transactionData);
    if (transactionData.value === undefined) {
      throw '💥 Invalid value for transaction';
    }
    if (transactionData.targetId === undefined) {
      throw '💥 Invalid targetId for transaction';
    }
  }
  public execute(account: Account): void {
    account.balance.amount -= this.value.amount;
  }
}

const TRANSACTIONS_FACTORY: Record<TransactionType, TransactionConstrutor> = {
  DEPOSIT: Deposit,
  WITHDRAW: Withdraw,
  CANCEL: Cancel,
  TRANSFER: Transfer,
};

// ✅ 1 - SRP : manage transactions
export class Transactions {
  private readonly executedTransactions: Transaction[] = [];
  create(transactionData: TransactionData): Transaction {
    const transactionConstrutor = TRANSACTIONS_FACTORY[transactionData.type];
    if (transactionConstrutor === undefined) {
      throw '💥Invalid transaction';
    }
    const newTransaction = new transactionConstrutor(transactionData);
    return newTransaction;
  }
  execute(transaction: Transaction, account: Account): void {
    transaction.execute(account);
    this.executedTransactions.push(transaction);
  }
}

// ✅ 1 - SRP façade to accounts, transactions  balance services
export class BankService {
  // ✅ 5 - DIP
  constructor(
    private readonly accounts: Accounts = new Accounts(),
    private readonly transactions: Transactions = new Transactions()
  ) {}
  // ✅ 1 - SRP : changes in implementations does not affect me
  createAccount(accountId = 'ES99 8888 7777 66 5555555555'): Account {
    const accountData: AccountData = {
      accountId: accountId,
      balance: DEFAULT_BALANCE,
      countryId: DEAFULT_COUNTRY,
    };
    const account = new Account(accountData);
    this.accounts.add(account);
    return account;
  }
  // ✅ 1 - SRP
  addTransaction(transactionData: TransactionData) {
    const transaction = this.transactions.create(transactionData);
    const account = this.accounts.getById(transaction.accountId);
    this.transactions.execute(transaction, account);
  }
  // ✅ 2 - OCP : 5 - DIP similar to a flag, but open for extension / closed for modification
  getReport(accountId: string, balanceGenerator: BalanceGenerator): string {
    const account = this.accounts.getById(accountId);
    return balanceGenerator.getMessage(account.balance);
  }
}

// ✅ 4 - ISP
interface BalanceGenerator {
  getMessage(balance: Money): string;
}
export class UserFriendlyGenerator implements BalanceGenerator {
  getMessage(balance: Money): string {
    const userFriendly = BALANCE_MESSAGES.find(m => m.topValue >= balance.amount);
    return userFriendly.message + balance.currency;
  }
}
export class FinancialGenerator implements BalanceGenerator {
  getMessage(balance: Money): string {
    const finantial = `${balance.amount} ${balance.currency}`;
    return finantial;
  }
}

// TESTING PROGRAM

const accounts = new Accounts();
const transactions = new Transactions();
const userFriendlyBalance = new UserFriendlyGenerator();
const financialBalance = new FinancialGenerator();
const myBank = new BankService(accounts, transactions);
const accountId = 'ES99 8888 7777 66 5555555555';
myBank.createAccount(accountId);

myBank.addTransaction({
  accountId: accountId,
  type: 'DEPOSIT',
  value: { amount: 89, currency: 'EURO' },
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'DEPOSIT',
  value: { amount: 11, currency: 'EURO' },
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'DEPOSIT',
  value: { amount: 26, currency: 'EURO' },
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'WITHDRAW',
  value: { amount: 98, currency: 'EURO' },
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
// myBank.addTransaction({
//   accountId: accountId,
//   type: 'TRANSFER',
//   value: { amount: 1, currency: 'EURO' },
// });
// console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'TRANSFER',
  value: { amount: 1, currency: 'EURO' },
  targetId: 'haha invalid account',
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'WITHDRAW',
  value: { amount: 314, currency: 'EURO' },
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
myBank.addTransaction({
  accountId: accountId,
  type: 'CANCEL',
});
console.log(myBank.getReport(accountId, userFriendlyBalance));
console.log(myBank.getReport(accountId, financialBalance));
