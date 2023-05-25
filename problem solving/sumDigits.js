// const sumDig = (str) => {
//     let sum = 0;
//     let n=0;
//     num = parseInt(str)
//     while (num > 0) {
//         n=num%10;
//         sum = sum + n;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(sumDig("17269"));

const sumDig = (str) => {
    let arr=str.toString().split("").map(Number);

    console.log(arr);

}
console.log(sumDig("17269"));

