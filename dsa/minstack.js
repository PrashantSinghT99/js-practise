var MinStack = function () {
    this.stack = [];
    this.min = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
    this.stack.unshift(val);
    val = Math.min(val, this.min.length === 0 ? val : this.min[0]);
    this.min.unshift(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
    this.stack.shift();
    this.min.shift();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {

    return this.stack[0];

};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
    return this.min[0];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/


console.log(Math.min(-2, -3)); 