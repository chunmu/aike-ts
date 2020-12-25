'use strict';

import {
  isUndefine,
  isDefine,
  isFunc,
} from '../src/is';

describe('is isUndefine', () => {
  test('is undefine', () => {
    let v;
    expect(isUndefine(v)).toBe(true);
  });
  test('is undefine', () => {
    const v = 0;
    expect(isUndefine(v)).toBe(false);
  });
  test('is undefine', () => {
    const v = null
    expect(isUndefine(v)).toBe(true);
  });

  test('is undefine', () => {
    const v = null
    expect(isUndefine(v)).toBe(true);
  });
});

describe('is isDefine', () => {
  test('is undefine', () => {
    let v;
    expect(isDefine(v)).toBe(false);
  });
  test('is undefine', () => {
    const v = 0;
    expect(isDefine(v)).toBe(true);
  });
  test('is undefine', () => {
    const v = null
    expect(isDefine(v)).toBe(false);
  });

  test('is undefine', () => {
    const v = null
    expect(isDefine(v)).toBe(false);
  });
});

describe('is isFunc', () => {
  test('is isFunc true', () => {
    // eslint-disable-next-line
    const v = (_: any) => _;
    expect(isFunc(v)).toBe(true);
  });
  test('is isFunc false', () => {
    const v = 0;
    expect(isFunc(v)).toBe(false);
  });
});
