var maxScore = function (cardPoints, k) {
    let max = 0;
    while (k > 0) {
        let l = cardPoints[0];
        let r = cardPoints[cardPoints.length - 1];
        if (l > r) {
            max += l;
            cardPoints.shift();
        console.log(cardPoints);
        }
        else {
            max += r;
            cardPoints.pop();
            console.log(cardPoints);
        }
        k--;
    }
    return max;

}

console.log(maxScore([9,7,7,9,7,7,9],7));