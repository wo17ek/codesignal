/* Medium
	Given a string, find out if its characters can be rearranged to form a palindrome.
*/

function palindromeRearranging(inputString) {
    let midElement = 0, temp = "", isMidElement = false;
    if(inputString.length % 2 === 0) 
        for(let i = 0; i < inputString.length / 2; i++)
            for(let j = inputString.length - i - 1; j >= i; j--) {
                if(j === i) return false;
                if(inputString[i] === inputString[j]) {
                    inputString = inputString.split("");
                    temp = inputString[j];
                    inputString[j] = inputString[inputString.length - i - 1];
                    inputString[inputString.length - i - 1] = temp;
                    inputString = inputString.join("");
                    break;
                }
            }     
    else 
        for(let i = 0; i < ~~(inputString.length / 2) ;)
            for(let j = inputString.length - i - 1; j >= i; j--) {
                if(isMidElement === false && j === i) {
                    isMidElement = true;
                    inputString = inputString.split("");
                    temp = inputString[i];
                    inputString[i] = inputString[inputString.length / 2];
                    inputString[inputString.length / 2] = temp;
                    inputString = inputString.join("");
                    break;
                }
                else if(isMidElement === true && j === i) return false;
                else if(inputString[i] === inputString[j]) {
                    inputString = inputString.split("");
                    temp = inputString[j];
                    inputString[j] = inputString[inputString.length - i - 1];
                    inputString[inputString.length - i - 1] = temp;
                    inputString = inputString.join("");
                    i++;
                    break;
                }              
            }
    return true;
}
