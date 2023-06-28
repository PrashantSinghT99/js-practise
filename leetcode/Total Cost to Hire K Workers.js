var totalCost = function (costs, k, candidates) {
    let frontMin = [];
    let backMin = [];
    let res = 0;
    let i = 0;
    let j = costs.length - 1;
    let topmin=Number.MAX_SAFE_INTEGER
    let bottommin=Number.MAX_SAFE_INTEGER;
    while (k-- > 0) {
        while ((frontMin.length < candidates) && i <= j) {
             topmin = Math.min(topmin, costs[i])
            i++;
        }
        frontMin.push(topmin);
        while ((backMin.length < candidates) && i <= j) {
             bottommin = Math.min(bottommin, costs[i])
            j--;
        }
        backMin.push(bottommin);

        let frontcost = (frontMin.length > 0) ? frontMin[0] : Number.MAX_SAFE_INTEGER;
        let backcost = (backMin.length > 0) ? backMin[0] : Number.MAX_SAFE_INTEGER;
        if (frontcost <= backcost) {
            res += frontcost
            frontMin.shift()
        }
        else {
            res += backcost
            backMin.shift()
        }
    }
    return res

};

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4));