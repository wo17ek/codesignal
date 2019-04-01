/* Easy
	Given an array of strings, return another array containing all of its longest strings.
*/

function allLongestStrings(inputArray) {
    let maxLengthOfStringArray = 0;
    for(let i = 0; i < inputArray.length; i++)
        if(inputArray[i].length > maxLengthOfStringArray) maxLengthOfStringArray = inputArray[i].length;      
    return inputArray.filter(element => element.length === maxLengthOfStringArray ? true : false)
}