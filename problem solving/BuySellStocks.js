const buyandsell = (arr) => {
    let min = arr[0];
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i] - min);
    }
    return max;
}

console.log(buyandsell([7, 1, 5, 3, 6, 4]));