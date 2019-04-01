/* Easy
	Given an array of integers, find the pair of adjacent elements 
	that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    let limit = -1001;
    for(let i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] * inputArray[i + 1] > limit) {
            limit = inputArray[i] * inputArray[i + 1];
        }
    }
    return limit;
}