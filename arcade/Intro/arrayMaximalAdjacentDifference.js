/* Easy
	Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    let maxAbsolutDifference = 0; 
    for(let i = 0; i < inputArray.length - 1; i++)
        if(Math.abs(inputArray[i] - inputArray[i + 1]) > maxAbsolutDifference) 
            maxAbsolutDifference = Math.abs(inputArray[i] - inputArray[i + 1]); 
    return maxAbsolutDifference;
}