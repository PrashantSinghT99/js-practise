const largestSum = (num, arr) => {
    if (num > arr.length) {
        throw new Error("Number cannot be greater than array")
    }
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum = sum + arr[i + j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

console.log(largestSum(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

