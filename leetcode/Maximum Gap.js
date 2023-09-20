var maximumGap = function(nums) {
    let stack=[];
    let n = nums.length;
    if (n < 1) {
        return 0;
    }
    let max = 0;
    for (let i = 1; i < n; i++) {
        
        if(!stack.length===0 && stack[0]<nums[i])
        {
            let gap = nums[i] - stack[0];
            if (max < gap) {
                max = gap;
            }
        }
        stack.unshift(nums[i])
    }
    return max;
};

console.log(maximumGap([200,3,100]));



200,3,100