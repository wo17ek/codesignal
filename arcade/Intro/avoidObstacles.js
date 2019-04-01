/* Easy
	You are given an array of integers representing coordinates of obstacles situated on a straight line.
	Assume that you are jumping from the point with coordinate 0 to the right. 
	You are allowed only to make jumps of the same length represented by some integer.
	Find the minimal length of the jump enough to avoid all the obstacles.
*/

function avoidObstacles(inputArray) {
    let max = 0;
    for(let i = 0; i < inputArray.length; i++)
        if(inputArray[i] > max) max = inputArray[i];
    for(let i = 2; i < max; i++) 
        for(let j = 0; j < inputArray.length; j++) {
            if(inputArray[j] % i === 0) break;
            if(j === inputArray.length - 1) return i;
        }
    return max + 1;
}
