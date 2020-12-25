'use strict';

import { formatFileSize } from '../src/it';
import { FileSizeParams } from '../src/typings/it';

describe('file size utils tests', () => {
  test('value=100B', () => {
    const params: FileSizeParams = {
      value: 100,
      keepRest: false
    }
    expect(formatFileSize(params)).toBe('100B');
  });

  test('value=100 * 1024 KB', () => {
    const params: FileSizeParams = {
      value: 100 * 1024,
      keepRest: false
    }
    expect(formatFileSize(params)).toBe('100KB');
  });

  test('value=100 * 1024 * 1024 * 1024 GB', () => {
    const params: FileSizeParams = {
      value: 100 * 1024 * 1024 * 1024,
      keepRest: false
    }
    expect(formatFileSize(params)).toBe('100GB');
  });

  test('value=1026 * 1024 * 1024 GB keepRest=true', () => {
    const params: FileSizeParams = {
      value: 1026 * 1024 * 1024,
      keepRest: true
    }
    expect(formatFileSize(params)).toBe('1GB2MB');
  });

  test('value=1026 * 1024 * 1024 GB keepRest=false', () => {
    const params: FileSizeParams = {
      value: 1026 * 1024 * 1024,
      keepRest: false
    }
    expect(formatFileSize(params)).toBe('1GB');
  });

  test('value=1048 * 1024 * 1024 GB keepRest=true', () => {
    const params: FileSizeParams = {
      value: 1048 * 1024 * 1024,
      keepRest: true
    }
    expect(formatFileSize(params)).toBe('1GB24MB');
  });

  test('value=1050 * 1024 * 1024 GB keepRest=true format', () => {
    const params: FileSizeParams = {
      value: 1050 * 1024 * 1024,
      keepRest: true,
      format: ({ value, rest, unitNSMap, index }) => {
        return `${value}${unitNSMap[index]} ${rest}${unitNSMap[index - 1]}`;
      }
    };
    expect(formatFileSize(params)).toBe('1GB 26MB');
  });

  test('value=100 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 EB', () => {
    const params: FileSizeParams = {
      value: 100 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      keepRest: false
    }
    expect(formatFileSize(params)).toBe('100EB');
  });
});
