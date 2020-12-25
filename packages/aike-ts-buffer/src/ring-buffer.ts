const BUFFER_OVERFLOW = "Ring Buffer overflow!";

export enum OverflowActionType {
  ON_OVERFLOW_THROW = 1,
  ON_OVERFLOW_DROP = 2,
  ON_OVERFLOW_SLIDE = 3,
  ON_OVERFLOW_EXPAND = 4,
}

export default class RingBuffer<T> {
  // 容器数组
  buffer: (T | null)[];
  // limit
  limit: number;
  length: number;
  pushIndex: number;
  popIndex: number;
  overflowAction: OverflowActionType;
  // isEmpty
  isEmpty?: () => boolean;

  constructor(
    limit = 10,
    overflowAction: OverflowActionType,
    isEmpty?: () => boolean
  ) {
    const i = () => this.length === 0;
    this.limit = limit;
    this.length = 0;
    this.pushIndex = 0;
    this.popIndex = 0;
    this.buffer = [];
    this.isEmpty = isEmpty || i;
    this.overflowAction = overflowAction;
  }

  push(it: T): void {
    this.buffer[this.pushIndex] = it;
    this.pushIndex = (this.pushIndex + 1) % this.limit;
    this.length++;
  }

  // 外部使用的take
  take(): T | void | null {
    if (this.length !== 0) {
      const it = this.buffer[this.popIndex];
      this.buffer[this.popIndex] = null;
      this.length--;
      this.popIndex = (this.popIndex + 1) % this.limit;
      return it;
    }
  }

  // 内部使用的take
  ptake(): T | null {
    const it = this.buffer[this.popIndex];
    this.buffer[this.popIndex] = null;
    this.length--;
    this.popIndex = (this.popIndex + 1) % this.limit;
    return it;
  }

  flush(): (T | null)[] {
    const items = [];
    while (this.length) {
      items.push(this.ptake());
    }
    return items;
  }

  put(it: T): void {
    if (this.length < this.limit) {
      this.push(it);
    } else {
      let doubledLimit;
      switch (this.overflowAction) {
        case OverflowActionType.ON_OVERFLOW_THROW: {
          throw new Error(BUFFER_OVERFLOW);
        }
        case OverflowActionType.ON_OVERFLOW_SLIDE: {
          this.buffer[this.pushIndex] = it;
          this.pushIndex = (this.pushIndex + 1) % this.limit;
          this.popIndex = this.pushIndex;
          break;
        }
        case OverflowActionType.ON_OVERFLOW_EXPAND: {
          doubledLimit = 2 * this.limit;
          this.buffer = this.flush();
          this.length = this.buffer.length;
          this.pushIndex = this.buffer.length;
          this.popIndex = 0;
          this.buffer.length = doubledLimit;
          this.limit = doubledLimit;

          this.push(it);
          break;
        }
        default:
        // DROP
      }
    }
  }
}
