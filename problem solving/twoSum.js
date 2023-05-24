//target=9   arr=[2,7,11,15]

// const twoSum = (arr,target) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.includes(target - arr[i])) {
//             let start= result.indexOf(target - arr[i])//O(N)  MAP 0(1)
//             return {start,i};
//         }
//         else {
//             result.push(arr[i]);
//         }
//     }
//     return false;
// }
// console.log(twoSum([2,7,11,15],26));

// const twoSum = (arr,target) => {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         if(result[target-arr[i]]>=0)
//         {
//             return [result[target-arr[i]],i];
//         }
//         else
//         {
//             result[arr[i]]=i;
//         }
//     }
//     return false;
// }
// console.log(twoSum([2,7,11,15],26));




