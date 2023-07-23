
var nextGreaterElement = function (nums1, nums2) {
    let res = Array(nums1.length).fill(-1)
    let map = new Map();
    let stack = [];
    let val = 0;
    let idx = 0;
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }
    for (let j = 0; j < nums2.length; j++) {
        let curr = nums2[j];
        while (stack.length > 0 && curr > stack[0]) {
            val = stack.shift();
            idx = map.get(val);
            res[idx] = curr;
        }
        if (map.has(curr)) {
            stack.unshift(curr)
        }
    }
    return res;
};

console.log(nextGreaterElement([4, 1, 2], [2, 1, 3, 4]));

