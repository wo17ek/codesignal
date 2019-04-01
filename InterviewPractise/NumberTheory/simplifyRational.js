/* Easy
	A rational number is the ratio of two integers, where the denominator is not zero. We are going to represent the rational number numerator / denominator as the ordered pair (numerator, denominator).
	There are many different tuples representing the same rational number. For instance, one-half is (1, 2), (2, 4), (3, 6), etc. Your task is to write a function that, given the numbers numerator and denominator 
	representing the ratio numerator / denominator, returns an array [a, b] of two integers where:
	(a, b) represents the same rational number as (numerator, denominator) but in simplified format;
	a and b have no non-trivial factors; b is positive.
*/

function simplifyRational(numerator, denominator) {
    let a = numerator, b = denominator;
    numerator < denominator ? (a = denominator, b = numerator) : '';
    while(b !== 0)
        a = b ^ a % b; b = b ^ a; a = a ^ b;
    return denominator / a < 0 ? [-1 * numerator / a, -1 * denominator / a] : [numerator / a, denominator / a];
}
