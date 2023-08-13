const arr = [
    [1, 2],
    [6, 7, 8, 9],
    [4, 10, 3],
    [12, [[13], [15], [16]], 17]
]

// const flattenedArray = arr.flat(3);


//console.log(flattenedArray);

// const customFlat = (arr, depth) => {
//     let res = [];
//     arr.forEach(element => {
//         if (Array.isArray(element) && depth > 0) {
//             res.push(...customFlat(element, depth - 1))
//         }
//         else {
//             res.push(element)
//         }
//     });
//     return res;
// }


const customFlat = (arr, depth) => {
    let res = [];

    arr.forEach(ele => {
        if (Array.isArray(ele) && depth > 0) {
            res.push(...customFlat(ele, depth - 1))
           // console.log(res);
        }
        else {
            res.push(ele)
        }
    })
    return res;

}
console.log(customFlat(arr, 3));

// function customFlat(arr, depth) {
//     const result = [];

//     arr.forEach(element => {
//         if (Array.isArray(element) && depth > 0) {
//             result.push(...customFlat(element, depth - 1))
//         }
//         else {
//             result.push(element)
//         }
//     });
//     return result;

// }




// var flat = function (arr, n) {
//     let result = [];
//     arr.forEach(ele => {
//         if (Array.isArray(ele) && n > 0) {
//             result.push(...flat(ele, n - 1))
//         }
//         else {
//             result.push(ele);
//         }
//     })
//     return result;
// }