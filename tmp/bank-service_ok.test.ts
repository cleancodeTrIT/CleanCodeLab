/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { BankService, Transaction } from './bank-service_ok';

/*
FEATURE:    Simulate a bank account system.
As a:       customer
I want to:  have an account,
and:        make a deposit or withdraw money,
and:        and get my balance user friendly.
So:         I can control my finances.
*/

describe('GIVEN: I do not have an account in a bank', () => {
  let sut: BankService;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
  });
  describe('WHEN: I make any transaction ', () => {
    test('THEN: I should get an error', () => {
      const inputTransaction = new Transaction('ES00 1111 2222 33 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      const expectedErrorMessage = '💥Account not found';
      expect(() => {
        sut.addTransaction(inputTransaction);
      }).toThrowError(expectedErrorMessage);
    });
  });
});

describe('GIVEN: I have an account in a bank', () => {
  let sut: BankService;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
  });
  describe('WHEN: I make an invalid transaction ', () => {
    test('THEN: I should get an error', () => {
      const expectedErrorMessage = '💥Invalid transaction';
      expect(() => {
        sut.addTransaction(
          new Transaction('ES99 8888 7777 66 5555555555', 'TRANSFER', {
            amount: 100,
          })
        );
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make a transaction ', () => {
    let actualBalanceMessage: string;
    beforeEach(() => {
      const inputTransaction = new Transaction('ES99 8888 7777 66 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      // Act
      actualBalanceMessage = sut.addTransaction(inputTransaction);
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage = '💰 Be careful with your spends of EUR';
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
});
