/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0, right = nums.length -1
  while(left <= right){
    const middle = Math.floor((left+right)/2)
    if(nums[middle] === target){
      return middle
    }else if(nums[middle] > target){
      right = middle -1
    }else if(nums[middle] < target){
      left = middle + 1
    }
  }
  // 如果target找不到則有可能是
  // 1. 在right更右邊
  // 2. 在陣列內未找到時，left 必定 大於 right ，所以回傳答案必定為right+1
  return right + 1
};

const result = searchInsert([1,3,5,6], 4)
console.log(result)
