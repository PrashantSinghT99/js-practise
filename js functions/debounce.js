function debounce(func, delay) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(args);
    }, delay);
  };

}

// Example usage:
function handleInput(value) {
  console.log(`Input value: ${value}`);
}

const debouncedHandleInput = debounce(handleInput, 1000);

// Simulating input events
debouncedHandleInput("A");
debouncedHandleInput("Ap");
debouncedHandleInput("App");
debouncedHandleInput("Appl");
debouncedHandleInput("Apple");