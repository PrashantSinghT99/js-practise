var findPeakElement = function (nums) {
    let n = nums.length - 1;
    let l = 0;
    let r = n;
    while (l <= r) {
        let m = (r + l) >> 1;
        if (m > 0 && nums[m] < nums[m - 1]) {
            r = m - 1;
        } else if (m < n && nums[m] < nums[m + 1]) {
            l = m + 1;
        } else return m;
    }
};

console.log(findPeakElement([1, 2, 3, 1]));
