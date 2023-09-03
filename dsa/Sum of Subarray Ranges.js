var subArrayRanges = function(nums) {
    let n = nums.length;
    let sum=0;
    for (let i = 0; i < n; i++) {
        let min = nums[i];
        let max = nums[i];
        for (let j = i; j < n; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j])
            sum+=max-min;
        }
    }
    return sum;
};

console.log(subArrayRanges([1, 2, 3]));