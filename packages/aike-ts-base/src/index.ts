import * as moneyUtils from './money'

export const money = moneyUtils
// 常用方法定义
// eslint-disable-next-line
export const kConst = (_: any): any => _;

// eslint-disable-next-line
export const kFunc = (_: any): any => (): any => _;

// 获取true
export const kTrue = kFunc(true);

// 获取false
export const kFalse = kFunc(false);

// 获取noop
// eslint-disable-next-line
export const kNoop = (): void => {};

// once
// eslint-disable-next-line
export const once = function(fn: any) {
  let called = false;
  return () => {
    if (called) {
      return;
    }
    called = true;
    fn();
  }
}

export default {
  money
}