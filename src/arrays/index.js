"use strict";

const numbers = [1, 1, 1, 2, 3, 1, 2, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 6, 7, 8, 8, 9, 8]
let sum1 = 0
numbers.map((num) => {
    sum1 += num
})

let sum2 = numbers.reduce((x, y) => x + y)

// Stack and Queue in NodeJS

class Stack {
  constructor() { this.stack = []; }
  push(item) { this.stack.push(item); }
  pop() { this.stack.pop(); }
}

class Queue {
  constructor() { this.queue = []; }
  enqueue(item) { this.queue.push(item); }
  dequeue() { return this.queue.shift(); }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);
