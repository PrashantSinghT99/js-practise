
var MyQueue = function () {

    this.stack1 = [];
    this.stack2 = [];
};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.enqueue = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1];
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};


const queue = new MyQueue();


queue.enqueue(3)
queue.enqueue(6)
queue.enqueue(7)
queue.dequeue()


console.log(queue.front());