'use strict';

import { money } from '../src/index';
import { MoneyCommaParams, UnnormalNumberResponse } from '../src/typings/money'
const { formatMoneyComma } = money;

describe('money utils formatMoneyComma tests', () => {
  test('value=0 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 0,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe(0);
  });

  test('value=1 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 1,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('1');
  });

  test('value=10000 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 10000,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('10,000');
  });

  test('value=10000000000 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 10000000000,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('10,000,000,000');
  });

  test('value=1234567890 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 1234567890,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('1,234,567,890');
  });

  test('value=10000000000 dig=4 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 10000000000,
      dig: 4,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('100,0000,0000');
  });

  test('value=1234567890 dig=4 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 1234567890,
      dig: 4,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('12,3456,7890');
  });

  test('value=1234567890.1234567 dig=3 precision=6', () => {
    const params: MoneyCommaParams = {
      value: 1234567890.1234567,
      dig: 3,
      precision: 6
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('1,234,567,890.123457');
  });

  test('value=1234567890.1234567 dig=3 precision=2', () => {
    const params: MoneyCommaParams = {
      value: 1234567890.1234567,
      dig: 3,
      precision: 2
    }
    const response: UnnormalNumberResponse = formatMoneyComma(params);
    expect(response).toBe('1,234,567,890.12');
  });
});
