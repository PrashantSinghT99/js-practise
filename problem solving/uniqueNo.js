const unique=(arr)=>
{
    if(arr.length)
    {
        let counter=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]!=arr[i+1])
            {
                counter++;
            }
    
        }
        return counter;
    }
    else{
        throw new Error("Array is Empty")
    }
   
// let counter;
// let result={};
// for(let i=0;i<arr.length;i++)
// {
//    arr.includes(arr[i])
//    {
//     result[arr[i]]=(result[arr[i]]|0)+1;
//    }
       
//     }
// newArr=Object.keys(result);

// return newArr.length;
}
console.log(unique([1,1,2,2,3,4,4,5,6,7,8,8]));

//ES6

// [... new Set(a)]
// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);








