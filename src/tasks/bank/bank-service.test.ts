/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
// import { BankService, Transaction } from './bank-service_bad';
import {
  Accounts,
  BankService,
  FinancialGenerator,
  Transaction,
  Transactions,
  UserFriendlyGenerator,
} from './bank-service';

/*
FEATURE:    Simulate a bank account system.
As a:       customer
I want to:  have a valid account with valid IBAN ids,
and:        make a deposit, a transfer or withdraw money,
and:        and get my financial balance or a user friendly one
So:         I can control my finances.
*/

describe('GIVEN: I do not have an account in a bank', () => {
  let inputAccounts: Accounts;
  let inputTransactions: Transactions;
  let sutBankService: BankService;
  beforeEach(() => {
    // Arrange
    inputAccounts = new Accounts();
    inputTransactions = new Transactions();
    sutBankService = new BankService(inputAccounts, inputTransactions);
  });
  describe('WHEN: I make any transaction ', () => {
    test('THEN: I should get an error', () => {
      const inputTransaction = inputTransactions.create('ES00 1111 2222 33 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      const expectedErrorMessage = '💥Account not found';
      expect(() => {
        sutBankService.executeTransaction(inputTransaction);
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I ask the bank to create an account ', () => {
    test('THEN: I should get a new AccountId', () => {
      const actualBalanceMessage = sutBankService.createAccount();
      const expectedAccountID = 'ES99 8888 7777 66 5555555555';
      // assert
      expect(actualBalanceMessage).toEqual(expectedAccountID);
    });
  });
  describe('WHEN: I ask the bank to create an account with an invalid ID ', () => {
    test('THEN: I should get an error', () => {
      // assert
      const expectedErrorMessage = '💥Invalid account';
      expect(() => {
        sutBankService.createAccount('ES9988887777665555555555');
      }).toThrowError(expectedErrorMessage);
    });
  });
});

describe('GIVEN: I have an account in a bank', () => {
  let inputTransactions: Transactions;
  let sutBankService: BankService;
  let accountId: string;
  beforeEach(() => {
    // Arrange
    const inputAccounts = new Accounts();
    inputTransactions = new Transactions();
    sutBankService = new BankService(inputAccounts, inputTransactions);
    accountId = sutBankService.createAccount();
  });
  describe('WHEN: I make a transaction of an invalid type', () => {
    test('THEN: I should get an error', () => {
      const expectedErrorMessage = '💥Invalid transaction';
      expect(() => {
        inputTransactions.create(accountId, 'INVALID', {
          amount: 100,
        });
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make a TRANSFER transaction without target account', () => {
    test('THEN: I should get an error', () => {
      const expectedErrorMessage = '💥Invalid transaction';
      expect(() => {
        inputTransactions.create(accountId, 'TRANSFER', {
          amount: 100,
        });
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make a valid transaction ', () => {
    let inputTransaction: Transaction;
    beforeEach(() => {
      // Arrange
      inputTransaction = inputTransactions.create(accountId, 'DEPOSIT', {
        amount: 100,
      });
    });
    test('THEN: I should get a the transaction confirmed and saved', () => {
      // act
      const actualTransactionID = sutBankService.executeTransaction(inputTransaction);
      // assert
      expect(actualTransactionID).toBeDefined();
    });
  });
});
describe('GIVEN: I have an account with transactions in a bank', () => {
  let sutBankService: BankService;
  beforeEach(() => {
    // Arrange
    const inputAccounts = new Accounts();
    const inputTransactions = new Transactions();
    sutBankService = new BankService(inputAccounts, inputTransactions);
    const accountId = sutBankService.createAccount();
    const inputTransaction = inputTransactions.create(accountId, 'DEPOSIT', {
      amount: 100,
    });
    sutBankService.executeTransaction(inputTransaction);
  });
  describe('WHEN: I ask for an account Balance ', () => {
    let actualBalanceMessage: string;
    beforeEach(() => {
      // Act
      const userFriendlyGenerator = new UserFriendlyGenerator();
      actualBalanceMessage = sutBankService.getAccountBalance(
        'ES99 8888 7777 66 5555555555',
        userFriendlyGenerator
      );
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage = '💰 Be careful with your spends of EUR';
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
  describe('WHEN: I ask for an account financial Balance ', () => {
    let actualBalanceMessage: string;
    beforeEach(() => {
      // Act
      const financialGenerator = new FinancialGenerator();
      actualBalanceMessage = sutBankService.getAccountBalance(
        'ES99 8888 7777 66 5555555555',
        financialGenerator
      );
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage = '100 EUR';
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
});
