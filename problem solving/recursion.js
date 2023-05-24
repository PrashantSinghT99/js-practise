"use strict";

//Factorial

// const fact = (n) => {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return n * fact(n - 1);
//     }

// }

// console.log(fact(5));

//RANGE OF NUMBERS

// const range = (start, end) => {

//     if (start > end) {
//         return [];
//     }
//     else {
//         const numbers = range(start, end - 1);
//         numbers.push(end);
//         return numbers;

//     }
// }

// console.log(range(1, 5));

//fibonacci

// let fib=function(n)
// {
//     let arr=[0,1];
//     for(let i=2;i<=n;i++)
//     {
//         arr.push(arr[i-2]+arr[i-1]);
//     }
//     return arr[n];
// }

// console.log(fib(5));

// const fibonacci = (n) => {

//     if (n <= 1) {
//         return n;
//     }
//     else {
//         n = fibonacci(n - 1) + fibonacci(n - 2);
//         return n;
//     }

// }

// console.log(fibonacci(20));


//reverse

//hello elloh  
// const reverse=(str)=>
// {
// if(str === "")
// {
//     return "";
// }
// else{
//     return reverse(str.substr(1))+str.charAt(0);
// }
// }

// console.log(reverse("hello"));

//subsets

// var subsets = function (nums) {
//     let result = [];
//     let temp = [];
//     function recursiveFunc(nums, i) {
//         if (i === nums.length) {
//             return result.push([...temp]);
//         }
//             temp.push(nums[i]);
//             recursiveFunc(nums, i + 1);
//             temp.pop();
//             recursiveFunc(nums, i + 1);
//         }
//         recursiveFunc(nums,0);
//         return result;
//     }


// const palli=(num)=>
// {
// if(num==="")
// {
//     return "";
// }
// return palli(num.substr(1))+num.charAt(0);
// }

// if(palli("10001")==="10001")
// {
//     console.log(true);
// }
// else console.log(false);