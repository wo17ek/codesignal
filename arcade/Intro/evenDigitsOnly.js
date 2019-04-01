/* Easy
	Check if all digits of the given integer are even.
*/

function evenDigitsOnly(n) {
    while(n >= 1) {
        if((n % 10) % 2 !== 0) return false;
        n = ~~(n / 10);
    }
    return true;
}