/* Easy
	Given two strings, find the number of common characters between them.
*/

function commonCharacterCount(s1, s2) {
    const firstStringMap = new Map(), secondStringMap = new Map();
    let sum = 0; 
    for(let i = 0; i < s1.length; i++) 
        firstStringMap.set(s1[i], (firstStringMap.has(s1[i])) ? firstStringMap.get(s1[i]) + 1 : 1);                       
    for(let i = 0; i < s2.length; i++)
        secondStringMap.set(s2[i], (secondStringMap.has(s2[i])) ? secondStringMap.get(s2[i]) + 1 : 1);                         
    for(const [key, value] of firstStringMap)
        secondStringMap.has(key) ? sum = (firstStringMap.get(key) < secondStringMap.get(key)) 
        ? sum + firstStringMap.get(key) : sum + secondStringMap.get(key) : '';  
    return sum;
}
