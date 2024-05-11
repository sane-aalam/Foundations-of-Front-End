
// #1 - DSA | Sum Zero Problem
// let's solve the problem using

function FindZeroSum(arr){
    let n = arr.length;
    let zero_sum = 0;
    for(let current_index in arr){
        for(let innerIndex = current_index; innerIndex < n; innerIndex++)
            if(arr[current_index] + arr[innerIndex] == zero_sum){
                return [arr[current_index],arr[innerIndex]];
            }
    }
    // When Element is not present Which is Equal to ZeroSum
    return [-1,-1];
}

// start code
const arr = [-70, 70, -80, 85];
const result = FindZeroSum(arr);
// Print the result
console.log(result);