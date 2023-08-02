var combine = function (n, k) {
    let res = [];
    let comb = [];
    let start = 1;
    backtrack(start, comb, n, k, res);
    return res;
};

function backtrack(start, comb, n, k, res) {
    if (comb.length === k) {
        res.push([...comb]);
        return;
    }
    for (let i = start; i <= n; i++) {
        comb.push(i);
        backtrack(i + 1, comb,n, k, res);
        comb.pop();
    }
    return res;
}

console.log(combine(4, 2));