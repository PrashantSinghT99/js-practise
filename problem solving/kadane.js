//[-2,1,-3,4,-1,2,1,-5,4]  =6   4 -1 2 1
//[5,4,-1,7,8]   =23     5 4 -1 7 8




// function kadane(arr) {
//     let resultMax = 0;
//     let sum = 0;
//     // let max=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (sum < 0) {
//             sum = 0;
//         }
//         sum = sum + arr[i];
//         if (sum > resultMax) {
//             resultMax = sum;
//         }
//     }
//     return resultMax;
// }

// console.log(kadane([-2,1,-3,4,-1,2,1,-5,4]));



// var maxSubArray = function(nums) {
//     let maxSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         nums[i] = Math.max(0, nums[i - 1]) + nums[i];
//         if (nums[i] > maxSum)
//             maxSum = nums[i];
//     }
//     return maxSum;
// };

// console.log(maxSubArray([-1]));



function kadane(arr) {
    let resultMax = arr[0];
    let sum = 0;
    // let max=0;
    for (let i = 0; i < arr.length; i++) {
      
        sum = sum + arr[i];
        if (sum > resultMax) {
            resultMax = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return resultMax;
}

console.log(kadane([-2,-1,1,4]));
