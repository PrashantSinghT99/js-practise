// MAP VS FOREACH 

const arr=[1,23,4,32,23,23,4,4,4]

const mapResult=arr.map((ele)=>
{
    return ele+1                   //returns a transformed copy chaining can be done 
}  )

// const mapResult= arr.forEach((ele,i)=>
// {
// arr[i]=ele+2
// })


console.log(arr,mapResult)

