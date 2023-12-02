// MAP VS FOREACH 

// const arr=[1,23,4,32,23,23,4,4,4]

// const mapResult=arr.map((ele)=>
// {
//     return ele+1                   //returns a transformed copy chaining can be done 
// }  )

// // const mapResult= arr.forEach((ele,i)=>
// // {
// // arr[i]=ele+2
// // })


// console.log(arr,mapResult)

// const numbers = [1, 2, 3, 4];

// const doubledNumbers = numbers.map(function (num) {
//   return num * 2;
// });
const numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(num * 2);
});
//console.log(doubledNumbers);
console.log(numbers);