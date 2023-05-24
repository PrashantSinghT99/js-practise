// 
//[-4,4]
// const sumZero = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }

// }

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        }
        else if (arr[left] + arr[right] > 0) {
            right--;
        }
        else {
            left++;
        }

    }
}



console.time();
console.log(sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
console.timeEnd();
