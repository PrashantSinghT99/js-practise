var carFleet = function(target, position, speed) {
    const pair = position.map((pos, idx) => [pos, speed[idx]]);
    console.log(pair);
    const stack = [];
    pair.sort((posA, posB) => posA[0] - posB[0]);
    
    for (let i = pair.length - 1; i >= 0; i--) {

        const [pos, speed] = pair[i];
        stack.push((target - pos) / speed)

        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }
    return stack.length;
};

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]));