// function prevSmaller(A) {
//     let n = A.length;
//     let res = Array(n).fill(-1)
//     let stack = [];
//     for (let i = 0; i < n; i++) {
//         let curr = A[i];
//         while (stack.length > 0 && curr < stack[0]) {
//             stack.shift();
//         }
//         if (stack.length > 0) {
//             res[i] = stack[0];
//         }
//         stack.push(A[i]);
//     }
//     return res;
// }
// console.log(prevSmaller([4, 7, 8, 2, 3, 1]));
function immediateRight(A) {
    let n = A.length;
    let res = Array(n).fill(-1)
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
        let curr = A[i];
        if (stack.length > 0 && curr > stack[0]) {
            res[i] = stack.shift();
        }
        stack.unshift(A[i]);

    }
    return res;
}
console.log(immediateRight([4, 3, 2, 1]));


//-1 -1 2 -1 1 -1   //[ -1, -1, 3, -1, 1, -1 ]
// stack=[3 1]
// curr=2

// res
