/* Medium
	We will define the multiplicative inverse n modulo m as an integer ninv such that (n · ninv) % m = 1. We will restrict our attention to the inverses ninv in the interval [o, m-1].
	Note: For a % b, the % sign indicates the modulo operation (i.e., the remainder of dividing a by b).
	Given the numbers n and m, find the multiplicative inverse n modulo m. If no such multiplicative inverse exists, return -1.
*/

function modInverse(n, m) {
    let u = 1, x = 0, w = n, z = m, q;
    while(w) {
        w < z ? ([u, x] = [x, u], [w, z] = [z, w]) : '';        
        q  = Math.floor(w / z);
        u -= q * x;
        w -= q * z;     
    }
    return z !== 1 ? -1 : x < 0 ? x + m : x; 
}
