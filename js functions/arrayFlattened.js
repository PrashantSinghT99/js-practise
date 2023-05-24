const arr = [
    [1, 2],
    [6, 7, 8, 9],
    [4, 10, 3],
    [12, [[13], [15], [16]], 17]
]
console.log(customFlat(arr, 3));

function customFlat(arr, depth) {
    const result = [];

    arr.forEach(element => {
        if (Array.isArray(element) && depth > 0) {
            result.push(...customFlat(element, depth - 1))
        }
        else {
            result.push(element)
        }
    });
    return result;

}