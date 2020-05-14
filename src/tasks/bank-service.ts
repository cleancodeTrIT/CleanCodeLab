const DEAFULT_CURRENCY = 'EUR';
export type Money = { amount: number; currency?: string };
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

export class Account {
  // ✅ 1 - SRP : store the data
  // eslint-disable-next-line max-params
  constructor(
    public readonly accountId: string,
    public readonly countryId: string = 'ES',
    public readonly balance: Money = { amount: 0, currency: DEAFULT_CURRENCY }
  ) {}
}

// ✅ 1 - SRP : manage accounts
export class Accounts {
  private readonly accounts: Account[] = [];
  create(accountId: string): Account {
    const newAccount = new Account(accountId);
    this.guardInvalidAccount(newAccount);
    return newAccount;
  }
  add(account: Account): void {
    this.guardInvalidAccount(account);
    this.accounts.push(account);
  }
  getById(accountId: string): Account {
    const account = this.accounts.find(a => a.accountId === accountId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    return account;
  }
  // ❗ 1 - SRP Further improvements: Account validator
  private guardInvalidAccount(account: Account): void {
    switch (account.countryId) {
      case 'ES':
        if (account.accountId.startsWith('ES') && account.accountId.length === 28) return;
        break;
      case 'PT':
        if (account.accountId.startsWith('PT') && account.accountId.length === 29) return;
        break;
    }
    throw '💥Invalid account';
  }
}

interface ExecuteTransaction {
  execute(account: Account): void;
}

// ✅ 3 - LSP : abstract class can be substituted by any concrete one
export abstract class Transaction implements ExecuteTransaction {
  // ✅ 1 - SRP : store the data
  public readonly transactionId: string;
  // eslint-disable-next-line max-params
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
  protected guardInvalidTransaction(): void {
    const MINIMAL_AMOUNT = 0;
    if (this.value.amount < MINIMAL_AMOUNT) {
      throw '💥Invalid transaction';
    }
  }
  public abstract execute(account: Account);
}

export class Deposit extends Transaction {
  public execute(account: Account): void {
    account.balance.amount += this.value.amount;
  }
}

export class Withdraw extends Transaction {
  public execute(account: Account): void {
    account.balance.amount -= this.value.amount;
  }
}

export class Cancel extends Transaction {
  public execute(account: Account): void {
    account.balance.amount = 0;
  }
}

export class Transfer extends Transaction {
  protected guardInvalidTransaction(): void {
    super.guardInvalidTransaction();
    if (this.targetAccountdId === undefined) {
      throw '💥Invalid transaction';
    }
  }
  public execute(account: Account): void {
    account.balance.amount -= this.value.amount;
  }
}

const TRANSACTION_FACTORY = {
  DEPOSIT: Deposit,
  WITHDRAW: Withdraw,
  CANCEL: Cancel,
  TRANSFER: Transfer,
};

// ✅ 1 - SRP : manage transactions
export class Transactions {
  private readonly transactions: Transaction[] = [];
  // eslint-disable-next-line max-params
  create(
    accountdId: string,
    transactionType: string,
    value: Money,
    targetAccountdId?: string
  ): Transaction {
    const transactionFactory = TRANSACTION_FACTORY[transactionType];
    if (transactionFactory === undefined) {
      throw '💥Invalid transaction';
    }
    return new transactionFactory(accountdId, transactionType, value, targetAccountdId);
  }
  execute(transaction: Transaction, account: Account): string {
    transaction.execute(account);
    this.transactions.push(transaction);
    return transaction.transactionId;
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
  createAccount(accountId = 'ES99 8888 7777 66 5555555555'): string {
    const account = this.accounts.create(accountId);
    this.accounts.add(account);
    return accountId;
  }
  // ✅ 1 - SRP
  executeTransaction(transaction: Transaction): string {
    const account = this.accounts.getById(transaction.accountdId);
    this.transactions.execute(transaction, account);
    return transaction.transactionId;
  }
  // ✅ 2 - OCP : 5 - DIP similar to a flag, but open for extension / closed for modification
  getAccountBalance(accountId: string, balanceGenerator: BalanceGenerator): string {
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
