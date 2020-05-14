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
    accountdId: string,
    transactionType: string,
    amount: number,
    currency?: 'EURO'
  ): string {
    // ❌ check input and perform logic
    if (this.isInvalidTransaction(transactionType, amount)) {
      throw '💥Invalid transaction';
    }
    const account = this.getAccount(accountdId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    account.balance = this.executeTransaction(transactionType, account.balance, amount);
    return this.getUserFriendlyBalanceMessage(account.balance, currency);
  }
  private getAccount(accountID: string): { accountID: string; balance: number } {
    return this.accounts.find(a => a.accountID === accountID);
  }
  private isInvalidTransaction(transactionType: string, amount: number): boolean {
    // ❌ reduce conditionals
    if (
      transactionType === 'DEPOSIT' ||
      transactionType === 'WITHDRAW' ||
      transactionType === 'CANCEL'
    ) {
      const MINIMAL_AMOUNT = 0;
      return amount < MINIMAL_AMOUNT;
    } else {
      return true;
    }
  }
  // ❌ order error prone
  private executeTransaction(transactionType: string, currentBalance: number, amount: number) {
    // ❌ reduce conditionals
    switch (transactionType) {
      case 'DEPOSIT':
        return currentBalance + amount;
      case 'WITHDRAW':
        return currentBalance - amount;
      default:
        return currentBalance;
    }
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
