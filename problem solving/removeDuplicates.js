const removeDup = (arr) => {
    let obj = {};
    let result = [];
 
    for (let i = 0; i < arr.length; i++) {

        if (!obj[arr[i]]) {
            result.push(arr[i]);
        }
            obj[arr[i]]=true;
       

    }
    return result;
}

console.log(removeDup([1, 2, 3, 7, 2, 2, 1, 7, 8, 8, 9, 9]))