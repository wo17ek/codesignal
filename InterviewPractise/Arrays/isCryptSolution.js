/* Easy
	A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.
	You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.
	If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.
	Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).
*/

function isCryptSolution(crypt, solution) {
	const map = new Map();
	for(let element of solution)
		map.set(element[0], element[1]);
	for(let i = 0; i < crypt.length; i++) 
		for(let j = crypt[i].length - 1; j >= 0; j--)
			map.set("word" + i, map.has("word" + i) ? map.get("word" + i) + Math.pow(10, crypt[i].length - 1 - j) *  map.get(crypt[i][j]) : Math.pow(10, crypt[i].length - 1 - j) *  map.get(crypt[i][j]));				
	return map.get("word0") + map.get("word1") === map.get("word2") ? crypt[0].length > 1 && map.get(crypt[0][0]) === '0' || crypt[1].length > 1 && map.get(crypt[1][0]) === '0' || crypt[2].length > 1 && map.get(crypt[2][0]) === '0' ? false : true : false;
}
