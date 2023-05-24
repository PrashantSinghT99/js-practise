
function addOne(a)
{
    return a+1;
}
function addTwo(a)
{
    return a+2;
}
function addThree(a)
{
    return a+3;
}

const compose=(...functions)=>
{
        return (args)=>
        {
        return functions.reduceRight((arg,fn)=>fn(arg),args);
        }
}



 const evaluate= compose(addOne,addTwo,addThree);
// const evaluate=compose(addOne(5), addTwo(2), addThree(3))
console.log(evaluate(3)); 