var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let len = nums1.length;
  let len2 = nums2.length;
  let stack = [];
  let nge = [];
  let res = new Array(len).fill(-1);
  for (let i = 0; i < len; i++) {
    map.set(nums1[i], i);
  }
  for (let i = len2 - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[0] <= nums2[i]) {
      stack.shift();
    }
    if (stack.length === 0) {
      nge[i] = -1;
    } else {
      nge[i] = stack[0];
    }
    stack.unshift(nums2[i]);
  }
  for (let j = 0; j < len2; j++) {
    if (map.has(nums2[j])) {
      let idx = map.get(nums2[j]);
      res[idx] = nge[j];
    }
  }
  return res;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
