/* Easy
	You are given a two-digit integer n. Return the sum of its digits.
*/

function addTwoDigits(digitO2, sum = 0) {    
    return n >= 1 ? addTwoDigits(~~(n / 10), sum + n % 10) : sum;  
}
