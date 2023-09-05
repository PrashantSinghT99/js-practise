var removeKdigits = function (num, k) {
    let n = num.length;
    // Handle the case where k is greater than or equal to the length of num
    if (k >= n) {
        return '0';
    }
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && stack[stack.length - 1] > num[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    // Handle the case where there are still remaining 'k' elements to be removed
    while (k > 0) {
        stack.pop();
        k--;
    }
    // Handle the case where the result is zero
    while (stack.length > 1 && stack[0] === '0') {
        stack.shift();
    }
    let res = stack.join('');
    // Handle the case where the result is an empty string
    if (res === '') {
        return '0';
    }
    return res;
}
console.log(removeKdigits("10200", 1))