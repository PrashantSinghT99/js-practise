var nextGreaterElements = function (nums) {
    let res = Array(nums.length).fill(-1);
    let stack = [];
    let n = nums.length;
    for (let i = 0; i < n * 2; i++) {
        let curr = nums[i % n];
        while (stack.length > 0 && curr > stack[0]) {
            let val = stack.shift();
            let idx = nums.indexOf(val);
            res[idx] = curr;
        }
        if (i < n) {
            stack.unshift(nums[i]);
        }

    }
    return res;
};

console.log(nextGreaterElements([1, 2, 1])); 