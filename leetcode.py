from typing import List
def searchInsert(nums : List[int], target: int) -> int:
  left, right = 0, len(nums) - 1
  while(left <= right):
    mi = (left + right) // 2
    if nums[mi] == target:
        return mi
    elif nums[mi] > target:
        right = mi - 1
    elif nums[mi] < target:
        left = mi + 1
  return right + 1

print(searchInsert([1,2,3,4], 5))

