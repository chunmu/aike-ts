'use strict';
import { kTrue } from 'aike-ts-base';
import RingBuffer, { OverflowActionType } from '../src/ring-buffer';

describe('zero buffer', () => {
  test('zero buffer length to be 0', () => {
    const zeroBuffer = new RingBuffer(10, OverflowActionType.ON_OVERFLOW_THROW, kTrue);
    expect(zeroBuffer.length).toBe(0);
  });
});
