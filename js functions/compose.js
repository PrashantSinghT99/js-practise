// compose 

function add(a)
{
    return a+5;
}

function substractTwo(a)
{
    return a-2;
}

function multiply(a)
{
    return a*4;
}

// const compose=(...functions)=>
// {
// return (args)=>
// {
//     return functions.reduceRight((arg,fn)=>fn(arg),args);
// }
// }

const compose=(...functions)=>{
return (args)=>
{
return functions.reduceRight((arg,fn)=>fn(arg),args)
}
}

const evaluate=compose(add,substractTwo,multiply);

console.log(evaluate(5));


