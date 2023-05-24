// var
// let
// const
// hoisting var not let const
// reassign var let not const
// redeclare var  not let const

function hoist()
{
console.log(a,b,c);

let b=5;
const c=6;
var a=10;
}

hoist()