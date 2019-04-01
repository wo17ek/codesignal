/* Easy
	Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(currentValue => currentValue === elemToReplace ? substitutionElem : currentValue);
}