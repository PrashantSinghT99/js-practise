var throttle = function (fn, t) {
    let last;
    let call = true;
    function calls() {
        if (call && last) {
            fn(...last);
            last = null;
            call = false;
            setTimeout(() => {
                call = true;
                calls();
            }, t);
        }
    }
    return function (...args) {
        last = args;
        calls();
    }
};

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.