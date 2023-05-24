
// const myPromise=Promise.all([Promise.resolve("Hi"),
// Promise.resolve("world"),
// showText("skinny bitch",2000)]);




function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

const newPromise = promiseAll([
    Promise.resolve("Hi"),
    Promise.resolve("world"),
    showText("skinny bitch", 2000)
]).then(res => console.log(res))


// console.log(newPromise);

function promiseAll(promises) {

    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, i) => {
            p.then(res => {
                result.push(res);
            })

            if (i === promises.length - 1) {
                resolve(result);
            }
        }).catch((err) => reject(err));

    })


}

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