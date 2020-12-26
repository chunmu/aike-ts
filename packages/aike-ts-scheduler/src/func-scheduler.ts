import { VoidFunc } from './typings/index'

const queue: Array<VoidFunc> = [];

let semaphore = 0;

function exec<T extends VoidFunc> (task: T) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

export function asap<T extends VoidFunc> (task: T) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

export function immediatey<T extends VoidFunc> (task: T) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}

function suspend () {
  semaphore++;
}

function release () {
  semaphore--;
}

function flush () {
  release();

  let task: VoidFunc | undefined;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}
