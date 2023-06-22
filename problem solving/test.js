var largestAltitude = function(gain) {
    let maxHt=0;
    let currHt=0;
    for(let i=0;i<gain.length;i++)
    {
        currHt=currHt+gain[i];
        maxHt=Math.max(maxHt,currHt)
    }
    return maxHt;
};


console.log(largestAltitude( [-4,-3,-2,-1,4,3,2]));