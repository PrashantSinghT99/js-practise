var generateParenthesis = function (n) {
    let stack = []
    let res = [];
    const backtrack = (o, c) => {
        if (o == c && o == n) {
            res.push(stack.join(''));
            return;
        }
        if (o < n) {
            stack.push("(")
            backtrack(o + 1, c)
            stack.pop()
        }
        if (c < o) {
            stack.push(")")
            backtrack(o, c + 1)
            stack.pop()
        }
    }
    backtrack(0, 0)
    return res;
};

console.log(generateParenthesis(3));