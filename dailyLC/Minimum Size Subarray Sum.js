// var minSubArrayLen = function (target, nums) {
//     let l = 0;
//     let sum = 0;
//     let minlen=nums.length
//     for (let r = 0; r < nums.length; r++) {
//         if(sum===target)
//         {
//         let len=r-l+1;
//         minlen=Math.min(minlen,len)  
//         l++;
//         sum-=nums[l]
//         }
//         if (sum < target) {
//             sum += nums[r];          
//         }
//         while (sum > target) {
//             l++;
//             sum -= nums[l]
//         }
//     }
//     return minlen
// };

var minSubArrayLen = function (target, nums) {
    let l = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum >= target) {
            const currLen = r - l + 1;
            minLen = Math.min(minLen, currLen);

            sum -= nums[l];
            l++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));