var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let a of asteroids) {
        while (stack.length !== 0 && a < 0 && stack[0] > 0) {
            let diff = a + stack[0];
            if (diff < 0) stack.shift();
            else if (diff > 0) a = 0;
            else {
                a = 0; stack.shift();
            }
        }
        if (a) stack.unshift(a)
    }
    return stack.reverse();
};

console.log(asteroidCollision([5, 10, -5]));