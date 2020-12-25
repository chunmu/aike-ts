import { FileSizeParams, FileSizeUnitNSMap, FileSizeUnitSNMap, FileSizeFormatParams } from './typings/it';

const unitSNMap: FileSizeUnitSNMap = {
  B: 1,
  KB: 2,
  MB: 3,
  GB: 4,
  TB: 5,
  PB: 6,
  EB: 7,
  ZB: 8,
  YB: 9,
}

const unitNSMap: FileSizeUnitNSMap = {
  1: 'B',
  2: 'KB',
  3: 'MB',
  4: 'GB',
  5: 'TB',
  6: 'PB',
  7: 'EB',
  8: 'ZB',
  9: 'YB'
}

export function formatFileSize({
  value,
  keepRest,
  format
}: FileSizeParams): string {
  let index = 1;
  let val = value;
  let rest = 0;
  while (val / 1024 > 1) {
    index += 1;
    rest = val % 1024;
    val = Math.floor(val / 1024);
  }
  if (format) {
    const params: FileSizeFormatParams = {
      value: val,
      rest,
      unitNSMap,
      unitSNMap,
      index
    };
    return format(params);
  }
  if (keepRest && rest !== 0) {
    return `${val}${unitNSMap[index]}${rest}${unitNSMap[index - 1]}`;
  }
  return `${val}${unitNSMap[index]}`;
}
