// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b);
//     const set = new Set();
//     let result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         let p1 = i + 1;
//         let p2 = nums.length - 1;
//         while (p1 < p2) {
//             let sum = nums[i] + nums[p1] + nums[p2];
//             if (sum === 0) {
//                 const s = `${nums[i]}-${nums[p1]}-${nums[p2]}`;
//                 if (!set.has(s)) {
//                     set.add(s);
//                     result.push([nums[i], nums[p1], nums[p2]]);
//                 }
//                 p1++;
//             }
//             else if (sum < 0) {
//                 p1++;
//             }
//             else {
//                 p2--;
//             }
//         }
//     }
//     return result;
// };

const threeSum = (nums) => {
    const set = new Set();
    nums=nums.sort()
    let n = nums.length;
    let result=[];
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const s = `${nums[i]}-${nums[j]}-${nums[k]}`;
                    if (!set.has(s)) {
                        set.add(s);
                        result.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));