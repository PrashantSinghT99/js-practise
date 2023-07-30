var MyCircularQueue = function (k) {
    this.Cqueue = [];
    this.size = k;
};
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.Cqueue.length === this.size) {
        return false;
    }
    else {
        this.Cqueue.push(value)
    }
    return true;
};
MyCircularQueue.prototype.deQueue = function () {
    if (this.Cqueue.length === 0) return false;
    this.Cqueue.shift()
    return true;
};

MyCircularQueue.prototype.Front = function () {
    if (this.Cqueue.length === 0) return false;
    return this.Cqueue[0];

};
MyCircularQueue.prototype.Rear = function () {
    if (this.Cqueue.length === 0) return false;
    return this.Cqueue[this.Cqueue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
    return this.Cqueue.length === 0
};

MyCircularQueue.prototype.isFull = function () {
    return this.Cqueue.length === this.size;
};


var obj = new MyCircularQueue(3)
console.log(obj.enQueue(1));
console.log(obj.enQueue(4));
console.log(obj.enQueue(2));
console.log(obj.deQueue(3));

console.log(obj.Front(), obj.Rear());
//  var param_2 = obj.deQueue()

//  var param_5 = obj.isEmpty()
//  var param_6 = obj.isFull()