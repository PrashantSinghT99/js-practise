// var majorityElement = function (nums) {
//     let map = {};
//     let res = [];
//     let count = Math.floor(nums.length / 3);
//     for (let num of nums) {
//         map[num] = (map[num] || 0) + 1;
//     }
//     console.log(map);
//     for (const key in map) {
//         if (map[key] > count) {
//             res.push(key)
//         }
//     }
//     return res;
// };
// console.log(majorityElement([3, 3, 2]));

var majorityElement = function (nums) {
    let c1 = 0;
    let c2 = 0;
    let ele1 = 0;
    let ele2 = 0;
    let n = nums.length;
    let limit = Math.floor(n / 3);
    for (let i = 0; i < n; i++) {
        if (c1 === 0 && nums[i] !== ele2) {
            c1 = 1;
            ele1 = nums[i]
        }
        else if (c2 === 0 && nums[i] !== ele1) {
            c2 = 1;
            ele2 = nums[i]
        }
        else if (nums[i] === ele1) c1++;
        else if (nums[i] === ele2) c2++;
        else {
            c1--;
            c2--;
        }
    }
    let res = [];
    c1 = 0;
    c2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === ele1) c1++;
        if (nums[i] === ele2) c2++
    }
    if (c1 > limit) {
        res.push(ele1)
    }
    if (c2 > limit) {
        res.push(ele2)
    }
    return res;
};