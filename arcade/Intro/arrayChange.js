/* Easy
	You are given an array of integers. 
	On each move you are allowed to increase exactly one of its element by one. 
	Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
*/

function arrayChange(inputArray) {
    let numberOfMoves = 0;
    for(let i = 0; i < inputArray.length - 1; i++)
        while(inputArray[i] >= inputArray[i + 1]) {
            inputArray[i + 1] += 1;
            numberOfMoves++;
        }
    return numberOfMoves;
}