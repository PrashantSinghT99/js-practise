var subarraySum = function (nums, k) {
    let len = nums.length;
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        if (map.has(sum)) {
            map.get(sum) = (map.get(sum) || 0) + 1
        }
        else map.set(sum, 1)
    }
    return count

};

console.log(subarraySum([1, 1, 1], 2));