var isValid = function (s) {
    if (s.length < 2) {
        return false;
    }
    let result = [];
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(" || s.charAt(i) === "{" || s.charAt(i) === "[") {
            result.unshift(s.charAt(i));
        }
        else if (s.charAt(i) === ")") {
            if (result.shift() !== "(") {
                return false;
            }
        }
        else if (s.charAt(i) === "}") {
            if (result.shift() !== "{") {
                return false;
            }
        }
        else if (s.charAt(i) === "]") {
            if (result.shift() !== "[") {
                return false;
            }
        }
    }
    if (result.length !== 0) {
        return false;
    } else return true;
}

console.log(isValid("(("));


