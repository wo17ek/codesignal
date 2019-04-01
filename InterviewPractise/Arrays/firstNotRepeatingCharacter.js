/* Easy
	Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
	Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {    
    const mapOfStr = new Map();
    for(let i = 0; i < s.length; i++)
        (!mapOfStr.has(s[i])) ? mapOfStr.set(s[i], i) : mapOfStr.set(s[i], -1);
    for(let [key, value] of mapOfStr)
        if(value >= 0) return key;
    return '_';
}
