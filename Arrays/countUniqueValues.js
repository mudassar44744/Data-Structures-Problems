/**
 * 
 *
Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the 
unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
 * 
 * @param {*} arr 
 * @returns number
 */

//By using Set
function countUniqueValues(arr){
    let uniqVal = new Set([...arr]);
    return uniqVal.size;
}


function countUniqueValues1(arr) {
    let left = 0;
    for(let right = 1; right < arr.length; right++) {
      if(arr[right - 1] !== arr[right]) {
        left++;
      }
    }
    return left + 1;
}



countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
