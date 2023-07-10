var singleNumber = function (nums) {

nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!==nums[i+1] && nums[i+1]!==nums[i+2])
        {
            return nums[i+1]
        }
    }
console.log(nums);

};
console.log(singleNumber([2,2,3,2]));