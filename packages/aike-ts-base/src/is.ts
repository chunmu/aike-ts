// eslint-disable-next-line
export const isDefine = (v: any): boolean => v !== null && v !== undefined;
// eslint-disable-next-line
export const isUndefine = (v: any): boolean => v === null || v === undefined;
// eslint-disable-next-line
export const isFunc = (f: any): boolean => typeof f === 'function';
// eslint-disable-next-line
export const isString = (f: any): boolean => typeof f === 'string';
// eslint-disable-next-line
export const isObject = (obj: any): boolean => obj && !Array.isArray(obj) && typeof obj === 'object';
// eslint-disable-next-line
export const isPromise = (p: any): boolean => p && isFunc(p.then);
// eslint-disable-next-line
export const isIterator = (it: any): boolean => it && isFunc(it.next) && isFunc(it.throw)
// eslint-disable-next-line
export const isIterable = (it: any) => (it && isFunc(Symbol) ? isFunc(it[Symbol.iterator]) : Array.isArray(it))