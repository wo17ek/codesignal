/* Easy
	Given a string, replace each of its character by the next one 
	in the English alphabet (z would be replaced by a).
*/

function alphabeticShift(inputString) {
    let output = inputString.split("");
    for(let i = 0; i < inputString.length; i++) 
        output[i] = String.fromCharCode(97 + (inputString.charCodeAt(i) - 96) % 26);
    output = output.join("");
    return output;
}