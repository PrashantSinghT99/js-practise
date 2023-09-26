var reverseParentheses = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let q = [];
      while (stack[stack.length - 1] !== "(") {
        q.push(stack.pop());
      }
      stack.pop();

      stack.push(...q);
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(reverseParentheses("(u(love)i)"));
