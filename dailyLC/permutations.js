var permute = function(nums) {
    let comb = [];
    let res = [];
    let size = nums.length;
    let visited = new Array(size).fill(false);
    backtrack(res, comb, size, nums, visited);
    return res;
  };
  function backtrack(res, comb, size, nums, visited) {
    if (comb.length === size) {
      res.push([...comb]);
      return;
    }
    for (let i = 0; i < size; i++) {
      if (visited[i]) continue; 
      visited[i] = true; 
      comb.push(nums[i]);
      backtrack(res, comb, size, nums, visited);
      comb.pop();
      visited[i] = false;
    }
  }


    console.log(permute([1,2,3]));