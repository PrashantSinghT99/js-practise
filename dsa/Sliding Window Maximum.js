var maxSlidingWindow = function (nums, k) {
    let n = nums.length;
    let l = 0;
    let r = 0;
    let res = [];
    let max = -Infinity;
    for (let r = 0; r < l + k; r++) {
        max = Math.max(max, nums[r])
        while (r > k && l < n - k + 1) {
            res.push(max);
            l++;
        }
    }
    return res;

};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

var maxSlidingWindow = function (nums, k) {
    const max = [];
    const n = nums.length;
    const deque = [];
    for (let i = 0; i < n; i++) {
        // Remove elements that are out of the current window from the front of the deque
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        // Remove elements from the back of the deque if they are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        // When the window is fully inside the array, add the maximum element to the result
        if (i >= k - 1) {
            max.push(nums[deque[0]]);
        }
    }
    return max;
};
