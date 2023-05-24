const arr = [1, 6, 32, 466]

const newarr = arr.map(ele => ele * 2)

console.log(newarr);


const secondArr = arr.filter(check)
console.log(secondArr);

function check(ele) {
    if (ele < 7) {
        return ele;
    }
}

const sumWithInitial = arr.reduce((acc, ele) => acc + ele, 0)

console.log(sumWithInitial)


