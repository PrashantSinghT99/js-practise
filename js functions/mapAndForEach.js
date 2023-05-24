// MAP VS FOREACH 

// const arr=[1,23,4,32,23,23,4,4,4]

// const mapResult=arr.map((ele)=>
// {
//     return ele+1                   //returns a transformed copy chaining can be done 
// }  )

// arr.forEach((ele,i)=>
// {
// arr[i]=ele+2
// })


// console.log(mapResult,arr)

const myAwesomeArray = [1, 2, 3, 4, 5]
const a=myAwesomeArray.forEach(x => x * x)
const b=myAwesomeArray.map(x => x * x)

console.log(a,b);