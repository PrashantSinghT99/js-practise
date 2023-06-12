var topKFrequent = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }

    map = Object.entries(map).sort((a, b) => b[1] - a[1]);
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(map.shift());
    }
    const result = arr.map(innerArray => Number(innerArray[0]));
    return result;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));