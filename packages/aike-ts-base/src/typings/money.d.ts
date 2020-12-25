export type UnnormalNumberParams = number | null | undefined;
export type UnnormalNumberResponse = number | null | undefined | string;

export interface MoneyCommaParams {
  value: UnnormalNumberParams,
  dig: number,
  precision: number,
}