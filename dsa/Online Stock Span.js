var StockSpanner = function () {
    this.stack = [];
};

StockSpanner.prototype.next = function (price) {
    let span = 1;
    while (this.stack.length !== 0 && this.stack[0][0] <= price) {
        span += this.stack[0][1];
        this.stack.shift();
    }
    this.stack.unshift([price, span])
    return span;
};


var obj = new StockSpanner()
var param_1 = obj.next(100)
var param_2 = obj.next(80)
console.log(param_2);