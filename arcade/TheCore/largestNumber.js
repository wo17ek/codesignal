/* Easy
	Given an integer n, return the largest number that contains exactly n digits.
*/

function largestNumber(numberOfDigits, number = 0) {
    return numberOfDigits > 0 ? largestNumber(numberOfDigits - 1, number += 9 * Math.pow(10, numberOfDigits - 1)) : number; 
}
