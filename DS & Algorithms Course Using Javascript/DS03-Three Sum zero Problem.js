/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
** Problem statement of Leetcode
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

 */
var ThreeSum = function (arr) {
  let n = arr.length;
  let zero_sum = 0;

  // sort method present in javascript
  // bluid-in-method in javascript
  arr.sort();

  // let's store the result
  let mySet = new Set();

  for (let index = 0; index < n; index++) {
    let start = index + 1;
    let end = n - 1;
    while (start < end) {
      let x = arr[index];
      let y = arr[start];
      let z = arr[end];

      let total_sum = x + y + z;
      if (total_sum == zero_sum) {
        let subresult = [];
        subresult.push(x);
        subresult.push(y);
        subresult.push(z);
        mySet.add(subresult);
        start++;
        end--;
      } else if (total_sum < zero_sum) {
        start++;
      } else {
        end--;
      }
    }
  }
  return mySet;
};

const arr = [-1, 0, 1, 2, -1, -4];
const result = ThreeSum(arr);
console.log(result);
