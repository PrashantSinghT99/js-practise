var sumSubarrayMins = function (A) {
    const in_stk_p = [];
    const in_stk_n = [];
    // left is for the distance to previous less element
    // right is for the distance to the next less element
    const left = new Array(A.length);
    const right = new Array(A.length);
    
    // Initialize
    for (let i = 0; i < A.length; i++) left[i] = i + 1;
    for (let i = 0; i < A.length; i++) right[i] = A.length - i;

    //console.log("initial","arr",A,"left",left);
    
    for (let i = 0; i < A.length; i++) {
      // for previous less

      while (in_stk_p.length > 0 && in_stk_p[in_stk_p.length - 1][0] > A[i]) {
        in_stk_p.pop();
      }
      left[i] = in_stk_p.length === 0 ? i + 1 : i - in_stk_p[in_stk_p.length - 1][1];
      in_stk_p.push([A[i], i]);
      // console.log("stack",in_stk_p)
      // console.log(i,"arr",A,"left",left);

      console.log("initial","arr",A,"right",right);
      // for next less
      while (in_stk_n.length > 0 && in_stk_n[in_stk_n.length - 1][0] > A[i]) {
        const x = in_stk_n.pop();
        right[x[1]] = i - x[1];
      }
      in_stk_n.push([A[i], i]);
      console.log("stack",in_stk_n)
      console.log(i,"arr",A,"right",right);
    }
    //console.log("arr",A,"left",left,"right",right);
    let ans = 0;
    const mod = 1e9 + 7;
    for (let i = 0; i < A.length; i++) {
      ans = (ans + A[i] * left[i] * right[i]) % mod;
    }
    return ans;
//     const modulo = 1000000007; // Modulo 10^9 + 7
//     const stack = []; // Stack to store indices
//     const left = new Array(arr.length).fill(0);
//     const right = new Array(arr.length).fill(0);
//     let result = 0;
// console.log("arr",arr);
//     // Calculate left[i] (the number of elements to the left of i that are greater than or equal to arr[i])
//     for (let i = 0; i < arr.length; i++) {
//         //arr of top(from index store on top of stack)is greater than curr element
//         while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
//             stack.pop();
//         }
//         left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
//         console.log("left",left);
//         stack.push(i);
//         console.log("stack",stack);
//     }
//     console.log("arr",arr);
//     // Clear the stack and calculate right[i] (the number of elements to the right of i that are greater than or equal to arr[i])
//     stack.length = 0; // Clear the stack
//     for (let i = arr.length - 1; i >= 0; i--) {
//         while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
//             stack.pop();
//         }
//         right[i] = stack.length === 0 ? arr.length - i : stack[stack.length - 1] - i;
//         console.log("right",right);
//         stack.push(i);
//         console.log("stack",stack);
//     }

//     // Calculate the sum of minimums for each element
//     for (let i = 0; i < arr.length; i++) {
//         result = (result + arr[i] * left[i] * right[i]) % modulo;
//     }

//     return result;
}


console.log(sumSubarrayMins([3, 1, 2, 4]));

