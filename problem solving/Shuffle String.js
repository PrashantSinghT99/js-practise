var restoreString = function (s, indices) {
  let res = [];
  let n = indices.length;
  for (let i = 0; i < n; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
