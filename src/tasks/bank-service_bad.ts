/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// ❌ refactor and change the tests accordingly

export class BankService {
  private accounts = [
    {
      accountID: 'ES99 8888 7777 66 5555555555',
      balance: 0,
    },
  ];

  // ❌ multiple primitive parameters
  // ❌ no cohesion of currency
  addTransaction(
    accountId: string,
    transactionType: string,
    amount: number,
    currency?: 'EURO'
  ): string {
    // ❌ check input and perform logic
    if (this.isInvalidTransaction(transactionType, amount)) {
      throw '💥Invalid transaction';
    }
    const account = this.getAccount(accountId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    account.balance = this.executeTransaction(transactionType, account.balance, amount);
    const logEntry = this.logTransaction(transactionType, amount, account.balance, currency);
    console.log(logEntry);
    return logEntry;
  }

  getReport(accountId: string, currency?: 'EURO') {
    const account = this.getAccount(accountId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    const balanceReport = this.getUserFriendlyBalanceMessage(account.balance, currency);
    return `   ${accountId} reported: ${balanceReport}`;
  }

  private getAccount(accountID: string): { accountID: string; balance: number } {
    return this.accounts.find(a => a.accountID === accountID);
  }
  private isInvalidTransaction(
    transactionType: string,
    amount: number,
    targetAccountId?: string
  ): boolean {
    // ❌ reduce conditionals
    if (
      transactionType === 'DEPOSIT' ||
      transactionType === 'WITHDRAW' ||
      transactionType === 'TRANSFER' ||
      transactionType === 'CANCEL'
    ) {
      // ❌clarify logic
      if (transactionType === 'TRANSFER') {
        return !!targetAccountId;
      }
      const MINIMAL_AMOUNT = 0;
      return amount < MINIMAL_AMOUNT;
    } else {
      return true;
    }
  }
  // ❌ attribute order error prone
  private executeTransaction(transactionType: string, currentBalance: number, amount: number) {
    // ❌ reduce conditionals
    // ❌ reduce the risk of mistyping
    switch (transactionType) {
      case 'DEPOSIT':
        return currentBalance + amount;
      case 'WITHDRAW':
      case 'TRANSFER':
        return currentBalance - amount;
      default:
        return currentBalance;
    }
  }

  private logTransaction(
    transactionType: string,
    amount: number,
    newBalance: number,
    currency: string = 'units'
  ) {
    let humanTransaction = '';
    // ❌ repeated conditionals
    switch (transactionType) {
      case 'DEPOSIT':
        humanTransaction = 'are added and gets ';
        break;
      case 'WITHDRAW':
        humanTransaction = 'are substracted and left';
        break;
      default:
        humanTransaction = '';
    }
    let iconTransaction = '⚠';
    switch (transactionType) {
      case 'DEPOSIT':
        iconTransaction = '📥';
        break;
      case 'WITHDRAW':
        iconTransaction = '📤';
        break;
      case 'TRANSFER':
        iconTransaction = '📨';
        break;
    }
    const logEntry = `${iconTransaction} ${amount} ${currency} ${humanTransaction} ${newBalance} ${currency}`;
    return logEntry;
  }

  private getUserFriendlyBalanceMessage(balance: number, currency: string): string {
    const CRITICAL_BALANCE = 100;
    // ❌ reduce conditionals
    if (balance < CRITICAL_BALANCE) {
      return '💸 Bad luck you have no enough ' + currency;
    } else if (balance === CRITICAL_BALANCE) {
      return '💰 Be careful with your spends of ' + currency;
    } else {
      return '🤑 Good! you have a lot of ' + currency;
    }
  }
}

const accountID = 'ES99 8888 7777 66 5555555555';
const myBank = new BankService();

myBank.addTransaction(accountID, 'DEPOSIT', 89, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'DEPOSIT', 11, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'DEPOSIT', 26, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'WITHDRAW', 98, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'TRANSFER', 1, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'WITHDRAW', 314, 'EURO');
console.log(myBank.getReport(accountID, 'EURO'));
myBank.addTransaction(accountID, 'CANCEL', 0);
console.log(myBank.getReport(accountID, 'EURO'));
