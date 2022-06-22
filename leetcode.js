/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let count = 0
  for(let i = 0 ,len = nums.length ; i < len ; i++){
      if(nums[i] !== val){
          nums[count] = nums[i]
          count++
      }
  }
  return count++
};

const a = removeElement([3,1,4,3], 2)
console.log(a)
