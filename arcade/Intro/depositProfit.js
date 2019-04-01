/* Medium
	You have deposited a specific amount of money into your bank account. 
	Each year your balance increases at the same growth rate. 
	With the assumption that you don't make any additional deposits, 
	find out how long it would take for your balance to pass a specific threshold.
*/

function depositProfit(deposit, rate, threshold) {
    for(let i = 1; true; i++) {
        deposit += deposit * rate / 100;
        if(deposit >= threshold) return i;
    }
    return -1;
}