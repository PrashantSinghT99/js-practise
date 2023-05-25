const longestOccChar = (str) => {

  str = str.replaceAll(" ", "").split("")

  //console.log(str);
  let map = {};
  str.forEach(ele => {
    map[ele] = (map[ele] || 0) + 1
  });

  // console.log(map);

  // let len = str.length;

  // for (let i = 0; i < len; i++) {
  //     map[str.charAt(i)] = (map[str.charAt(i)] || 0) + 1
  // }
  // console.log(map);
  // let arr = Object.values(map);
  // console.log(arr);
  // let max = Math.max(...arr);
  // console.log(max);
  let max = 1;

  let char = str[0];
  for (let k in map) {
    // console.log(k)
    if (max < map[k]) {
      max = map[k];
      //  console.log(max);
      char = k;
    }
  }
  return char


}
console.log(longestOccChar("aa dd aaaa ddd"));