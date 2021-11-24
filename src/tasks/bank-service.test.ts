/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { BankService } from './bank-service_bad';

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
      const expectedErrorMessage = '💥Account not found';
      expect(() => {
        sut.addTransaction('ES00 8888 7777 66 5555555555', 'DEPOSIT', 100, 'EURO');
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
        sut.addTransaction('ES99 8888 7777 66 5555555555', 'TRANFER', 100, 'EURO');
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make a transaction ', () => {
    beforeEach(() => {
      // Act
      sut.addTransaction('ES99 8888 7777 66 5555555555', 'DEPOSIT', 100, 'EURO');
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage =
        '   ES99 8888 7777 66 5555555555 reported: 💰 Be careful with your spends of EURO';
      let actualBalanceMessage = sut.getReport('ES99 8888 7777 66 5555555555', 'EURO');
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
});
