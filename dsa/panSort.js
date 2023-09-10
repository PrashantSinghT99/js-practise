var pancakeSort = function (arr) {
    let n = arr.length;
    let res = [];
    for (let lastIndex = n - 1; lastIndex >= 1; lastIndex--) {
        let maxIndex = findMaxIndex(arr, lastIndex);
        if (maxIndex != lastIndex) {
            reverse(arr, maxIndex);
            reverse(arr, lastIndex);
            res.push(maxIndex + 1);
            console.log(res);
            res.push(lastIndex + 1)
            console.log(res);
        }
    }
    return res;
};
function findMaxIndex(arr, lastIndex) {
    let maxIndex = 0;
    for (let i = 0; i <= lastIndex; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i
        }
    }
    return maxIndex;
}
function reverse(arr, i) {
    let left = 0;
    let right = i;
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log(pancakeSort([3, 2, 4, 1]));
//4 2 3 1        3
//1 3 2 4          4
//3 1 2 4            2
//2 1 3 4           3
//2 1 3 4           1
//1 2 3 4           2