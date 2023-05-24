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


