export interface FileSizeUnitNSMap {
  [key: number]: string
}

export interface FileSizeUnitSNMap {
  [key: string]: number
}

export interface FileSizeFormatParams {
  value: number,
  rest: number,
  unitNSMap: FileSizeUnitNSMap,
  unitSNMap: FileSizeUnitSNMap,
  index: number
}

export interface FileSizeParams {
  value: number,
  keepRest: boolean,
  format?: (params: FileSizeFormatParams) => string
}
