/* Easy
	Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
	Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.
*/

function sudoku2(a) {	
	const map = new Map();
	for(let i = 0; i < a.length; i++)
		a[i].forEach((element, idx) => {
			map.has(i.toString() + element.toString() + 'r') ? map.set("unnormalizedRow" , true) : (element !== '.') ? map.set(i.toString() + element.toString() + 'r', true) : '';			
		});
	if(map.has('unnormalizedRow')) return false; 
	for(let i = 0; i < a.length; i++)
		for(let j = 0; j < a[i].length; j++)
			map.has(j.toString() + a[i][j].toString() + 'c') ? map.set("unnormalizedCol", true) : (a[i][j] !== '.') ? map.set(j.toString() + a[i][j].toString() + 'c', true) : '';
	if(map.has('unnormalizedCol')) return false; 
	for(let i = 0; i < a.length; i += 3) 
		for(let j = 0; j < a[i].length; j +=3) 
			for(let k = i; k < i + 3; k++) 
				for(let l = j; l < j + 3; l++) 					
					map.has(i.toString() + 'r' + j.toString() + 'c' + a[k][l].toString()) ? map.set("unnormalizedSubArray", true) : (a[k][l] !== '.') ? map.set(i.toString() + 'r' + j.toString() + 'c' + a[k][l].toString(), true) : '';
	if(map.has('unnormalizedSubArray')) return false; 
	return true;	
}