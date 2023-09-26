var Solution = function(nums) {
    this.arr = [...nums];
    this.copy = [...nums];
};
Solution.prototype.reset = function() {
    this.copy = [...this.arr];
    return this.copy;
};
Solution.prototype.shuffle = function() {
    let n=this.copy.length-1
    for (let i = n; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.copy[i], this.copy[j]] = [this.copy[j], this.copy[i]];
    }
     return this.copy;
};