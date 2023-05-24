function divideConqeror(arr, ele) {
    let left = 0;
    let right =  arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < ele) {
            left = mid + 1;
        }
        else if (arr[mid] > ele) {
            right = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log(divideConqeror([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16));