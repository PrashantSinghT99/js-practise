/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let idx = -1;
    let len = nums.length;
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }
    if (idx === -1) {
        nums = nums.reverse();
        return;
    }
    for (let j = len - 1; j > idx; j--) {
        if (nums[j] > nums[idx]) {
            const temp = nums[j];
            nums[j] = nums[idx];
            nums[idx] = temp;
            break;
        }
    }
    let l = idx + 1;
    let r = len - 1;
    while (l <= r) {
        const temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
};
console.log(nextPermutation([1, 1, 5]));