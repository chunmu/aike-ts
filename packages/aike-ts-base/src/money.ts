
import { MoneyCommaParams, UnnormalNumberResponse } from '../src/typings/money'

export function formatMoneyComma({
  value,
  dig = 3,
  precision = 6
}: MoneyCommaParams):UnnormalNumberResponse {
  if (!value || isNaN(value)) {
    return value;
  }
  const numValue = Number(value);
  const newVal = Math.round(numValue * Math.pow(10, precision)) / Math.pow(10, precision);
  const reg = new RegExp(`\\d(?=(?:\\d{${dig}})+$)`, 'g');
  const newStr = String(newVal).replace(/^[+-]?\d+/, (a) => {
    return a.replace(reg, '$&,')
  })
  return newStr;
}

export default {
  formatMoneyComma
}