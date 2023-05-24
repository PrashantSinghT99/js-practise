// import { compose } from 'react-apollo';
// let arr = [
//     [1, 3],
//     [5, 6],
//     [[1, 3, 6], [798, 9]],
//     [5, 6, 43, 6, 1],
// ]

// let flattened=[].concat(...arr)
// console.log(flattened);

// function flattened(arr, depth = 1) {
//     let result = [];
//     arr.forEach(ar => {

//         if (Array.isArray(ar) && depth > 0) {
//             result.push(...flattened(ar, depth - 1));
//         }
//         else {
//             result.push(ar);
//         }

//     });
//     return result;

// }

// console.log(flattened(arr, 2));