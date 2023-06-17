var evalRPN = function (tokens) {
    let result = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(Number(tokens[i]))) {
            result.push(Number(tokens[i]))
        }
        else if (tokens[i] === "*") {
            let a = result.pop();
            let b = result.pop();
            result.push(a * b)
        }
        else if (tokens[i] === "-") {
            let a = result.pop();
            let b = result.pop();
            result.push(b - a)
        }
        else if (tokens[i] === "+") {
            let a = result.pop();
            let b = result.pop();
            result.push(a + b)
        }
        else if (tokens[i] === "/") {
            let a = result.pop();
            let b = result.pop();
            result.push(Math.trunc(b / a))
            console.log(result);
        }

    }
    return result[0]


};
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));

