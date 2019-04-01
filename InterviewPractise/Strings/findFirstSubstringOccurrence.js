/* Easy
	Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.
	Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. 
	The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.
*/

function findFirstSubstringOccurrence(s, x) {      
    const arrayOfPrefixSufix = [], arrayOfPrefixSufix[0] = 0;
    for(let i = 1, j = 0; i < x.length; i++)
        x[i] === x[j] ? (arrayOfPrefixSufix[i] = arrayOfPrefixSufix[i - 1] + 1, j++) : (arrayOfPrefixSufix[i] = 0, j = 0);
    for(let i = 0, j = 0; i + j < s.length;)
        if(s[i + j] === x[j]) {
            if(j === x.length - 1) return i;
            j++;
        }            
        else if(arrayOfPrefixSufix[j - 1] === 0 || typeof arrayOfPrefixSufix[j - 1] === 'undefined') {
            i++;
            j = 0;
        }
        else {
            i += j - arrayOfPrefixSufix[j - 1];
            j = arrayOfPrefixSufix[j - 1];
        }
    return -1;
}


