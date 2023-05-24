// const memoize = (fn) => {
//     let result = {}
//     return function (...args) {
//         let n = args[0];

//         if (n in result) {
//             console.log("cache");
//             return result[n];
//         }
//         else {
//             console.log("calculating first time");
//             return result[n] = fn(n);
//         }
//     }
// }

// const expensiveFunction = (a) => {
//     for (let i = 0; i <= 5; i++) {
//         a = a + i;
//     }
//     return a;
// }

// console.time();
// // console.log(expensiveFunction(5));
// const test = memoize(expensiveFunction);
// console.log(test(5));
// console.timeEnd();

// console.time();
// console.log(test(5));
// console.timeEnd();



const clumsyproduct=(num1,num2)=>
{
    for(let i=1;i<=100000000;i++){}
    return num1*num2;
};

const memo=(fn,context)=>
{
const res={};

return function(...args)
{
    var argsCache=JSON.stringify(args);
    if(!res[argsCache])
    {
        res[argsCache]=fn.call(context|| this,...args)
    }
    return res[argsCache];
}

}

const testTwo=memo(clumsyproduct);

console.time("first call")

console.log(testTwo(5354,53545)); 
console.timeEnd("first call")

console.time("second call")

console.log(testTwo(5354,53545)); 
console.timeEnd("second call")