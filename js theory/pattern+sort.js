// var sortColors = function (nums) {
//     let len = nums.length;
//     for (let i = 0; i < len - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < len; j++) {
//             if (nums[min] > nums[j]) {
//                 let temp = nums[min];
//                 nums[min] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }
//     return nums;
// };


// console.log(sortColors([2, 0, 2, 1, 1, 0]));

// var majorityElement = function (nums) {
//     let len = nums.length;
//     nums = nums.sort();
//     return nums[Math.floor(len / 2)];
// };
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// function myReplace(str, before, after) {
//     if (before.charCodeAt(0) > 65 && before.charCodeAt(0) < 91) {
//         after = after.charAt(0).toUpperCase() + after.slice(1)
//     }
//     else {
//         after = after.charAt(0).toLowerCase() + after.slice(1)
//     }
//     str = str.replace(before, after)
//     return str;
// }

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));


function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        let count = 0;
        for (let j = 2; j <= num; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        // console.log(count);
        if (count < 2) {
            sum += i;

        }
    }
    return sum;
}


console.log(sumPrimes(10));



// 2 3 5 7 