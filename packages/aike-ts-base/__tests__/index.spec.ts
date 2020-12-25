'use strict';

import { kConst, kFunc, kTrue, kFalse } from '../src/index';

describe('func test', () => {
  test('kConst boolean', () => {
    expect(kConst(true)).toBe(true);
  });

  test('kConst string', () => {
    expect(kConst('chunmu')).toBe('chunmu');
  });

  test('kConst number', () => {
    expect(kConst(9)).toBe(9);
  });

  test('kFalse', () => {
    expect(kFalse()).toBe(false);
  });

  test('kFunc', () => {
    // eslint-disable-next-line
    const func = () => {};
    expect(kFunc(func)()).toBe(func);
  });

  test('kTrue', () => {
    expect(kTrue()).toBe(true);
  });
});

