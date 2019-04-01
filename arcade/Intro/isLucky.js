/* Easy
	Ticket numbers usually consist of an even number of digits. 
	A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

	Given a ticket number n, determine if it's lucky or not.
*/

function isLucky(n) {
    const arr = [];
    let index = 0, leftSumOfDigits = 0, rightSumOfDigits = 0;  
    while(n / 10 >= 0.1) {        
        arr[index] = n % 10;
        n = ~~(n / 10);             
        index = -~index;            
    }  
    for(let i = 0; i < index; i++)
        i < index / 2 ? leftSumOfDigits += arr[i] : rightSumOfDigits += arr[i];
    return leftSumOfDigits === rightSumOfDigits ? true : false;
}
