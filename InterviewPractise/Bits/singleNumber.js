/* Easy
	You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. Your solution should have a linear runtime complexity (O(n)). Try to implement it without using extra memory.
*/

function singleNumber(nums) {
  'use strict'
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}
