
// console.log(this)

// call apply bind 

// var person=
// {
//     name:"coder",
//     hello:function(thing)
//     {
//         console.log(this.name +"says hello"+thing);
//     },
// }
// var altergo=
// {
//     name:"Prashant Singh",
// }

// person.hello("world")

// person.hello.call(altergo,"world")

// person.hello.apply(altergo,["world"])

// const newgo=person.hello.bind(altergo)

// newgo("world")




// Promise.all([
//     showText("hello", 3000),
//     Promise.resolve("hi"),
//     Promise.resolve("bye"),
// ]).then((value) => console.log(value));

// promiseAll([
//     showText("hello", 1000),
//     Promise.resolve("hi"),
//     Promise.resolve("bye"),
// ]).then((value) => console.log(value));


// function promiseAll(promises) {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((p, index) => {
//             p.then((res) => {
//             result.push(res);
//             if (index === promises.length - 1) {
//                 resolve(result);
//             }
//         }).catch((err) => reject(err));
//     });
// });
// }


// function showText(text, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, time);
//     });
// }


// const person={
//     name:"Test",
//     hello:function(thing)
//     {
//         console.log(this.name,"says hello",this.thing);
//     }
// }

// const hey=
// {
// name:"Prashant Singh"
// }


// console.log(hey,"world")




// NULL AND UNDEFINED

// let a;

// console.log(a);


// console.log(b);

// console.log(typeof(null))
// console.log(typeof(undefined))

// EVENT DELEGATION 

// document.querySelector(".main").addEventListener('click',(e)=>
// {
// if(e.target.tagName==="LI")
// {
//     window.location.href+="#"+e.target.innerHTML;
// }
// })

// function f(a,b,c)
// {

// m=["1","2","3"]
// a=3;
// b[0]="X";
// c.first=false;

// }
// var x=4;
// var y=["A","B","C"]
// var z={first:true};

// f(x,y,z)
// console.log(x,y,z);


// const names=[1,3,4,5,6]

// const result =names.filter((ele)=>ele%2===0);

// console.log(result);

// const array1 = [1, 2, 3, 4];



// const names=[1,3,4,5,6]

// const result =names.map((ele)=>ele+2);

// console.log(result);

// function x()
// {
//   console.log("hello")
// }

// function y(x)
// {
//     x();
// }


// map filter reduce 

// const radius = [2, 5, 6, 9, 7]


// const area = (r) => {
//     return Math.PI * r * r;
// }

// const perimeter = (r) => {
//     return 2 * Math.PI * r;
// }

// const diameter = (r) => {
//     return 2 * r;
// }

// const calculate = (radius, logic) => {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }


// console.log(calculate(radius, area));
// console.log(calculate(radius, perimeter));
// console.log(calculate(radius, diameter));


// var num = 8;
// var num = 10;
// console.log(num);


// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Ayush';
//     let age = 21;
//   }

//   sayHi();

// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
//   }

//   getAge();

// function sum(a, b) {
//   return a + b;
// }

// sum(1, '2');

// console.log(typeof typeof 1);





// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  
//Array copy 

// let nums=[1,2]

// let i=0,j=1;

// [nums[i],nums[j]]=[nums[j],nums[i]]

// console.log(nums);


// let nums=[1,2,3]

// let arr=[...nums];
// console.log(arr);
// arr[0]=5
// console.log(arr);
// console.log("nums",nums);