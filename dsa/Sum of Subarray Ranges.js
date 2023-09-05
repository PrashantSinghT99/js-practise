// var subArrayRanges = function(nums) {
//     let n = nums.length;
//     let sum=0;
//     for (let i = 0; i < n; i++) {
//         let min = nums[i];
//         let max = nums[i];
//         for (let j = i; j < n; j++) {
//             min = Math.min(min, nums[j]);
//             max = Math.max(max, nums[j])
//             sum+=max-min;
//         }
//     }
//     return sum;
// };

var sumSubarrayMins = function (arr) {
    const MOD = 1000000007;
    const n = arr.length;
    let result = 0;
    let left = new Array(n);
    let right = new Array(n);
    let stack = [];
    for (let i = 0; i < n; i++) {
        let count = 1;
        let curr = arr[i];
        while (stack.length > 0 && stack[0][0] >= curr) {
            count += stack[0][1];
            stack.shift();
        }
        left[i] = count;
        stack.unshift([curr, count]);
    }
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        let count = 1;
        let curr = arr[i];
        while (stack.length > 0 && stack[0][0] > curr) {
            count += stack[0][1];
            stack.shift();
        }
        right[i] = count;
        stack.unshift([curr, count]);
    }
    for (let i = 0; i < n; i++) {
        result += arr[i] * left[i] * right[i];
        result %= MOD;
    }
    return result;
};

console.log(subArrayRanges([1, 2, 3]));