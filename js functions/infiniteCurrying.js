// function add(a) {
//     return function (b) {
//      return function()
//      {
//         return a+b;
//      }
//     }
// }


function add(a) {
    return function (b) {
        if (b) return add(a + b);
        else
            return a;
    }
}

console.log(add(5)(2)(3)());

// Create a function that accepts the original function as its argument.
// Define an inner function that will be returned by the outer function. This inner function will accept the arguments that will be used to call the original function.
// Inside the inner function, check if the number of arguments provided is less than the number of arguments required by the original function.
// If so, return a new curried function that will accept the remaining arguments.
// If the number of arguments provided is equal to or greater than the number required by the original function, call the original function with the provided arguments.
// Return the result of the original function call.
var curry = function(fn) {
    return function curried(...args) {
       if (args.length < fn.length) {
         return function(...args2) {
           return curried(...args, ...args2);
         }
       }
       return fn(...args);
     };
   };