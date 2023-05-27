

// const newPromise = Promise.all([
//     Promise.resolve("Hi"),
//     Promise.resolve("world"),
//     showText("skinny bitch", 2000)
// ]).then(res=>console.log(res))

function showText(str, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, time)
    })
}


const newPromise = promiseAll([
    Promise.resolve("Hi"),
    Promise.resolve("world"),
    showText("skinny bitch", 2000)
]).then(res => console.log(res))


function promiseAll(promises) {

    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, i) => {
            p.then(res => {
                result.push(res);
                
            if (i === promises.length - 1) {
                resolve(result);
            }
            }).catch((err) => reject(err));

        })

    })
}