var rearrangeArray = function (nums) {
    let pos = [];
    let neg = [];
    let finalArr = [];
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i])
        }
        else {
            neg.push(nums[i])
        }
    }
    const n = pos.length
    for (let j = 0; j < n; j++) {
        finalArr.push(pos[0]);
        pos.shift()
        finalArr.push(neg[0]);
        neg.shift()

    }
    return finalArr

};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));

var rearrangeArray = function (nums) {
    let posIndex = 0;
    let negIndex = 1;
    let arr = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            arr[posIndex] = nums[i];
            posIndex += 2;
        }
        else {
            arr[negIndex] = nums[i];
            negIndex += 2;
        }
    }
    return arr;
};