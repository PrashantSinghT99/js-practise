var longestSubarray = function (nums) {
    let l = 0;
    let r = 0;
    let zero = 0;
    let ans = 0;
    for (r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            zero++;
        }
        while (zero > 1) {
            if (nums[left] === 0) {
                zero--;
            }
            l++;
        }
        ans = Math.max(ans, r - l + 1 - zero);
    }
    return (ans == n) ? ans - 1 : ans
};