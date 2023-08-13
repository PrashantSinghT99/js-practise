

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
    showText("hello from 3 promise", 2000)
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

// var promisePool = async function (functions, n) {
//     let result = [];
//     let pool = []
//     let i = 0;
//     while (i < functions.length || pool.length > 0) {
//       while ((pool.length < n && i < functions.length)) {
//         fn = functions[i];
//         const index = i;
//         const resPromise = fn.then((res) => {
//           result[index] = res;
//           pool.splice(pool.indexOf(resPromise), 1);
//         });
//         pool.push(resPromise);
//         i++;
//       }
//       await Promise.race(pool);
//     }
//     return result;
//   }