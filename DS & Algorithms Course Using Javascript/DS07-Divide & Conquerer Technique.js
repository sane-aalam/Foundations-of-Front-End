

/*
* Check the value in the center of the array.
* If the target value is lower, search the left half of the array. ...
* Continue step 1 and 2 for the new reduced part of the array until the target value is found or until the search area is empty.
* If the value is found, return the target value index.
* Time complexity - O(LogN)
*/

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number} 
*/

class Solution {
    binarysearch(arr, n, k) {
        // code here
        let start = 0;
        let end = n - 1;
        let mid = Math.floor(start + (end-start)/2);
        
        while(start <= end){
            if(arr[mid] == k){
                return mid;
            }else if(arr[mid] < k){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
            mid = Math.floor(start + (end-start)/2);
        }
        return -1;
    }
}