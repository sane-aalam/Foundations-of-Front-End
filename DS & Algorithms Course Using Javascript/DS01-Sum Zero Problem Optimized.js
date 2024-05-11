function FindZeroSum(arr){
    let n = arr.length;
    let zero_sum = 0;
    let start = 0;
    let end = n - 1;

    let result = [];

    while(start < end){
        let twosum = arr[start] + arr[end];
        if(twosum === zero_sum){
            result.push([arr[start], arr[end]]);
            return result; // Stop when the first pair is found
        } else if(twosum < zero_sum){
            start++;
        } else {
            end--;
        }
    }
    return -1;
}

// start code
const arr = [-70, 70, 80, 85];
const result = FindZeroSum(arr);
// Print the result
console.log(result);
