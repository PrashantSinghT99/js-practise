function checkSq(arr1, arr2) {
    let map1 = {};
    let map2 = {};

    if (arr1.length === arr2.length) {
        for (item1 of arr1) {
            map1[item1] = (map1[item1] || 0) + 1;
        }
        console.log(map1);

        for (item2 of arr2) {
            map2[item2] = (map2[item2] || 0) + 1;
        }
        console.log(map2);

        for (let key in map1) {
            console.log("Key : ", key);
            if (!map2[key * key]) {
                return false;
            }
            if (map1[key] !== map2[key * key]) {
                return false;
            }
        }
        return true;
    }
    else {
        throw new Error("Array length not equal")
    }



}

console.log(checkSq([1, 2, 3, 4], [1, 9, 4, 16]));



