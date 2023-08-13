var maxProduct = function (nums) {
    let max = Number.NEGATIVE_INFINITY;
    let prefix = 1;
    let suffix = 1;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (prefix == 0) prefix = 1;
        if (suffix == 0) suffix = 1;
        prefix = prefix * nums[i];
        suffix = suffix * nums[len - 1 - i];
        max = Math.max(max, Math.max(prefix, suffix))

    };
    return max;
}
console.log(maxProduct([0, 0]));